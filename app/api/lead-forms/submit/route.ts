import { NextResponse } from "next/server";

const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const RECAPTCHA_ACTION = "submit_lead";
const MIN_RECAPTCHA_SCORE = 0.5;

type RecaptchaResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body?.formName || !body?.name || !body?.email) {
    return NextResponse.json(
      { success: false, message: "formName, name and email are required." },
      { status: 400 }
    );
  }

  if (!body.recaptchaToken) {
    return NextResponse.json(
      { success: false, message: "reCAPTCHA verification is required." },
      { status: 400 }
    );
  }

  const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
  if (!recaptchaSecret) {
    console.error("RECAPTCHA_SECRET_KEY is not configured.");
    return NextResponse.json(
      { success: false, message: "Form verification is temporarily unavailable." },
      { status: 503 }
    );
  }

  const verificationBody = new URLSearchParams({
    secret: recaptchaSecret,
    response: body.recaptchaToken,
  });
  const verificationResponse = await fetch(RECAPTCHA_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: verificationBody,
    cache: "no-store",
  });
  const verification = (await verificationResponse.json()) as RecaptchaResponse;

  if (
    !verification.success ||
    verification.action !== RECAPTCHA_ACTION ||
    (verification.score ?? 0) < MIN_RECAPTCHA_SCORE
  ) {
    return NextResponse.json(
      { success: false, message: "reCAPTCHA verification failed. Please try again." },
      { status: 403 }
    );
  }

  const safeBody = { ...body };
  delete safeBody.recaptchaToken;
  console.log("[lead-form submission]", safeBody);

  return NextResponse.json({ success: true });
}
