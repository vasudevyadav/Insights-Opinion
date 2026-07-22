import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import ServiceChildPage from "@/app/components/services/service-child-page";
import { fetchChildServiceBySlug } from "@/app/lib/services-api";
import { legacyOnlineSurveyAliases } from "@/app/lib/legacy-service-routes";
import { buildApiMetadata } from "@/lib/api-metadata";

type PageProps = { params: Promise<{ childSlug: string }> };

const resolveOnlineSurvey = cache(async (childSlug: string) => {
  if (childSlug !== "online-surveys") return null;
  for (const alias of legacyOnlineSurveyAliases) {
    const result = await fetchChildServiceBySlug(alias);
    if (result) return result;
  }
  return null;
});

export function generateStaticParams() {
  return [{ childSlug: "online-surveys" }];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { childSlug } = await params;
  const result = await resolveOnlineSurvey(childSlug);
  return result
    ? buildApiMetadata(
        result.child.seo,
        {
          title: `${result.child.title} | Insights Opinion`,
          description: result.child.content.hero?.description,
          image: result.child.image,
        },
        `/service/quantitative-research/${childSlug}`
      )
    : {};
}

export default async function OnlineSurveyPage({ params }: PageProps) {
  const { childSlug } = await params;
  const result = await resolveOnlineSurvey(childSlug);
  if (!result) notFound();

  return (
    <ServiceChildPage
      slug={result.child.slug}
      data={result.child.content}
      parentService={result.service}
    />
  );
}

