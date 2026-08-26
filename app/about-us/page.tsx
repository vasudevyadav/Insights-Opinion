import type { Metadata } from "next";
import { getStaticMetadata } from "@/lib/static-seo";
import AboutHero from "../components/about-us/about-hero";
import WhoWeAre from "../components/about-us/who-are";
import Milestone from "../components/about-us/milestone";
import OurMission from "../components/about-us/our-mission";
import OurCoreValue from "../components/about-us/our-core-value";
import Award from "../components/about-us/award";
import OurSocial from "../components/about-us/our-social";
import PartnershipsAffiliations from "../components/about-us/partnerships-affiliations";
import TestimonialHealth from "../components/healthcare-research/testimonial-health";


export const metadata: Metadata = getStaticMetadata("about-us");

export default function AboutUs() {
  return (
    <section className="about-page">
      <AboutHero />
      <WhoWeAre />
      <Milestone />
      <OurMission />
      <OurCoreValue />
      <Award />
      <OurSocial />
      <PartnershipsAffiliations />
      <TestimonialHealth heading="What Our" accentHeading="Clients Say" />
    </section>
  );
}
