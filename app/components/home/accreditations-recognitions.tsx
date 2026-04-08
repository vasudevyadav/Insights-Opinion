"use client";

import React, { useEffect } from "react";
// @ts-ignore - no type declarations for 'aos'
import AOS from "aos";

export default function AccreditationsRecognitions() {
    const vlines = [
        { left: "14%", delay: "0s" },
        { left: "28%", delay: "0.8s" },
        { left: "42%", delay: "1.6s" },
        { left: "56%", delay: "0.4s" },
        { left: "70%", delay: "1.2s" },
        { left: "84%", delay: "2s" },
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            AOS.refreshHard();
        }, 250);

        return () => clearTimeout(timer);
    }, []);

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

        [data-aos="recognition-image-rise"] {
          opacity: 0;
          transform: translate3d(0, 80px, 0) scale(0.97);
          transition-property: transform, opacity;
        }

        [data-aos="recognition-image-rise"].aos-animate {
          opacity: 1;
          transform: translate3d(0, 0, 0) scale(1);
        }

        [data-aos="soft-fade-up"] {
          opacity: 0;
          transform: translate3d(0, 35px, 0);
          transition-property: transform, opacity;
        }

        [data-aos="soft-fade-up"].aos-animate {
          opacity: 1;
          transform: translate3d(0, 0, 0);
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

            <div className="relative z-10 px-6 lg:px-16">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-4 justify-between lg:mb-10 lg:flex lg:items-center">
                        <h2
                            className="bg-gradient-to-r from-[#29c7c3] via-[#2fa9d6] to-[#4169e1] bg-clip-text text-3xl font-semibold leading-tight text-transparent lg:text-[40px]"
                            data-aos="soft-fade-up"
                            data-aos-duration="900"
                        >
                            Accreditations <br /> & Recognitions
                        </h2>

                        <p
                            className="mt-5 max-w-2xl text-sm leading-7 text-[#4b5563] sm:text-base"
                            data-aos="soft-fade-up"
                            data-aos-delay="140"
                            data-aos-duration="900"
                        >
                            Insights Opinion is recognized for its commitment to research quality,
                            data security, and dependable execution. From ISO 20252 and ISO 27001
                            certifications to recognition from Quirk’s, Silicon India, and Forbes,
                            these credentials reflect the standards expected from trusted top market
                            research firms.
                        </p>
                    </div>
                </div>

                <div
                    className="relative lg:-mt-[80px] lg:p-0"
                    data-aos="recognition-image-rise"
                    data-aos-delay="120"
                    data-aos-duration="1200"
                >
                    <div>
                        <img
                            src="/recognitions.gif"
                            alt="Accreditations and recognitions"
                            className="hidden h-[500px] w-full object-cover object-center transition-transform duration-700 lg:block"
                        />
                    </div>

                    <img
                        src="/recognitions-mob.gif"
                        alt="Accreditations and recognitions"
                        className="block h-[700px] w-full object-cover object-center transition-transform duration-700 lg:hidden"
                    />
                </div>
            </div>
        </section>
    );
}