import { NextResponse } from "next/server";
import { getCaseStudyBySlug } from "@/app/lib/case-studies-data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return NextResponse.json({ success: false, data: null }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: caseStudy });
}
