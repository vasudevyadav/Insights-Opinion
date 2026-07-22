import ServiceCategoryPage from "@/app/components/services/service-category-page";
import { fetchIndustries } from "@/app/lib/industries-api";
import { fetchMainService } from "@/app/lib/services-api";
import { notFound } from "next/navigation";

export default async function ServicesPage() {
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
