"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

export default function IndustryLeader() {
    const brands = [
        { name: "Google", src: "/google.png" },
        { name: "Walmart", src: "/walmart.png" },
        { name: "Amazon", src: "/amazon.png" },
        { name: "Airbnb", src: "/airbnb.png" },
        { name: "Maersk", src: "/maersk.png" },
        { name: "DoorDash", src: "/doordash.png" },
        { name: "Mindvalley", src: "/mindvalley.png" },
        { name: "SEMrush", src: "/semrush.png" },
    ];

    const firstRow = brands.slice(0, 4);
    const secondRow = brands.slice(4, 8);

    const repeatedFirstRow = [...firstRow, ...firstRow, ...firstRow];
    const repeatedSecondRow = [...secondRow, ...secondRow, ...secondRow];

    const vlines = [
        { left: "20%", delay: "2s" },
        { left: "40%", delay: "0.8s" },
        { left: "55%", delay: "1.6s" },
        { left: "70%", delay: "0s" },
        { left: "85%", delay: "1.2s" },
    ];

    return (
        <section
            className="bg-[#edf6ff] lg:pt-6 py-4"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <style>{`
                @keyframes moveLeftBounces-one {
                    0% { top: -150px; }
                    100% { top: 110%; }
                }

                @keyframes marqueeLeft {
                    0% { transform: translate3d(0, 0, 0); }
                    100% { transform: translate3d(-33.333%, 0, 0); }
                }

                @keyframes marqueeRight {
                    0% { transform: translate3d(-33.333%, 0, 0); }
                    100% { transform: translate3d(0, 0, 0); }
                }

                .industry-v-line {
                    position: absolute;
                    top: 0;
                    height: 100%;
                    width: 1px;
                    background: #cedfef;
                    overflow: hidden;
                    pointer-events: none;
                    z-index: 0;
                }

                .industry-v-line::after {
                    content: "";
                    display: block;
                    position: absolute;
                    height: 150px;
                    width: 100%;
                    top: -150px;
                    left: 0;
                    background-image: linear-gradient(
                        180deg,
                        transparent 0%,
                        #48d6a8 40%,
                        #ffffff 60%,
                        #48d6a8 80%,
                        transparent 100%
                    );
                    animation: moveLeftBounces-one 3.5s linear infinite;
                    animation-delay: var(--line-delay);
                }

                .logo-row-wrap {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                }

                .logo-marquee {
                    display: flex;
                    width: max-content;
                    will-change: transform;
                }

                .logo-marquee-left {
                    animation: marqueeLeft 16s linear infinite;
                }

                .logo-marquee-right {
                    animation: marqueeRight 16s linear infinite;
                }

                .logo-item {
                    flex: 0 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50vw;
                    max-width: 140px;
                    min-width: 140px;
                    height: 70px;
                    padding: 8px 16px;
                }

                .logo-box {
                    position: relative;
                    width: 100px;
                    height: 32px;
                }

                @media (min-width: 1024px) {
                    .logo-item {
                        width: 25%;
                        max-width: 160px;
                        min-width: 160px;
                        height: 92px;
                        padding: 12px 20px;
                    }

                    .logo-box {
                        width: 120px;
                        height: 38px;
                    }
                }
            `}</style>

            {vlines.map((line, i) => (
                <div
                    key={i}
                    className="industry-v-line"
                    style={
                        {
                            left: line.left,
                            "--line-delay": line.delay,
                        } as CSSProperties
                    }
                />
            ))}

            <div
                className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-5 z-50 lg:pb-12 pb-4"
                style={{ position: "relative", zIndex: 1 }}
            >
                <div className="flex items-center justify-center px-2 lg:pb-10 pb-6 md:col-span-2">
                    <div className="w-full max-w-[400px]">
                        <p className="text-3xl font-light leading-tight text-[#5d6778] lg:text-5xl mb-1 text-center md:text-left">
                            Trusted by
                        </p>
                        <h2 className="text-3xl font-semibold leading-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#17ae8f_0%,#539ae2_50%,#5a8fc8_100%)] lg:text-[45px] text-center md:text-left">
                            Industry Leaders
                        </h2>
                    </div>
                </div>

                <div className="md:col-span-3 flex flex-col justify-center gap-2 lg:gap-4. lg:mb-16 mb-10">
                    <div className="logo-row-wrap">
                        <div className="logo-marquee logo-marquee-left">
                            {repeatedFirstRow.map((brand, index) => (
                                <div key={`row1-${brand.name}-${index}`} className="logo-item">
                                    <div className="logo-box">
                                        <Image
                                            src={brand.src}
                                            alt={brand.name}
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="logo-row-wrap">
                        <div className="logo-marquee logo-marquee-right">
                            {repeatedSecondRow.map((brand, index) => (
                                <div key={`row2-${brand.name}-${index}`} className="logo-item">
                                    <div className="logo-box">
                                        <Image
                                            src={brand.src}
                                            alt={brand.name}
                                            fill
                                            className="object-contain"
                                            unoptimized
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}