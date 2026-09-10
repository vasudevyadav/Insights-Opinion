import type { Metadata } from "next";
import LegalPage, {
  type LegalSection,
} from "@/app/components/legal/legal-page";
import { getStaticMetadata } from "@/lib/static-seo";

export const metadata: Metadata = getStaticMetadata("terms-and-conditions");

// NOTE: Placeholder content only. Insights Opinion has agreed to supply the
// final Terms & Conditions copy — replace the sections below with the
// client-approved text before launch. This page exists so /terms and
// /terms-and-conditions resolve instead of 404ing.
const sections: LegalSection[] = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "Content pending — final Terms & Conditions copy to be supplied by the client.",
    ],
  },
  {
    title: "Use of This Website",
    paragraphs: [
      "Content pending — final Terms & Conditions copy to be supplied by the client.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "Content pending — final Terms & Conditions copy to be supplied by the client.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "Content pending — final Terms & Conditions copy to be supplied by the client.",
    ],
  },
  {
    title: "Governing Law",
    paragraphs: [
      "Content pending — final Terms & Conditions copy to be supplied by the client.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "Content pending — final Terms & Conditions copy to be supplied by the client.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="These Terms & Conditions govern your use of the Insights Opinion website. Final copy is pending client approval."
      sections={sections}
    />
  );
}
