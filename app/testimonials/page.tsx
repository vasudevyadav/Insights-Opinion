import type { Metadata } from "next";
import TestimonialsGallery from "@/app/components/testimonials/testimonials-gallery";
import TestimonialsHero from "@/app/components/testimonials/testimonials-hero";
import { fetchTestimonials } from "@/app/lib/testimonial-api";
import { getStaticMetadata } from "@/lib/static-seo";

export const metadata: Metadata = getStaticMetadata("testimonials");

export default async function TestimonialsPage() {
  const testimonials = await fetchTestimonials();

  return (
    <>
      <TestimonialsHero />
      <TestimonialsGallery testimonials={testimonials} />
    </>
  );
}
