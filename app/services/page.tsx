import type { Metadata } from "next";
import ServicesHero from "@/app/components/services/services-hero";
import ServicesAccordion from "@/app/components/services/services-accordion";
import { fetchServices } from "@/app/lib/services-api";

export const metadata: Metadata = {
  title: "Market Research Services | Insights Opinion",
  description:
    "Explore quantitative research, qualitative research, and research support services from Insights Opinion.",
};

export default async function Services() {
  const services = await fetchServices();

  return (
    <>
      <ServicesHero />
      <ServicesAccordion services={services} />
    </>
  );
}
