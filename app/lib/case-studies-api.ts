export type CaseStudyDetail = {
  overview: string[];
  client: string;
  methodology: string[];
  methodologyImage: string;
  delivery: string[];
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

function dropHeadingLine(lines: string[], heading: string): string[] {
  const [first, ...rest] = lines;
  return first?.trim().toLowerCase() === heading.toLowerCase() ? rest : lines;
}

function cleanList(items: string[], heading: string): string[] {
  return dropHeadingLine(items, heading)
    .map((item) => item.trim())
    .filter(Boolean);
}

function cleanOverview(overview: string): string[] {
  return overview
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.replace(/\s*\n\s*/g, " ").trim())
    .filter(Boolean);
}

function cleanResults(results: string, heading: string): string {
  const withoutHeading = results.replace(
    new RegExp(`^\\s*${heading}\\s*`, "i"),
    ""
  );
  return withoutHeading.replace(/\n+/g, " ").trim();
}

function normalizeCaseStudy(raw: RawCaseStudy): CaseStudy {
  return {
    id: raw.id,
    category: raw.category,
    title: raw.title,
    slug: raw.slug,
    image: raw.image,
    description: raw.description,
    detail: {
      overview: cleanOverview(raw.detail.overview),
      client: raw.detail.client,
      methodology: cleanList(raw.detail.methodology, "Methodology"),
      methodologyImage: raw.detail.methodologyImage,
      delivery: cleanList(raw.detail.delivery, "Delivery"),
      results: cleanResults(raw.detail.results, "Results"),
    },
    seo: raw.seo,
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
