"use client";

import { Heart, ShoppingCart, Car, RefreshCw, Settings, GraduationCap, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const industries: { name: string; Icon: LucideIcon; useCases: string }[] = [
  { name: "Healthcare", Icon: Heart, useCases: "Patient behavior studies, HCP surveys, treatment preference tracking" },
  { name: "Consumer Goods", Icon: ShoppingCart, useCases: "Product testing, brand tracking, purchase decision research" },
  { name: "Automotive", Icon: Car, useCases: "Purchase intent, feature preference, CLT-based concept testing" },
  { name: "Financial Services", Icon: RefreshCw, useCases: "NPS measurement, product awareness, customer satisfaction" },
  { name: "Technology and Telecom", Icon: Settings, useCases: "User experience research, feature prioritization, churn studies" },
  { name: "Education", Icon: GraduationCap, useCases: "Enrollment research, program awareness, student and parent surveys" },
  { name: "B2B and Industrial", Icon: Building2, useCases: "Decision-maker surveys, procurement research, B2B panel studies" },
];

export default function QuantIndustries({
  content,
}: {
  content?: {
    description: string;
    useCasesLabel: string;
    useCases: readonly string[];
  };
}) {
  return (
    <section className="relative overflow-hidden bg-[#edf6ff] py-12 lg:py-16">
      {/* Hex pattern right */}
      <div className="pointer-events-none absolute -right-20 top-0 hidden h-full w-[38%] opacity-35 lg:block">
        <svg
          className="h-full w-full"
          viewBox="0 0 320 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="hexGradInd" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#CFEAF7" />
              <stop offset="1" stopColor="#EAF6FB" />
            </linearGradient>
          </defs>
          {Array.from({ length: 11 }).map((_, row) =>
            Array.from({ length: 6 }).map((_, col) => {
              const x = col * 62 + (row % 2 ? 31 : 0);
              const y = row * 54;
              return (
                <polygon
                  key={`${row}-${col}`}
                  points={`${x + 15},${y} ${x + 45},${y} ${x + 60},${y + 26} ${x + 45},${y + 52} ${x + 15},${y + 52} ${x},${y + 26}`}
                  stroke="url(#hexGradInd)"
                  strokeWidth="1.2"
                  fill="none"
                />
              );
            })
          )}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Left-aligned heading */}
        <div className="mb-8 sm:mb-10">
          <h2 className="text-[42px] font-bold leading-tight sm:text-[52px] lg:text-[60px]">
            <span className="bg-gradient-to-r from-[#1dc3b3] via-[#31b6df] to-[#3c8df6] bg-clip-text text-transparent">
              Industries
            </span>
          </h2>
          <p className="text-[20px] font-normal text-[#1e2746] lg:text-3xl">We Serve</p>
          <p className="mt-1.5 max-w-[480px] text-[14px] leading-[1.7] text-gray-800 sm:text-lg">
            {content?.description ||
              "Insights Opinion works with clients across multiple sectors for quantitative research."}
          </p>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-[16px] border border-[#cde4f7] bg-white shadow-[0_4px_20px_rgba(37,99,235,0.07)]">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_1.8fr] border-b border-[#cde4f7] px-6 py-4">
            <span className="text-[14px] font-semibold bg-gradient-to-r from-[#1dc3b3] via-[#31b6df] to-[#3c8df6] bg-clip-text text-transparent lg:text-lg ">Industry</span>
            <span className="text-[14px] font-semibold bg-gradient-to-r from-[#1dc3b3] via-[#31b6df] to-[#3c8df6] bg-clip-text text-transparent lg:text-lg ">
              {content?.useCasesLabel ||
                "Typical Quantitative Research Use Cases"}
            </span>
          </div>

          {/* Data rows */}
          {industries.map((ind, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_1.8fr] items-center border-b border-[#e8f2fb] px-6 py-4 transition-colors last:border-0 hover:bg-[#f4f9ff]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-[#1dc3b3] via-[#31b6df] to-[#3c8df6]">
                  <ind.Icon size={24} className="text-white" strokeWidth={2} />
                </span>
                <span className="text-sm font-semibold text-[#1e2746] lg:text-base">
                  {ind.name}
                </span>
              </div>
              <div className="flex items-center gap-10">
                <span className="shrink-0 text-[20px] font-bold text-[#35d0c7]">→</span>
                <span className="text-sm leading-[1.6] text-[#4a5568] lg:text-base">
                  {content?.useCases[i] || ind.useCases}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


