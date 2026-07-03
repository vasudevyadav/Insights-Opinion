import { apiUrl } from "@/lib/api-config";
import type { ApiSeo } from "@/lib/api-metadata";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  detailImage: string;
  description: string[];
  seo?: ApiSeo;
};

type RawTeamMember = {
  slug: string;
  name: string;
  role: string;
  image: string;
  detailImage: string;
  description: string;
  seo?: ApiSeo;
};

type TeamMembersResponse = {
  success: boolean;
  data: RawTeamMember[];
};

const BASE_URL = apiUrl("/custom/v1/our-teams");

function parseDescription(raw: string): string[] {
  return raw
    .split(/\r?\n/)
    .map((line) => line.trim().replace(/,+\s*$/, ""))
    .filter(Boolean);
}

function normalizeTeamMember(raw: RawTeamMember): TeamMember {
  return {
    slug: raw.slug,
    name: raw.name,
    role: raw.role,
    image: raw.image,
    detailImage: raw.detailImage,
    description: parseDescription(raw.description),
    seo: raw.seo,
  };
}

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  try {
    const res = await fetch(BASE_URL, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error(`Failed to fetch team members: ${res.status} ${res.statusText}`);
      return [];
    }

    const json: TeamMembersResponse = await res.json();
    return json.success ? json.data.map(normalizeTeamMember) : [];
  } catch (error) {
    console.error("Failed to fetch team members:", error);
    return [];
  }
}

export async function fetchTeamMember(slug: string): Promise<TeamMember | null> {
  const members = await fetchTeamMembers();
  return members.find((member) => member.slug === slug) ?? null;
}
