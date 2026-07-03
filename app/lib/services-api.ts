import {
  getServices,
  type MainService,
} from "@/app/lib/service-catalog";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

const BASE_URL = `${siteUrl}/api/services`;

type ServicesResponse = {
  success: boolean;
  count: number;
  childCount: number;
  data: MainService[];
};

export async function fetchServices(): Promise<MainService[]> {
  try {
    const response = await fetch(BASE_URL, { next: { revalidate: 60 } });

    if (!response.ok) {
      console.error(
        `Failed to fetch services: ${response.status} ${response.statusText}`
      );
      return getServices();
    }

    const json: ServicesResponse = await response.json();
    return json.success ? json.data : getServices();
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return getServices();
  }
}
