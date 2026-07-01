import { getAllSiteRoutes, getSiteUrl } from "@/app/lib/site-routes";

export const revalidate = 3600;

export async function GET() {
  const siteUrl = getSiteUrl();
  const routes = await getAllSiteRoutes();
  const groups = new Map<string, typeof routes>();

  for (const route of routes) {
    const existing = groups.get(route.group) || [];
    existing.push(route);
    groups.set(route.group, existing);
  }

  const sections = Array.from(groups.entries())
    .map(
      ([group, groupRoutes]) =>
        `## ${group}\n\n${groupRoutes
          .map(
            (route) =>
              `- [${route.title}](${siteUrl}${route.path}): ${route.description}`
          )
          .join("\n")}`
    )
    .join("\n\n");

  const content = `# Insights Opinion

> Insights Opinion is a global market research and consulting company providing quantitative, qualitative, healthcare, consumer, and multi-market research services.

This file lists the public pages that language models and automated research tools may use to understand the website. Dynamic blog posts, case studies, research pages, service methods, and team profiles are generated from the same data sources as the website.

${sections}
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
