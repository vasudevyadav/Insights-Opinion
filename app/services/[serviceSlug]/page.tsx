import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCategoryPage from "@/app/components/services/service-category-page";
import {
  fetchMainService,
  fetchServices,
} from "@/app/lib/services-api";
import type { ServicePageKey } from "@/data/service-page-content";

type PageProps = {
  params: Promise<{ serviceSlug: string }>;
};

function getDesignKey(apiSlug?: string): ServicePageKey {
  if (apiSlug?.includes("qualitative")) return "qualitative";
  if (apiSlug?.includes("support")) return "support";
  return "quantitative";
}

export async function generateStaticParams() {
  const services = await fetchServices();

  return services.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = await fetchMainService(serviceSlug);

  return service
    ? {
        title: `${service.title} Services | Insights Opinion`,
        description: `Explore ${service.title.toLowerCase()} services, methods, capabilities, and frequently asked questions.`,
      }
    : {};
}

export default async function MainServicePage({ params }: PageProps) {
  const { serviceSlug } = await params;
  const service = await fetchMainService(serviceSlug);

  if (!service) notFound();

  return (
    <ServiceCategoryPage
      category={getDesignKey(service.apiSlug)}
      categoryTitle={service.title}
      content={service.content}
      services={service.children}
    />
  );
}
