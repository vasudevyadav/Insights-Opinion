import type { Industry } from "@/app/lib/industries-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

const BASE_URL = `${siteUrl}/api/industries`;

type IndustriesListResponse = {
  success: boolean;
  count: number;
  data: Industry[];
};

export async function fetchIndustries(): Promise<Industry[]> {
  try {
    const res = await fetch(BASE_URL, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error(`Failed to fetch industries: ${res.status} ${res.statusText}`);
      return [];
    }

    const json: IndustriesListResponse = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error("Failed to fetch industries:", error);
    return [];
  }
}
