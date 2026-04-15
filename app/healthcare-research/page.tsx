import BookDemoHealth from "../components/healthcare-research/book-demo";
import CallbackFaqHealth from "../components/healthcare-research/call-back-faq";
import CaseStudies from "../components/healthcare-research/case-studies";
import HealthHero from "../components/healthcare-research/health-hero";
import HealthLeader from "../components/healthcare-research/health-leader";
import HealthcareMethodologies from "../components/healthcare-research/health-method";
import HealthMethod from "../components/healthcare-research/health-method";
import HealthPanel from "../components/healthcare-research/health-panels";
import HealthServices from "../components/healthcare-research/health-services";
import HealthUsecases from "../components/healthcare-research/health-usecases ";
import HealthWhat from "../components/healthcare-research/health-what";
import HowUses from "../components/healthcare-research/how-uses";
import TestimonialHealth from "../components/healthcare-research/testimonial-health";
import WhyChooseHealth from "../components/healthcare-research/why-choose";
import Footer from "../components/home/footer";


export default function Home() {
  return (
    <section>
      <HealthHero />
      <HealthWhat />
      <HowUses />
      <HealthServices />
      <HealthPanel />
      <HealthcareMethodologies />
      <HealthUsecases />
      <CaseStudies />
      <WhyChooseHealth />
      <HealthLeader />
      <TestimonialHealth />
      <CallbackFaqHealth />
      <BookDemoHealth />
      <Footer />
    </section>
  );
}