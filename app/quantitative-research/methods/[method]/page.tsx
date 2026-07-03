import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceChildPage from "@/app/components/services/service-child-page";
import { fetchChildServiceBySlug } from "@/app/lib/services-api";
import { buildApiMetadata } from "@/lib/api-metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ method: string }>;
}): Promise<Metadata> {
  const { method } = await params;
  const result = await fetchChildServiceBySlug(method);

  return result
    ? buildApiMetadata(
        result.child.seo,
        {
          title: `${result.child.title} | Insights Opinion`,
          description: result.child.content.hero?.description,
          image: result.child.image,
        },
        `/quantitative-research/methods/${method}`
      )
    : {};
}

export default async function MethodDetailPage({
  params,
}: {
  params: Promise<{ method: string }>;
}) {
  const { method } = await params;
  const result = await fetchChildServiceBySlug(method);

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
