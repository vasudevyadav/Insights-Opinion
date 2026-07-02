import type { Metadata } from "next";
import ServiceCategoryPage from "@/app/components/services/service-category-page";

export const metadata: Metadata = {
  title: "Research Support Services | Insights Opinion",
  description:
    "Explore survey programming, translation, and data insight support services.",
};

export default function SupportServicesPage() {
  return <ServiceCategoryPage category="support" />;
}
