import CaseStudiesForm from "../components/case-studies/case-studies-form";
import CaseStudiesHero from "../components/case-studies/case-studies-hero";
import CaseStudiesList from "../components/case-studies/case-studies-list";


export default async function CaseStudies({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  return (
    <section>
      <CaseStudiesHero />
      <CaseStudiesList />
      <CaseStudiesForm />

    </section>
  );
}