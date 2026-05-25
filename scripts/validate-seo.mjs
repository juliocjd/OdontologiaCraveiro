import { readFile } from "node:fs/promises";
import { pages, site, navItems, homeServiceLinks } from "../src/data/siteData.js";
import { buildJsonLd } from "../src/lib/seoData.js";

const canonicalOrigin = "https://odontoemcasa.com.br";
const wwwHost = ["www", "odontoemcasa.com.br"].join(".");
const wwwOrigin = `https://${wwwHost}`;
const publicRoutes = Object.keys(pages).filter((route) => route !== "/404/");
const routeSet = new Set(publicRoutes);
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
    `User-agent: *\nAllow: /\nSitemap: ${canonicalOrigin}/sitemap.xml`,
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
assert(notFoundHtml.includes('name="robots" content="noindex,follow"'), "404 must be noindex,follow");
assert(!indexHtml.includes(wwwHost), "index.html contains www host");
assert(indexHtml.includes(`<link rel="canonical" href="${canonicalOrigin}/"`), "home canonical missing");
assert(!jsonLdText.includes(wwwHost), "JSON-LD contains www host");
assert(jsonLdText.includes('"@type":"Dentist"'), "JSON-LD is missing Dentist entity");
assert(jsonLdText.includes('"@type":"OfferCatalog"'), "JSON-LD is missing OfferCatalog");

const redirects = vercelConfig.redirects || [];
const rewrites = vercelConfig.rewrites || [];
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

const nonHomeRoutes = publicRoutes.filter((route) => route !== "/");
const rewriteSources = new Set(rewrites.map((rewrite) => rewrite.source));
const redirectSources = new Set(redirects.map((redirect) => redirect.source));

for (const route of nonHomeRoutes) {
  assert(rewriteSources.has(route), `missing Vercel rewrite for ${route}`);
  assert(
    redirectSources.has(route.slice(0, -1)),
    `missing trailing-slash redirect for ${route.slice(0, -1)}`,
  );
}

for (const rewrite of rewrites) {
  assert(routeSet.has(rewrite.source), `rewrite points to unknown route ${rewrite.source}`);
  assert(rewrite.destination === "/index.html", `rewrite ${rewrite.source} must target /index.html`);
}

for (const item of [...navItems, ...homeServiceLinks]) {
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

if (failures.length) {
  console.error(failures.map((message) => `- ${message}`).join("\n"));
  process.exit(1);
}

console.log(`SEO validation passed for ${publicRoutes.length} public routes.`);
