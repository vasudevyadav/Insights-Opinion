import type { Metadata } from "next";
import ServiceCategoryPage from "@/app/components/services/service-category-page";
import { fetchMainService } from "@/app/lib/services-api";
import { fetchIndustries } from "@/app/lib/industries-api";
import { notFound } from "next/navigation";
import { buildApiMetadata } from "@/lib/api-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const service = await fetchMainService("qualitative");

  return service
    ? buildApiMetadata(
        service.seo,
        {
          title: "Qualitative Research Services | Insights Opinion",
          description:
            service.content.hero?.description ||
            "Explore focus groups, in-depth reviews, in-home usage testing, and mystery shopping services.",
          image: service.content.hero?.backgroundImage,
        },
        "/qualitative-research"
      )
    : {};
}

export default async function QualitativeResearchPage() {
  const [service, industries] = await Promise.all([
    fetchMainService("qualitative"),
    fetchIndustries(),
  ]);

  if (!service) notFound();

  return (
    <ServiceCategoryPage
      category="qualitative"
      content={service.content}
      services={service.children}
      industries={industries}
    />
  );
}
