import type { Metadata } from "next";
import SiteMapAccordion from "@/app/components/site-map/site-map-accordion";
import { getAllSiteRoutes } from "@/app/lib/site-routes";
import { getStaticMetadata } from "@/lib/static-seo";

export const metadata: Metadata = getStaticMetadata("site-map");

export const revalidate = 3600;

export default async function SiteMapPage() {
  const routes = await getAllSiteRoutes();

  return (
    <>
      <section className="bg-[#edf6fe]">
        <div className="relative mt-0 w-full overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white">
          <div className="relative z-10 mx-auto flex min-h-[280px] w-full max-w-7xl items-center justify-center px-4 py-12 text-center sm:min-h-[350px] sm:px-6 lg:min-h-[430px] lg:px-5 lg:py-0">
            <h1 className="site-page-title lg:mb-10">Sitemap</h1>
          </div>
        </div>
      </section>

      <section className="quality-hex-bg px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="site-section-title quality-gradient-text font-semibold">
              Explore All Pages
            </h2>
            <p className="site-body mt-3 text-[#596176]">
              This directory updates from the same static and dynamic data
              sources used by the XML sitemap and llms.txt.
            </p>
          </div>

          <SiteMapAccordion routes={routes} />
        </div>
      </section>
    </>
  );
}
