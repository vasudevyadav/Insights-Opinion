"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";

const services = [
  {
    step: "01",
    title: "Online Surveys (CAWI)",
    image: "/quality/cati-online.png",
    desc: "Self-administered web surveys across our 8M+ verified panel. Fast turnaround, rich media support, and multi-layer quality controls for nationally representative consumer and B2B data.",
    slug: "online-surveys",
  },
  {
    step: "02",
    title: "Computer-Assisted Telephone Interviewing (CATI)",
    image: "/quality/cati-telephone.png",
    desc: "Trained interviewers conduct structured phone interviews with real-time supervision. Ideal for B2B, healthcare, and audiences harder to reach through digital panels.",
    slug: "cati",
  },
  {
    step: "03",
    title: "Computer-Assisted Personal Interviewing (CAPI)",
    image: "/quality/cati-computer.png",
    desc: "Face-to-face field interviews using tablet-based data capture with GPS-verified quality controls. Best for in-home studies, physical product testing, and non-digital populations.",
    slug: "capi",
  },
  {
    step: "04",
    title: "Central Location Testing (CLT)",
    image: "/quality/cati-location.png",
    desc: "Controlled venue-based testing for products, concepts, and packaging. Enables direct side-by-side comparison under standardised conditions across all respondents.",
    slug: "clt",
  },
  {
    step: "05",
    title: "Data Analysis and Reporting",
    image: "/Data-Insights.jpg",
    desc: "In-house analysts deliver cross-tabulations, regression, factor analysis, and predictive modelling — with clear reports designed for confident stakeholder presentation.",
    slug: null,
  },
];

export default function QuantServicesAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
            <span className="bg-linear-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
              What Our Quantitative
            </span>
            <br />
            <span className="text-[#4a5568]">Research Services Include?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-[#4a5568]">
            Insights Opinion manages the full quantitative research project — from study design and
            data collection through to analysis and final reporting.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col">
          {services.map((s, i) => {
            const isActive = active === i;

            if (isActive) {
              return (
                <div
                  key={i}
                  className="my-1.5 flex flex-col gap-4 rounded-2xl bg-[#1b2f5e] p-5 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
                >
                  <div className="relative h-36 w-full shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-44">
                    <Image src={s.image} alt={s.title} fill unoptimized className="object-cover" />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1b2f5e]/50 to-transparent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-[#1dc3b3] sm:text-base">{s.title}</p>
                    <p className="mb-2 text-5xl font-black leading-none text-white sm:text-6xl">{s.step}</p>
                    <p className="text-sm leading-relaxed text-white/60">{s.desc}</p>
                    {s.slug && (
                      <Link
                        href={`/quantitative-research/methods/${s.slug}`}
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1dc3b3] hover:underline"
                      >
                        Learn more <ArrowRight size={11} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="flex items-center gap-4 border-b border-[#e8eff8] py-4 text-left last:border-b-0 transition hover:bg-[#f5faff] sm:gap-5"
              >
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl sm:h-24 sm:w-36">
                  <Image src={s.image} alt={s.title} fill unoptimized className="object-cover" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#1e2746] sm:text-base">{s.title}</p>
                  <p className="text-4xl font-black leading-none text-[#e8eef8] sm:text-5xl">{s.step}</p>
                </div>
                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#1dc3b3] px-3 py-2 text-[11px] font-bold uppercase tracking-wide text-white sm:px-5 sm:text-xs">
                  <Plus size={10} strokeWidth={3} /> Read More
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 border-t border-[#e5ecf4] pt-8 text-center">
          <p className="text-sm text-[#4a5568]">
            Want to know which method suits your study?
          </p>
          <Link
            href="#contact"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1dc3b3] hover:underline"
          >
            [Talk to Our Research Team] <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
