"use client";

import Image from "next/image";

export default function OurMission() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-10 lg:py-14">

            <div className="pointer-events-none absolute -right-56 top-0 h-full w-[44%] opacity-60">
                <svg
                    viewBox="0 0 320 420"
                    className="h-full w-full"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="hexPatternRight"
                            x="0"
                            y="0"
                            width="42"
                            height="36"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M10.5 1H31.5L42 18L31.5 35H10.5L0 18L10.5 1Z"
                                stroke="#b8e8f6"
                                strokeWidth="1"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexPatternRight)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
                <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">

                    <div className="max-w-xl lg:pl-10">
                        <p className="mb-2 text-[28px] font-light leading-none text-[#4b5563] lg:text-[34px]">
                            Our
                        </p>

                        <h2 className="text-[28px] font-medium leading-tight 
            bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent 
            lg:text-[40px]">
                            Mission
                        </h2>

                        <p className="mt-3 text-xs leading-6 text-gray-700 lg:text-base">
                            At Insights Opinion, our mission is to empower organizations with
                            accurate and insightful data that fuels impactful decision-making.
                            We firmly believe in the transformative power of data and are
                            dedicated to delivering top-quality research services that turn
                            information into a strategic advantage.
                        </p>

                    </div>


                    <div className="flex justify-center lg:justify-end">
                        <div className="relative z-10 overflow-hidden rounded-[22px]">
                            <Image
                                src="/about-us/our-mission.png"
                                alt="Our Mission"
                                width={700}
                                height={420}
                                className="h-auto w-full max-w-[610px] object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}