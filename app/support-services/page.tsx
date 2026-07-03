import type { Metadata } from "next";
import ServiceCategoryPage from "@/app/components/services/service-category-page";
import { fetchMainService } from "@/app/lib/services-api";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Research Support Services | Insights Opinion",
  description:
    "Explore survey programming, translation, and data insight support services.",
};

export default async function SupportServicesPage() {
  const service = await fetchMainService("support");

  if (!service) notFound();

  return (
    <ServiceCategoryPage
      category="support"
      content={service.content}
      services={service.children}
    />
  );
}
