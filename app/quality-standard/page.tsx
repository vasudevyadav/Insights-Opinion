import QualityHero from "@/app/components/quality-standard/quality-hero";
import QualityMarketExcellence from "@/app/components/quality-standard/quality-market-excellence";
import QualityCompliance from "@/app/components/quality-standard/quality-compliance";
import QualityEthical from "@/app/components/quality-standard/quality-ethical";
import QualityTechnicalSecurity from "@/app/components/quality-standard/quality-technical-security";
import QualityProfessionalDev from "@/app/components/quality-standard/quality-professional-dev";
import QualityGlobalTransfer from "@/app/components/quality-standard/quality-global-transfer";
import QualityAffiliations from "@/app/components/quality-standard/quality-affiliations";
import QualityIndustryBanner from "@/app/components/quality-standard/quality-industry-banner";
import TestimonialNews from "@/app/components/home/testimonial-news";
import CallbackFaqSection from "@/app/components/home/call-back-faq";
import BookDemo from "@/app/components/home/book-demo";

export const metadata = {
    title: "Quality Standard | Insights Opinion",
    description:
        "Discover how Insights Opinion maintains the highest quality standards across research methodology, data protection, ethical practices, and operational security.",
};

export default function QualityStandardPage() {
    return (
        <main>
            <QualityHero />
            <QualityMarketExcellence />
            <QualityCompliance />
            <QualityEthical />
            <QualityTechnicalSecurity />
            <QualityProfessionalDev />
            <QualityGlobalTransfer />
            <QualityAffiliations />
            <QualityIndustryBanner />
            <CallbackFaqSection />
            <BookDemo />
        </main>
    );
}
