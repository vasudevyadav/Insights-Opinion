import QuantDetailsHero from "@/app/components/quantitative-research-method/quant-hero";
import QuantMethods from "@/app/components/quantitative-research/quant-methods";
import QuantMethodCta from "@/app/components/quantitative-research/quant-method-cta";
import BookDemoHealth from "@/app/components/healthcare-research/book-demo";

type CategoryKey = "qualitative" | "support";

const categoryContent = {
  qualitative: {
    hero: {
      title: "Qualitative Market\nResearch Services",
      subtitle: "Understand the Why\nBehind Every Decision",
      description:
        "Explore moderated and observation-led research methods that reveal customer motivations, experiences, perceptions, and unmet needs.",
    },
    intro:
      "Our qualitative research services help teams move beyond numbers and understand the context behind customer behaviour. Select a method below to explore its process, use cases, and detailed service capabilities.",
  },
  support: {
    hero: {
      title: "Research Support\nServices",
      subtitle: "Reliable Support from\nSetup to Delivery",
      description:
        "Strengthen every research project with dependable programming, translation, data processing, and insight support.",
    },
    intro:
      "Our research support services make studies easier to launch, manage, and deliver across markets. Select a service below to view its workflow, capabilities, and detailed delivery approach.",
  },
} as const;

export default function ServiceCategoryPage({
  category,
}: {
  category: CategoryKey;
}) {
  const content = categoryContent[category];

  return (
    <main>
      <QuantDetailsHero data={content.hero} />
      <section className="bg-[#edf6ff] px-5 py-10 text-center sm:px-6 lg:py-12">
        <p className="mx-auto max-w-4xl text-sm leading-7 text-[#4a5568] sm:text-base">
          {content.intro}
        </p>
      </section>
      <QuantMethods initialCategoryKey={category} />
      <QuantMethodCta />
      <BookDemoHealth />
    </main>
  );
}
