import type { Metadata } from "next";
import ServiceCategoryPage from "@/app/components/services/service-category-page";
import { fetchMainService } from "@/app/lib/services-api";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Qualitative Research Services | Insights Opinion",
  description:
    "Explore focus groups, in-depth reviews, in-home usage testing, and mystery shopping services.",
};

export default async function QualitativeResearchPage() {
  const service = await fetchMainService("qualitative");

  if (!service) notFound();

  return (
    <ServiceCategoryPage
      category="qualitative"
      content={service.content}
    />
  );
}
