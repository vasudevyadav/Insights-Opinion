import Image from "next/image";
import Link from "next/link";
import type { Industry } from "@/app/lib/industries-data";
import BackgroundShape from "../about-us/background-shape";

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

  const visibleIndustries = industries.slice(0, 6);
  const hasMoreIndustries = industries.length > visibleIndustries.length;

  return (
    <section className="relative overflow-hidden bg-[#edf6ff] py-12 lg:py-16">
      <BackgroundShape variant={5} className="-right-24 top-0 w-[330px] opacity-35 sm:w-[420px] lg:-right-2 lg:w-[500px]" />
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
          <div className=" pl-0 sm:pl-[56px] ">
            <div className="mb-6 grid grid-cols-[1fr_1.8fr] gap-5 ">
              {content.industryLabel && (
                <span className="text-[22px] font-semibold bg-gradient-to-r from-[#1dc3b3] via-[#31b6df] to-[#3c8df6] bg-clip-text text-transparent lg:text-4xl line-clamp-2">
                  {content.industryLabel}
                </span>
              )}
              <span className="text-[22px] font-semibold bg-gradient-to-r from-[#1dc3b3] via-[#31b6df] to-[#3c8df6] bg-clip-text text-transparent lg:text-4xl line-clamp-2">
                {content.useCasesLabel}
              </span>

            </div>
            <p className="mt-1.5 max-w-[480px] text-[14px] leading-[1.7] text-gray-800 sm:text-lg">
              {content.description}
            </p>
          </div>


        </div>

        <div className="mx-auto max-w-5xl">

          <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 md:block md:space-y-3 md:overflow-visible md:pb-0">
            {visibleIndustries.map((industry) => (
              <div
                key={`${industry.name}-${industry.image}`}
                className="grid min-w-[86%] snap-center grid-cols-[64px_minmax(0,1fr)] items-center gap-3 md:min-w-0 md:grid-cols-[72px_1fr_42px_1.8fr]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[14px] bg-gradient-to-br from-[#68b8f1] via-[#1dc3b3] to-[#16a997] p-4 shadow-[0_8px_16px_rgba(29,195,179,0.24)] sm:h-[72px] sm:w-[72px]">
                  <Image
                    src={industry.image}
                    alt=""
                    width={48}
                    height={48}
                    unoptimized
                    className="h-full w-full object-contain brightness-0 invert"
                  />
                </div>

                <div className="flex min-h-16 items-center rounded-xl bg-white/90 px-4 py-3 text-base font-medium leading-snug text-[#2b3553] shadow-sm sm:px-5 sm:text-lg md:min-h-0 lg:text-lg">
                  {industry.name.trim()}
                </div>

                <div className="hidden text-center text-3xl font-bold text-[#4faee8] sm:block">
                  →
                </div>

                <div className="col-span-2 rounded-xl bg-white/90 px-5 py-3 text-sm leading-[1.65] text-[#4a5568] shadow-sm line-clamp-8 md:col-span-1 md:py-2 lg:line-clamp-2 lg:text-lg">
                  {cleanIndustryText(industry.description)}
                </div>
              </div>
            ))}
          </div>

          {hasMoreIndustries && (
            <div className="lg:mt-10 mt-6 flex justify-center">
              <Link
                href="/industries"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#1dc3b3] via-[#31b6df] to-[#3c8df6] px-10 py-2.5 lg:text-lg text-base uppercase font-semibold text-white shadow-[0_10px_24px_rgba(49,182,223,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(49,182,223,0.34)] focus:outline-none focus:ring-2 focus:ring-[#31b6df] focus:ring-offset-2"
              >
                View all
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
