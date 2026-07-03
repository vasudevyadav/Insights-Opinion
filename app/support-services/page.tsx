import type { Metadata } from "next";
import ServiceCategoryPage from "@/app/components/services/service-category-page";
import { fetchMainService } from "@/app/lib/services-api";
import { notFound } from "next/navigation";
import { buildApiMetadata } from "@/lib/api-metadata";

export async function generateMetadata(): Promise<Metadata> {
  const service = await fetchMainService("support");

  return service
    ? buildApiMetadata(
        service.seo,
        {
          title: "Research Support Services | Insights Opinion",
          description:
            service.content.hero?.description ||
            "Explore survey programming, translation, and data insight support services.",
          image: service.content.hero?.backgroundImage,
        },
        "/support-services"
      )
    : {};
}

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
