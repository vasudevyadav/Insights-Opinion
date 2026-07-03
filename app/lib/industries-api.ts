import type { Industry } from "@/app/lib/industries-data";
import { apiUrl } from "@/lib/api-config";

const BASE_URL = apiUrl("/custom/v1/industries");

type IndustriesListResponse = {
  success: boolean;
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
