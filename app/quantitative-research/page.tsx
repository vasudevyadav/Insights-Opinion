import QuantHero from "@/app/components/quantitative-research/quant-hero";
import QuantAbout from "@/app/components/quantitative-research/quant-about";
import QuantWhat from "@/app/components/quantitative-research/quant-what";
import QuantMethods from "@/app/components/quantitative-research/quant-methods";
import QuantMethodCta from "@/app/components/quantitative-research/quant-method-cta";
import QuantDataAnalysis from "@/app/components/quantitative-research/quant-data-analysis";
import QuantIndustries from "@/app/components/quantitative-research/quant-industries";
import QuantGlobalServices from "@/app/components/quantitative-research/quant-global-services";
import QuantWhyRadial from "@/app/components/quantitative-research/quant-why-radial";
import QuantWhyChoose from "@/app/components/quantitative-research/quant-why-choose";
import QuantNews from "@/app/components/quantitative-research/quant-news";
import BookDemoHealth from "@/app/components/healthcare-research/book-demo";
import QuantFaq from "@/app/components/quantitative-research/quant-faq";

export default function QuantitativeResearchPage() {
  return (
    <main>
      <QuantHero />
      <QuantAbout />
      <QuantWhat />
      <QuantMethods />
      <QuantMethodCta />
      <QuantDataAnalysis />
      <QuantIndustries />
      <QuantGlobalServices />
      <QuantWhyRadial />
      <QuantWhyChoose />
      <QuantFaq />
      <QuantNews />
      <BookDemoHealth />
    </main>
  );
}
