// Single shared submission contract for every lead-capture form on the site.
// Each form tags itself with a `formName` so the backend can tell which
// page/form a submission came from. Swap LEAD_FORM_ENDPOINT to the real
// backend URL (via NEXT_PUBLIC_LEAD_FORM_API_URL) once it exists.
export type LeadFormName =
  | "contact_us"
  | "case_studies_enquiry"
  | "industries_enquiry"
  | "team_growth"
  | "quality_standard"
  | "scroll_popup"
  | "home_callback"
  | "health_callback"
  | "local_callback"
  | "quant_callback"
  | "quant_method_callback"
  | "blog_enquiry"
  | "career_application"
  | "case_study_callback"
  | "local_boost"
  | "newsletter_subscription";

export type LeadFormPayload = {
  formName: LeadFormName;
  pageUrl: string;
  submittedAt: string;
  name: string;
  email: string;
  phone?: string;
  countryCode?: string;
  country?: string;
  enquiryType?: string;
  message?: string;
};

export type LeadFormInput = Omit<LeadFormPayload, "pageUrl" | "submittedAt">;

const LEAD_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_LEAD_FORM_API_URL || "/api/lead-forms/submit";

export async function submitLeadForm(input: LeadFormInput): Promise<void> {
  const payload: LeadFormPayload = {
    ...input,
    pageUrl: typeof window !== "undefined" ? window.location.pathname : "",
    submittedAt: new Date().toISOString(),
  };

  const res = await fetch(LEAD_FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok || data?.success === false) {
    throw new Error(data?.message || "Failed to submit form");
  }
}
