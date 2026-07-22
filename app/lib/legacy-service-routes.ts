export const legacyParentServices = {
  "quantitative-research": "quantitative",
  "qualitative-research": "qualitative",
  "support-services": "support",
} as const;

export type LegacyParentSlug = keyof typeof legacyParentServices;

export const legacyChildServices: Record<string, readonly string[]> = {
  "survey-audit": ["survey-audit"],
  "online-community-building": [
    "global-survey-company",
    "online-surveys",
  ],
  "programming-and-hosting": [
    "survey-programming-services",
    "survey-programming",
  ],
  "data-processing-and-analytics": [
    "data-insights-services-for-market-research",
    "data-analysis-reporting",
    "data-insights",
  ],
  "capi-services": ["capi-services", "capi"],
  "cati-market-research": ["cati-market-research", "cati"],
  "focus-group-discussions": [
    "focus-group-discussion-services",
    "focus-group-discussions",
  ],
  "interviews-for-comprehensive-qualitative-insights": [
    "in-depth-interview-services",
    "in-depth-reviews",
  ],
  "in-home-usage-testing": [
    "ihut-market-research-services",
    "in-home-usage-testings",
  ],
  translation: ["translation-services", "translation"],
  "data-insights": [
    "data-insights-services-for-market-research",
    "data-insights",
    "data-analysis-reporting",
  ],
  "global-panel": ["global-survey-company", "online-surveys"],
  "clt-services": ["clt-market-research-services", "clt"],
  "mystery-shopping": ["mystery-shopping-services", "mystery-shopping"],
  "survey-programing": [
    "survey-programming-services",
    "survey-programming",
  ],
  "market-research-company-in-usa": [],
};

export const legacyOnlineSurveyAliases = [
  "global-survey-company",
  "online-surveys",
] as const;

const legacyChildSlugByApiSlug: Record<string, string> = {
  "global-survey-company": "quantitative-research/online-surveys",
  "online-surveys": "quantitative-research/online-surveys",
  "survey-audit": "survey-audit",
  "online-community-building": "online-community-building",
  "survey-programming-services": "survey-programing",
  "survey-programming": "survey-programing",
  "data-processing-and-analytics": "data-processing-and-analytics",
  "data-analysis-reporting": "data-processing-and-analytics",
  "capi-services": "capi-services",
  capi: "capi-services",
  "cati-market-research": "cati-market-research",
  cati: "cati-market-research",
  "focus-group-discussion-services": "focus-group-discussions",
  "focus-group-discussions": "focus-group-discussions",
  "in-depth-interview-services":
    "interviews-for-comprehensive-qualitative-insights",
  "in-depth-reviews": "interviews-for-comprehensive-qualitative-insights",
  "ihut-market-research-services": "in-home-usage-testing",
  "in-home-usage-testings": "in-home-usage-testing",
  "translation-services": "translation",
  translation: "translation",
  "data-insights-services-for-market-research": "data-insights",
  "data-insights": "data-insights",
  "clt-market-research-services": "clt-services",
  clt: "clt-services",
  "mystery-shopping-services": "mystery-shopping",
  "mystery-shopping": "mystery-shopping",
};

export function legacyParentHref(apiSlug?: string) {
  if (apiSlug?.includes("qualitative")) {
    return "/service/qualitative-research";
  }
  if (apiSlug?.includes("support")) return "/service/support-services";
  return "/service/quantitative-research";
}

export function legacyChildHref(apiSlug: string) {
  return `/service/${legacyChildSlugByApiSlug[apiSlug] || apiSlug}`;
}

export function isLegacyParentSlug(
  slug: string
): slug is LegacyParentSlug {
  return slug in legacyParentServices;
}
