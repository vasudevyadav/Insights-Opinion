import type { Metadata } from "next";
import { notFound } from "next/navigation";

import HealthHero from "@/app/components/healthcare-research/health-hero";
import HealthWhat from "@/app/components/healthcare-research/health-what";
import WhoUsesHealthcareResearch from "@/app/components/healthcare-research/how-uses";
import HealthServices from "@/app/components/healthcare-research/health-services";
import HealthPanel from "@/app/components/healthcare-research/health-panels";
import HealthcareMethodologies from "@/app/components/healthcare-research/health-method";
import CaseStudies from "@/app/components/healthcare-research/case-studies";
import WhyChoose from "@/app/components/home/why-choose";
import HealthLeader from "@/app/components/healthcare-research/health-leader";
import TestimonialHealth from "@/app/components/healthcare-research/testimonial-health";
import CallbackFaqHealth from "@/app/components/healthcare-research/call-back-faq";
import BookDemoHealth from "@/app/components/healthcare-research/book-demo";
import HealthUsecases from "@/app/components/healthcare-research/health-usecases ";
import { getResearchPage } from "@/lib/getResearchPage";
import { buildApiMetadata } from "@/lib/api-metadata";
import HealthLeaderIndustry from "@/app/components/healthcare-research/health-leader-industry";

type ResearchPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ResearchPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = await getResearchPage(slug);

  if (!page) return {};

  const title = [page.hero?.titleLine1, page.hero?.titleLine2]
    .filter(Boolean)
    .join(" ");

  return buildApiMetadata(
    page.seo,
    {
      title: `${title || slug} | Insights Opinion`,
      description: page.hero?.description,
      image: page.hero?.backgroundImage,
    },
    `/research/${slug}`
  );
}

export default async function ResearchSlugPage({
  params,
}: ResearchPageProps) {
  const { slug } = await params;
  const pageData = await getResearchPage(slug);

  if (!pageData) notFound();

  const faqSection = pageData.faqSection
    ? {
        ...pageData.faqSection,
        faqs: (pageData.faqSection.faqs ?? []).filter(
          (faq) => faq.question?.trim() && faq.answer?.trim()
        ),
      }
    : null;

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
      {pageData.consumerResearchSection && (
        <HealthLeaderIndustry data={pageData.consumerResearchSection} />
      )}

      {pageData.caseStudies?.caseStudies?.length > 0 && (
        <CaseStudies data={pageData.caseStudies} />
      )}

      <WhyChoose />

      <HealthLeader />
      <TestimonialHealth />
      {!!faqSection?.faqs.length && <CallbackFaqHealth data={faqSection} />}
      <BookDemoHealth />
    </section>
  );
}
