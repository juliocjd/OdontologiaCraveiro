import { readFile } from "node:fs/promises";
import { pages, site, navItems, homeServiceLinks } from "../src/data/siteData.js";
import { buildJsonLd } from "../src/lib/seoData.js";

const canonicalOrigin = "https://odontoemcasa.com.br";
const wwwHost = ["www", "odontoemcasa.com.br"].join(".");
const wwwOrigin = `https://${wwwHost}`;
const publicRoutes = Object.keys(pages).filter((route) => route !== "/404/");
const routeSet = new Set(publicRoutes);
const privatePanelRoute = "/casa/";
const privatePanelApi = "/api/casa";
const failures = [];

function fail(message) {
  failures.push(message);
}

function assert(condition, message) {
  if (!condition) fail(message);
}

function extractSitemapUrls(xml) {
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

// Mirrors scripts/prerender.mjs's escapeText(), so the <title> comparison
// below matches what was actually written to the prerendered HTML.
function escapeHtmlText(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;");
}

const [sitemap, robots, indexHtml, notFoundHtml, vercelJsonText] =
  await Promise.all([
    readFile(new URL("../public/sitemap.xml", import.meta.url), "utf8"),
    readFile(new URL("../public/robots.txt", import.meta.url), "utf8"),
    readFile(new URL("../index.html", import.meta.url), "utf8"),
    readFile(new URL("../public/404.html", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
  ]);

const vercelConfig = JSON.parse(vercelJsonText);
const sitemapUrls = extractSitemapUrls(sitemap);
const sitemapRoutes = sitemapUrls.map((url) => url.replace(canonicalOrigin, ""));
const jsonLdText = JSON.stringify(
  publicRoutes.map((route) => buildJsonLd(route, pages[route], false)),
);

assert(site.canonicalOrigin === canonicalOrigin, "canonicalOrigin must be apex domain");
assert(site.logo === `${canonicalOrigin}/logo.png`, "logo must use apex domain");
assert(site.ogImage === `${canonicalOrigin}/og-image.jpg`, "ogImage must use apex domain");
assert(
  robots.trim() ===
    `User-agent: *\nDisallow: ${privatePanelRoute}\nDisallow: ${privatePanelApi}\nAllow: /\nSitemap: ${canonicalOrigin}/sitemap.xml`,
  "robots.txt does not match required directives",
);
assert(!sitemap.includes(wwwHost), "sitemap contains www host");
assert(
  sitemapUrls.every((url) => url.startsWith(`${canonicalOrigin}/`)),
  "all sitemap URLs must use canonical apex host",
);
assert(
  sitemapRoutes.length === publicRoutes.length &&
    publicRoutes.every((route) => sitemapRoutes.includes(route)),
  "sitemap routes and pages routes are not synchronized",
);
assert(!sitemapRoutes.includes("/404/"), "404 route must not be in sitemap");
assert(!sitemapRoutes.includes(privatePanelRoute), "private Casa panel must not be in sitemap");
assert(!sitemap.includes(privatePanelApi), "private Casa API must not be in sitemap");
assert(notFoundHtml.includes('name="robots" content="noindex,follow"'), "404 must be noindex,follow");
assert(!indexHtml.includes(wwwHost), "index.html contains www host");
assert(indexHtml.includes(`<link rel="canonical" href="${canonicalOrigin}/"`), "home canonical missing");
assert(Boolean(site.gaMeasurementId), "site.gaMeasurementId is not configured");
assert(
  indexHtml.includes(`gtag/js?id=${site.gaMeasurementId}`),
  "index.html is missing the Google tag (gtag.js)",
);
assert(!jsonLdText.includes(wwwHost), "JSON-LD contains www host");
assert(jsonLdText.includes('"@type":"Dentist"'), "JSON-LD is missing Dentist entity");
assert(jsonLdText.includes('"@type":"OfferCatalog"'), "JSON-LD is missing OfferCatalog");
assert(jsonLdText.includes('"@type":"FAQPage"'), "JSON-LD is missing FAQPage on /faq/");

const redirects = vercelConfig.redirects || [];
const rewrites = vercelConfig.rewrites || [];
const privatePanelRewrite = rewrites.find((rewrite) => rewrite.source === privatePanelRoute);
const hostRedirect = redirects.find((redirect) =>
  redirect.has?.some(
    (item) => item.type === "host" && item.value === wwwHost,
  ),
);
assert(Boolean(hostRedirect), "missing www-to-apex host redirect");
assert(hostRedirect?.destination === `${canonicalOrigin}/$1`, "host redirect must point to apex");
assert(hostRedirect?.permanent === true, "host redirect must be permanent");
assert(
  !redirects.some((redirect) => redirect.destination?.includes(wwwOrigin)),
  "redirects contain an apex-to-www destination",
);
assert(
  !rewrites.some((rewrite) => rewrite.source === "/(.*)" && rewrite.destination === "/index.html"),
  "generic SPA catch-all rewrite is not allowed",
);
assert(!routeSet.has(privatePanelRoute), "private Casa panel must not be a public React route");

const nonHomeRoutes = publicRoutes.filter((route) => route !== "/");
const redirectSources = new Set(redirects.map((redirect) => redirect.source));

for (const route of nonHomeRoutes) {
  assert(
    redirectSources.has(route.slice(0, -1)),
    `missing trailing-slash redirect for ${route.slice(0, -1)}`,
  );
}

// Every public route is now prerendered to its own static HTML file by
// scripts/prerender.mjs (no more generic SPA rewrite to /index.html), so the
// only rewrite left should be the private Casa panel's server function.
assert(
  rewrites.length === 1 && privatePanelRewrite,
  "vercel.json should only rewrite the private Casa panel; every other route is a prerendered static file",
);
assert(
  privatePanelRewrite?.destination === privatePanelApi,
  "private Casa panel rewrite must target the server-side function",
);

for (const item of [...navItems, ...homeServiceLinks]) {
  assert(item.path !== privatePanelRoute, "private Casa panel must not be linked publicly");
  assert(routeSet.has(item.path), `internal link points to unknown route ${item.path}`);
  assert(
    item.path === "/" || item.path.endsWith("/"),
    `internal link must use trailing slash: ${item.path}`,
  );
}

for (const route of publicRoutes) {
  const page = pages[route];
  assert(Boolean(page.title), `missing title for ${route}`);
  assert(Boolean(page.description), `missing description for ${route}`);
  assert(Boolean(page.h1), `missing h1 for ${route}`);
  assert(page.noindex !== true, `public route must be indexable: ${route}`);
}

// scripts/prerender.mjs writes one real static HTML file per route (see
// package.json's build script). This is the regression guard for that: if a
// route's file is missing, or the raw (pre-JS) HTML still shows the wrong
// title/canonical/JSON-LD, crawlers and social-share bots that don't
// execute JavaScript go back to seeing duplicate content across the site.
for (const route of publicRoutes) {
  const page = pages[route];
  const fileUrl =
    route === "/" ? new URL("../dist/index.html", import.meta.url) : new URL(`../dist${route}index.html`, import.meta.url);

  let html;
  try {
    html = await readFile(fileUrl, "utf8");
  } catch {
    fail(`missing prerendered static file for ${route} (run \`npm run build\` before seo:validate)`);
    continue;
  }

  assert(html.includes(`<title>${escapeHtmlText(page.title)}</title>`), `prerendered ${route} has wrong <title>`);
  assert(
    html.includes(`<link rel="canonical" href="${canonicalOrigin}${route}"`),
    `prerendered ${route} has wrong canonical URL`,
  );
  assert(html.includes('application/ld+json'), `prerendered ${route} is missing JSON-LD`);
  assert(html.includes(`<h1`), `prerendered ${route} has no visible <h1> in the raw HTML`);
  assert(
    html.includes(`gtag/js?id=${site.gaMeasurementId}`),
    `prerendered ${route} is missing the Google tag (gtag.js)`,
  );
  if (route !== "/") {
    assert(
      html.includes('class="breadcrumb"'),
      `prerendered ${route} is missing the visible breadcrumb (must match its BreadcrumbList JSON-LD)`,
    );
  }
  assert(!/<div id="root">\s*<\/div>/.test(html), `prerendered ${route} has an empty #root (no static content for non-JS clients)`);
}

if (failures.length) {
  console.error(failures.map((message) => `- ${message}`).join("\n"));
  process.exit(1);
}

console.log(`SEO validation passed for ${publicRoutes.length} public routes.`);
