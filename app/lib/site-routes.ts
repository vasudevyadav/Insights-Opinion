import { getBlogs } from "@/data/blogData";
import { researchPages } from "@/data/researchPages";
import { fetchCaseStudies } from "@/app/lib/case-studies-api";
import { fetchTeamMembers } from "@/app/lib/team-api";
import { fetchServices } from "@/app/lib/services-api";

export type SiteRoute = {
  path: string;
  title: string;
  description: string;
  group: "Main" | "Company" | "Services" | "Research" | "Resources" | "Legal";
  priority: number;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
};

const staticRoutes: SiteRoute[] = [
  {
    path: "/",
    title: "Insights Opinion",
    description: "Global market research and consulting services.",
    group: "Main",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about-us",
    title: "About Us",
    description: "Learn about Insights Opinion.",
    group: "Company",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/about-us/leadership",
    title: "Leadership",
    description: "Meet the leadership team at Insights Opinion.",
    group: "Company",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/our-team",
    title: "Our Team",
    description: "Meet the Insights Opinion leadership team.",
    group: "Company",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/testimonials",
    title: "Testimonials",
    description: "Client stories and feedback.",
    group: "Company",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/service",
    title: "Services",
    description: "Explore market research services.",
    group: "Services",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/service/quantitative-research",
    title: "Quantitative Research",
    description: "Quantitative market research services and methodologies.",
    group: "Services",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/service/qualitative-research",
    title: "Qualitative Research",
    description: "Qualitative market research services and methodologies.",
    group: "Services",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/service/support-services",
    title: "Research Support Services",
    description: "Survey programming, translation, and data insight services.",
    group: "Services",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/industries",
    title: "Industries",
    description: "Industries supported by Insights Opinion.",
    group: "Research",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/quality-standard",
    title: "Quality Standard",
    description: "Research quality, security, and professional standards.",
    group: "Research",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/case-studies",
    title: "Case Studies",
    description: "Market research client success stories.",
    group: "Resources",
    priority: 0.8,
    changeFrequency: "weekly",
  },
  {
    path: "/blogs",
    title: "Blogs",
    description: "Market research articles and insights.",
    group: "Resources",
    priority: 0.8,
    changeFrequency: "daily",
  },
  {
    path: "/contact-us",
    title: "Contact Us",
    description: "Contact the Insights Opinion team.",
    group: "Company",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/career",
    title: "Career",
    description: "Career opportunities at Insights Opinion.",
    group: "Company",
    priority: 0.6,
    changeFrequency: "weekly",
  },
  {
    path: "/local",
    title: "Local Market Research",
    description: "Local market research capabilities.",
    group: "Research",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy",
    description: "Insights Opinion privacy practices.",
    group: "Legal",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/cookies-policy",
    title: "Cookies Policy",
    description: "How Insights Opinion uses cookies.",
    group: "Legal",
    priority: 0.3,
    changeFrequency: "yearly",
  },
  {
    path: "/site-map",
    title: "Sitemap",
    description: "Browse all public Insights Opinion pages.",
    group: "Resources",
    priority: 0.4,
    changeFrequency: "weekly",
  },
];

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

  return (configuredUrl || "https://insightsopinion.com").replace(
    /\/$/,
    ""
  );
}

export async function getAllSiteRoutes(): Promise<SiteRoute[]> {
  const [services, teamMembers, caseStudies, blogs] = await Promise.all([
    fetchServices().catch(() => []),
    fetchTeamMembers().catch(() => []),
    fetchCaseStudies().catch(() => []),
    getBlogs().catch(() => []),
  ]);

  const serviceRoutes: SiteRoute[] = services.flatMap((service) => [
    {
      path: service.href,
      title: service.title,
      description: `${service.title} services from Insights Opinion.`,
      group: "Services" as const,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    ...service.children.map((child) => ({
      path: child.href,
      title: child.title,
      description: `${child.title} services from Insights Opinion.`,
      group: "Services" as const,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ]);

  const teamRoutes: SiteRoute[] = teamMembers.map((member) => ({
    path: `/our-team/${member.slug}`,
    title: member.name,
    description: `${member.name}, ${member.role} at Insights Opinion.`,
    group: "Company",
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  const researchRoutes: SiteRoute[] = Object.keys(researchPages).map((slug) => ({
    path: `/research/${slug}`,
    title: slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" "),
    description: `Insights Opinion ${slug.replaceAll("-", " ")} services.`,
    group: "Research",
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const caseStudyRoutes: SiteRoute[] = caseStudies.map((study) => ({
    path: `/case-studies/${study.slug}`,
    title: study.title,
    description: study.description,
    group: "Resources",
    priority: 0.6,
    changeFrequency: "monthly",
  }));

  const blogRoutes: SiteRoute[] = blogs.map((blog) => ({
    path: `/blogs/${blog.slug}`,
    title: blog.title,
    description: blog.description,
    group: "Resources",
    priority: 0.7,
    changeFrequency: "weekly",
  }));

  const routes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...teamRoutes,
    ...researchRoutes,
    ...caseStudyRoutes,
    ...blogRoutes,
  ];

  return Array.from(
    new Map(routes.map((route) => [route.path, route])).values()
  ).sort((a, b) => a.path.localeCompare(b.path));
}
