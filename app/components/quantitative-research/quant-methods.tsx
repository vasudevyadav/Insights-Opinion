"use client";

import Image from "next/image";

const methods = [
  {
    title: "Computer-Assisted Telephone Interviewing (CATI)",
    image: "/quality/cati-telephone.png",
  },
  {
    title: "Computer-Assisted Personal Interviewing (CAPI)",
    image: "/quality/cati-computer.png",
  },
  {
    title: "Central Location Testing (CLT)",
    image: "/quality/cati-location.png",
  },
  {
    title: "Online Surveys",
    image: "/quality/cati-online.png",
  },
];

export default function QuantMethods() {
  return (
    <section className="relative overflow-hidden bg-[#edf6ff] py-1 lg:py-2">
      {/* Hex pattern — full background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg
          className="h-full w-full"
          viewBox="0 0 1280 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="hexGradMethods" x1="0" y1="0" x2="1280" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#b8dff5" />
              <stop offset="0.5" stopColor="#d8eefb" />
              <stop offset="1" stopColor="#b8dff5" />
            </linearGradient>
          </defs>
          {Array.from({ length: 15 }).map((_, row) =>
            Array.from({ length: 22 }).map((_, col) => {
              const x = col * 62 + (row % 2 ? 31 : 0);
              const y = row * 54;
              return (
                <polygon
                  key={`${row}-${col}`}
                  points={`${x + 15},${y} ${x + 45},${y} ${x + 60},${y + 26} ${x + 45},${y + 52} ${x + 15},${y + 52} ${x},${y + 26}`}
                  stroke="url(#hexGradMethods)"
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
        <div className="mb-12 text-center">
          <h2 className="text-[32px] font-semibold leading-tight sm:text-[42px] lg:text-[50px]">
            <span className="bg-gradient-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
              Our Quantitative
            </span>
          </h2>
          <p className="text-xl font-medium text-[#1e2746] sm:text-3xl">
            Research Methods
          </p>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-[1.75] text-[#4a5568] sm:text-base">
            As a full-service quantitative market research agency, Insights Opinion offers
            four core research methods. Each suits a different study type, audience, and business question.
          </p>
        </div>

        {/* Staggered grid — desktop */}
        <div className="hidden gap-5 md:grid md:grid-cols-2">
          {/* Left column */}
          <div className="flex flex-col gap-5">
            <MethodCard method={methods[0]} height="h-[350px]" />
            <MethodCard method={methods[2]} height="h-[350px]" />
          </div>
          {/* Right column — offset down */}
          <div className="flex flex-col gap-5 pt-14">
            <MethodCard method={methods[1]} height="h-[350px]" />
            <MethodCard method={methods[3]} height="h-[350px]" />
          </div>
        </div>

        {/* Mobile scroll */}
        <div className="md:hidden">
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {methods.map((method, index) => (
              <div key={index} className="min-w-[85%] snap-center">
                <MethodCard method={method} height="h-[240px]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodCard({
  method,
  height,
}: {
  method: (typeof methods)[0];
  height: string;
}) {
  return (
    <div
      className={`group relative ${height} w-full overflow-hidden rounded-[20px] shadow-[0_8px_28px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:-translate-y-1`}
    >
      <Image
        src={method.image}
        alt={method.title}
        fill
        unoptimized
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      {/* Teal gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1dc3b3]/80 via-[#1dc3b3]/20 to-transparent" />
      {/* Title */}
      <div className="absolute bottom-0 left-0 p-5">
        <h3 className="text-sm font-semibold leading-[1.35] text-white drop-shadow-sm sm:text-xl">
          {method.title}
        </h3>
      </div>
    </div>
  );
}
