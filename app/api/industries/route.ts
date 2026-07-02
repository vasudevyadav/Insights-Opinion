import { NextResponse } from "next/server";
import { industries } from "@/app/lib/industries-data";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: industries.length,
    data: industries,
  });
}
