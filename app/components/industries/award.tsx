"use client";

import React from "react";
import Image from "next/image";

const awards = [
    {
        year: "2021",
        title: "Top\n22 Panel\nCompany",
        description:
            "Recognized by Quirks Media as one of the leading panel companies globally",
    },
    {
        year: "2022",
        title: "Top\n22 Panel\nCompany",
        description:
            "Recognized by Quirks Media as one of the leading panel companies globally",
    },
    {
        year: "2023",
        title: "Top\n22 Panel\nCompany",
        description:
            "Recognized by Quirks Media as one of the leading panel companies globally",
    },
];

export default function Award() {
    return (
        <section className="relative overflow-hidden bg-[#edf4fb] py-10 lg:py-14">


            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
                {/* Heading */}
                <div className="mx-auto mb-6 max-w-[760px] text-center">
                    <h2 className="inline-block bg-[#dcecf8] px-2 lg:-mt-10 text-[24px] font-semibold leading-tight 
                    bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent 
                     lg:text-[36px]">
                        Awards & Recognitions
                    </h2>
                    <p className="mx-auto mt-2 max-w-[700px] text-[12px] leading-relaxed text-[#4b5563] lg:text-[15px]">
                        Our commitment to excellence has earned us numerous accolades in the
                        industry. These awards are a testament to the trust our clients
                        place in us and our relentless pursuit of quality and innovation.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-x-16">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center"
                        >
                            <div className="relative mb-4 h-[135px] w-[135px] lg:h-[160px] lg:w-[160px]">
                                <Image
                                    src="/about-us/award.png"
                                    alt={`Award badge ${award.year}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="text-[22px] font-semibold leading-none text-[#4fc2cf] lg:text-[28px] bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent">
                                {award.year}
                            </h3>

                            <p className="mt-2 max-w-[240px] text-[12px] leading-snug text-[#4b5563] lg:text-[14px]">
                                {award.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}