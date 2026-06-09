"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const offices = [
  {
    title: "Quantitative Research Services in the USA",
    desc: "Our New York office serves US-based clients across consumer research, B2B research, and healthcare research. We are among the quantitative market research companies US businesses can engage directly for domestic and multi-country studies.",
    phone: "+1 646 475 7865",
    email: "bids@insightsopinion.com",
    address: "100 Church Street, Suite 800, New York, NY 10007",
  },
  {
    title: "Quantitative Research Services in the UK",
    desc: "Our London office supports UK and European clients across FMCG, financial services, technology, healthcare, and public sector programmes.",
    phone: "+44 20 3239 5786",
    email: "bids@insightsopinion.com",
    address: "71-75 Shelton Street, Covent Garden, London WC2H 9JQ",
  },
  {
    title: "Quantitative Research Services in India",
    desc: "Our Noida office supports Indian and Asia Pacific clients and serves as a delivery hub for multilingual fieldwork, survey programming, data processing, and CATI operations at scale.",
    phone: "+91 120 359 4799",
    email: "bids@insightsopinion.com",
    address: "E-144, Sector-63, Noida, Uttar Pradesh 201301",
  },
];

function OfficeCard({ office, expanded, onToggle }: {
  office: typeof offices[0];
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#0d1b2e]/80 backdrop-blur-sm">
      <div className="px-6 pt-5 pb-4">
        <h3 className="bg-gradient-to-r from-[#3c8df6] to-[#1dc3b3] bg-clip-text text-[16px] font-bold leading-[1.3] text-transparent sm:text-[17px]">
          {office.title}
        </h3>
        <p className="mt-2.5 text-[13px] leading-[1.7] text-white/60 sm:text-[14px]">
          {office.desc}
        </p>
        <button
          type="button"
          onClick={onToggle}
          className="mt-3 flex items-center justify-center text-white/40 transition-colors hover:text-white/70"
        >
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      {/* Contact strip */}
      <div className="flex flex-wrap gap-y-1.5 gap-x-5 border-t border-white/10 bg-[#060e1e] px-6 py-3.5">
        <div className="flex items-center gap-2 text-[12px] text-white/55">
          <Phone size={13} className="shrink-0 text-[#35d0c7]" />
          <span>{office.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-white/55">
          <Mail size={13} className="shrink-0 text-[#35d0c7]" />
          <span>{office.email}</span>
        </div>
        <div className="flex items-center gap-2 text-[12px] text-white/55">
          <MapPin size={13} className="shrink-0 text-[#35d0c7]" />
          <span>{office.address}</span>
        </div>
      </div>
    </div>
  );
}

export default function QuantGlobalServices() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-[#0a1225] py-14 lg:py-20">
      {/* Globe background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/market-research/globle-marketing-1.png"
          alt=""
          fill
          className="object-cover object-right opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1225]/98 via-[#0a1225]/80 to-[#0a1225]/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Centered heading */}
        <div className="mb-12 text-center">
          <h2 className="text-[28px] font-bold leading-tight sm:text-[36px] lg:text-[44px]">
            <span className="bg-gradient-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
              Quantitative Research Services
            </span>
          </h2>
          <p className="mt-1 text-[20px] font-semibold text-white sm:text-[24px]">
            Across Our Global Offices
          </p>
          <p className="mx-auto mt-4 max-w-[700px] text-[14px] leading-[1.75] text-white/50 sm:text-[15px]">
            Insights Opinion is a quantitative market research company US, UK, and India-based businesses can
            work with directly. We have offices in three key markets and fieldwork capability across 100+&nbsp;countries,
            so whether your study is domestic or spans multiple regions, you have a research partner on the ground.
          </p>
        </div>

        {/* Staggered cards layout */}
        <div className="mx-auto max-w-[820px]">
          {/* Row 1: USA left */}
          <div className="mb-5">
            <div className="max-w-[560px]">
              <OfficeCard
                office={offices[0]}
                expanded={expanded === 0}
                onToggle={() => setExpanded(expanded === 0 ? null : 0)}
              />
            </div>
          </div>
          {/* Row 2: UK right */}
          <div className="mb-5 flex justify-end">
            <div className="max-w-[560px] w-full">
              <OfficeCard
                office={offices[1]}
                expanded={expanded === 1}
                onToggle={() => setExpanded(expanded === 1 ? null : 1)}
              />
            </div>
          </div>
          {/* Row 3: India left */}
          <div>
            <div className="max-w-[560px]">
              <OfficeCard
                office={offices[2]}
                expanded={expanded === 2}
                onToggle={() => setExpanded(expanded === 2 ? null : 2)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
