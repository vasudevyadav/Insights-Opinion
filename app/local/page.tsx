import { LocalBoostYour } from "../components/local/local-boost-your";
import LocalCallbackFaq from "../components/local/local-callback-faq";
import LocalCore from "../components/local/local-core";
import LocalHero from "../components/local/local-hero";
import LocalWorkingWith from "../components/local/local-working-with";
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
      <LocalCore />
      <LocalWorkingWith />
      <LocalCallbackFaq />
    </section>
  );
}