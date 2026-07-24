import type {
  MainService,
  ServiceChild,
} from "@/app/lib/service-catalog";
import type { MethodData } from "@/app/lib/method-data";
import type { ServicePageContent } from "@/data/service-page-content";
import { apiUrl } from "@/lib/api-config";
import type { ApiSeo } from "@/lib/api-metadata";
import { getServicesData } from "@/app/lib/services-data";
import {
  legacyChildHref,
  legacyParentHref,
} from "@/app/lib/legacy-service-routes";

const SERVICES_API_URL = apiUrl("/custom/v1/services");
const SERVICES_REVALIDATE_SECONDS = 300;

const MAIN_SERVICE_API_SLUGS: Record<string, readonly string[]> = {
  quantitative: ["quantitative-research"],
  qualitative: ["qualitative-market-research-services"],
  support: ["market-research-support-services"],
};

type ApiServiceChild = ServiceChild & {
  content?: MethodData;
  seo?: ApiSeo;
  apiHref?: string;
};

type ApiMainService = {
  id: string;
  title: string;
  slug: string;
  href: string;
  content: ServicePageContent;
  children?: ApiServiceChild[];
  seo?: ApiSeo;
};

type ServicesApiResponse = {
  success?: boolean;
  data?: ApiMainService[];
};

type ServiceDetailApiResponse<T> = {
  success?: boolean;
  data?: T;
};

function getLocalServices(): ApiMainServiceWithContent[] {
  return getServicesData() as ApiMainServiceWithContent[];
}

export type ApiMainServiceWithContent = Omit<MainService, "children"> & {
  content: ServicePageContent;
  children: ApiServiceChild[];
  seo?: ApiSeo;
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
    const response = await fetch(url, {
      next: { revalidate: SERVICES_REVALIDATE_SECONDS },
    });
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
  const hrefSlug = service.href
    ?.split("?")[0]
    .replace(/\/+$/, "")
    .split("/")
    .filter(Boolean)
    .at(-1);

  return hrefSlug || service.slug.replace(/-research$/, "");
}

function getHrefSlug(href?: string) {
  return href
    ?.split("?")[0]
    .replace(/\/+$/, "")
    .split("/")
    .filter(Boolean)
    .at(-1);
}

function getMainServiceApiSlugs(mainServiceSlug: string) {
  return Array.from(
    new Set([
      mainServiceSlug,
      ...(MAIN_SERVICE_API_SLUGS[mainServiceSlug] ?? []),
      ...(mainServiceSlug.endsWith("-research")
        ? []
        : [`${mainServiceSlug}-research`]),
    ])
  );
}

function unwrapMainService(
  data: ApiMainService | ApiMainService[] | null
): ApiMainService | null {
  return Array.isArray(data) ? data[0] ?? null : data;
}

function matchesChildRoute(child: ApiServiceChild, requestedSlug: string) {
  return (
    child.slug === requestedSlug ||
    getHrefSlug(child.href) === requestedSlug ||
    getHrefSlug(child.apiHref) === requestedSlug
  );
}

function findMatchingChild(
  children: ApiServiceChild[],
  requestedSlug: string
) {
  // Prefer the canonical API slug. CMS hrefs are editable and can be duplicated
  // (CATI and CLT currently share the same href), so an href-only match must be
  // treated as a fallback rather than winning by array order.
  return (
    children.find((child) => child.slug === requestedSlug) ??
    children.find((child) => getHrefSlug(child.apiHref) === requestedSlug) ??
    children.find((child) => getHrefSlug(child.href) === requestedSlug)
  );
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
    href: legacyParentHref(service.slug || routeSlug),
    content: {
      ...service.content,
      about: stripHtml(service.content.about || ""),
      whyChoose: {
        ...service.content.whyChoose,
        description: stripHtml(service.content.whyChoose?.description || ""),
      },
      whyChooseSections: service.content.whyChooseSections?.map((section) => ({
        ...section,
        description: stripHtml(section.description || ""),
      })),
    },
    children: (service.children || []).map((child, childIndex) => ({
      ...child,
      apiHref: child.apiHref || child.href,
      id: child.id || `${service.slug}-${child.slug}-${childIndex}`,
      position: child.position || childIndex + 1,
      step: child.step || String(childIndex + 1).padStart(2, "0"),
      href: legacyChildHref(child.slug),
    })),
  };
}

async function fetchServicesData(
  fresh = false
): Promise<ApiMainServiceWithContent[]> {
  try {
    const response = await fetch(SERVICES_API_URL, {
      ...(fresh
        ? { cache: "no-store" as const }
        : { next: { revalidate: SERVICES_REVALIDATE_SECONDS } }),
    });

    if (!response.ok) return getLocalServices();

    const json = normalizeApiValue(
      (await response.json()) as ServicesApiResponse
    );
    if (!json.success || !Array.isArray(json.data)) return getLocalServices();

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
    return getLocalServices();
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
  const apiSlugs = getMainServiceApiSlugs(mainServiceSlug);
  const expectedApiSlugs = new Set(apiSlugs);
  const summary =
    services.find(
      (service) => service.apiSlug && expectedApiSlugs.has(service.apiSlug)
    ) ??
    services.find((service) => service.slug === mainServiceSlug) ??
    null;

  if (!summary) {
    for (const apiSlug of apiSlugs) {
      const detail = unwrapMainService(await fetchApiData<ApiMainService | ApiMainService[]>(
        `${SERVICES_API_URL}/${encodeURIComponent(apiSlug)}`
      ));

      if (detail?.content) return normalizeService(detail, 0);
    }

    const localSlug = mainServiceSlug.replace(/-research$/, "").replace(/-services$/, "");
    return (
      getLocalServices().find(
        (service) =>
          service.slug === localSlug || service.apiSlug === mainServiceSlug
      ) ?? null
    );
  }

  const detail = unwrapMainService(
    await fetchApiData<ApiMainService | ApiMainService[]>(
      `${SERVICES_API_URL}/${encodeURIComponent(summary.apiSlug || summary.slug)}`
    )
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
  const services = await fetchServicesData();
  const expectedApiSlugs = new Set(getMainServiceApiSlugs(mainServiceSlug));
  const routeCandidates = services.filter(
    (item) =>
      item.slug === mainServiceSlug ||
      (!!item.apiSlug && expectedApiSlugs.has(item.apiSlug))
  );
  const matchingSummary = routeCandidates.find((item) =>
    findMatchingChild(item.children, childServiceSlug)
  );
  const catalogChildSummary = matchingSummary
    ? findMatchingChild(matchingSummary.children, childServiceSlug)
    : undefined;
  const fallbackSummary = matchingSummary ?? routeCandidates[0];

  let service = fallbackSummary ?? (await fetchMainService(mainServiceSlug));
  if (matchingSummary) {
    const detail = await fetchApiData<ApiMainService>(
      `${SERVICES_API_URL}/${encodeURIComponent(matchingSummary.apiSlug || matchingSummary.slug)}`
    );
    if (detail?.content) service = normalizeService(detail, 0);
  }

  const childSummary = service
    ? findMatchingChild(service.children, childServiceSlug) ??
      service.children.find((item) => item.slug === catalogChildSummary?.slug)
    : undefined;

  if (!service) return null;

  // CMS entries may expose a public href alias that differs from the API slug.
  // Always try the canonical child slug first, then the requested route alias.
  const childSlugCandidates = Array.from(
    new Set([childSummary?.slug, childServiceSlug].filter(Boolean) as string[])
  );
  let child: ApiServiceChild | undefined;

  for (const childSlugCandidate of childSlugCandidates) {
    const childData = await fetchApiData<ApiServiceChild | ApiMainService[]>(
      `${SERVICES_API_URL}/${encodeURIComponent(service.apiSlug || service.slug)}/${encodeURIComponent(childSlugCandidate)}`
    );

    child = Array.isArray(childData)
      ? childData
          .flatMap((parent) => parent.children || [])
          .find(
            (item) =>
              item.slug === childSlugCandidate ||
              matchesChildRoute(item, childServiceSlug)
          )
      : childData || undefined;

    if (child?.content) break;
  }

  const resolvedChild = child?.content ? child : childSummary;

  if (!resolvedChild?.content) return null;
  return {
    service,
    child: resolvedChild as ApiServiceChild & { content: MethodData },
  };
}

export async function fetchChildServiceBySlug(
  childServiceSlug: string
): Promise<{
  service: ApiMainServiceWithContent;
  child: ApiServiceChild & { content: MethodData };
} | null> {
  const services = await fetchServicesData();

  for (const serviceSummary of services) {
    const hasMatchingChild = serviceSummary.children.some((child) =>
      matchesChildRoute(child, childServiceSlug)
    );

    if (!hasMatchingChild) continue;

    const result = await fetchChildService(
      serviceSummary.slug,
      childServiceSlug
    );

    if (result) return result;
  }

  return null;
}
