import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import ServiceCategoryPage from "@/app/components/services/service-category-page";
import ServiceChildPage from "@/app/components/services/service-child-page";
import { fetchIndustries } from "@/app/lib/industries-api";
import {
  fetchChildServiceBySlug,
  fetchMainService,
} from "@/app/lib/services-api";
import {
  isLegacyParentSlug,
  legacyChildServices,
  legacyParentServices,
} from "@/app/lib/legacy-service-routes";
import { buildApiMetadata } from "@/lib/api-metadata";
import LocalPage from "@/app/local/page";

type PageProps = { params: Promise<{ slug: string }> };

const resolveChild = cache(async (oldSlug: string) => {
  const aliases = legacyChildServices[oldSlug];
  if (!aliases) return null;

  for (const alias of aliases) {
    const result = await fetchChildServiceBySlug(alias);
    if (result) return result;
  }
  return null;
});

export async function generateStaticParams() {
  return [
    ...Object.keys(legacyParentServices),
    ...Object.keys(legacyChildServices),
  ].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (isLegacyParentSlug(slug)) {
    const service = await fetchMainService(legacyParentServices[slug]);
    return service
      ? buildApiMetadata(
          service.seo,
          {
            title: `${service.title} Services | Insights Opinion`,
            description: service.content.hero?.description,
            image: service.content.hero?.backgroundImage,
          },
          `/service/${slug}`
        )
      : {};
  }

  if (slug === "market-research-company-in-usa") {
    return buildApiMetadata(
      undefined,
      {
        title: "Market Research Company in USA | Insights Opinion",
        description: "Local market research capabilities in the USA.",
      },
      `/service/${slug}`
    );
  }

  const result = await resolveChild(slug);
  return result
    ? buildApiMetadata(
        result.child.seo,
        {
          title: `${result.child.title} | Insights Opinion`,
          description: result.child.content.hero?.description,
          image: result.child.image,
        },
        `/service/${slug}`
      )
    : {};
}

export default async function LegacyServicePage({ params }: PageProps) {
  const { slug } = await params;

  if (slug === "market-research-company-in-usa") {
    return <LocalPage params={params} />;
  }

  if (isLegacyParentSlug(slug)) {
    const [service, industries] = await Promise.all([
      fetchMainService(legacyParentServices[slug]),
      fetchIndustries(),
    ]);
    if (!service) notFound();

    return (
      <ServiceCategoryPage
        category={legacyParentServices[slug]}
        categoryTitle={service.title}
        content={service.content}
        services={service.children}
        industries={industries}
      />
    );
  }

  const result = await resolveChild(slug);
  if (!result && slug === "survey-audit") {
    const [service, industries] = await Promise.all([
      fetchMainService("support"),
      fetchIndustries(),
    ]);
    if (!service) notFound();
    return (
      <ServiceCategoryPage
        category="support"
        categoryTitle={service.title}
        content={service.content}
        services={service.children}
        industries={industries}
      />
    );
  }
  if (!result) notFound();

  return (
    <ServiceChildPage
      slug={result.child.slug}
      data={result.child.content}
      parentService={result.service}
    />
  );
}
