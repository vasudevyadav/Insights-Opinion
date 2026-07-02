import type { Metadata } from "next";
import TeamGrowthForm from "@/app/components/our-team/team-growth-form";
import TeamHero from "@/app/components/our-team/team-hero";
import TeamMembers from "@/app/components/our-team/team-members";
import TeamTestimonials from "@/app/components/our-team/team-testimonials";
import { fetchTeamMembers } from "@/app/lib/team-api";

export const metadata: Metadata = {
    title: "Our Team | Insights Opinion",
    description:
        "Meet the experienced market research and client services leaders at Insights Opinion.",
};

export default async function OurTeamPage() {
    const members = await fetchTeamMembers();

    return (
        <>
            <TeamHero />
            <TeamMembers members={members} />
            <TeamTestimonials />
            <TeamGrowthForm />
        </>
    );
}
 