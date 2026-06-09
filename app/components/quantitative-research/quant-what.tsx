"use client";

import Image from "next/image";

const bottomCards = [
{
icon: (
<svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
  <rect x="3" y="18" width="5" height="10" rx="1.5" fill="white" />
  <rect x="11" y="12" width="5" height="16" rx="1.5" fill="white" />
  <rect x="19" y="7" width="5" height="21" rx="1.5" fill="white" />
  <path d="M3 6 L13 2 L20 8 L29 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>
),
text: "Measure how customers feel about your product or brand across a large sample",
},
{
icon: (
<svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
  <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2" />
  <path d="M16 8 L16 16 L22 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  <circle cx="25" cy="7" r="3" fill="white" />
</svg>
),
text: "Track changes in satisfaction awareness, or preference over time",
},
{
icon: (
<svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
  <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2" />
  <path d="M10 16 L14 20 L22 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M16 4 L16 8 M28 16 L24 16 M16 28 L16 24 M4 16 L8 16" stroke="white" strokeWidth="1.5"
    strokeLinecap="round" />
</svg>
),
text: "Validate a new product, concept, or pricing decision with real data",
},
{
icon: (
<svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
  <path d="M4 28 L14 18 L20 24 L28 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  <rect x="2" y="26" width="28" height="2" rx="1" fill="white" opacity="0.4" />
</svg>
),
text: "Size a market or estimate demand before entering a new segment",
},
{
icon: (
<svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
  <path d="M6 16 H10 L14 6 L18 26 L22 16 H26" stroke="white" strokeWidth="2.5" strokeLinecap="round"
    strokeLinejoin="round" />
</svg>
),
text: "Compare results across different regions, demographics, or audience groups",
},
];

export default function QuantWhat() {
return (
<section className="relative overflow-hidden bg-[#f0f7ff] py-10 lg:py-14">
  <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
    {/* Top row: heading left + quant-about image right */}
    <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10">
      {/* Left: heading + description */}
      <div className="w-full max-w-[460px] shrink-0">
        <h2 className="text-2xl font-bold leading-[1.2] lg:text-5xl">
          <span className="bg-gradient-to-r from-[#1dc3b3] to-[#4faee8] bg-clip-text text-transparent">
            What Quantitative
            <br />
            Market Research
          </span>
          <br />
          <span className="text-[#1e2746] font-normal text-4xl">does for Your Business?</span>
        </h2>
        <p className="mt-5 text-sm leading-[1.8] text-[#4a5568] lg:text-lg">
          Quantitative market research collects structured, numerical data from defined audiences. It
          gives you findings you can measure, compare, and act on with confidence.
        </p>
      </div>

      {/* Right: quant-about.png */}
      <div className="relative flex w-full flex-1 items-center justify-center">
        <div className="relative w-full">
          <Image src="/quality/quant-about.png" alt="Quantitative Market Research Analytics" width={1500} height={1000}
            className="h-auto w-full object-contain" priority />
        </div>
      </div>
    </div>

    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:mt-16 lg:grid-cols-5">
      {bottomCards.map((card, i) => (
      <div key={i} className="relative">
        {/* Card */}
        <div className="
          relative min-h-[140px]
          bg-gradient-to-r from-[#1dc3b3] to-[#48b6dc]
          rounded-tl-[12px]
          rounded-bl-[12px]
          rounded-br-[12px]
          rounded-tr-[24px]
          p-5
          shadow-lg
          flex items-center
        ">
          {/* Icon Box */}
          <div className="
            absolute
            -top-4
            right-0
            flex
            h-[52px]
            w-[52px]
            items-center
            justify-center
            rounded-[8px]
            bg-[#57bde7]
            shadow-md
          ">
            {card.icon}
          </div>

          {/* Text */}
          <p className=" pr-4 text-[14px] font-medium leading-[1.7] text-white line-clamp-4">
            {card.text}
          </p>
        </div>
      </div>
      ))}
    </div>
  </div>
</section>
);
}