import QuantDetailsHero from "@/app/components/quantitative-research-method/quant-hero";
import QuantDetailsFaq from "@/app/components/quantitative-research-method/quant-faq";
import QuantDetailsWhat from "@/app/components/quantitative-research-method/quant-what";
import QuantDetailsAbout from "@/app/components/quantitative-research-method/quant-about";
import QuantWhatOur from "@/app/components/quantitative-research-method/quant-what-our";
import MarketResearch from "@/app/components/quantitative-research-method/market-research";
import QuantWhyChoose from "@/app/components/quantitative-research/quant-why-choose";
import type { MainService } from "@/app/lib/service-catalog";
import type { MethodData } from "@/app/lib/method-data";

function hasContent(value: unknown): value is string {
  return (
    typeof value === "string" &&
    value.replace(/<[^>]*>/g, "").replace(/&nbsp;/gi, " ").trim().length > 0
  );
}

export default function ServiceChildPage({
  data,
}: {
  slug: string;
  data: MethodData;
  parentService?: MainService;
}) {
  const showHero = hasContent(data.hero?.title);
  const showAbout = hasContent(data.about);
  const showWhy =
    hasContent(data.why?.heading1) &&
    [data.why?.bodyLeft, data.why?.bodyRight1, data.why?.bodyRight2].some(
      hasContent
    );

  const serviceItems = (data.services?.items ?? []).filter(
    (item) => hasContent(item.title) || hasContent(item.description)
  );
  const whenToUseItems = (data.whenToUse?.items ?? []).filter(
    (item) => hasContent(item.title) || hasContent(item.description)
  );
  const vsBoxItems = (data.vsBox?.items ?? []).filter(
    (item) =>
      hasContent(item.label) || hasContent(item.col1) || hasContent(item.col2)
  );
  const sectors = (data.sectors ?? []).filter(
    (sector) =>
      hasContent(sector.title) &&
      hasContent(sector.image) &&
      hasContent(sector.description)
  );
  const whyChooseSections = (data.whyChooseChild ?? []).flatMap((section) => {
    const items = (section.items ?? []).filter(
      (item) => hasContent(item.title) || hasContent(item.content)
    );
    const hasSectionContent =
      items.length > 0 ||
      hasContent(section.title) ||
      hasContent(section.highlight) ||
      hasContent(section.description);

    return hasContent(section.image) && hasSectionContent
      ? [{ ...section, items }]
      : [];
  });
  const faqs = (data.faqs ?? []).filter(
    (faq) => hasContent(faq.q) && hasContent(faq.a)
  );

  const showWhenToUse =
    hasContent(data.whenToUse?.heading1) && whenToUseItems.length > 0;
  const showVsBox = hasContent(data.vsBox?.title) && vsBoxItems.length > 0;
  const showMarketResearch = showWhenToUse || showVsBox || sectors.length > 0;
  const marketResearchData: MethodData = {
    ...data,
    whenToUse: { ...data.whenToUse, items: whenToUseItems },
    vsBox: { ...data.vsBox, items: vsBoxItems },
    sectors,
  };

  return (
    <main>
      {showHero && (
        <QuantDetailsHero
          data={{
            title: data.hero.title,
            subtitle: data.hero.subtitle ?? "",
            description: data.hero.description ?? "",
          }}
        />
      )}
      {showAbout && <QuantDetailsAbout data={data.about} />}
      {showWhy && <QuantDetailsWhat data={data.why} />}
      {serviceItems.length > 0 && (
        <QuantWhatOur data={{ ...data.services, items: serviceItems }} />
      )}
      {showMarketResearch && (
        <MarketResearch data={marketResearchData} />
      )}
      {whyChooseSections.length > 0 && (
        <QuantWhyChoose sections={whyChooseSections} />
      )}

      {faqs.length > 0 && <QuantDetailsFaq data={faqs} />}
    </main>
  );
}
