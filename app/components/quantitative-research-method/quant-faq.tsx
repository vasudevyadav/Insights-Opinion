"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What is quantitative market research?",
    a: "Quantitative market research collects structured, numerical data from defined audiences using methods like online surveys, CATI, CAPI, or CLT. It gives you statistically reliable findings you can measure, compare, and act on with confidence.",
  },
  {
    q: "What is the difference between quantitative and qualitative research?",
    a: "Quantitative research focuses on measurable data — percentages, frequencies, and scores — from large representative samples. Qualitative research explores motivations and attitudes in smaller groups. Many studies combine both to achieve breadth and depth.",
  },
  {
    q: "How long does a quantitative research project take?",
    a: "Timelines vary by method and study complexity. Online surveys typically complete fieldwork in 2–5 days. CATI and CAPI projects generally take 2–4 weeks. CLT studies average 3–5 weeks from briefing to final report delivery.",
  },
  {
    q: "How large should a quantitative research sample be?",
    a: "Sample size depends on your target population, the number of subgroups you need to analyse, and the acceptable margin of error. Most consumer studies use 500–1000 respondents per market. B2B studies often use smaller samples of 100–300 due to narrower target audiences.",
  },
  {
    q: "Can Insights Opinion run quantitative research in multiple countries simultaneously?",
    a: "Yes. We run multi-country quantitative research programmes across 100+ countries in 60+ languages — with simultaneous fieldwork, centralised project management, and consistent protocols across all markets.",
  },
  {
    q: "What data formats does Insights Opinion deliver?",
    a: "We deliver clean data in SPSS, Excel, CSV, or your preferred BI format — alongside cross-tabulations, significance testing, and executive insight reports designed for confident stakeholder presentation.",
  },
];

export default function QuantDetailsFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">

          {/* Left */}
          <div>
            <h2 className="text-2xl font-bold leading-tight text-[#1e2746] sm:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4a5568] lg:text-base">
              Can&apos;t find your answer? Speak to our research team directly.
            </p>
          </div>

          {/* Right — accordion */}
          <div className="flex flex-col divide-y divide-[#e5ecf4]">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <span
                      className={`text-sm font-semibold leading-snug lg:text-base ${isOpen ? "text-[#1dc3b3]" : "text-[#1e2746]"
                        }`}
                    >
                      {faq.q}
                    </span>
                    <span className="mt-0.5 shrink-0 text-[#1dc3b3]">
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm leading-relaxed text-[#4a5568] lg:text-base">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
