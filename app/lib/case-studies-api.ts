import type { CaseStudy } from "@/app/lib/case-studies-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

const BASE_URL = `${siteUrl}/api/case-studies`;

type CaseStudiesListResponse = {
  success: boolean;
  count: number;
  data: CaseStudy[];
};

type CaseStudyResponse = {
  success: boolean;
  data: CaseStudy | null;
};

export async function fetchCaseStudies(): Promise<CaseStudy[]> {
  try {
    const res = await fetch(BASE_URL, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error(`Failed to fetch case studies: ${res.status} ${res.statusText}`);
      return [];
    }

    const json: CaseStudiesListResponse = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error("Failed to fetch case studies:", error);
    return [];
  }
}

export async function fetchCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const res = await fetch(`${BASE_URL}/${slug}`, { next: { revalidate: 60 } });

    if (!res.ok) {
      if (res.status !== 404) {
        console.error(`Failed to fetch case study: ${res.status} ${res.statusText}`);
      }
      return null;
    }

    const json: CaseStudyResponse = await res.json();
    return json.success ? json.data : null;
  } catch (error) {
    console.error("Failed to fetch case study:", error);
    return null;
  }
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
