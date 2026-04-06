
import AccreditationsRecognitions from "./components/home/accreditations-recognitions";
import BookDemo from "./components/home/book-demo";
import BusinessChallenge from "./components/home/business-challenge";
import CallbackFaqSection from "./components/home/call-back-faq";
import CaseStudies from "./components/home/case-studies";
import CoreSolution from "./components/home/core-solution";
import EventHome from "./components/home/event-home";
import Footer from "./components/home/footer";
import HomeHero from "./components/home/hero-section";
import HomeIndustry from "./components/home/home-industry";
import IndustryLeader from "./components/home/industry-leader";
import TestimonialNews from "./components/home/testimonial-news";

export default function Home() {
  return (
    <section>
      <HomeHero />
      <IndustryLeader />
      <HomeIndustry />
      <BusinessChallenge />
      <CoreSolution />
      <CaseStudies />
      <AccreditationsRecognitions />
      <EventHome />
      <TestimonialNews />
      <CallbackFaqSection />
      <BookDemo />
      <Footer />
    </section>
  );
}