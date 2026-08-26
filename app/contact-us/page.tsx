import type { Metadata } from "next";
import { getStaticMetadata } from "@/lib/static-seo";
import ContactHero from "../components/contact-us/contact-hero";
import ContactForm from "../components/contact-us/contact-form";
import ContactLocation from "../components/contact-us/contact-location";

export const metadata: Metadata = getStaticMetadata("contact-us");

export default function ContactUs() {
  return (
    <section>
      <ContactHero />
      <ContactForm />
      <ContactLocation />
    </section>
  );
}
