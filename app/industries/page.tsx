import type { Metadata } from "next";
import { getStaticMetadata } from "@/lib/static-seo";
import IndustriesHero from "../components/industries/industries-hero";
import IndustriesGlobal from "../components/industries/industries-global ";
import IndustriesForm from "../components/industries/industries-form";
import { fetchIndustries } from "@/app/lib/industries-api";

export const metadata: Metadata = getStaticMetadata("industries");

export default async function Industries() {
  const industries = await fetchIndustries();

  return (
    <section className="industries-page">
      <IndustriesHero />
      <IndustriesGlobal industries={industries} />
      <IndustriesForm />
    </section>
  );
}
