import CaseStudiesForm from "../components/case-studies/case-studies-form";
import CaseStudiesHero from "../components/case-studies/case-studies-hero";
import CaseStudiesList from "../components/case-studies/case-studies-list";
import { fetchCaseStudies } from "@/app/lib/case-studies-api";


export default async function CaseStudies({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const caseStudies = await fetchCaseStudies();

  return (
    <section>
      <CaseStudiesHero />
      <CaseStudiesList caseStudies={caseStudies} />
      <CaseStudiesForm />

    </section>
  );
}