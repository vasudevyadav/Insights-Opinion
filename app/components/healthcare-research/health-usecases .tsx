"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type HealthUsecasesData = {
  heading?: string;
  subheading?: string;
  exampleLabel?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  useCases?: readonly string[];
};

type HealthUsecasesProps = {
  data?: HealthUsecasesData;
};

const EMPTY_USE_CASES: readonly string[] = [];

export default function HealthUsecases({ data }: HealthUsecasesProps) {
  const useCases = data?.useCases ?? EMPTY_USE_CASES;
  const [activeCount, setActiveCount] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    timerRef.current.forEach(clearTimeout);
    timerRef.current = [];
    setActiveCount(0);

    useCases.forEach((_, i) => {
      const timer = setTimeout(() => {
        setActiveCount(i + 1);
      }, i * 500);

      timerRef.current.push(timer);
    });

    return () => {
      timerRef.current.forEach(clearTimeout);
    };
  }, [useCases]);

  if (!data || useCases.length === 0) return null;

  return (
    <section data-aos="fade-up" className="relative w-full overflow-hidden">
      <div className="relative min-h-[150px] w-full px-4 py-6 sm:px-6 md:px-10 md:py-10">
        {data.backgroundImage && (
          <Image
            src={data.backgroundImage}
            alt={data.backgroundAlt || ""}
            fill
            priority
            unoptimized
            className="object-cover object-center"
          />
        )}

        <div className="absolute inset-0 bg-[#071a3a]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2d63]/35 via-[#0c234d]/45 to-[#08162f]/60" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">

          {data.subheading && (
            <p className="mb-2 text-[20px] font-light leading-none text-white sm:text-[26px] md:text-[38px]">
              {data.subheading}
            </p>
          )}

          {data.heading && (
            <h2 className="text-[24px] font-semibold leading-tight text-[#35d1c6] sm:text-[30px] md:text-[40px]">
              {data.heading}
            </h2>
          )}


          {data.exampleLabel && (
            <p className="mb-10 mt-2 text-[12px] text-white/90 sm:text-[14px] md:text-[18px]">
              {data.exampleLabel}
            </p>
          )}

          <div className="no-scrollbar relative mt-6 w-full overflow-x-auto px-1 pb-3 overscroll-x-contain md:flex md:items-start md:justify-center md:overflow-visible md:px-0 md:pb-0">
            <div className="relative z-10 mb-5 flex w-max snap-x snap-mandatory flex-nowrap items-stretch gap-4 px-1 md:w-full md:max-w-7xl md:items-start md:justify-between md:gap-10 md:px-0">
              {useCases.map((item, index) => {
                const isActive = activeCount > index;

                return (
                  <div
                    key={item}
                    className="flex min-w-[78vw] max-w-[310px] snap-center flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center md:min-w-0 md:max-w-none md:flex-1 md:justify-start md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0"
                  >
                    <div
                      className={`relative mb-5 flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${isActive
                          ? "border-[#34d7c7] bg-[#34d7c7]/10 shadow-[0_0_14px_rgba(52,215,199,0.35)]"
                          : "border-[#3f6d93] bg-[#0b2240]/30"
                        }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-6 w-6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 12.5L10 16.5L18 8.5"
                          stroke={isActive ? "#34d7c7" : "#5b89a8"}
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            strokeDasharray: 24,
                            strokeDashoffset: isActive ? 0 : 24,
                            transition:
                              "stroke-dashoffset 0.45s ease, stroke 0.35s ease",
                          }}
                        />
                      </svg>

                      {isActive && (
                        <span className="absolute inset-0 animate-ping rounded-full border border-[#34d7c7]/40" />
                      )}
                    </div>

                    <p
                      className={`mt-2 text-[10px] leading-[1.3] transition-all duration-500 lg:text-sm ${isActive ? "text-white/95" : "text-[#7ea0bd]"
                        }`}
                    >
                      {item}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
