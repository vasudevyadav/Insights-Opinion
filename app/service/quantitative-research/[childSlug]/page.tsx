import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import ServiceChildPage from "@/app/components/services/service-child-page";
import { fetchChildServiceBySlug } from "@/app/lib/services-api";
import { legacyOnlineSurveyAliases } from "@/app/lib/legacy-service-routes";
import { buildApiMetadata } from "@/lib/api-metadata";
import { getSheetSeo } from "@/lib/sheet-seo";

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
  const path = `/service/quantitative-research/${childSlug}`;
  const sheetSeo = getSheetSeo(path);
  const result = await resolveOnlineSurvey(childSlug);
  return result
    ? buildApiMetadata(
        sheetSeo
          ? {
              ...result.child.seo,
              metaTitle: sheetSeo.title,
              metaDescription: sheetSeo.description,
            }
          : result.child.seo,
        {
          title: `${result.child.title} | Insights Opinion`,
          description: result.child.content.hero?.description,
          image: result.child.bannerImage || result.child.image,
        },
        path
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
      heroImage={result.child.bannerImage || result.child.image}
      parentService={result.service}
    />
  );
}
