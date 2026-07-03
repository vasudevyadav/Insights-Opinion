import { NextRequest, NextResponse } from "next/server";
import { getServicesData } from "@/app/lib/services-data";

export function GET(request: NextRequest) {
  const mainServiceSlug = request.nextUrl.searchParams.get("main_service");
  const childServiceSlug = request.nextUrl.searchParams.get("child_service");
  const data = getServicesData({ mainServiceSlug, childServiceSlug });
  const hasFilters = Boolean(mainServiceSlug || childServiceSlug);

  if (hasFilters && data.length === 0) {
    return NextResponse.json(
      {
        success: false,
        message: "Requested service was not found.",
        count: 0,
        childCount: 0,
        data: [],
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    count: data.length,
    childCount: data.reduce(
      (total, service) => total + service.children.length,
      0
    ),
    data,
  });
}
