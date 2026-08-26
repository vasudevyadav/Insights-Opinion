import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/app/lib/site-routes";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const isProduction = process.env.VERCEL_ENV === "production";

  if (!isProduction) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
      sitemap: `${siteUrl}/sitemap.xml`,
      host: siteUrl,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/api/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
