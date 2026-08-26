import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardCheck,
  PhoneCall,
  FileSearch,
  ArrowRight,
} from "lucide-react";
import BackgroundShape from "@/app/components/about-us/background-shape";

export const metadata: Metadata = {
  title: "Thank You | Insights Opinion",
  description:
    "Thank you for reaching out to Insights Opinion. Our team will review your submission and get back to you shortly.",
  robots: { index: false, follow: false },
};

const nextSteps = [
  {
    icon: ClipboardCheck,
    title: "We review your details",
    description:
      "Your submission is routed to the right team so nothing gets missed.",
  },
  {
    icon: PhoneCall,
    title: "We reach out to you",
    description:
      "Expect a call or email from our team within 1-2 business days.",
  },
  {
    icon: FileSearch,
    title: "We scope your requirement",
    description:
      "We'll understand your goals and recommend the right research approach.",
  },
];

export default function ThankYouPage() {
  return (
    <section className="relative overflow-hidden bg-[#edf6ff] py-16 sm:py-20 lg:py-24">
      <BackgroundShape side="right" variant={2} className="-right-20 -top-14 w-[310px] opacity-45 sm:w-[440px] lg:w-[520px]" />
      <BackgroundShape side="left" variant={1} className="-left-24 bottom-0 w-[340px] opacity-40 sm:w-[470px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">

        <h1 className="mt-6 bg-gradient-to-r from-[#29c3b1] to-[#5aaeff] bg-clip-text text-2xl font-semibold text-transparent lg:text-[44px]">
          Thank You!
        </h1>

        <p className="mx-auto mt-2 max-w-2xl text-sm text-[#4b5563] sm:text-base">
          Your submission has been received successfully. Here&apos;s what
          happens next.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 text-left sm:grid-cols-3 sm:gap-6">
          {nextSteps.map(({ icon: Icon, title, description }, index) => (
            <div
              key={title}
              className="relative rounded-2xl border border-[#d9e9f7] bg-white/80 p-5 shadow-[0_10px_30px_rgba(72,162,210,0.1)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#43d1c5] to-[#58a9ff] text-white">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-[#59a9ee]">
                Step {index + 1}
              </p>
              <h3 className="mt-1 text-sm font-semibold text-[#18213f] sm:text-base">
                {title}
              </h3>
              <p className="mt-1.5 text-xs text-[#4b5563] sm:text-sm">
                {description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#43d1c5] to-[#58a9ff] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 active:scale-[0.98] sm:px-7"
          >
            Back to Home
          </Link>
          <Link
            href="/service"
            className="inline-flex items-center justify-center gap-1.5 rounded-md border border-[#59a9ee] px-6 py-3 text-sm font-medium text-[#18213f] transition hover:bg-white sm:px-7"
          >
            Explore Our Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
