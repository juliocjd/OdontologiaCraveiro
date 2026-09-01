// Static prerender pass, run after `vite build` (client) and
// `vite build --ssr src/entry-server.jsx --outDir dist-server`.
//
// Vite's client build produces a single dist/index.html shell shared by
// every route (the SPA rewrite in vercel.json used to point every route at
// that same file). That means the raw HTML any non-JS client (search
// crawlers on first pass, social-share bots, link previewers) receives is
// identical for all ~19 routes: the home page's title, description, OG
// tags, canonical URL and an empty #root with no JSON-LD and no visible
// text. This script fixes that by writing one real, distinct static HTML
// file per route, with the correct <head> tags and the fully rendered page
// markup already inside #root. The client still hydrates on top of it for
// interactivity (menu, WhatsApp click tracking, client-side routing).
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { site } from "../src/data/siteData.js";

const root = fileURLToPath(new URL("..", import.meta.url));
const distDir = path.join(root, "dist");
const ssrEntry = path.join(root, "dist-server", "entry-server.js");

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function escapeText(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;");
}

function gaSnippet(measurementId) {
  if (!measurementId) return "";
  return `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${measurementId}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag("js", new Date());
      gtag("config", "${measurementId}");
    </script>`;
}

function buildHtml(tags, assetTags, markup) {
  return `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${gaSnippet(site.gaMeasurementId)}
    <meta name="robots" content="${escapeAttr(tags.robots)}" />
    <meta name="description" content="${escapeAttr(tags.description)}" />
    <link rel="canonical" href="${escapeAttr(tags.canonicalUrl)}" />
    <meta property="og:title" content="${escapeAttr(tags.ogTitle)}" />
    <meta property="og:description" content="${escapeAttr(tags.ogDescription)}" />
    <meta property="og:url" content="${escapeAttr(tags.ogUrl)}" />
    <meta property="og:image" content="${escapeAttr(tags.ogImage)}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeAttr(tags.twitterTitle)}" />
    <meta name="twitter:description" content="${escapeAttr(tags.twitterDescription)}" />
    <meta name="twitter:image" content="${escapeAttr(tags.twitterImage)}" />
    <title>${escapeText(tags.title)}</title>
    ${assetTags}
  </head>
  <body>
    <div id="root">${markup}</div>
  </body>
</html>
`;
}

function outputPathFor(routePath) {
  if (routePath === "/") return path.join(distDir, "index.html");
  // "/servicos/" -> dist/servicos/index.html
  return path.join(distDir, routePath.slice(1), "index.html");
}

async function main() {
  const template = await readFile(path.join(distDir, "index.html"), "utf8");
  const titleCloseIdx = template.indexOf("</title>") + "</title>".length;
  const headCloseIdx = template.indexOf("</head>");
  if (titleCloseIdx <= "</title>".length - 1 || headCloseIdx === -1) {
    throw new Error("Could not locate <title>/</head> in dist/index.html to extract asset tags.");
  }
  const assetTags = template.slice(titleCloseIdx, headCloseIdx).trim();

  const { routes, renderRouteHtml } = await import(pathToFileUrl(ssrEntry));

  if (!routes.length) {
    throw new Error("entry-server.js exported no routes to prerender.");
  }

  for (const routePath of routes) {
    const { markup, tags } = renderRouteHtml(routePath);
    const html = buildHtml(tags, assetTags, markup);
    const outPath = outputPathFor(routePath);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html, "utf8");
  }

  console.log(`Prerendered ${routes.length} routes into dist/.`);

  await rm(path.join(root, "dist-server"), { recursive: true, force: true });
}

function pathToFileUrl(absolutePath) {
  return new URL(`file:///${absolutePath.replaceAll("\\", "/")}`).href;
}

await main();
