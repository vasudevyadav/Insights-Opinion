import ContactHero from "../components/contact-us/contact-hero";
import ContactForm from "../components/contact-us/contact-form";
import ContactLocation from "../components/contact-us/contact-location";


export default async function ContactUs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  return (
    <section>
      <ContactHero />
      <ContactForm />
      <ContactLocation />
    </section>
  );
}