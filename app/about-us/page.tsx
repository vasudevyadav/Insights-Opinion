import CallbackFaqHealth from "@/app/components/healthcare-research/call-back-faq";
import BookDemoHealth from "@/app/components/healthcare-research/book-demo";
import AboutHero from "../components/about-us/about-hero";
import WhoWeAre from "../components/about-us/who-are";
import Milestone from "../components/about-us/milestone";
import OurMission from "../components/about-us/our-mission";
import OurCoreValue from "../components/about-us/our-core-value";
import Award from "../components/about-us/award";
import OurSocial from "../components/about-us/our-social";
import PartnershipsAffiliations from "../components/about-us/partnerships-affiliations";


export default async function AboutUs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  return (
    <section>
      <AboutHero />
      <WhoWeAre />
      <Milestone />
      <OurMission />
      <OurCoreValue />
      <Award />
      <OurSocial />
      <PartnershipsAffiliations />
    </section>
  );
}