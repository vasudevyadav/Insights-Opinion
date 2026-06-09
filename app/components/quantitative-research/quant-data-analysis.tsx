"use client";

import Image from "next/image";

const badges = [
  { text: "Interactive dashboards using Tableau, Power BI, and Qlik", top: "8%", left: "52%" },
  { text: "Data cleaning, validation, and quality checks", top: "6%", right: "2%" },
  { text: "Cross-tabulation and statistical significance testing", top: "42%", left: "44%" },
  { text: "Predictive modelling and trend analysis", top: "55%", right: "1%" },
  { text: "Audience segmentation and profiling", top: "72%", left: "40%" },
  { text: "Executive-ready reports and presentation-ready outputs", top: "84%", left: "55%" },
];

export default function QuantDataAnalysis() {
  return (
    <section className="relative overflow-hidden bg-[#0d1b2e] py-16 lg:py-24">
      {/* Hex pattern background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <svg
          className="h-full w-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {Array.from({ length: 12 }).map((_, row) =>
            Array.from({ length: 14 }).map((_, col) => {
              const x = col * 62 + (row % 2 ? 31 : 0);
              const y = row * 54;
              return (
                <polygon
                  key={`${row}-${col}`}
                  points={`${x + 15},${y} ${x + 45},${y} ${x + 60},${y + 26} ${x + 45},${y + 52} ${x + 15},${y + 52} ${x},${y + 26}`}
                  stroke="#35d0c7"
                  strokeWidth="1"
                  fill="none"
                />
              );
            })
          )}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left — text */}
          <div className="w-full lg:w-[42%]">
            <h2 className="text-[30px] font-bold leading-tight sm:text-[38px] lg:text-[44px]">
              <span className="bg-gradient-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
                Quantitative Data
              </span>
              <br />
              <span className="text-white">Analysis Services</span>
            </h2>

            <p className="mt-5 text-[14px] leading-[1.8] text-[#9db8d2] sm:text-[15px]">
              Collecting data is only part of the job. Our quantitative
              data analysis services{" "}
              <span className="text-white">
                turn raw survey and fieldwork output into findings your team can act on.
              </span>
            </p>

            <p className="mt-4 text-[14px] leading-[1.8] text-[#9db8d2] sm:text-[15px]">
              Every analysis is built around your study objectives,
              not a standard template. Learn more about our{" "}
              <span className="cursor-pointer font-semibold text-[#35d0c7] underline underline-offset-2 hover:text-[#5ae8df]">
                Data Insights
              </span>{" "}
              capabilities.
            </p>
          </div>

          {/* Right — image with floating badges */}
          <div className="relative w-full lg:w-[58%]">
            <div className="relative h-[420px] w-full overflow-hidden rounded-[22px] shadow-[0_16px_48px_rgba(0,0,0,0.4)] sm:h-[480px] lg:h-[520px]">
              <Image
                src="/market-research/Healthcare-1.jpg"
                alt="Quantitative Data Analysis"
                fill
                unoptimized
                className="object-cover"
              />
              {/* Dark tint */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Floating badge chips */}
              {badges.map((badge, i) => (
                <div
                  key={i}
                  className="absolute flex max-w-[190px] items-start gap-2 rounded-[10px] bg-white/95 px-3 py-2 shadow-[0_4px_14px_rgba(0,0,0,0.18)] backdrop-blur-sm"
                  style={{
                    top: badge.top,
                    left: badge.left ?? "auto",
                    right: (badge as { right?: string }).right ?? "auto",
                  }}
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#35d0c7] to-[#3c8df6] text-[9px] font-bold text-white">
                    ✓
                  </span>
                  <span className="text-[11px] font-medium leading-[1.4] text-[#1e2746]">
                    {badge.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
