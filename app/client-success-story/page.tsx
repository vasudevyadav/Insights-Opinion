import type { Metadata } from "next";
import TeamGrowthForm from "@/app/components/our-team/team-growth-form";
import TestimonialsGallery from "@/app/components/testimonials/testimonials-gallery";
import TestimonialsHero from "@/app/components/testimonials/testimonials-hero";
import { fetchTestimonials } from "@/app/lib/testimonial-api";
import { getStaticMetadata } from "@/lib/static-seo";

export const metadata: Metadata = getStaticMetadata("testimonials");

export default async function ClientSuccessStory() {
  const testimonials = await fetchTestimonials();

  return (
    <>
      <TestimonialsHero />
      <TestimonialsGallery testimonials={testimonials} />
      <TeamGrowthForm />
    </>
  );
}
