import type { NextConfig } from "next";
import path from "path";

const nonServiceLegacyRedirects = [
  ["/sample-page", "/"],
  ["/news-and-updates", "/blogs"],
  ["/global-panel", "/service/global-panel"],
  ["/about-us-2", "/about-us"],
  ["/thankyou", "/thank-you"],
  ["/case-study", "/case-studies"],
  ["/data-protection-gdpr-compliance", "/privacy-policy"],
  ["/market-research-company-in-india", "/local"],
  ["/insight", "/blogs"],
  ["/blog", "/blogs"],
  ["/our-story", "/about-us"],
  ["/leadership", "/about-us/leadership"],
  ["/research-expertise/consumer-research", "/research/consumer-research"],
  ["/research-expertise/b2b-research", "/research/b2b-research"],
  ["/research-expertise/healthcare-research", "/research/healthcare-research"],
  ["/research-expertise/market-research-company-in-new-york", "/local"],
  ["/case-study/automative-industry", "/case-studies/automotive-industry"],
  ["/case-study/automotive-industry", "/case-studies/automotive-industry"],
  [
    "/case-study/healthcare-industry-diabetes",
    "/case-studies/healthcare-industry-diabetes",
  ],
  [
    "/case-studies/healthcare-industry-diabetes-2",
    "/case-studies/healthcare-industry-diabetes",
  ],
  ["/case-study/chemical-industry", "/case-studies/chemical-industry"],
  ["/case-study/telecom-industry", "/case-studies/telecom-industry"],
  ["/case-study/healthcare-industry", "/case-studies"],
  ["/service/survey-programing", "/service/survey-programming"],
] as const;

const nextConfig: NextConfig = {
  compress: true,

  async redirects() {
    const legacyRedirects = nonServiceLegacyRedirects.map(
      ([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })
    );

    return [
      ...legacyRedirects,
      { source: "/our-team", destination: "/our-teams", permanent: true },
      {
        source: "/our-team/:slug",
        destination: "/our-teams/:slug",
        permanent: true,
      },
    ];
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
