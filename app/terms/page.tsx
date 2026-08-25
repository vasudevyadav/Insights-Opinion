import type { Metadata } from "next";
import LegalPage from "@/app/components/legal/legal-page";
import { getStaticMetadata } from "@/lib/static-seo";

export const metadata: Metadata = {
  ...getStaticMetadata("terms"),
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      intro="Approved Terms & Conditions content will be published here once supplied by the client."
      sections={[]}
    />
  );
}
