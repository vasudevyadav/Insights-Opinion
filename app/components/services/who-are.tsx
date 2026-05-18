"use client";

import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-8 lg:mt-0 lg:py-8">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[42%] opacity-30">
                <svg
                    viewBox="0 0 300 300"
                    className="h-full w-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="hexPattern"
                            x="0"
                            y="0"
                            width="51"
                            height="42"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M13 1H39L52 22.5L39 44H13L0 22.5L13 1Z"
                                stroke="#9EDFF2"
                                strokeWidth="1.2"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexPattern)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto lg:mb-10 max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Top Content */}
                <div className="mx-auto max-w-5xl text-center">
                    <h2
                        className="bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text
                        text-[24px] font-semibold leading-tight text-transparent
                        sm:text-[28px] md:text-[32px] lg:text-[40px]"
                    >
                        Who We Are
                    </h2>

                    <p
                        className="mx-auto mt-3 max-w-4xl text-[14px] leading-6 text-[#4b5563]
                        sm:text-[14px] md:text-[15px] lg:mt-2 lg:text-[15px]"
                    >
                        Welcome to Insights Opinion, where we provide actionable insights through
                        expert data collection and research solutions. As a global leader in market
                        research and data services, we empower businesses with the critical
                        knowledge they need to make well-informed decisions.
                    </p>
                </div>

                <div
                    className="mt-8 grid items-center gap-8
                    md:mt-10 md:gap-10
                    lg:mt-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10"
                >
                    {/* Left Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="w-full max-w-[560px] overflow-hidden rounded-[18px] shadow-md sm:rounded-[22px]">
                            <Image
                                src="/about-us/evolution-img.webp"
                                alt="Who We Are"
                                width={620}
                                height={360}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="mx-auto w-full lg:max-w-md text-center lg:mx-0 lg:text-left">
                        <p className="text-[24px] font-light leading-none text-[#334155] sm:text-[26px] lg:text-[34px]">
                            Our
                        </p>

                        <h3
                            className="bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text
                            text-[26px] font-medium leading-tight text-transparent
                            sm:text-[30px] md:text-[34px] lg:text-[40px]"
                        >
                            Evolution
                        </h3>

                        <p className="mt-4 text-[14px] leading-6 text-[#4b5563] sm:text-[15px] lg:mt-5 lg:text-base">
                            Since our founding in 2018, we have grown from a small, dedicated team
                            into a global leader in data-driven decision-making. Our journey
                            reflects our commitment to continuous innovation, strategic expansion,
                            and a relentless focus on adding value to our clients.
                        </p>

                        <p className="mt-4 text-[14px] leading-6 text-[#4b5563] sm:text-[15px] lg:mt-5 lg:text-base">
                            Here’s how we’ve evolved:
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}