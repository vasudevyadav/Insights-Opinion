import type { Metadata } from "next";
import ServiceCategoryPage from "@/app/components/services/service-category-page";

export const metadata: Metadata = {
  title: "Qualitative Research Services | Insights Opinion",
  description:
    "Explore focus groups, in-depth reviews, in-home usage testing, and mystery shopping services.",
};

export default function QualitativeResearchPage() {
  return <ServiceCategoryPage category="qualitative" />;
}
