"use client";

import Image from "next/image";

const leftFeatures = [
  "One project manager from brief to delivery",
  "Custom study design, built around your objectives, no templates",
  "Online surveys, CATI, CAPI, and CLT under one partner",
  "8M+ panellists across consumer, B2B, and healthcare",
  "100+ countries, 60+ languages, verified fieldwork",
  "Data quality controls through multi-layer validation into every study",
];

const rightFeatures = [
  "Reporting Quality maintained through clear, actionable & presentation ready outputs",
  "Timelines agreed upfront and met consistently",
  "ISO 27001 and ISO 20252 certified",
  "GDPR and CCPA-aligned across every market",
  "ESOMAR and Insights Association members",
];

// SVG percentage coords (viewBox="0 0 100 100", preserveAspectRatio="none")
// Container height: 660px. justify-around distributes centers evenly.
// Left (6 boxes): 660/7 * [1,2,3,4,5,6] → [94,189,283,377,471,566]px → as %: [14,29,43,57,71,86]
// Right (5 boxes): 660/6 * [1,2,3,4,5] → [110,220,330,440,550]px → as %: [17,33,50,67,83]
const leftYs  = [14, 29, 43, 57, 71, 86];
const rightYs = [17, 33, 50, 67, 83];

export default function QuantWhyRadial() {
  return (
    <section className="relative overflow-hidden bg-[#edf6ff] py-12 lg:py-16">
      {/* Hex pattern background */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <svg
          className="h-full w-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="hexGradRadial" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CFEAF7" />
              <stop offset="1" stopColor="#EAF6FB" />
            </linearGradient>
          </defs>
          {Array.from({ length: 11 }).map((_, row) =>
            Array.from({ length: 14 }).map((_, col) => {
              const x = col * 62 + (row % 2 ? 31 : 0);
              const y = row * 54;
              return (
                <polygon
                  key={`${row}-${col}`}
                  points={`${x + 15},${y} ${x + 45},${y} ${x + 60},${y + 26} ${x + 45},${y + 52} ${x + 15},${y + 52} ${x},${y + 26}`}
                  stroke="url(#hexGradRadial)"
                  strokeWidth="1.2"
                  fill="none"
                />
              );
            })
          )}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-[24px] font-semibold leading-[1.2] sm:text-[32px] lg:text-[40px]">
            <span className="text-[#1e2746]">Why Choose </span>
            <span className="font-bold text-[#1e2746]">Insights Opinion</span>
            <span className="text-[#1e2746]"> for</span>
            <br />
            <span className="bg-gradient-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
              Quantitative Research?
            </span>
          </h2>
        </div>

        {/* ── Desktop radial layout ── */}
        <div className="relative hidden h-[660px] lg:block">

          {/* SVG connecting lines (preserveAspectRatio="none" maps 0-100 → CSS %) */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Left box → center lines */}
            {leftYs.map((y, i) => (
              <line
                key={`ll${i}`}
                x1="22" y1={y}
                x2="50" y2="50"
                stroke="#35d0c7"
                strokeWidth="0.18"
                opacity="0.45"
                strokeDasharray="0.6 0.3"
              />
            ))}
            {/* Right box → center lines */}
            {rightYs.map((y, i) => (
              <line
                key={`rl${i}`}
                x1="78" y1={y}
                x2="50" y2="50"
                stroke="#35d0c7"
                strokeWidth="0.18"
                opacity="0.45"
                strokeDasharray="0.6 0.3"
              />
            ))}
            {/* Dots at left-box connection points */}
            {leftYs.map((y, i) => (
              <circle key={`ld${i}`} cx="22" cy={y} r="0.55" fill="#35d0c7" opacity="0.7" />
            ))}
            {/* Dots at right-box connection points */}
            {rightYs.map((y, i) => (
              <circle key={`rd${i}`} cx="78" cy={y} r="0.55" fill="#35d0c7" opacity="0.7" />
            ))}
          </svg>

          {/* Left feature boxes — dark teal */}
          <div className="absolute left-0 top-0 flex h-full w-[22%] flex-col justify-around">
            {leftFeatures.map((f, i) => (
              <div
                key={i}
                className="rounded-[10px] bg-[#1b3a5c] px-3 py-2.5 text-center text-[11px] font-medium leading-[1.4] text-white shadow-md"
              >
                {f}
              </div>
            ))}
          </div>

          {/* Center circle with image */}
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-[150px] w-[150px] overflow-hidden rounded-full border-4 border-[#35d0c7]/35 shadow-[0_8px_40px_rgba(53,208,199,0.25)]">
              <Image
                src="/Data-Insights.jpg"
                alt="Why Choose Insights Opinion"
                fill
                unoptimized
                className="object-cover"
              />
            </div>
          </div>

          {/* Right feature boxes — light blue */}
          <div className="absolute right-0 top-0 flex h-full w-[22%] flex-col justify-around">
            {rightFeatures.map((f, i) => (
              <div
                key={i}
                className="rounded-[10px] bg-[#dbeeff] px-3 py-2.5 text-center text-[11px] font-medium leading-[1.4] text-[#1e2746] shadow-sm"
              >
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile fallback grid ── */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
          {leftFeatures.map((f, i) => (
            <div key={`lm${i}`} className="rounded-[10px] bg-[#1b3a5c] p-3 text-[12px] font-medium leading-[1.4] text-white shadow-sm">
              {f}
            </div>
          ))}
          {rightFeatures.map((f, i) => (
            <div key={`rm${i}`} className="rounded-[10px] border border-[#cde4f7] bg-[#dbeeff] p-3 text-[12px] font-medium leading-[1.4] text-[#1e2746] shadow-sm">
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
