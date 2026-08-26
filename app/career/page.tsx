import type { Metadata } from "next";
import { getStaticMetadata } from "@/lib/static-seo";
import CareerHero from "../components/career/career-hero";
import CareerValues from "../components/career/career-values";
import CareerLife from "../components/career/career-life";
import CareerPositions from "../components/career/career-positions";

export const metadata: Metadata = getStaticMetadata("career");

export default function CareerPage() {
  return (
    <>
      <CareerHero />
      <CareerValues />
      <CareerLife />
      <CareerPositions />
    </>
  );
}
