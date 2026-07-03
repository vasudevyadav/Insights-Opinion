import { NextRequest, NextResponse } from "next/server";
import { getServices } from "@/app/lib/service-catalog";

export function GET(request: NextRequest) {
  const mainServiceSlug = request.nextUrl.searchParams.get("main_service");
  const services = getServices();
  const data = mainServiceSlug
    ? services.filter((service) => service.slug === mainServiceSlug)
    : services;

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
