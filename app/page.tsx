
import BusinessChallenge from "./components/home/business-challenge";
import CoreSolution from "./components/home/core-solution";
import HomeHero from "./components/home/hero-section";
import HomeIndustry from "./components/home/home-industry";
import IndustryLeader from "./components/home/industry-leader";

export default function Home() {
  return (
    <section>
      <HomeHero />
      <IndustryLeader />
      <HomeIndustry />
      <BusinessChallenge />
      <CoreSolution />
    </section>
  );
}