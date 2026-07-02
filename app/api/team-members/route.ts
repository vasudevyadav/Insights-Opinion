import { NextResponse } from "next/server";
import { teamMembers } from "@/app/lib/team-data";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: teamMembers.length,
    data: teamMembers,
  });
}
