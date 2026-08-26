import type { Industry } from "@/app/lib/industries-data";
import { apiUrl } from "@/lib/api-config";

const BASE_URL = apiUrl("/custom/v1/industries");

type IndustriesListResponse = {
  success: boolean;
  data: Industry[];
};

function normalizeIndustries(industries: Industry[]) {
  const uniqueIndustries = new Map<string, Industry>();

  for (const industry of industries) {
    const name = industry.name.replace(/\u00a0/g, " ").replace(/\s+/g, " ").trim();
    const key = name.toLowerCase();

    if (!name || uniqueIndustries.has(key)) continue;

    uniqueIndustries.set(key, {
      ...industry,
      name,
      description: industry.description.replace(/\u00a0/g, " ").trim(),
    });
  }

  return Array.from(uniqueIndustries.values());
}

export async function fetchIndustries(): Promise<Industry[]> {
  try {
    const res = await fetch(BASE_URL, { next: { revalidate: 1 } });

    if (!res.ok) {
      console.error(`Failed to fetch industries: ${res.status} ${res.statusText}`);
      return [];
    }

    const json: IndustriesListResponse = await res.json();
    return json.success ? normalizeIndustries(json.data) : [];
  } catch (error) {
    console.error("Failed to fetch industries:", error);
    return [];
  }
}
