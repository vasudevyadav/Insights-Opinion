import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TeamGrowthForm from "@/app/components/our-team/team-growth-form";
import TeamHero from "@/app/components/our-team/team-hero";
import TeamMemberDetail from "@/app/components/our-team/team-member-detail";
import { getTeamMember, teamMembers } from "@/app/lib/team-data";

type TeamDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: TeamDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    return { title: "Team Member | Insights Opinion" };
  }

  return {
    title: `${member.name} | Insights Opinion`,
    description: `Learn more about ${member.name}, ${member.role} at Insights Opinion.`,
  };
}

export default async function TeamDetailPage({
  params,
}: TeamDetailPageProps) {
  const { slug } = await params;
  const memberIndex = teamMembers.findIndex((item) => item.slug === slug);

  if (memberIndex === -1) {
    notFound();
  }

  const member = teamMembers[memberIndex];
  const previousMember =
    teamMembers[(memberIndex - 1 + teamMembers.length) % teamMembers.length];
  const nextMember = teamMembers[(memberIndex + 1) % teamMembers.length];

  return (
    <>
      <TeamHero />
      <TeamMemberDetail
        member={member}
        previousMember={previousMember}
        nextMember={nextMember}
      />
      <TeamGrowthForm />
    </>
  );
}
