"use client";

import React from "react";
import Image from "next/image";

const partnershipPoints = [
    {
        title: "Industry Associations:",
        description:
            "We are proud corporate members of ESOMAR, the Insights Association, and the Company Partner of the Market Research Society (MRS). These affiliations reinforce our commitment to upholding the highest standards in the industry.",
    },
    {
        title: "Compliance:",
        description:
            "We adhere to the highest standards of data protection, fully complying with GDPR, CCPA, and TCPA regulations. Our commitment to safeguarding data ensures that our clients’ information is handled with the utmost care and integrity.",
    },
];

export default function PartnershipsAffiliations() {
    return (
        <section className="relative overflow-hidden bg-[#edf4fb] py-8 lg:py-10">
            {/* Top Right Hexagon Pattern */}
            <div className="pointer-events-none absolute right-0 top-0 h-[180px] w-[300px] opacity-100 lg:h-[220px] lg:w-[420px]">
                <svg
                    viewBox="0 0 420 220"
                    className="h-full w-full"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="hexPatternTopRight"
                            x="0"
                            y="0"
                            width="42"
                            height="36"
                            patternUnits="userSpaceOnUse"
                        >
                            <polygon
                                points="10,1 31,1 41,18 31,35 10,35 0,18"
                                fill="none"
                                stroke="#c8deed"
                                strokeWidth="1.2"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexPatternTopRight)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
                {/* Top Heading */}
                <div className="mx-auto max-w-[980px] text-center">
                    <h2
                        className="text-[22px] font-medium leading-tight 
            bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent 
            lg:text-[40px]"
                    >
                        Partnerships & Affiliations
                    </h2>

                    <p className="mx-auto mt-2 max-w-[920px] text-[12px] leading-[1.7] text-[#3f4a5f] lg:text-[15px]">
                        Our success at Insights Opinion is built on strong partnerships and
                        affiliations with leading organizations across the market research
                        industry. By collaborating with key industry associations, we ensure
                        that our practices are at the forefront of industry standards,
                        trends, and best practices, consistently delivering exceptional
                        value to our clients.
                    </p>
                </div>

                {/* Middle Content */}
                <div className="mt-8 grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                    {/* Left Text */}
                    <div className="max-w-[470px]">
                        {partnershipPoints.map((item, index) => (
                            <div key={index} className={index !== 0 ? "mt-6" : ""}>
                                <h3
                                    className="text-[20px] font-medium leading-tight 
                  bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent"
                                >
                                    {item.title}
                                </h3>

                                <p className="mt-1.5 text-[12px] leading-[1.7] text-[#3f4a5f] lg:text-[14px]">
                                    {item.description}
                                </p>
                            </div>
                        ))}

                        <p className="mt-6 text-[12px] leading-[1.7] text-[#3f4a5f] lg:text-[14px]">
                            These partnerships and our dedication to compliance highlight our
                            commitment to excellence and integrity in every aspect of our
                            work.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="mx-auto w-full max-w-[640px]">
                        <div className="relative aspect-[1.45/0.85] overflow-hidden rounded-[26px]">
                            <Image
                                src="/about-us/our-social.png"
                                alt="Partnerships and Affiliations"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-12 text-center">
                    <h3
                        className="text-[22px] font-medium leading-tight 
            bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent 
            lg:text-[40px] mb-2"
                    >
                        Empower Your Business with Insights Opinion
                    </h3>

                    <p className="mx-auto mt-3 w-11/12 text-[12px] leading-[1.8] text-[#3f4a5f] lg:text-[15px]">
                        At Insights Opinion, we are more than just a data provider, we are
                        your strategic partner in transforming data into actionable insights
                        that drive business success. Our commitment to quality, innovation,
                        and client satisfaction sets us apart, and we are dedicated to
                        helping you achieve your goals with confidence and clarity. Discover
                        how our expertise can empower your organization to achieve its goals
                        with clarity and confidence.
                    </p>

                    <button className="mt-6 rounded-lg bg-gradient-to-r from-[#33c1b8] to-[#5db8ff] px-6 py-2 text-base font-semibold uppercase tracking-[0.04em] text-white shadow-sm lg:px-7 lg:py-2.5">
                        Request Callback
                    </button>
                </div>
            </div>
        </section>
    );
}