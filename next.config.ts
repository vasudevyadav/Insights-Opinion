import type { NextConfig } from "next";
import path from "path";

const legacyRedirects = [
  // Legacy service URLs indexed by search engines.
  [
    "/service/quantitative-research/online-surveys",
    "/services/quantitative/global-survey-company",
  ],
  ["/service/survey-audit", "/support-services"],
  [
    "/service/online-community-building",
    "/services/quantitative/global-survey-company",
  ],
  [
    "/service/programming-and-hosting",
    "/services/support-services/survey-programming-services",
  ],
  [
    "/service/data-processing-and-analytics",
    "/services/support-services/data-insights-services-for-market-research",
  ],
  ["/service/capi-services", "/services/quantitative/capi-services"],
  [
    "/service/cati-market-research",
    "/services/quantitative/cati-market-research",
  ],
  [
    "/service/focus-group-discussions",
    "/services/quantitative/focus-group-discussion-services",
  ],
  [
    "/service/interviews-for-comprehensive-qualitative-insights",
    "/services/quantitative/in-depth-interview-services",
  ],
  [
    "/service/in-home-usage-testing",
    "/services/quantitative/ihut-market-research-services",
  ],
  [
    "/service/translation",
    "/services/support-services/translation-services",
  ],
  [
    "/service/data-insights",
    "/services/support-services/data-insights-services-for-market-research",
  ],
  [
    "/service/global-panel",
    "/services/quantitative/global-survey-company",
  ],
  [
    "/service/clt-services",
    "/services/quantitative/clt-market-research-services",
  ],
  ["/service/qualitative-research", "/qualitative-research"],
  ["/service/market-research-company-in-usa", "/local"],
  ["/service/quantitative-research", "/quantitative-research"],
  [
    "/service/mystery-shopping",
    "/services/quantitative/mystery-shopping-services",
  ],
  ["/service/support-services", "/support-services"],
  [
    "/service/survey-programing",
    "/services/support-services/survey-programming-services",
  ],

  // Legacy top-level, company, and resource URLs.
  ["/service", "/services"],
  ["/sample-page", "/"],
  ["/news-and-updates", "/blogs"],
  ["/global-panel", "/services/quantitative/global-survey-company"],
  ["/about-us-2", "/about-us"],
  ["/thank-you", "/contact-us"],
  ["/thankyou", "/contact-us"],
  ["/case-study", "/case-studies"],
  ["/data-protection-gdpr-compliance", "/privacy-policy"],
  ["/market-research-company-in-india", "/local"],
  ["/insight", "/blogs"],
  ["/blog", "/blogs"],
  ["/client-success-story", "/case-studies"],
  ["/our-story", "/about-us"],
  ["/leadership", "/about-us/leadership"],

  // Legacy research expertise URLs.
  ["/research-expertise/consumer-research", "/research/consumer-research"],
  ["/research-expertise/b2b-research", "/research/b2b-research"],
  [
    "/research-expertise/healthcare-research",
    "/research/healthcare-research",
  ],
  ["/research-expertise/market-research-company-in-new-york", "/local"],

  // Legacy singular case-study URLs.
  ["/case-study/automative-industry", "/case-studies/automotive-industry"],
  ["/case-study/automotive-industry", "/case-studies/automotive-industry"],
  [
    "/case-study/healthcare-industry-diabetes",
    "/case-studies/healthcare-industry-diabetes-2",
  ],
  ["/case-study/chemical-industry", "/case-studies/chemical-industry"],
  ["/case-study/telecom-industry", "/case-studies/telecom-industry"],
  ["/case-study/healthcare-industry", "/case-studies"],
] as const;

const nextConfig: NextConfig = {
  compress: true,

  async redirects() {
    return legacyRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },

  turbopack: {
    root: path.resolve(__dirname),
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reinventmedia.in",
      },
      {
        protocol: "https",
        hostname: "www.reinventmedia.in",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
