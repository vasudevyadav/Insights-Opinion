import {
  getServices,
  type MainService,
  type ServiceChild,
} from "@/app/lib/service-catalog";
import {
  getMethodData,
  type MethodData,
} from "@/app/lib/method-data";
import {
  getServicePageContent,
  type ServicePageContent,
} from "@/data/service-page-content";

export type ServiceChildWithContent = ServiceChild & {
  content: MethodData;
};

export type MainServiceWithContent = Omit<MainService, "children"> & {
  content: ServicePageContent;
  children: ServiceChildWithContent[];
};

export type ServiceFilters = {
  mainServiceSlug?: string | null;
  childServiceSlug?: string | null;
};

export function getServicesData({
  mainServiceSlug,
  childServiceSlug,
}: ServiceFilters = {}): MainServiceWithContent[] {
  return getServices()
    .filter(
      (service) => !mainServiceSlug || service.slug === mainServiceSlug
    )
    .map((service) => {
      const content = getServicePageContent(service.slug);
      const children = service.children
        .filter(
          (child) => !childServiceSlug || child.slug === childServiceSlug
        )
        .map((child) => ({
          ...child,
          content: getMethodData(child.slug),
        }))
        .filter(
          (child): child is ServiceChildWithContent => child.content !== null
        );

      return content
        ? {
            ...service,
            content,
            children,
          }
        : null;
    })
    .filter(
      (service): service is MainServiceWithContent =>
        service !== null && (!childServiceSlug || service.children.length > 0)
    );
}
