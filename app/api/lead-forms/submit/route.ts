import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.formName || !body?.name || !body?.email) {
    return NextResponse.json(
      { success: false, message: "formName, name and email are required." },
      { status: 400 }
    );
  }

  console.log("[lead-form submission]", body);

  return NextResponse.json({ success: true });
}
