import { NextResponse } from "next/server";
import { getTeamMember } from "@/app/lib/team-data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const member = getTeamMember(slug);

  if (!member) {
    return NextResponse.json({ success: false, data: null }, { status: 404 });
  }

  return NextResponse.json({ success: true, data: member });
}
