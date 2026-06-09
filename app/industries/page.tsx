import IndustriesHero from "../components/industries/industries-hero";
import IndustriesGlobal from "../components/industries/industries-global ";
import IndustriesForm from "../components/industries/industries-form";


export default async function Industries({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  return (
    <section>
      <IndustriesHero />
      <IndustriesGlobal />
      <IndustriesForm />
    </section>
  );
}