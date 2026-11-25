import type { MetadataRoute } from "next";
import { absoluteUrl, seoPages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  // No synthetic lastModified dates: only actual public, indexable canonical routes.
  return Object.entries(seoPages).filter(([, page]) => !page.noindex).map(([path]) => ({ url: absoluteUrl(path) }));
}
