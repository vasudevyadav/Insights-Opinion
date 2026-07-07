import type { Metadata } from "next";
import ServiceCategoryPage from "@/app/components/services/service-category-page";
import { fetchMainService } from "@/app/lib/services-api";
import { fetchIndustries } from "@/app/lib/industries-api";
import { notFound } from "next/navigation";
import { buildApiMetadata } from "@/lib/api-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const service = await fetchMainService("quantitative");

  return service
    ? buildApiMetadata(
        service.seo,
        {
          title: "Quantitative Research Services | Insights Opinion",
          description:
            service.content.hero?.description ||
            "Explore quantitative research services at Insights Opinion.",
          image: service.content.hero?.backgroundImage,
        },
        "/quantitative-research"
      )
    : {};
}

export default async function QuantitativeResearchPage() {
  const [service, industries] = await Promise.all([
    fetchMainService("quantitative"),
    fetchIndustries(),
  ]);

  if (!service) notFound();

  return (
    <ServiceCategoryPage
      category="quantitative"
      categoryTitle={service.title}
      content={service.content}
      services={service.children}
      industries={industries}
    />
  );
}
