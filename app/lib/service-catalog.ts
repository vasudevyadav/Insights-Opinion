export type ServiceCatalogItem = {
  title: string;
  slug: string;
  image: string;
  description: string;
};

import {
  legacyChildHref,
  legacyParentHref,
} from "@/app/lib/legacy-service-routes";

export type ServiceCategory = {
  title: string;
  key: "quantitative" | "qualitative" | "support";
  href: string;
  services: ServiceCatalogItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Quantitative Research",
    key: "quantitative",
    href: "/service/quantitative-research",
    services: [
      {
        title: "Online Surveys (CAWI)",
        slug: "online-surveys",
        image: "/quality/cati-online.png",
        description:
          "Self-administered web surveys across our 8M+ verified panel. Fast turnaround, rich media support, and multi-layer quality controls for nationally representative consumer and B2B data.",
      },
      {
        title: "Computer-Assisted Telephone Interviewing (CATI)",
        slug: "cati",
        image: "/quality/cati-telephone.png",
        description:
          "Trained interviewers conduct structured phone interviews with real-time supervision. Ideal for B2B, healthcare, and audiences harder to reach through digital panels.",
      },
      {
        title: "Computer-Assisted Personal Interviewing (CAPI)",
        slug: "capi",
        image: "/quality/cati-computer.png",
        description:
          "Face-to-face field interviews using tablet-based data capture with GPS-verified quality controls. Best for in-home studies, physical product testing, and non-digital populations.",
      },
      {
        title: "Central Location Testing (CLT)",
        slug: "clt",
        image: "/quality/cati-location.png",
        description:
          "Controlled venue-based testing for products, concepts, and packaging. Enables direct side-by-side comparison under standardised conditions across all respondents.",
      },
      {
        title: "Data Analysis and Reporting",
        slug: "data-analysis-reporting",
        image: "/Data-Insights.jpg",
        description:
          "In-house analysts deliver cross-tabulations, regression, factor analysis, and predictive modelling, with clear reports designed for confident stakeholder presentation.",
      },
    ],
  },
  {
    title: "Qualitative Research",
    key: "qualitative",
    href: "/service/qualitative-research",
    services: [
      {
        title: "Focus Group Discussions",
        slug: "focus-group-discussions",
        image: "/core-slide.png",
        description:
          "Moderated group discussions that uncover shared attitudes, motivations, language, and reactions to products or concepts.",
      },
      {
        title: "In-Depth Reviews",
        slug: "in-depth-reviews",
        image: "/In-Depth-Interviews.jpg",
        description:
          "One-to-one conversations designed to explore complex behaviours, experiences, and decision-making in detail.",
      },
      {
        title: "In-Home Usage Testings",
        slug: "in-home-usage-testings",
        image: "/In-Home-Usage-Testings.jpg",
        description:
          "Real-world product usage studies that capture detailed feedback from participants in their natural environment.",
      },
      {
        title: "Mystery Shopping",
        slug: "mystery-shopping",
        image: "/Mystery-Shopping.jpg",
        description:
          "Structured customer-experience assessments that measure service delivery against defined operational standards.",
      },
    ],
  },
  {
    title: "Support Services",
    key: "support",
    href: "/service/support-services",
    services: [
      {
        title: "Survey Programming",
        slug: "survey-programming",
        image: "/Survey-Programming.jpg",
        description:
          "Responsive, logic-rich survey builds with rigorous testing for reliable data collection across devices and markets.",
      },
      {
        title: "Translation",
        slug: "translation",
        image: "/Translation.jpg",
        description:
          "Research-focused translation and localisation that preserve meaning, context, and cultural relevance across markets.",
      },
      {
        title: "Data Insights",
        slug: "data-insights",
        image: "/Data-Insights.jpg",
        description:
          "Clean, structured analysis and reporting that turn research data into clear and actionable business insights.",
      },
    ],
  },
];

export const serviceDetailPath = (
  slug: string,
  categoryKey?: ServiceCategory["key"]
) => {
  const resolvedCategory =
    categoryKey ??
    serviceCategories.find((category) =>
      category.services.some((service) => service.slug === slug)
    )?.key ??
    "quantitative";

  void resolvedCategory;
  return legacyChildHref(slug);
};

export type ServiceChild = ServiceCatalogItem & {
  id: string;
  position: number;
  step: string;
  href: string;
};

export type MainService = {
  id: string;
  title: string;
  slug: string;
  apiSlug?: string;
  href: string;
  children: ServiceChild[];
};

export function getServices(): MainService[] {
  return serviceCategories.map((category) => ({
    id: `service-${category.key}`,
    title: category.title,
    slug: category.key,
    href: legacyParentHref(category.key),
    children: category.services.map((service, index) => ({
      id: `${category.key}-${service.slug}`,
      position: index + 1,
      step: String(index + 1).padStart(2, "0"),
      ...service,
      href: serviceDetailPath(service.slug, category.key),
    })),
  }));
}
