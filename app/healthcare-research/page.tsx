import HealthHero from "../components/healthcare-research/health-hero";
import HealthMethod from "../components/healthcare-research/health-method";
import HealthPanel from "../components/healthcare-research/health-panels";
import HealthServices from "../components/healthcare-research/health-services";
import HealthWhat from "../components/healthcare-research/health-what";
import HowUses from "../components/healthcare-research/how-uses";
import Footer from "../components/home/footer";


export default function Home() {
  return (
    <section>
      <HealthHero />
      <HealthWhat />
      <HowUses />
      <HealthServices />
      <HealthPanel />
      <HealthMethod />
      <Footer />
    </section>
  );
}