import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceChildPage from "@/app/components/services/service-child-page";
import {
  fetchChildService,
  fetchChildServiceBySlug,
} from "@/app/lib/services-api";
import { buildApiMetadata } from "@/lib/api-metadata";

type PageProps = {
  params: Promise<{ serviceSlug: string; childSlug: string }>;
};

export const dynamic = "force-dynamic";
export const dynamicParams = true;
export const revalidate = 0;

async function resolveChildService(serviceSlug: string, childSlug: string) {
  return (
    (await fetchChildService(serviceSlug, childSlug)) ??
    (await fetchChildServiceBySlug(childSlug))
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { serviceSlug, childSlug } = await params;
  const result = await resolveChildService(serviceSlug, childSlug);

  return result
    ? buildApiMetadata(
        result.child.seo,
        {
          title: `${result.child.title} | Insights Opinion`,
          description: result.child.content.hero?.description,
          image: result.child.image,
        },
        `/services/${serviceSlug}/${childSlug}`
      )
    : {};
}

export default async function ChildServicePage({ params }: PageProps) {
  const { serviceSlug, childSlug } = await params;
  const result = await resolveChildService(serviceSlug, childSlug);

  if (!result) notFound();

  return (
    <ServiceChildPage
      slug={result.child.slug}
      data={result.child.content}
      parentService={result.service}
    />
  );
}
