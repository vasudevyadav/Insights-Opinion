import Link from "next/link";

export default function FormPrivacyNote({ className = "" }: { className?: string }) {
  return (
    <p className={`text-[11px] leading-4 text-[#667085] ${className}`}>
      By submitting this form, you agree to our{" "}
      <Link href="/privacy-policy" className="underline hover:text-[#1a1f52]">
        Privacy Policy
      </Link>
      .
    </p>
  );
}
