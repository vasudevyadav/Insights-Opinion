import { sharedTestimonials } from "@/data/testimonials";

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

export async function fetchTestimonials(): Promise<Testimonial[]> {
  return sharedTestimonials.map((testimonial) => ({
    id: testimonial.id,
    type: "text" as const,
    quote: testimonial.quote,
    name: testimonial.name,
    role: testimonial.role,
    company: "",
    personImage: testimonial.personImage,
  }));
}
