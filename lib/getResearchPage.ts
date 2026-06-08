// lib/getResearchPage.ts

export async function getResearchPage(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/custom/v1/research-expertises/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch research page data");
  }

  return res.json();
}