"use client";

import React from "react";
import Image from "next/image";

export default function BookDemo() {
    const vlines = [
        { left: "16%", delay: "0s" },
        { left: "34%", delay: "0.8s" },
        { left: "52%", delay: "1.6s" },
        { left: "70%", delay: "0.4s" },
        { left: "88%", delay: "1.2s" },
    ];

    return (
        <section className="relative overflow-hidden bg-[#eef4fa] pt-0 lg:pt-16">
            <style>{`
        @keyframes moveLineGlow {
          0% { top: -140px; }
          100% { top: 110%; }
        }

        .demo-v-line {
          position: absolute;
          top: 0;
          height: 100%;
          width: 1px;
          background: #dbe5ef;
          pointer-events: none;
          z-index: 0;
        }

        .demo-v-line::after {
          content: "";
          position: absolute;
          top: -140px;
          left: 0;
          width: 100%;
          height: 140px;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(72, 214, 168, 0.12) 20%,
            rgba(72, 214, 168, 0.7) 48%,
            rgba(83, 154, 226, 0.9) 65%,
            rgba(72, 214, 168, 0.35) 82%,
            transparent 100%
          );
          animation: moveLineGlow 3.8s linear infinite;
          animation-delay: var(--line-delay);
        }
      `}</style>

            {vlines.map((line, i) => (
                <div
                    key={i}
                    className="demo-v-line"
                    style={
                        {
                            left: line.left,
                            ["--line-delay" as any]: line.delay,
                        } as React.CSSProperties
                    }
                />
            ))}

            <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-8 lg:px-10">
                <div className="relative min-h-[320px] overflow-hidden lg:min-h-[450px]">

                    <div className="pointer-events-none absolute -bottom-7 w-full h-[500px] hidden md:block">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 1200 360"
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <linearGradient
                                    id="bookDemoBorderGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop offset="0%" stopColor="#25c2a7" />
                                    <stop offset="100%" stopColor="#66a9ff" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M40,28 L1140,74 Q1170,76 1170,102 L1170,320 Q1170,340 1148,340 L42,340 Q20,340 20,318 L20,48 Q20,26 40,28 Z"
                                fill="none"
                                stroke="url(#bookDemoBorderGradient)"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </div>

                    <div className="relative z-10 flex min-h-[320px] flex-col md:min-h-[360px] md:flex-row md:items-end lg:min-h-[325px]">

                        <div className="flex w-full items-center px-6 pb-8 pt-10 md:w-[52%] md:px-14 md:pb-14 md:pt-0 lg:w-[48%] lg:px-16">
                            <div >
                                <h2 className="text-3xl font-light leading-[1.15] text-[#202020] lg:text-[45px]">
                                    Book a Demo &
                                </h2>

                                <h2
                                    className="bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-3xl font-semibold leading-tight text-transparent lg:text-[45px]"

                                >
                                    See Us In Action
                                </h2>

                                <p className="mt-5 max-w-[500px] text-sm leading-7 text-[#555b66] md:text-base">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                                    standard dummy text ever since the 1500s.
                                </p>

                                <button
                                    className="mt-8 rounded-full px-12 py-3 text-lg font-semibold text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, #41b894 0%, #47a88d 100%)",
                                    }}
                                >
                                    Book Demo
                                </button>
                            </div>
                        </div>

                        {/* right image */}
                        <div className="relative flex w-full items-end justify-end md:w-[48%] lg:w-[52%]">
                            <div className="relative h-[260px] w-full lg:h-[450px]">
                                <Image
                                    src="/book-demo.png"
                                    alt="Book demo support agent"
                                    fill
                                    priority
                                    className="object-contain object-bottom md:object-right-bottom"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}