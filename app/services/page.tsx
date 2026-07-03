import type { Metadata } from "next";
import ServicesHero from "@/app/components/services/services-hero";
import ServicesAccordion from "@/app/components/services/services-accordion";
import { fetchServices } from "@/app/lib/services-api";
import { getStaticMetadata } from "@/lib/static-seo";

export const metadata: Metadata = getStaticMetadata("services");

export default async function Services() {
  const services = await fetchServices();

  return (
    <>
      <ServicesHero />
      <ServicesAccordion services={services} />
    </>
  );
}
