import type { MetadataRoute } from "next";
import { getAllSiteRoutes, getSiteUrl } from "@/app/lib/site-routes";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const routes = await getAllSiteRoutes();
  const generatedAt = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified: generatedAt,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
