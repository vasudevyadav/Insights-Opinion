import QuantDetailsHero from "@/app/components/quantitative-research-method/quant-hero";
import QuantDetailsFaq from "@/app/components/quantitative-research-method/quant-faq";
import QuantDetailsWhyRadial from "@/app/components/quantitative-research-method/quant-why-radial";
import QuantDetailsMethods from "@/app/components/quantitative-research-method/quant-methods";
import QuantDetailsWhat from "@/app/components/quantitative-research-method/quant-what";
import QuantDetailsAbout from "@/app/components/quantitative-research-method/quant-about";
import QuantWhatOur from "@/app/components/quantitative-research-method/quant-what-our";
import MarketResearch from "@/app/components/quantitative-research-method/market-research";
import type { MethodData } from "@/app/lib/method-data";

export default function ServiceChildPage({
  slug,
  data,
}: {
  slug: string;
  data: MethodData;
}) {
  return (
    <main>
      <QuantDetailsHero data={data.hero} />
      <QuantDetailsAbout data={data.about} />
      <QuantDetailsWhat data={data.why} />
      <QuantWhatOur data={data.services} />
      <MarketResearch data={data} />
      <QuantDetailsMethods currentSlug={slug} />
      <QuantDetailsWhyRadial />
      <QuantDetailsFaq data={data.faqs} />
    </main>
  );
}
