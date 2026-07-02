import type { TeamMember } from "@/app/lib/team-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

const BASE_URL = `${siteUrl}/api/team-members`;

type TeamMembersListResponse = {
  success: boolean;
  count: number;
  data: TeamMember[];
};

type TeamMemberResponse = {
  success: boolean;
  data: TeamMember | null;
};

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  try {
    const res = await fetch(BASE_URL, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error(`Failed to fetch team members: ${res.status} ${res.statusText}`);
      return [];
    }

    const json: TeamMembersListResponse = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error("Failed to fetch team members:", error);
    return [];
  }
}

export async function fetchTeamMember(slug: string): Promise<TeamMember | null> {
  try {
    const res = await fetch(`${BASE_URL}/${slug}`, { next: { revalidate: 60 } });

    if (!res.ok) {
      if (res.status !== 404) {
        console.error(`Failed to fetch team member: ${res.status} ${res.statusText}`);
      }
      return null;
    }

    const json: TeamMemberResponse = await res.json();
    return json.success ? json.data : null;
  } catch (error) {
    console.error("Failed to fetch team member:", error);
    return null;
  }
}
