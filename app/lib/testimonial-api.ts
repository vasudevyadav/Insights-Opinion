import type { Testimonial } from "@/app/lib/testimonial-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

const BASE_URL = `${siteUrl}/api/testimonials`;

type TestimonialsListResponse = {
  success: boolean;
  count: number;
  data: Testimonial[];
};

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch(BASE_URL, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error(`Failed to fetch testimonials: ${res.status} ${res.statusText}`);
      return [];
    }

    const json: TestimonialsListResponse = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
}
