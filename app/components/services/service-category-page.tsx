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
import QuantFaq from "@/app/components/quantitative-research/quant-faq";
import QuantNews from "@/app/components/quantitative-research/quant-news";
import BookDemoHealth from "@/app/components/healthcare-research/book-demo";
import {
  type ServicePageKey,
  type ServicePageContent,
} from "@/data/service-page-content";
import type { ServiceChild } from "@/app/lib/service-catalog";

export default function ServiceCategoryPage({
  category,
  content,
  services,
}: {
  category: ServicePageKey;
  content: ServicePageContent;
  services: ServiceChild[];
}) {
  return (
    <main>
      <QuantHero content={content.hero} />
      <QuantAbout content={content.about} />
      <QuantWhat content={content.what} />
      <QuantMethods
        initialCategoryKey={category}
        services={services}
      />
      <QuantMethodCta content={content.methodCta} />
      <QuantDataAnalysis content={content.analysis} />
      <QuantIndustries content={content.industries} />
      <QuantGlobalServices content={content.global} />
      <QuantWhyRadial content={content.whyRadial} />
      <QuantWhyChoose content={content.whyChoose} />
      <QuantFaq items={[...content.faqs]} />
      <QuantNews articles={[...content.articles]} />
      <BookDemoHealth />
    </main>
  );
}
