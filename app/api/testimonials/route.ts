import { NextResponse } from "next/server";
import { testimonials } from "@/app/lib/testimonial-data";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: testimonials.length,
    data: testimonials,
  });
}
