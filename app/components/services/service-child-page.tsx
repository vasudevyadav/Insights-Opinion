import QuantDetailsHero from "@/app/components/quantitative-research-method/quant-hero";
import QuantDetailsFaq from "@/app/components/quantitative-research-method/quant-faq";
import QuantDetailsWhyRadial from "@/app/components/quantitative-research-method/quant-why-radial";
import QuantDetailsMethods from "@/app/components/quantitative-research-method/quant-methods";
import QuantDetailsWhat from "@/app/components/quantitative-research-method/quant-what";
import QuantDetailsAbout from "@/app/components/quantitative-research-method/quant-about";
import QuantWhatOur from "@/app/components/quantitative-research-method/quant-what-our";
import MarketResearch from "@/app/components/quantitative-research-method/market-research";
import type { ServiceChild, MainService } from "@/app/lib/service-catalog";
import type { MethodData } from "@/app/lib/method-data";
import type { ServicePageContent } from "@/data/service-page-content";

export default function ServiceChildPage({
  slug,
  data,
  parentService,
  parentContent,
}: {
  slug: string;
  data: MethodData;
  parentService?: MainService;
  parentContent?: ServicePageContent;
}) {
  return (
    <main>
      <QuantDetailsHero data={data.hero} />
      <QuantDetailsAbout data={data.about} />
      <QuantDetailsWhat data={data.why} />
      <QuantWhatOur data={data.services} />
      <MarketResearch data={data} />
      <QuantDetailsMethods
        currentSlug={slug}
        categoryTitle={parentService?.title}
        relatedServices={
          parentService?.children.filter(
            (service: ServiceChild) => service.slug !== slug
          )
        }
      />
      <QuantDetailsWhyRadial content={parentContent?.whyRadial} />
      <QuantDetailsFaq data={data.faqs} />
    </main>
  );
}
