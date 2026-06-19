import QuantDetailsHero from "@/app/components/quantitative-research-method/quant-hero";
import QuantDetailsFaq from "@/app/components/quantitative-research-method/quant-faq";
import QuantDetailsWhyRadial from "@/app/components/quantitative-research-method/quant-why-radial";
import QuantDetailsMethods from "@/app/components/quantitative-research-method/quant-methods";
import QuantDetailsWhat from "@/app/components/quantitative-research-method/quant-what";
import QuantDetailsAbout from "@/app/components/quantitative-research-method/quant-about";
import QuantWhatOur from "@/app/components/quantitative-research-method/quant-what-our";

export default function MethodDetailPage() {
  return (
    <main>
      <QuantDetailsHero />
      <QuantDetailsAbout />
      <QuantDetailsWhat />
      <QuantWhatOur />
      <QuantDetailsMethods />
      <QuantDetailsWhyRadial />
      <QuantDetailsFaq />
    </main>
  );
}
