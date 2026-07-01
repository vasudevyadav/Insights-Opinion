import type { Metadata } from "next";
import TeamGrowthForm from "@/app/components/our-team/team-growth-form";
import TestimonialsGallery from "@/app/components/testimonials/testimonials-gallery";
import TestimonialsHero from "@/app/components/testimonials/testimonials-hero";

export const metadata: Metadata = {
  title: "Client Testimonials | Insights Opinion",
  description:
    "Read and watch client testimonials about working with Insights Opinion.",
};

export default function TestimonialsPage() {
  return (
    <>
      <TestimonialsHero />
      <TestimonialsGallery />
      <TeamGrowthForm />
    </>
  );
}
