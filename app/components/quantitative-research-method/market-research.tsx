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
      {/* When to Use Section */}
      <section className="relative overflow-hidden bg-[#deeef7] py-16">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">

            <div>
              <p className="text-2xl font-light text-[#2b3553] sm:text-3xl">{whenToUse.heading1}</p>
              <h2 className="mt-1 text-3xl font-bold sm:text-4xl">
                <span className="text-[#1dc3b3]">{whenToUse.heading2.split(" ")[0]}</span>{" "}
                <span className="text-[#4faee8]">{whenToUse.heading2.split(" ").slice(1).join(" ")}</span>
              </h2>
              <p className="mt-5 text-base font-semibold leading-relaxed text-[#2b3553] sm:text-[15px]">
                {whenToUse.bodyText}
              </p>
              <div className="mt-7 overflow-hidden rounded-2xl">
                <Image
                  src={whenToUse.image}
                  alt={whenToUse.heading2}
                  width={640}
                  height={380}
                  unoptimized
                  className="h-64 w-full object-cover sm:h-80"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {whenToUse.items.map((item) => {
                const IconComp = ICON_MAP[item.iconKey] ?? Users;
                return (
                  <div key={item.title}>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1dc3b3] text-[#1dc3b3]">
                      <IconComp size={22} />
                    </div>
                    <h3 className="text-base font-bold text-[#2b3553]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">{item.description}</p>
                  </div>
                );
              })}

              <div className="flex flex-col justify-end">
                <p className="mb-3 text-sm font-semibold text-[#2b3553]">
                  Not sure if this is the right method for your study?
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#1dc3b3] to-[#4faee8] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                >
                  Speak With Insights Opinion <ArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="relative overflow-hidden bg-[#deeef7] py-16">
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
          <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
            <span className="text-[#1dc3b3]">{comparison.col1}</span>{" "}
            <span className="text-[#4faee8]">vs {comparison.col2}</span>
          </h2>

          <div className="grid grid-cols-3 gap-x-6">
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

          <div className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5568]">
            <p>{comparison.footer}</p>
          </div>
        </div>
      </section>

      {/* vs Box Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0f2a5e] to-[#1a4a8a] px-8 py-12 sm:px-14 sm:py-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">

              <div>
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-[#1dc3b3] to-[#4faee8] bg-clip-text text-transparent">
                    {vsBox.title}
                  </span>
                </h2>
                <p className="mt-1 text-xl font-light text-white sm:text-2xl">{vsBox.subtitle}</p>
                <p className="mt-5 text-base leading-relaxed text-white/75">{vsBox.description}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-start gap-3 rounded-xl bg-white/10 px-5 py-4">
                    <div className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-[#1dc3b3]" />
                    <div>
                      <p className="text-sm font-semibold text-white">{vsBox.col1Label}</p>
                      <p className="mt-0.5 text-xs text-white/60">{vsBox.col1Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl bg-white/10 px-5 py-4">
                    <div className="mt-0.5 h-3 w-3 shrink-0 rounded-full bg-[#4faee8]" />
                    <div>
                      <p className="text-sm font-semibold text-white">{vsBox.col2Label}</p>
                      <p className="mt-0.5 text-xs text-white/60">{vsBox.col2Desc}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {vsBox.items.map((row) => (
                  <div key={row.label} className="rounded-xl bg-white/10 px-5 py-4">
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

      {/* Sector-Specific Section */}
      <section className="bg-[#f4fafd] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="text-[#2b3553]">Sector-Specific </span>
              <span className="bg-gradient-to-r from-[#1dc3b3] to-[#4faee8] bg-clip-text text-transparent">
                Research
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

                <div className={`absolute inset-0 flex items-center justify-center bg-[#0f2a5e]/85 px-6 transition-opacity duration-300 ${expandedSector === idx ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                  <p className="text-center text-sm leading-relaxed text-white">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
