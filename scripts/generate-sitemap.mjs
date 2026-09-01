import { writeFile } from "node:fs/promises";
import { pages, site } from "../src/data/siteData.js";

// Reflects the actual build date instead of a manually maintained, easily
// stale constant. Every route shares one lastmod because the site has no
// per-page edit-history tracking; this at least never lies about being
// fresher than it is.
const lastmod = new Date().toISOString().slice(0, 10);
const routes = Object.keys(pages).filter((route) => route !== "/404/");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${site.canonicalOrigin}${route}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

await writeFile(new URL("../public/sitemap.xml", import.meta.url), xml, "utf8");
