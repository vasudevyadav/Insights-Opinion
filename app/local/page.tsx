import CaseStudiesForm from "../components/case-studies/case-studies-form";
import CaseStudiesHero from "../components/case-studies/case-studies-hero";
import CaseStudiesList from "../components/case-studies/case-studies-list";
import LocalHero from "../components/local/local-hero";
import MarketResearch from "../components/local/market-research";


export default async function Local({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  return (
    <section>
      <LocalHero />
      <MarketResearch />
      <CaseStudiesForm />

    </section>
  );
}