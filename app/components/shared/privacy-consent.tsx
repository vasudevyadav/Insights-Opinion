import Link from "next/link";

export default function PrivacyConsent({ dark = false }: { dark?: boolean }) {
  return (
    <p className={`mt-2 text-xs leading-5 ${dark ? "text-white/75" : "text-[#596176]"}`}>
      By submitting this form, you agree to our{" "}
      <Link href="/privacy-policy" className="font-semibold underline underline-offset-2">
        Privacy Policy
      </Link>.
    </p>
  );
}
