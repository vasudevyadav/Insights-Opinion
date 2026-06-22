"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { FaqItem } from "@/app/lib/method-data";

export default function QuantDetailsFaq({ data }: { data: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-16">

          <div>
            <h2 className="text-2xl font-bold leading-tight text-[#1e2746] sm:text-3xl lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#4a5568] lg:text-base">
              Can&apos;t find your answer? Speak to our research team directly.
            </p>
          </div>

          <div className="flex flex-col divide-y divide-[#e5ecf4]">
            {data.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className={`text-sm font-semibold leading-snug lg:text-base ${isOpen ? "text-[#1dc3b3]" : "text-[#1e2746]"}`}>
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
