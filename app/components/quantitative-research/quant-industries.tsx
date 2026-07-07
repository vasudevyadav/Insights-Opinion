import Image from "next/image";
import type { Industry } from "@/app/lib/industries-data";

function cleanIndustryText(value: string) {
  return value
    .replace(/\r/g, " ")
    .replace(/\n/g, " ")
    .replace(/\t/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function QuantIndustries({
  content,
  industries,
}: {
  content?: {
    heading?: string;
    subheading?: string;
    description: string;
    industryLabel?: string;
    useCasesLabel: string;
    useCases: readonly string[];
  };
  industries: Industry[];
}) {
  if (!content || industries.length === 0) return null;

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
          {content.heading && (
            <h2 className="text-[42px] font-bold leading-tight sm:text-[52px] lg:text-[60px]">
              <span className="bg-gradient-to-r from-[#1dc3b3] via-[#31b6df] to-[#3c8df6] bg-clip-text text-transparent">
                {content.heading}
              </span>
            </h2>
          )}
          {content.subheading && (
            <p className="text-[20px] font-normal text-[#1e2746] lg:text-3xl">
              {content.subheading}
            </p>
          )}
          <p className="mt-1.5 max-w-[480px] text-[14px] leading-[1.7] text-gray-800 sm:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="mb-6 grid grid-cols-[1fr_1.8fr] gap-5 pl-0 sm:pl-[92px]">
            {content.industryLabel && (
              <span className="text-[22px] font-semibold bg-gradient-to-r from-[#1dc3b3] via-[#31b6df] to-[#3c8df6] bg-clip-text text-transparent lg:text-4xl">
                {content.industryLabel}
              </span>
            )}
            <span className="text-[22px] font-semibold bg-gradient-to-r from-[#1dc3b3] via-[#31b6df] to-[#3c8df6] bg-clip-text text-transparent lg:text-4xl">
              {content.useCasesLabel}
            </span>
          </div>

          <div className="space-y-3">
            {industries.map((industry) => (
              <div
                key={`${industry.name}-${industry.image}`}
                className="grid items-center gap-3 sm:grid-cols-[72px_1fr_42px_1.8fr]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#68b8f1] via-[#1dc3b3] to-[#16a997] p-3 shadow-[0_8px_16px_rgba(29,195,179,0.24)] sm:h-[72px] sm:w-[72px]">
                  <Image
                    src={industry.image}
                    alt=""
                    width={48}
                    height={48}
                    unoptimized
                    className="h-full w-full object-contain brightness-0 invert"
                  />
                </div>

                <div className="rounded-xl bg-white/90 px-5 py-3 text-lg font-medium text-[#2b3553] shadow-sm lg:text-2xl">
                  {industry.name.trim()}
                </div>

                <div className="hidden text-center text-3xl font-bold text-[#4faee8] sm:block">
                  →
                </div>

                <div className="rounded-xl bg-white/90 px-5 py-3 text-sm leading-[1.65] text-[#4a5568] shadow-sm lg:text-lg">
                  {cleanIndustryText(industry.description)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
