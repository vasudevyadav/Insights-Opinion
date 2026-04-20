import { notFound } from "next/navigation";
import { researchPages, type ResearchPageSlug } from "@/data/researchPages";
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
import Footer from "@/app/components/home/footer";
import HealthHero from "@/app/components/healthcare-research/health-hero";
import HealthUsecases from "@/app/components/healthcare-research/health-usecases ";

export default async function ResearchSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pageData = researchPages[slug as ResearchPageSlug];

  if (!pageData) {
    notFound();
  }

  return (
    <section>
      {pageData.hero && <HealthHero data={pageData.hero} />}
      {pageData.what && <HealthWhat data={pageData.what} />}
      {pageData.uses && <WhoUsesHealthcareResearch data={pageData.uses} />}
      {pageData.services && <HealthServices data={pageData.services} />}
      {pageData.panel && <HealthPanel data={pageData.panel} />}
      {pageData.methodologies && (
        <HealthcareMethodologies data={pageData.methodologies} />
      )}
      {pageData.usecases && <HealthUsecases data={pageData.usecases} />}
      {pageData.caseStudies && <CaseStudies data={pageData.caseStudies} />}
      {pageData.whyChoose && <WhyChooseHealth data={pageData.whyChoose} />}

      <HealthLeader />
      <TestimonialHealth />
      <CallbackFaqHealth />
      <BookDemoHealth />
     
    </section>
  );
}