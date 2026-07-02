import { NextResponse } from "next/server";
import { caseStudies } from "@/app/lib/case-studies-data";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: caseStudies.length,
    data: caseStudies,
  });
}
