import QualityHero from "@/app/components/quality-standard/quality-hero";
import QualityMarketExcellence from "@/app/components/quality-standard/quality-market-excellence";
import QualityCompliance from "@/app/components/quality-standard/quality-compliance";
import QualityEthical from "@/app/components/quality-standard/quality-ethical";
import QualityTechnicalSecurity from "@/app/components/quality-standard/quality-technical-security";
import QualityGlobalTransfer from "@/app/components/quality-standard/quality-global-transfer";
import QualityIndustryBanner from "@/app/components/quality-standard/quality-industry-banner";
import QualityNewsTestimonials from "@/app/components/quality-standard/quality-news-testimonials";
import QualityGrowForm from "@/app/components/quality-standard/quality-grow-form";
import QualityCallbackTab from "@/app/components/quality-standard/quality-callback-tab";

export const metadata = {
    title: "Quality Standard | Insights Opinion",
    description:
        "Discover how Insights Opinion maintains the highest quality standards across research methodology, data protection, ethical practices, and operational security.",
};

export default function QualityStandardPage() {
    return (
        <main>
            <QualityCallbackTab />
            <QualityHero />
            <QualityMarketExcellence />
            <QualityCompliance />
            <QualityEthical />
            <QualityTechnicalSecurity />
            <QualityGlobalTransfer />
            <QualityIndustryBanner />
            <QualityNewsTestimonials />
            <QualityGrowForm />
        </main>
    );
}
