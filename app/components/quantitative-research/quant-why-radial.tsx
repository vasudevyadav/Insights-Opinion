"use client";
import Image from "next/image";

export default function QuantWhyRadial() {
  return (
    <section className="overflow-hidden bg-[#eaf5fc] py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-xl font-medium leading-tight lg:text-4xl">
            <span className="text-[#1e2746]">Why Choose </span>
            <span className="font-semibold text-[#1e2746]">Insights Opinion</span>
            <span className="text-[#1e2746]"> for</span>
            <br />
            <span className="font-semibold bg-linear-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
              Quantitative Research?
            </span>
          </h2>
        </div>
        {/* Desktop — infographic image */}
        <div className="relative hidden lg:block">
          <Image
            src="/quality/why-chose.png"
            alt="Why Choose Insights Opinion"
            width={2000}
            height={1000}
            unoptimized
            priority
            className="w-full h-auto"
          />
        </div>

        {/* Mobile / tablet fallback — pill cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
          {[
            { text: "One project manager from brief to delivery", green: false },
            { text: "Custom study design, built around your objectives, no templates", green: false },
            { text: "Online surveys, CATI, CAPI, and CLT under one partner", green: false },
            { text: "8M+ panellists across consumer, B2B, and healthcare", green: false },
            { text: "100+ countries, 60+ languages, verified fieldwork", green: false },
            { text: "Data quality controls through multi-layer validation into every study", green: false },
            { text: "Reporting Quality maintained through clear, actionable & presentation ready outputs", green: true },
            { text: "Timelines agreed upfront and met consistently", green: false },
            { text: "ISO 27001 and ISO 20252 certified", green: false },
            { text: "GDPR and CCPA-aligned across every market", green: false },
            { text: "ESOMAR and Insights Association members", green: false },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl px-4 py-3 text-center text-sm font-medium leading-snug text-white shadow-sm"
              style={{
                background: item.green
                  ? "linear-gradient(135deg,#2ecc8f 0%,#1aab7a 50%,#0e8f63 100%)"
                  : "linear-gradient(135deg,#5ab3f0 0%,#2f7de0 50%,#1a5fbf 100%)",
              }}
            >
              {item.text}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
