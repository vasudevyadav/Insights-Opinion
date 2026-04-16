"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const useCases = [
    "Product Launch Research",
    "Treatment Adoption Analysis",
    "Patient Journey Research",
    "Brand Perception Studies",
    "Healthcare Pricing Research",
];

export default function HealthUsecases() {
    const [activeCount, setActiveCount] = useState(0);
    const timerRef = useRef<NodeJS.Timeout[]>([]);

    const startAnimation = () => {
        timerRef.current.forEach(clearTimeout);
        timerRef.current = [];
        setActiveCount(0);

        useCases.forEach((_, i) => {
            const timer = setTimeout(() => {
                setActiveCount(i + 1);
            }, i * 500);
            timerRef.current.push(timer);
        });
    };

    useEffect(() => {
        startAnimation();

        return () => {
            timerRef.current.forEach(clearTimeout);
        };
    }, []);

    return (
        <section
            data-aos="fade-up"
            className="relative w-full overflow-hidden"
        >
            <div className="relative min-h-[150px] w-full px-4 py-6 sm:px-6 md:px-10 md:py-8">
                <Image
                    src="/market-research/use-casses-image.png"
                    alt="Healthcare use cases background"
                    fill
                    priority
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-[#071a3a]/72" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0f2d63]/35 via-[#0c234d]/45 to-[#08162f]/60" />

                <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
                    <h2 className="text-[24px] font-semibold leading-tight text-[#35d1c6] sm:text-[30px] md:text-[40px]">
                        Healthcare Market Research
                    </h2>

                    <p className="mt-1 text-[20px] font-light leading-none text-white sm:text-[26px] md:text-[38px]">
                        Use Cases
                    </p>

                    <p className="mb-5 mt-1 text-[12px] text-white/90 sm:text-[14px] md:text-[18px]">
                        Examples:
                    </p>

                    <div className="relative mt-6 flex w-full items-start justify-center">
                        <div className="relative z-10 mb-5 flex w-full max-w-5xl flex-wrap items-start justify-center gap-y-5 md:flex-nowrap md:justify-between">
                            {useCases.map((item, index) => {
                                const isActive = activeCount > index;

                                return (
                                    <div
                                        key={item}
                                        className="flex w-[110px] flex-col items-center text-center sm:w-[120px] md:w-[135px]"
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
                                                <span className="absolute inset-0 rounded-full border border-[#34d7c7]/40 animate-ping" />
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