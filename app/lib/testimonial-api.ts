export type TextTestimonial = {
  id: number;
  type: "text";
  quote: string;
  name: string;
  role: string;
  company: string;
  personImage: string;
};

export type VideoTestimonial = {
  id: number;
  type: "video";
  title: string;
  name: string;
  role: string;
  company: string;
  poster: string;
  personImage: string;
  videoUrl?: string;
};

export type Testimonial = TextTestimonial | VideoTestimonial;

type TestimonialsResponse = {
  success: boolean;
  data: Testimonial[];
};

const BASE_URL =
  "https://reinventmedia.in/insightOpinion/wp-json/custom/v1/testimonials";

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const res = await fetch(BASE_URL, { next: { revalidate: 60 } });

    if (!res.ok) {
      console.error(`Failed to fetch testimonials: ${res.status} ${res.statusText}`);
      return [];
    }

    const json: TestimonialsResponse = await res.json();
    return json.success ? json.data : [];
  } catch (error) {
    console.error("Failed to fetch testimonials:", error);
    return [];
  }
}
