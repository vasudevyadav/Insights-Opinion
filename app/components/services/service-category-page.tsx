import QuantHero from "@/app/components/quantitative-research/quant-hero";
import QuantAbout from "@/app/components/quantitative-research/quant-about";
import QuantWhat from "@/app/components/quantitative-research/quant-what";
import QuantMethods from "@/app/components/quantitative-research/quant-methods";
import QuantMethodCta from "@/app/components/quantitative-research/quant-method-cta";
import QuantDataAnalysis from "@/app/components/quantitative-research/quant-data-analysis";
import QuantIndustries from "@/app/components/quantitative-research/quant-industries";
import QuantGlobalServices from "@/app/components/quantitative-research/quant-global-services";
import QuantWhyChoose from "@/app/components/quantitative-research/quant-why-choose";
import QuantFaq from "@/app/components/quantitative-research/quant-faq";
import QuantNews from "@/app/components/quantitative-research/quant-news";
import TestimonialHealth from "@/app/components/healthcare-research/testimonial-health";
import {
  type ServicePageKey,
  type ServicePageContent,
} from "@/data/service-page-content";
import type { ServiceChild } from "@/app/lib/service-catalog";
import type { Industry } from "@/app/lib/industries-data";

export default function ServiceCategoryPage({
  category,
  categoryTitle,
  content,
  services,
  industries,
}: {
  category: ServicePageKey;
  categoryTitle?: string;
  content: ServicePageContent;
  services: ServiceChild[];
  industries: Industry[];
}) {
  return (
    <main>
      <QuantHero content={content.hero} />
      <QuantAbout content={content.about} />
      <QuantWhat content={content.what} />
      {services.length > 0 && (
        <QuantMethods
          initialCategoryKey={category}
          categoryTitle={categoryTitle}
          content={content.methods}
          services={services}
        />
      )}
      <QuantMethodCta content={content.methodCta} />
      <QuantDataAnalysis content={content.analysis} category={category} />
      <QuantIndustries content={content.industries} industries={industries} />
      <QuantGlobalServices content={content.global} category={category} />
      <QuantWhyChoose
        content={content.whyChoose}
        sections={content.whyChooseSections}
      />
      <TestimonialHealth />
      <QuantNews articles={[...content.articles]} />
      <QuantFaq items={[...content.faqs]} />
    </main>
  );
}
