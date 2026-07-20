import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TeamGrowthForm from "@/app/components/our-team/team-growth-form";
import TeamHero from "@/app/components/our-team/team-hero";
import TeamMemberDetail from "@/app/components/our-team/team-member-detail";
import { fetchTeamMember, fetchTeamMembers } from "@/app/lib/team-api";
import { buildApiMetadata } from "@/lib/api-metadata";

type TeamDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const members = await fetchTeamMembers();
  return members.map((member) => ({ slug: member.slug }));
}

export async function generateMetadata({
  params,
}: TeamDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = await fetchTeamMember(slug);

  if (!member) {
    return { title: "Team Member | Insights Opinion" };
  }

  return buildApiMetadata(
    member.seo,
    {
      title: `${member.name} | Insights Opinion`,
      description: `Learn more about ${member.name}, ${member.role} at Insights Opinion.`,
      image: member.image,
    },
    `/our-team/${slug}`
  );
}

export default async function TeamDetailPage({
  params,
}: TeamDetailPageProps) {
  const { slug } = await params;
  const [member, members] = await Promise.all([
    fetchTeamMember(slug),
    fetchTeamMembers(),
  ]);

  const memberIndex = members.findIndex((item) => item.slug === slug);

  if (!member || memberIndex === -1) {
    notFound();
  }

  const previousMember =
    members[(memberIndex - 1 + members.length) % members.length];
  const nextMember = members[(memberIndex + 1) % members.length];

  return (
    <>
      <TeamHero />
      <div className="team-detail-bg quality-hex-bg overflow-hidden">
        <TeamMemberDetail
          member={member}
          previousMember={previousMember}
          nextMember={nextMember}
        />
        <TeamGrowthForm />
      </div>
    </>
  );
}
