import type { Metadata } from "next";
import TeamGrowthForm from "@/app/components/our-team/team-growth-form";
import TestimonialsGallery from "@/app/components/testimonials/testimonials-gallery";
import TestimonialsHero from "@/app/components/testimonials/testimonials-hero";
import { fetchTestimonials } from "@/app/lib/testimonial-api";

export const metadata: Metadata = {
  title: "Client Testimonials | Insights Opinion",
  description:
    "Read and watch client testimonials about working with Insights Opinion.",
};

export default async function TestimonialsPage() {
  const testimonials = await fetchTestimonials();

  return (
    <>
      <TestimonialsHero />
      <TestimonialsGallery testimonials={testimonials} />
      <TeamGrowthForm />
    </>
  );
}
