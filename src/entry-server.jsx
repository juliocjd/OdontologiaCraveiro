import { renderToStaticMarkup } from "react-dom/server";
import { pages } from "./data/siteData.js";
import { renderPage } from "./App.jsx";
import { getSeoTags } from "./lib/seoHead.js";

// Every public route that should get its own static HTML file at build
// time. /404/ is excluded: it is served from public/404.html as a plain
// static asset, not part of the SPA route table.
export const routes = Object.keys(pages).filter((route) => route !== "/404/");

export function renderRouteHtml(path) {
  const page = pages[path];
  const markup = renderToStaticMarkup(renderPage(path));
  const tags = getSeoTags(page, path, false);
  return { markup, tags };
}
