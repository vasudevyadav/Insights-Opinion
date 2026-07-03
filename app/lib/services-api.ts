import {
  getServices,
  type MainService,
} from "@/app/lib/service-catalog";
import {
  getServicesData,
  type MainServiceWithContent,
  type ServiceChildWithContent,
  type ServiceFilters,
} from "@/app/lib/services-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

const BASE_URL = `${siteUrl}/api/services`;

export type ServicesResponse = {
  success: boolean;
  count: number;
  childCount: number;
  message?: string;
  data: MainServiceWithContent[];
};

export async function fetchServices(): Promise<MainService[]> {
  const data = await fetchServicesData();
  return data.length ? data : getServices();
}

async function fetchServicesData(
  filters: ServiceFilters = {}
): Promise<MainServiceWithContent[]> {
  const params = new URLSearchParams();

  if (filters.mainServiceSlug) {
    params.set("main_service", filters.mainServiceSlug);
  }

  if (filters.childServiceSlug) {
    params.set("child_service", filters.childServiceSlug);
  }

  const url = params.size ? `${BASE_URL}?${params}` : BASE_URL;

  try {
    const response = await fetch(url, { next: { revalidate: 60 } });

    if (!response.ok) {
      console.error(
        `Failed to fetch services: ${response.status} ${response.statusText}`
      );
      return getServicesData(filters);
    }

    const json: ServicesResponse = await response.json();
    return json.success ? json.data : getServicesData(filters);
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return getServicesData(filters);
  }
}

export async function fetchMainService(
  mainServiceSlug: string
): Promise<MainServiceWithContent | null> {
  const services = await fetchServicesData({ mainServiceSlug });
  return services[0] ?? null;
}

export async function fetchChildService(
  mainServiceSlug: string,
  childServiceSlug: string
): Promise<{
  service: MainServiceWithContent;
  child: ServiceChildWithContent;
} | null> {
  const services = await fetchServicesData({
    mainServiceSlug,
    childServiceSlug,
  });
  const service = services[0];
  const child = service?.children[0];

  return service && child ? { service, child } : null;
}
