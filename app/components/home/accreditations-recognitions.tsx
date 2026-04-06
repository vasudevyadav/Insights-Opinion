"use client";

import React from "react";

export default function AccreditationsRecognitions() {
    const vlines = [
        { left: "14%", delay: "0s" },
        { left: "28%", delay: "0.8s" },
        { left: "42%", delay: "1.6s" },
        { left: "56%", delay: "0.4s" },
        { left: "70%", delay: "1.2s" },
        { left: "84%", delay: "2s" },
    ];


    return (
        <section className="relative overflow-hidden bg-[#eef5fb] py-8 lg:py-12">
            <style>{`
        @keyframes moveLineGlow {
          0% { top: -140px; }
          100% { top: 110%; }
        }

        .industry-v-line {
          position: absolute;
          top: 0;
          height: 100%;
          width: 1px;
          background: #d5e1ec;
          pointer-events: none;
          z-index: 0;
        }

        .industry-v-line::after {
          content: "";
          position: absolute;
          top: -140px;
          left: 0;
          width: 100%;
          height: 140px;
          background: linear-gradient(
            180deg,
            transparent 0%,
            rgba(72, 214, 168, 0.15) 20%,
            rgba(72, 214, 168, 0.9) 50%,
            rgba(255,255,255,0.95) 65%,
            rgba(72, 214, 168, 0.6) 80%,
            transparent 100%
          );
          animation: moveLineGlow 3.6s linear infinite;
          animation-delay: var(--line-delay);
        }
      `}</style>

            {vlines.map((line, i) => (
                <div
                    key={i}
                    className="industry-v-line"
                    style={
                        {
                            left: line.left,
                            ["--line-delay" as any]: line.delay,
                        } as React.CSSProperties
                    }
                />
            ))}

            <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-16">
                {/* top heading + paragraph */}
                <div className="lg:mb-10 mb-4 lg:flex justify-between items-center">
                    <h2 className="bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-3xl font-semibold leading-tight text-transparent lg:text-[40px]">
                        Accreditations <br /> & Recognitions
                    </h2>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#4b5563] sm:text-base">
                        Our commitment to quality and innovation has earned us prestigious
                        recognitions, establishing us as a best market research company.
                        Recognized by Forbes for having one of the most innovative CEOs and
                        selected by Silicon India among the 10 Best Market Research
                        Consultants, we continue to lead the industry.
                    </p>
                </div>

                <div className="relative lg:p-8 ">

                    <img
                        src="../accreditation.png"
                        alt="title"
                        className=" h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                </div>
            </div>
        </section>
    );
}