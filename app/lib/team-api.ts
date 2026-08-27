import { API_BASE_URL, apiUrl } from "@/lib/api-config";
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

const FALLBACK_MEMBERS: TeamMember[] = [
  {
    slug: "shahab-ansari",
    name: "Shahab Ansari",
    role: "Founder & CEO",
    image: "/our-team/shahab.png",
    detailImage: "/our-team/team-member-detailks.png",
    description: [
      "Shahab leads Insights Opinion with a focus on reliable research, strong client partnerships, and sustainable global growth.",
    ],
  },
];

function stripHtml(value: string): string {
  return value
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .trim();
}

function parseDescription(raw: string): string[] {
  return raw
    .split(/\r?\n/)
    .map((line) => stripHtml(line).replace(/,+\s*$/, ""))
    .filter(Boolean);
}

function normalizeApiImage(value: string | undefined, fallback: string) {
  const image = value?.trim();
  if (!image) return fallback;
  if (/^https?:\/\//i.test(image)) return image;

  try {
    return new URL(image, API_BASE_URL).toString();
  } catch {
    return fallback;
  }
}

function normalizeTeamMember(raw: RawTeamMember): TeamMember {
  const image = normalizeApiImage(raw.image, "/our-team/shahab.png");
  const detailImage = normalizeApiImage(
    raw.detailImage,
    image
  );

  return {
    slug: raw.slug,
    name: raw.name,
    role: raw.role,
    image,
    detailImage,
    description: parseDescription(raw.description || ""),
    seo: raw.seo,
  };
}

export async function fetchTeamMembers(): Promise<TeamMember[]> {
  try {
    const res = await fetch(BASE_URL, { next: { revalidate: 1 } });

    if (!res.ok) {
      console.error(`Failed to fetch team members: ${res.status} ${res.statusText}`);
      return FALLBACK_MEMBERS;
    }

    const json: TeamMembersResponse = await res.json();
    const members = json.success ? json.data.map(normalizeTeamMember) : [];
    return members.length > 0 ? members : FALLBACK_MEMBERS;
  } catch (error) {
    console.error("Failed to fetch team members:", error);
    return FALLBACK_MEMBERS;
  }
}

export async function fetchTeamMember(slug: string): Promise<TeamMember | null> {
  const members = await fetchTeamMembers();
  return members.find((member) => member.slug === slug) ?? null;
}
