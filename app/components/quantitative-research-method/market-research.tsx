"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
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
  const { whenToUse, comparison, vsBox, sectors } = data;
  const [expandedSector, setExpandedSector] = useState<number | null>(null);

  return (
    <>
      {/* ── When to Use ── */}
      <section className="relative overflow-hidden bg-[#deeef7] py-10 lg:py-16">
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

            {/* cards — 1 col on xs, 2 cols on sm+ */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
              {whenToUse.items.map((item) => {
                const IconComp = ICON_MAP[item.iconKey] ?? Users;
                return (
                  <div key={item.title}>
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#1dc3b3] text-[#1dc3b3] lg:h-12 lg:w-12">
                      <IconComp size={18} />
                    </div>
                    <h3 className="text-sm font-bold text-[#2b3553] lg:text-base">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#4a5568] lg:text-sm">{item.description}</p>
                  </div>
                );
              })}

              <div className="flex flex-col justify-end">
                <p className="mb-3 text-xs font-semibold text-[#2b3553] lg:text-sm">
                  Not sure if this is the right method for your study?
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#1dc3b3] to-[#4faee8] px-4 py-2.5 text-xs font-semibold text-white shadow-md transition hover:opacity-90 lg:px-5 lg:py-3 lg:text-sm"
                >
                  Speak With Insights Opinion <ArrowRight size={14} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="relative overflow-hidden bg-[#deeef7] py-10 lg:py-16">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-52 opacity-25">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex3" x="0" y="0" width="60" height="69.28" patternUnits="userSpaceOnUse">
                <polygon points="30,0 60,17.32 60,51.96 30,69.28 0,51.96 0,17.32" fill="none" stroke="#1dc3b3" strokeWidth="1.5" />
                <polygon points="30,34.64 60,51.96 60,86.6 30,103.92 0,86.6 0,51.96" fill="none" stroke="#1dc3b3" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex3)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold sm:text-3xl lg:mb-10 lg:text-4xl">
            <span className="text-[#1dc3b3]">{comparison.col1}</span>{" "}
            <span className="text-[#4faee8]">vs {comparison.col2}</span>
          </h2>

          {/* Desktop table — unchanged */}
          <div className="hidden lg:grid grid-cols-3 gap-x-6">
            <p className="mb-8 text-center text-2xl font-semibold text-[#1dc3b3]">Factor</p>
            <p className="mb-8 text-center text-2xl font-semibold text-[#1dc3b3]">{comparison.col1}</p>
            <p className="mb-8 text-center text-2xl font-semibold text-[#1dc3b3]">{comparison.col2}</p>

            {comparison.rows.map((row) => (
              <React.Fragment key={row.factor}>
                <div className="mb-4 flex items-center rounded-xl bg-white/70 px-6 py-3 text-base font-medium text-[#2b3553]">
                  {row.factor}
                </div>
                <div className="mb-4 flex items-center rounded-xl bg-white/70 px-6 py-3 text-base text-[#2b3553]">
                  {row.col1}
                </div>
                <div className="mb-4 flex items-center rounded-xl bg-white/70 px-6 py-3 text-base text-[#2b3553]">
                  {row.col2}
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* Mobile stacked cards */}
          <div className="lg:hidden space-y-3">
            {comparison.rows.map((row) => (
              <div key={row.factor} className="rounded-xl bg-white/80 px-4 py-3">
                <p className="mb-2 text-xs font-bold uppercase tracking-wide text-[#4faee8]">{row.factor}</p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10px] font-semibold text-[#1dc3b3]">{comparison.col1}</p>
                    <p className="text-xs text-[#2b3553]">{row.col1}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-[#4faee8]">{comparison.col2}</p>
                    <p className="text-xs text-[#2b3553]">{row.col2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 max-w-lg text-sm leading-relaxed text-[#4a5568] lg:mt-6 lg:text-base">
            <p>{comparison.footer}</p>
          </div>
        </div>
      </section>

      {/* ── vs Box ── */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0f2a5e] to-[#1a4a8a] px-6 py-10 sm:px-14 sm:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">

              <div>
                <h2 className="text-2xl font-bold sm:text-3xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-[#1dc3b3] to-[#4faee8] bg-clip-text text-transparent">
                    {vsBox.title}
                  </span>
                </h2>
                <p className="mt-1 text-base font-light text-white sm:text-xl lg:text-2xl">{vsBox.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/75 lg:text-base">{vsBox.description}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:mt-8 lg:gap-4">
                  <div className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3 lg:px-5 lg:py-4">
                    <div className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-[#1dc3b3]" />
                    <div>
                      <p className="text-sm font-semibold text-white">{vsBox.col1Label}</p>
                      <p className="mt-0.5 text-xs text-white/60">{vsBox.col1Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-3 lg:px-5 lg:py-4">
                    <div className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-[#4faee8]" />
                    <div>
                      <p className="text-sm font-semibold text-white">{vsBox.col2Label}</p>
                      <p className="mt-0.5 text-xs text-white/60">{vsBox.col2Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
                {vsBox.items.map((row) => (
                  <div key={row.label} className="rounded-xl bg-white/10 px-4 py-4 lg:px-5">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#1dc3b3]">{row.label}</p>
                    <div className="flex justify-between gap-2 text-sm">
                      <div>
                        <p className="text-[11px] text-white/50">{vsBox.col1Label}</p>
                        <p className="font-medium text-white">{row.col1}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] text-white/50">{vsBox.col2Label}</p>
                        <p className="font-medium text-white/80">{row.col2}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Sector-Specific ── */}
      <section className="bg-[#f4fafd] py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center lg:mb-10">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
              <span className="text-[#2b3553]">Sector-Specific </span>
              <span className="bg-gradient-to-r from-[#1dc3b3] to-[#4faee8] bg-clip-text text-transparent">
                Research
              </span>
            </h2>
          </div>

          {/* Desktop grid — unchanged */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {sectors.map((card, idx) => (
              <div
                key={card.title}
                className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer"
                onClick={() => setExpandedSector(expandedSector === idx ? null : idx)}
              >
                <div className="relative h-72 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a5e]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-[#1dc3b3] to-[#4faee8] px-5 py-3 flex items-center justify-between">
                  <p className="text-sm font-bold text-white">{card.title}</p>
                  <span className="shrink-0 rounded-full bg-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#1dc3b3]">
                    Read More
                  </span>
                </div>
                <div className={`absolute inset-0 flex items-center justify-center bg-[#0f2a5e]/85 px-5 transition-opacity duration-300 ${expandedSector === idx ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  <p className="text-center text-sm leading-relaxed text-white">{card.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile horizontal scroll */}
          <div className="lg:hidden -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory">
            {sectors.map((card, idx) => (
              <div
                key={card.title}
                className="group relative shrink-0 w-72 overflow-hidden rounded-2xl shadow-md cursor-pointer snap-start"
                onClick={() => setExpandedSector(expandedSector === idx ? null : idx)}
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0f2a5e]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-r from-[#1dc3b3] to-[#4faee8] px-4 py-2.5 flex items-center justify-between">
                  <p className="text-xs font-bold text-white">{card.title}</p>
                  <span className="shrink-0 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-[#1dc3b3]">
                    Read More
                  </span>
                </div>
                <div className={`absolute inset-0 flex items-center justify-center bg-[#0f2a5e]/85 px-5 transition-opacity duration-300 ${expandedSector === idx ? "opacity-100" : "opacity-0"}`}>
                  <p className="text-center text-xs leading-relaxed text-white">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
