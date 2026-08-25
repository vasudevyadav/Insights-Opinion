export type CaseStudyDetail = {
  heading: string;
  overview: string[];
  clientLabel: string;
  client: string;
  mandateLabel: string;
  mandate: string[];
  methodologyHeading: string;
  methodology: string[];
  methodologyImage: string;
  deliveryHeading: string;
  delivery: string[];
  resultsHeading: string;
  results: string;
};

export type CaseStudy = {
  id: number;
  category: string;
  title: string;
  image: string;
  description: string;
  slug: string;
  detail: CaseStudyDetail;
  seo?: ApiSeo;
};

type RawCaseStudyDetail = {
  overview: string;
  client: string;
  methodology: string[];
  methodologyImage: string;
  delivery: string[];
  results: string;
};

type RawCaseStudy = {
  id: number;
  category: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  detail: RawCaseStudyDetail;
  seo?: ApiSeo;
};

type CaseStudiesResponse = {
  success: boolean;
  data: RawCaseStudy[];
};

const BASE_URL = apiUrl("/custom/v1/case-studies");

function parseListSection(items: string[], fallbackHeading: string) {
  const cleanedItems = items.map((item) => item.trim()).filter(Boolean);
  const hasApiHeading =
    cleanedItems[0]?.toLowerCase() === fallbackHeading.toLowerCase();

  return {
    heading: hasApiHeading ? cleanedItems[0] : fallbackHeading,
    items: hasApiHeading ? cleanedItems.slice(1) : cleanedItems,
  };
}

function cleanOverview(overview: string): string[] {
  return overview
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

function parseOverview(overview: string, fallbackClient: string) {
  const lines = overview
    .split(/\r?\n/)
    .map((line) => line.replace(/&nbsp;/gi, " ").trim())
    .filter(Boolean);
  const clientLabelIndex = lines.findIndex((line) =>
    /^clients?:\s*$/i.test(line)
  );
  const mandateLabelIndex = lines.findIndex((line) =>
    /^the mandate:\s*$/i.test(line)
  );

  const heading =
    clientLabelIndex > 0 ? lines.slice(0, clientLabelIndex).join(" ") : "";
  const client =
    clientLabelIndex >= 0
      ? lines
          .slice(
            clientLabelIndex + 1,
            mandateLabelIndex > clientLabelIndex
              ? mandateLabelIndex
              : clientLabelIndex + 2
          )
          .join(" ")
      : fallbackClient;
  const mandate =
    mandateLabelIndex >= 0 ? lines.slice(mandateLabelIndex + 1) : [];

  return {
    heading,
    clientLabel:
      clientLabelIndex >= 0 ? lines[clientLabelIndex] : "Client:",
    client: client || fallbackClient,
    mandateLabel:
      mandateLabelIndex >= 0 ? lines[mandateLabelIndex] : "The Mandate:",
    mandate,
    overview: cleanOverview(overview),
  };
}

function parseTextSection(value: string, fallbackHeading: string) {
  const lines = value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
  const hasApiHeading =
    lines[0]?.toLowerCase() === fallbackHeading.toLowerCase();

  return {
    heading: hasApiHeading ? lines[0] : fallbackHeading,
    content: (hasApiHeading ? lines.slice(1) : lines).join(" ").trim(),
  };
}

function normalizeCategory(raw: RawCaseStudy) {
  const apiCategory = raw.category?.trim();
  if (apiCategory) return apiCategory;

  const value = `${raw.title} ${raw.slug}`.toLowerCase();
  if (value.includes("healthcare")) return "Healthcare Industry";
  if (value.includes("automotive") || value.includes("automative")) {
    return "Automotive Industry";
  }
  if (value.includes("chemical")) return "Chemical Industry";
  if (value.includes("telecom")) return "Telecom Industry";
  return "Other";
}

function normalizeCaseStudy(raw: RawCaseStudy): CaseStudy {
  const overview = parseOverview(raw.detail.overview, raw.detail.client);
  const methodology = parseListSection(
    raw.detail.methodology,
    "Methodology"
  );
  const delivery = parseListSection(raw.detail.delivery, "Delivery");
  const results = parseTextSection(raw.detail.results, "Results");

  const canonicalSlug =
    raw.slug === "healthcare-industry-diabetes-2"
      ? "healthcare-industry-diabetes"
      : raw.slug === "automative-industry"
        ? "automotive-industry"
        : raw.slug;
  const repeatedPlaceholder =
    /unique blend of expertise and entrepreneurial drive[\s\S]*legal landscape/i;
  const description = repeatedPlaceholder.test(raw.description || "")
    ? "Case study summary pending client approval."
    : raw.description;
  const seo =
    canonicalSlug === "healthcare-industry-diabetes"
      ? {
          ...raw.seo,
          metaTitle: "Healthcare Industry Diabetes Case Study | Insights Opinion",
          metaDescription:
            "A healthcare market research case study focused on diabetes. Full approved case-study summary pending client supply.",
        }
      : raw.seo;

  return {
    id: raw.id,
    category: normalizeCategory(raw),
    title: raw.title,
    slug: canonicalSlug,
    image: raw.image,
    description,
    detail: {
      heading: overview.heading,
      overview: overview.overview,
      clientLabel: overview.clientLabel,
      client: overview.client,
      mandateLabel: overview.mandateLabel,
      mandate: overview.mandate,
      methodologyHeading: methodology.heading,
      methodology: methodology.items,
      methodologyImage: raw.detail.methodologyImage,
      deliveryHeading: delivery.heading,
      delivery: delivery.items,
      resultsHeading: results.heading,
      results: results.content,
    },
    seo,
  };
}

export async function fetchCaseStudies(): Promise<CaseStudy[]> {
  try {
    const res = await fetch(BASE_URL, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error(`Failed to fetch case studies: ${res.status} ${res.statusText}`);
      return [];
    }

    const json: CaseStudiesResponse = await res.json();
    return json.success ? json.data.map(normalizeCaseStudy) : [];
  } catch (error) {
    console.error("Failed to fetch case studies:", error);
    return [];
  }
}

export async function fetchCaseStudy(slug: string): Promise<CaseStudy | null> {
  const caseStudies = await fetchCaseStudies();
  return caseStudies.find((item) => item.slug === slug) ?? null;
}

export function getRelatedCaseStudies(
  caseStudies: CaseStudy[],
  slug: string,
  limit = 3
): CaseStudy[] {
  const current = caseStudies.find((item) => item.slug === slug);

  if (!current) {
    return caseStudies.slice(0, limit);
  }

  return caseStudies
    .filter((item) => item.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === current.category ? 0 : 1;
      const bScore = b.category === current.category ? 0 : 1;
      return aScore - bScore;
    })
    .slice(0, limit);
}
import { apiUrl } from "@/lib/api-config";
import type { ApiSeo } from "@/lib/api-metadata";
