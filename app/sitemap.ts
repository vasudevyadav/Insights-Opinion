import type { MetadataRoute } from "next";
import { getAllSiteRoutes, getSiteUrl } from "@/app/lib/site-routes";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const routes = await getAllSiteRoutes();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
