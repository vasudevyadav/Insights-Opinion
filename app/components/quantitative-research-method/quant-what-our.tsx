"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Plus, ChevronRight,
  FileText, Users, Phone, Eye, Database,
  MapPin, Package, Code,
} from "lucide-react";
import type { ServiceItem } from "@/app/lib/method-data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText, Users, Phone, Eye, Database, MapPin, Package, Code,
};

interface ServicesData {
  headingGradient: string;
  headingLight: string;
  subheading: string;
  items: ServiceItem[];
}

export default function QuantWhatOur({ data }: { data: ServicesData }) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        <div className="lg:mb-10 mb-6 text-center w-full">
          <h2 className="text-2xl font-semibold leading-tight lg:text-[40px] bg-linear-to-r from-[#1dc3b3] to-[#4faee8] bg-clip-text text-transparent">
            {data.headingGradient}
          </h2>
          <h2 className="text-2xl font-light text-[#2b3553] sm:text-4xl py-1">
            {data.headingLight}
          </h2>
          <p className="mx-auto mt-2 max-w-3xl lg:text-lg text-sm leading-relaxed text-[#4a5568]">
            {data.subheading}
          </p>
        </div>

        <div className="flex flex-col">
          {data.items.map((s, i) => {
            const IconComp = ICON_MAP[s.iconKey] ?? FileText;
            const isActive = active === i;

            if (isActive) {
              return (
                <div key={s.id} className="accordion-content-enter my-2 flex min-w-0 overflow-hidden rounded-2xl bg-[#1b2f5e]">
                  <div className="relative hidden w-60 shrink-0 sm:block">
                    <Image src={s.image} alt={s.title} fill unoptimized className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1dc3b3]">
                        <IconComp size={24} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col justify-center px-5 py-6 sm:flex-row sm:items-center sm:px-6 sm:py-8">
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-[#1dc3b3] sm:text-lg">{s.title}</p>
                      <p className="text-5xl font-black leading-none text-white sm:text-6xl">{s.id}</p>
                    </div>
                    <div className="my-3 shrink-0 text-[#4faee8] sm:my-0 sm:px-5">
                      <ChevronRight size={22} />
                    </div>
                    <p className="max-w-full break-words text-sm leading-6 text-white/60 sm:max-w-xs sm:leading-loose">{s.description}</p>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={s.id}
                onClick={() => setActive(i)}
                className="flex min-w-0 items-center gap-3 border-b border-[#e8eff8] py-4 text-left last:border-b-0 transition hover:bg-[#f5faff] sm:gap-5 lg:pr-2"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-48">
                  <Image src={s.image} alt={s.title} fill unoptimized className="object-cover" />
                  <div className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#1dc3b3] sm:h-11 sm:w-11">
                    <IconComp size={16} className="text-white" />
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[#1e2746] sm:text-lg">{s.title}</p>
                  <p className="text-4xl font-black leading-none text-gray-400 sm:text-5xl">{s.id}</p>
                </div>
                {/* <span className="flex shrink-0 items-center gap-1 rounded-full bg-[#1dc3b3] px-3 py-2 text-[10px] font-bold uppercase tracking-wide text-white sm:px-5 sm:text-[11px] lg:text-sm">
                  <Plus size={14} strokeWidth={3} /> Read More
                </span> */}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
