import type { Metadata } from "next";
import TeamGrowthForm from "@/app/components/our-team/team-growth-form";
import TeamHero from "@/app/components/our-team/team-hero";
import TeamMembers from "@/app/components/our-team/team-members";
import TeamTestimonials from "@/app/components/our-team/team-testimonials";
import { fetchTeamMembers } from "@/app/lib/team-api";
import { getStaticMetadata } from "@/lib/static-seo";

export const metadata: Metadata = getStaticMetadata("about-us/leadership");

export default async function LeadershipPage() {
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
