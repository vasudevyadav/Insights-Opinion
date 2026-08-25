import type { Metadata } from "next";
import { getStaticMetadata } from "@/lib/static-seo";

export const metadata: Metadata = {
  ...getStaticMetadata("data-quality-fraud-detection"),
  robots: { index: false, follow: true },
};

export default function DataQualityFraudDetectionPage() {
  return (
    <>
      <section className="bg-[#edf6fe]">
        <div className="relative w-full overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom text-white">
          <div className="mx-auto flex min-h-[280px] max-w-7xl items-center justify-center px-5 text-center sm:min-h-[350px] lg:min-h-[430px]">
            <h1 className="site-page-title quality-gradient-text">
              Data Quality & Fraud Detection
            </h1>
          </div>
        </div>
      </section>
      <section className="quality-hex-bg px-5 py-14 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border border-[#d5e5f1] bg-white p-8 text-center shadow-sm">
          <h2 className="site-subsection-title quality-gradient-text font-semibold">
            Content pending client approval
          </h2>
          <p className="site-body mt-4 text-[#596176]">
            This route and SEO structure are ready. Detailed service content will
            be added after the client supplies and approves it.
          </p>
        </div>
      </section>
    </>
  );
}
