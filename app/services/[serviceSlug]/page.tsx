import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceCategoryPage from "@/app/components/services/service-category-page";
import { serviceCategories } from "@/app/lib/service-catalog";
import { fetchMainService } from "@/app/lib/services-api";
import type { ServicePageKey } from "@/data/service-page-content";

type PageProps = {
  params: Promise<{ serviceSlug: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((service) => ({
    serviceSlug: service.key,
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
      category={service.slug as ServicePageKey}
      content={service.content}
      services={service.children}
    />
  );
}
