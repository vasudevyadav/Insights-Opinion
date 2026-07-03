import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceChildPage from "@/app/components/services/service-child-page";
import { serviceCategories } from "@/app/lib/service-catalog";
import { fetchChildService } from "@/app/lib/services-api";

type PageProps = {
  params: Promise<{ serviceSlug: string; childSlug: string }>;
};

export function generateStaticParams() {
  return serviceCategories.flatMap((service) =>
    service.services.map((child) => ({
      serviceSlug: service.key,
      childSlug: child.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { serviceSlug, childSlug } = await params;
  const result = await fetchChildService(serviceSlug, childSlug);

  return result
    ? {
        title: `${result.child.title} | Insights Opinion`,
        description: result.child.content.hero.description,
      }
    : {};
}

export default async function ChildServicePage({ params }: PageProps) {
  const { serviceSlug, childSlug } = await params;
  const result = await fetchChildService(serviceSlug, childSlug);

  if (!result) notFound();

  return (
    <ServiceChildPage
      slug={result.child.slug}
      data={result.child.content}
      parentService={result.service}
      parentContent={result.service.content}
    />
  );
}
