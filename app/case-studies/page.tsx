import type { Metadata } from "next";
import { getStaticMetadata } from "@/lib/static-seo";
import CaseStudiesForm from "../components/case-studies/case-studies-form";
import CaseStudiesHero from "../components/case-studies/case-studies-hero";
import CaseStudiesList from "../components/case-studies/case-studies-list";
import { fetchCaseStudies } from "@/app/lib/case-studies-api";

export const metadata: Metadata = getStaticMetadata("case-studies");

export default async function CaseStudies() {
  const caseStudies = await fetchCaseStudies();

  return (
    <section>
      <CaseStudiesHero />
      <CaseStudiesList caseStudies={caseStudies} />
      <CaseStudiesForm />

    </section>
  );
}
