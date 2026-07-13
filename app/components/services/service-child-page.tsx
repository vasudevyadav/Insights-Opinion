import QuantDetailsHero from "@/app/components/quantitative-research-method/quant-hero";
import QuantDetailsFaq from "@/app/components/quantitative-research-method/quant-faq";
import QuantDetailsWhat from "@/app/components/quantitative-research-method/quant-what";
import QuantDetailsAbout from "@/app/components/quantitative-research-method/quant-about";
import QuantWhatOur from "@/app/components/quantitative-research-method/quant-what-our";
import MarketResearch from "@/app/components/quantitative-research-method/market-research";
import type { MainService } from "@/app/lib/service-catalog";
import type { MethodData } from "@/app/lib/method-data";
import type { ServicePageContent } from "@/data/service-page-content";

export default function ServiceChildPage({
  data,
}: {
  slug: string;
  data: MethodData;
  parentService?: MainService;
  parentContent?: ServicePageContent;
}) {
  return (
    <main>
      {data.hero?.title && <QuantDetailsHero data={data.hero} />}
      {data.about && <QuantDetailsAbout data={data.about} />}
      {data.why?.heading1 && <QuantDetailsWhat data={data.why} />}
      {data.services?.items?.length > 0 && (
        <QuantWhatOur data={data.services} />
      )}
      {(data.whenToUse || data.vsBox) && (
        <MarketResearch data={data} />
      )}

      {data.faqs?.length > 0 && <QuantDetailsFaq data={data.faqs} />}
    </main>
  );
}
