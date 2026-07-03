import ServiceCategoryPage from "@/app/components/services/service-category-page";
import { fetchMainService } from "@/app/lib/services-api";
import { notFound } from "next/navigation";

export default async function QuantitativeResearchPage() {
  const service = await fetchMainService("quantitative");

  if (!service) notFound();

  return (
    <ServiceCategoryPage
      category="quantitative"
      content={service.content}
      services={service.children}
    />
  );
}
