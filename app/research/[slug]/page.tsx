import { notFound } from "next/navigation";

import HealthHero from "@/app/components/healthcare-research/health-hero";
import HealthWhat from "@/app/components/healthcare-research/health-what";
import WhoUsesHealthcareResearch from "@/app/components/healthcare-research/how-uses";
import HealthServices from "@/app/components/healthcare-research/health-services";
import HealthPanel from "@/app/components/healthcare-research/health-panels";
import HealthcareMethodologies from "@/app/components/healthcare-research/health-method";
import CaseStudies from "@/app/components/healthcare-research/case-studies";
import WhyChooseHealth from "@/app/components/healthcare-research/why-choose";
import HealthLeader from "@/app/components/healthcare-research/health-leader";
import TestimonialHealth from "@/app/components/healthcare-research/testimonial-health";
import CallbackFaqHealth from "@/app/components/healthcare-research/call-back-faq";
import BookDemoHealth from "@/app/components/healthcare-research/book-demo";
import HealthUsecases from "@/app/components/healthcare-research/health-usecases ";
import { researchPages, ResearchPageSlug } from "@/data/researchPages";

export default async function ResearchSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageData = researchPages[slug as ResearchPageSlug] ?? null;

  if (!pageData) notFound();

  return (
    <section>
      {pageData.hero && <HealthHero data={pageData.hero} />}

      {pageData.what?.cards?.length > 0 && <HealthWhat data={pageData.what} />}

      {pageData.uses?.items?.length > 0 && (
        <WhoUsesHealthcareResearch data={pageData.uses} />
      )}

      {pageData.services?.services?.length > 0 && (
        <HealthServices data={pageData.services} />
      )}

      {pageData.panel && <HealthPanel data={pageData.panel} />}

      {pageData.methodologies && (
        <HealthcareMethodologies data={pageData.methodologies} />
      )}

      {pageData.usecases?.useCases?.length > 0 && (
        <HealthUsecases data={pageData.usecases} />
      )}

      {pageData.caseStudies?.caseStudies?.length > 0 && (
        <CaseStudies data={pageData.caseStudies} />
      )}

      {pageData.whyChoose?.sections?.length > 0 && (
        <WhyChooseHealth data={pageData.whyChoose} />
      )}

      <HealthLeader />
      <TestimonialHealth />
      <CallbackFaqHealth />
      <BookDemoHealth />
    </section>
  );
}
