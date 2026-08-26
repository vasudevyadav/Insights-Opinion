import type { MainService, ServiceChild } from "@/app/lib/service-catalog";

const childLabels: Record<string, string> = {
  "global-survey-company": "Global Panel",
  "online-surveys": "Global Panel",
  "cati-market-research": "CATI",
  cati: "CATI",
  "capi-services": "CAPI",
  capi: "CAPI",
  "clt-market-research-services": "CLT",
  clt: "CLT",
  "focus-group-discussion-services": "Focus Group Discussions",
  "focus-group-discussions": "Focus Group Discussions",
  "in-depth-interview-services": "In-Depth Reviews",
  "in-depth-reviews": "In-Depth Reviews",
  "ihut-market-research-services": "In-Home Usage Testings",
  "in-home-usage-testings": "In-Home Usage Testings",
  "mystery-shopping-services": "Mystery Shopping",
  "mystery-shopping": "Mystery Shopping",
  "survey-programming-services": "Survey Programming",
  "survey-programming": "Survey Programming",
  "translation-services": "Translation",
  translation: "Translation",
  "data-insights-services-for-market-research": "Data Insights",
  "data-insights": "Data Insights",
};

export function getServiceCategoryLabel(service: MainService) {
  const value = `${service.apiSlug ?? ""} ${service.slug} ${service.title}`.toLowerCase();

  if (value.includes("qualitative")) return "Qualitative Research";
  if (value.includes("support")) return "Support Services";
  return "Quantitative Research";
}

export function getServiceChildLabel(service: ServiceChild) {
  return childLabels[service.slug] ?? service.title;
}
