import type {
  MainService,
  ServiceChild,
} from "@/app/lib/service-catalog";
import type { MethodData } from "@/app/lib/method-data";
import type { ServicePageContent } from "@/data/service-page-content";

const SERVICES_API_URL =
  process.env.SERVICES_API_URL?.replace(/\/$/, "") ||
  "https://reinventmedia.in/insightOpinion/wp-json/custom/v1/services";

type ApiServiceChild = ServiceChild & {
  content?: MethodData;
};

type ApiMainService = {
  id: string;
  title: string;
  slug: string;
  href: string;
  content: ServicePageContent;
  children?: ApiServiceChild[];
};

type ServicesApiResponse = {
  success?: boolean;
  data?: ApiMainService[];
};

type ServiceDetailApiResponse<T> = {
  success?: boolean;
  data?: T;
};

export type ApiMainServiceWithContent = Omit<MainService, "children"> & {
  content: ServicePageContent;
  children: ApiServiceChild[];
};

function stripHtml(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&#039;/g, "'")
    .replace(/&quot;/gi, '"')
    .trim();
}

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

async function fetchApiData<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, { next: { revalidate: 300 } });
    if (!response.ok) return null;

    const json = normalizeApiValue(
      (await response.json()) as ServiceDetailApiResponse<T>
    );

    return json.success && json.data ? json.data : null;
  } catch {
    return null;
  }
}

function getRouteSlug(service: ApiMainService) {
  return service.slug;
}

function normalizeService(
  service: ApiMainService,
  index: number
): ApiMainServiceWithContent {
  const routeSlug = getRouteSlug(service);

  return {
    ...service,
    id: `${service.id || "service"}-${service.slug || index}`,
    slug: routeSlug,
    apiSlug: service.slug,
    href: `/services/${routeSlug}`,
    content: {
      ...service.content,
      about: stripHtml(service.content.about || ""),
      whyChoose: {
        ...service.content.whyChoose,
        description: stripHtml(service.content.whyChoose?.description || ""),
      },
    },
    children: (service.children || []).map((child, childIndex) => ({
      ...child,
      id: child.id || `${service.slug}-${child.slug}-${childIndex}`,
      position: child.position || childIndex + 1,
      step: child.step || String(childIndex + 1).padStart(2, "0"),
      href: `/services/${routeSlug}/${child.slug}`,
    })),
  };
}

async function fetchServicesData(): Promise<ApiMainServiceWithContent[]> {
  try {
    const response = await fetch(SERVICES_API_URL, {
      next: { revalidate: 300 },
    });

    if (!response.ok) return [];

    const json = normalizeApiValue(
      (await response.json()) as ServicesApiResponse
    );
    if (!json.success || !Array.isArray(json.data)) return [];

    return json.data
      .filter(
        (service) =>
          service &&
          typeof service.slug === "string" &&
          typeof service.title === "string" &&
          !!service.content
      )
      .map(normalizeService);
  } catch {
    return [];
  }
}

export async function fetchServices(): Promise<MainService[]> {
  const services = await fetchServicesData();

  return services.map((service) => ({
    id: service.id,
    title: service.title,
    slug: service.slug,
    apiSlug: service.apiSlug,
    href: service.href,
    children: service.children,
  }));
}

export async function fetchMainService(
  mainServiceSlug: string
): Promise<ApiMainServiceWithContent | null> {
  const services = await fetchServicesData();
  const summary =
    services.find(
      (service) =>
        service.slug === mainServiceSlug ||
        service.apiSlug === mainServiceSlug ||
        service.apiSlug === `${mainServiceSlug}-research`
    ) ?? null;

  if (!summary) return null;

  const detail = await fetchApiData<ApiMainService>(
    `${SERVICES_API_URL}/${summary.apiSlug || summary.slug}`
  );

  return detail ? normalizeService(detail, 0) : summary;
}

export async function fetchChildService(
  mainServiceSlug: string,
  childServiceSlug: string
): Promise<{
  service: ApiMainServiceWithContent;
  child: ApiServiceChild & { content: MethodData };
} | null> {
  const service = await fetchMainService(mainServiceSlug);
  const childSummary = service?.children.find(
    (item) => item.slug === childServiceSlug
  );

  if (!service || !childSummary) return null;

  const child = await fetchApiData<ApiServiceChild>(
    `${SERVICES_API_URL}/${service.apiSlug || service.slug}/${childServiceSlug}`
  );

  if (!child?.content) return null;
  return { service, child: child as ApiServiceChild & { content: MethodData } };
}

export async function fetchChildServiceBySlug(
  childServiceSlug: string
): Promise<{
  service: ApiMainServiceWithContent;
  child: ApiServiceChild & { content: MethodData };
} | null> {
  const services = await fetchServicesData();

  for (const serviceSummary of services) {
    if (
      serviceSummary.children.some((item) => item.slug === childServiceSlug)
    ) {
      return fetchChildService(serviceSummary.slug, childServiceSlug);
    }
  }

  return null;
}
