import React from "react";
import Image from "next/image";
import {
  TrendingDown, BookOpen, Wifi, UserCheck, RefreshCw,
  MapPin, Home, Users, Package, Star, Lightbulb, BarChart,
  Globe, Clock, TrendingUp,
} from "lucide-react";
import type { MethodData } from "@/app/lib/method-data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  TrendingDown, BookOpen, Wifi, UserCheck, RefreshCw,
  MapPin, Home, Users, Package, Star, Lightbulb, BarChart,
  Globe, Clock, TrendingUp,
};

export default function MarketResearch({ data }: { data: MethodData }) {
  const { whenToUse, vsBox, sectors } = data;

  return (
    <>
      {/* ── When to Use ── */}
      {whenToUse?.heading1 && whenToUse.items?.length > 0 && (
        <section className="quality-hex-bg relative overflow-hidden py-7 lg:py-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">

              <div>
                <p className="text-xl font-light text-[#2b3553] sm:text-2xl lg:text-3xl">{whenToUse.heading1}</p>
                <h2 className="mt-1 text-2xl font-bold sm:text-3xl lg:text-4xl">
                  <span className="text-[#1dc3b3]">{whenToUse.heading2.split(" ")[0]}</span>{" "}
                  <span className="text-[#4faee8]">{whenToUse.heading2.split(" ").slice(1).join(" ")}</span>
                </h2>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-[#2b3553] lg:mt-5 lg:text-[15px]">
                  {whenToUse.bodyText}
                </p>
                <div className="mt-5 overflow-hidden rounded-2xl lg:mt-7">
                  <Image
                    src={whenToUse.image}
                    alt={whenToUse.heading2}
                    width={640}
                    height={380}
                    unoptimized
                    className="h-52 w-full object-cover sm:h-64 lg:h-80"
                  />
                </div>
              </div>

              {/* Desktop cards grid — unchanged */}
              <div className="hidden lg:grid grid-cols-2 gap-6">
                {whenToUse.items.map((item) => {
                  const IconComp = ICON_MAP[item.iconKey] ?? Users;
                  return (
                    <div key={item.title}>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1dc3b3] text-[#1dc3b3]">
                        <IconComp size={18} />
                      </div>
                      <h3 className="text-base font-bold text-[#2b3553]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">{item.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Mobile horizontal scroll cards */}
              <div className="lg:hidden">
                <div className="lg:-mx-4 mx-1 flex gap-4 overflow-x-auto px-4 pb-3 snap-x snap-mandatory">
                  {whenToUse.items.map((item) => {
                    const IconComp = ICON_MAP[item.iconKey] ?? Users;
                    return (
                      <div key={item.title} className="shrink-0 w-56 snap-start rounded-2xl bg-white/80 px-4 py-5">
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1dc3b3] text-[#1dc3b3]">
                          <IconComp size={16} />
                        </div>
                        <h3 className="text-sm font-bold text-[#2b3553]">{item.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-[#4a5568]">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* ── Method vs Method ── */}
      {vsBox?.title && vsBox.items?.length > 0 && (
        <section className="quality-hex-bg relative overflow-hidden lg:py-0 lg:pb-10">
          {/* Background Pattern */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-56 opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="hex-vsbox"
                  x="0"
                  y="0"
                  width="60"
                  height="69.28"
                  patternUnits="userSpaceOnUse"
                >
                  <polygon
                    points="30,0 60,17.32 60,51.96 30,69.28 0,51.96 0,17.32"
                    fill="none"
                    stroke="#1dc3b3"
                    strokeWidth="1.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex-vsbox)" />
            </svg>
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="mb-14">
              <h2 className="text-2xl font-semibold text-[#1dc3b3] sm:text-3xl lg:text-4xl">
                {vsBox.title}
              </h2>

              {/* {vsBox.subtitle && (
                <p className="mt-2 text-lg font-semibold text-[#4faee8]">
                  {vsBox.subtitle}
                </p>
              )} */}

              {/* {vsBox.description && (
                <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#2b3553]">
                  {vsBox.description}
                </p>
              )} */}
            </div>

            {/* Desktop Table */}
            <div className="hidden lg:grid grid-cols-3 gap-4">
              <div className="rounded-md  px-5 py-3 text-center text-xl font-semibold text-[#2b3553]">
                Factor
              </div>

              <div className="rounded-md  px-5 py-3 text-center text-xl font-semibold text-[#1dc3b3]">
                {vsBox.col1Label}
              </div>

              <div className="rounded-md  px-5 py-3 text-center text-xl font-semibold text-[#4faee8]">
                {vsBox.col2Label}
              </div>

              {vsBox.items.map((item) => (
                <React.Fragment key={item.label}>
                  <div className="rounded-md bg-white/80 px-6 py-4 text-center text-base  text-black font-medium">
                    {item.label}
                  </div>

                  <div className="rounded-md bg-white/80 px-6 py-4 text-center text-base text-black font-medium">
                    {item.col1}
                  </div>

                  <div className="rounded-md bg-white/80 px-6 py-4 text-center text-base text-black font-medium">
                    {item.col2}
                  </div>
                </React.Fragment>
              ))}
            </div>

            {/* <div className="my-14">

              {vsBox.subtitle && (
                <p className=" text-xl font-thin text-black">
                  {vsBox.subtitle}
                </p>
              )}

              {vsBox.description && (
                <p className=" mt-2 max-w-3xl text-lg leading-relaxed text-black font-semibold">
                  {vsBox.description}
                </p>
              )}
            </div> */}


            {/* Mobile Cards */}
            <div className="space-y-3 lg:hidden">
              {vsBox.items.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-white/85 px-4 py-4"
                >
                  <p className="text-sm font-bold text-[#2b3553]">
                    {item.label}
                  </p>

                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold text-[#1dc3b3]">
                        {vsBox.col1Label}
                      </p>
                      <p className="text-sm text-[#2b3553]">
                        {item.col1}
                      </p>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-[#4faee8]">
                        {vsBox.col2Label}
                      </p>
                      <p className="text-sm text-[#2b3553]">
                        {item.col2}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Sector Specific Research ── */}
      {sectors?.length > 0 && (
        <section className="relative overflow-hidden bg-[#deeef7] py-8 lg:py-16">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center lg:mb-14">
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                <span className="bg-linear-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
                  Sector-Specific
                </span>{" "}
                <span className="text-[#1e2746]">Research</span>
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#4a5568] sm:text-base">
                Explore how our research approach is adapted to the needs of each audience and industry.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 md:items-start lg:gap-6">
              {sectors.map((sector, index) => (
                <article
                  key={sector.title}
                  tabIndex={0}
                  className={`group relative h-[340px] overflow-hidden rounded-[20px] shadow-[0_8px_28px_rgba(20,45,90,0.16)] outline-none transition duration-500 hover:-translate-y-1 focus-visible:ring-4 focus-visible:ring-[#1dc3b3]/40 sm:h-[380px] lg:h-[400px] ${index % 2 === 1 ? "md:mt-14" : ""
                    }`}
                >
                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 group-hover:scale-105 group-focus:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#10bdae]/95 via-[#16bfb4]/35 to-black/5 transition-colors duration-500 md:group-hover:from-[#087f79]/95 md:group-hover:via-[#087f79]/60 md:group-focus:from-[#087f79]/95 md:group-focus:via-[#087f79]/60" />

                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <h3 className="text-lg font-semibold leading-snug drop-shadow-sm sm:text-xl">
                        {sector.title}
                      </h3>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/25 text-lg backdrop-blur-sm transition duration-300 group-hover:rotate-90 group-hover:bg-white group-hover:text-[#1dc3b3] group-focus:rotate-90 group-focus:bg-white group-focus:text-[#1dc3b3]">
                        +
                      </span>
                    </div>

                    <p className="mt-3 max-h-48 overflow-y-auto pr-1 text-sm leading-relaxed text-white/95 opacity-100 transition-all duration-500 md:max-h-0 md:translate-y-4 md:overflow-hidden md:opacity-0 md:group-hover:max-h-48 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus:max-h-48 md:group-focus:translate-y-0 md:group-focus:opacity-100 sm:text-[15px]">
                      {sector.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
