import type { Metadata } from "next";
import { getSheetSeo } from "@/lib/sheet-seo";

type StaticSeoEntry = {
  title: string;
  description: string;
  keywords?: string[];
};

/**
 * Single source of truth for SEO on pages that are NOT managed via the
 * WordPress API (static content pages). Add/edit an entry here to change a
 * page's title, description, or keywords — do not hardcode metadata in the
 * page files themselves.
 */
export const staticSeo: Record<string, StaticSeoEntry> = {
  home: {
    title: "Best Market Research Company | Big Market Research Firms",
    description:
      "Insights Opinion is a global market research company delivering quantitative, qualitative, healthcare, B2B, consumer, and data support services across 100+ countries.",
    keywords: [
      "market research company",
      "market research firm",
      "quantitative research",
      "qualitative research",
    ],
  },
  "about-us": {
    title: "About Us | Insights Opinion",
    description:
      "Learn about Insights Opinion's mission, milestones, core values, and the team behind our market research and consulting services.",
    keywords: ["about insights opinion", "market research company"],
  },
  "about-us/leadership": {
    title: "Our Team | Insights Opinion",
    description:
      "Meet the experienced market research and client services leaders at Insights Opinion.",
    keywords: ["insights opinion leadership", "market research experts"],
  },
  career: {
    title: "Careers | Insights Opinion",
    description:
      "Explore open positions and life at Insights Opinion — join a team of market research and client services professionals.",
    keywords: ["insights opinion careers", "market research jobs"],
  },
  "contact-us": {
    title: "Contact Us | Insights Opinion",
    description:
      "Get in touch with Insights Opinion for quantitative, qualitative, and market research support services.",
    keywords: ["contact insights opinion", "market research company contact"],
  },
  industries: {
    title: "Industries We Serve | Insights Opinion",
    description:
      "Discover the industries Insights Opinion serves with tailored market research and consulting solutions.",
    keywords: ["market research industries", "insights opinion industries"],
  },
  local: {
    title: "Market Research Company in Chicago | Insights Opinion",
    description:
      "Insights Opinion is a market research company in Chicago for Pharma, MedTech & Healthcare brands.",
    keywords: [
      "market research company Chicago",
      "pharma market research",
      "healthcare market research",
    ],
  },
  blogs: {
    title: "Blog | Insights Opinion",
    description:
      "Read the latest articles, insights, and updates on market research from Insights Opinion.",
    keywords: ["market research blog", "insights opinion articles"],
  },
  "case-studies": {
    title: "Case Studies | Insights Opinion",
    description:
      "Explore case studies showcasing how Insights Opinion has helped clients solve real business challenges.",
    keywords: ["market research case studies", "insights opinion case studies"],
  },
  "cookies-policy": {
    title: "Cookies Policy | Insights Opinion",
    description:
      "Learn how Insights Opinion uses cookies and how you can manage your cookie preferences.",
    keywords: ["insights opinion cookies policy"],
  },
  "privacy-policy": {
    title: "Privacy Policy | Insights Opinion",
    description:
      "Learn how Insights Opinion collects, uses, and protects personal information.",
    keywords: ["insights opinion privacy policy"],
  },
  terms: {
    title: "Terms & Conditions | Insights Opinion",
    description: "Terms and conditions for the Insights Opinion website.",
    keywords: ["insights opinion terms and conditions"],
  },
  "data-quality-fraud-detection": {
    title: "Data Quality & Fraud Detection | Insights Opinion",
    description: "Data quality and fraud detection services from Insights Opinion.",
    keywords: ["research data quality", "survey fraud detection"],
  },
  "quality-standard": {
    title: "Quality Standard | Insights Opinion",
    description:
      "Discover how Insights Opinion maintains the highest quality standards across research methodology, data protection, ethical practices, and operational security.",
    keywords: ["market research quality standards", "insights opinion quality"],
  },
  service: {
    title: "Market Research Services | Insights Opinion",
    description:
      "Explore quantitative research, qualitative research, and research support services from Insights Opinion.",
    keywords: ["market research services", "insights opinion services"],
  },
  "site-map": {
    title: "Sitemap | Insights Opinion",
    description:
      "Browse all public Insights Opinion pages, services, research resources, case studies, team profiles, and blog articles.",
    keywords: ["insights opinion sitemap"],
  },
  testimonials: {
    title: "Client Testimonials | Insights Opinion",
    description:
      "Read and watch client testimonials about working with Insights Opinion.",
    keywords: ["insights opinion testimonials", "client reviews"],
  },
  "our-teams": {
    title: "Our Team | Insights Opinion",
    description:
      "Meet the experienced market research and client services leaders at Insights Opinion.",
    keywords: ["insights opinion team", "market research experts"],
  },
};

export function getStaticMetadata(key: keyof typeof staticSeo): Metadata {
  const entry = staticSeo[key];
  const path = key === "home" ? "/" : `/${key}`;
  const sheetEntry = getSheetSeo(path);
  const title = sheetEntry?.title || entry.title;
  const description = sheetEntry?.description || entry.description;

  return {
    title,
    description,
    keywords: entry.keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "Insights Opinion",
      type: "website",
      images: [{ url: "/home-banner.png", alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/home-banner.png"],
    },
  };
}
