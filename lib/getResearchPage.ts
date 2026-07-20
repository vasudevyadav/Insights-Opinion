import type {
  researchPages,
  ResearchPageSlug,
} from "@/data/researchPages";
import { apiUrl } from "@/lib/api-config";
import type { ApiSeo } from "@/lib/api-metadata";

export const researchPageSlugs = [
  "healthcare-research",
  "b2b-research",
  "consumer-research",
] as const;

export type ApiResearchPageSlug = (typeof researchPageSlugs)[number];
export type ResearchSectionButton = {
  text: string;
  link: string;
};

export type ConsumerResearchContentBlock = {
  title: string;
  highlightTitle: string;
  description: string;
  image: string;
  points?: string;
  primaryButton?: ResearchSectionButton;
  secondaryButton?: ResearchSectionButton;
};

export type ConsumerResearchSection = {
  howResearchWorks?: ConsumerResearchContentBlock;
  benefits?: ConsumerResearchContentBlock;
};

export type ResearchFaqSection = {
  heading?: string;
  subHeading?: string;
  faqs: {
    question: string;
    answer: string;
  }[];
};

export type ResearchPageData = (typeof researchPages)[ResearchPageSlug] & {
  slug?: string;
  seo?: ApiSeo;
  consumerResearchSection?: ConsumerResearchSection;
  faqSection?: ResearchFaqSection;
};

export type ResearchNavItem = {
  name: string;
  href: string;
};

function normalizeApiValue<T>(value: T): T {
  if (typeof value === "string") {
    return value.replace(/\\n/g, "\n") as T;
  }

  if (Array.isArray(value)) {
    return value.map(normalizeApiValue) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, childValue]) => [
        key,
        normalizeApiValue(childValue),
      ])
    ) as T;
  }

  return value;
}

function isResearchPageData(value: unknown): value is ResearchPageData {
  if (!value || typeof value !== "object") return false;

  const page = value as {
    slug?: unknown;
    hero?: unknown;
  };

  return typeof page.slug === "string" && !!page.hero;
}

function getNavTitle(page: ResearchPageData) {
  const apiTitle = [page.hero?.titleLine1, page.hero?.titleLine2]
    .filter(Boolean)
    .join(" ")
    .trim();

  if (apiTitle) return apiTitle;

  return (page.slug || "")
    .split("-")
    .filter((part) => part !== "research")
    .map((part) => (part.toLowerCase() === "b2b" ? "B2B" : `${part[0]?.toUpperCase()}${part.slice(1)}`))
    .join(" ")
    .concat(" Research");
}

export async function getResearchPage(
  slug: string
): Promise<ResearchPageData | null> {
  if (!/^[a-z0-9-]+$/.test(slug)) return null;

  const isApiPage = researchPageSlugs.includes(slug as ApiResearchPageSlug);

  if (!isApiPage) return null;

  try {
    const response = await fetch(
      apiUrl(`/custom/v1/research-expertises/${slug}`),
      {
        next: { revalidate: 1 },
      }
    );

    if (!response.ok) return null;

    const page = normalizeApiValue(await response.json());
    return isResearchPageData(page) ? page : null;
  } catch {
    return null;
  }
}

export async function getResearchNavItems(): Promise<ResearchNavItem[]> {
  const pages = await Promise.all(
    researchPageSlugs.map((slug) => getResearchPage(slug))
  );

  return pages.flatMap((page, index) => {
    if (!page) return [];

    return [
      {
        name: getNavTitle(page),
        href: `/research/${page.slug || researchPageSlugs[index]}`,
      },
    ];
  });
}
