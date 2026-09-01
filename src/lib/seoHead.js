import { site } from "../data/siteData.js";

// Pure computation of every <head> SEO tag for a page. DOM-free so it can be
// used both by the client (App.jsx applies it to document.head) and by the
// build-time prerender script (writes it directly into static HTML).
export function getSeoTags(page, path, isNotFound = false) {
  const canonicalPath = isNotFound ? "/404/" : path;
  const canonicalUrl = `${site.canonicalOrigin}${canonicalPath === "/" ? "/" : canonicalPath}`;
  const ogDescription = page.ogDescription || page.description;

  return {
    title: page.title,
    description: page.description,
    robots: page.noindex ? "noindex,follow" : "index,follow",
    canonicalUrl,
    ogTitle: page.title,
    ogDescription,
    ogUrl: canonicalUrl,
    ogImage: site.ogImage,
    twitterTitle: page.title,
    twitterDescription: ogDescription,
    twitterImage: site.ogImage,
  };
}
