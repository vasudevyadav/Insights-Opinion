"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    image: "/quantitative-research-stops-ai-market-hallucinations.jpg",
    category: "Quantitative Research",
    date: "June 2026",
    title: "How Quantitative Research Stops AI Market Hallucinations",
    desc: "Discover how structured data from quantitative studies provides the grounding that AI models need to produce accurate market insights.",
    href: "#",
  },
  {
    image: "/strengthen-decision-making-with-qualitative-research-methods.jpg",
    category: "Research Methods",
    date: "May 2026",
    title: "Choosing Between CATI, CAWI and CLT for Your Next Study",
    desc: "Each quantitative method has strengths and constraints. We compare the three core approaches to help you choose the right one.",
    href: "#",
  },
  {
    image: "/Need-More-Reliable-Market-Data-.jpg",
    category: "Market Research",
    date: "April 2026",
    title: "Why Sample Size Still Matters in the Age of Big Data",
    desc: "Big data has changed a lot — but the principles of representative sampling and statistical significance remain as important as ever.",
    href: "#",
  },
];

export default function QuantNews() {
  return (
    <section className="relative overflow-hidden bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div>
            <h2 className="text-2xl font-light leading-tight text-[#2f3643] sm:text-4xl">
              Latest News &amp;
            </h2>
            <h3
              className="text-[28px] font-medium leading-tight text-transparent sm:text-[38px]"
              style={{
                background: "linear-gradient(90deg, #20b7a6 0%, #5da6f6 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Articles
            </h3>
          </div>
          <Link
            href="/blogs"
            className="hidden items-center gap-2 rounded-full border border-[#1b224f] px-5 py-2 text-sm font-medium text-[#1b224f] transition hover:bg-[#1b224f] hover:text-white sm:flex"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Link key={i} href={a.href} className="group block">
              <div className="overflow-hidden rounded-[18px] border border-[#e5ecf4] bg-white shadow-[0_4px_16px_rgba(37,99,235,0.06)] transition-all duration-300 group-hover:shadow-[0_8px_28px_rgba(37,99,235,0.14)]">
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#35d0c7] px-3 py-1 text-[11px] font-semibold text-white">
                    {a.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] text-[#9ba3af]">{a.date}</p>
                  <h3 className="mt-1.5 text-[15px] font-semibold leading-[1.4] text-[#1e2746] transition-colors group-hover:text-[#1687c9] sm:text-[16px]">
                    {a.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-[1.65] text-[#4a5568]">
                    {a.desc}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-[13px] font-medium text-[#1687c9]">
                    Read More <ArrowRight size={13} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 rounded-full border border-[#1b224f] px-6 py-2.5 text-sm font-medium text-[#1b224f] transition hover:bg-[#1b224f] hover:text-white"
          >
            View All Articles <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
