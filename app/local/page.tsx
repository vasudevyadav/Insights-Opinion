import CaseStudiesForm from "../components/case-studies/case-studies-form";
import { LocalBoostYour } from "../components/local/local-boost-your";
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
      <LocalBoostYour />

    </section>
  );
}