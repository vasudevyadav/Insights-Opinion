import React from "react";
import Image from "next/image";
import BackgroundShape from "./background-shape";

const awards = [
    {
        year: "2021",
        title: "Top\n22 Panel\nCompany",
        description:
            "Recognized by Quirks Media as one of the leading panel companies globally.",
    },
    {
        year: "2022",
        title: "Top\n22 Panel\nCompany",
        description:
            "Honored by Quirks Media for our outstanding contributions to healthcare research.",
    },
    {
        year: "2023",
        title: "Top\n22 Panel\nCompany",
        description:
            "Ranked by Quirks Media among the top companies specializing in telephone interviewing (CATI). ",
    },
];

export default function Award() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-12 lg:py-16">
            <BackgroundShape variant={4} className="-right-20 top-4 w-[300px] opacity-50 lg:-right-4 lg:w-[430px]" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
                {/* Heading */}
                <div className="mx-auto mb-6 max-w-[760px] text-center">
                    <h2 className="inline-block bg-[#dcecf8] px-2 lg:-mt-10 text-[24px] font-medium leading-tight 
                    bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent 
                     lg:text-[36px]">
                        Awards & Recognitions
                    </h2>
                    <p className="mx-auto mt-2 max-w-[700px] text-[12px] leading-relaxed text-[#4b5563] lg:text-[15px]">
                        Our commitment to excellence has earned us numerous accolades in the industry. These
                        awards are a testament to the trust our clients place in us and our relentless pursuit of
                        quality and innovation.
                    </p>
                </div>

                <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:gap-x-16 lg:overflow-visible lg:pb-0">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="flex min-w-[82%] snap-center flex-col items-center rounded-2xl border border-[#d5e6f2] bg-white/75 p-5 text-center shadow-sm sm:min-w-[46%] lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
                        >
                            <div className="relative mb-4 h-[135px] w-[135px] lg:h-[190px] lg:w-[190px]">
                                <Image
                                    src="/about-us/award.png"
                                    alt={`Award badge ${award.year}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="text-lg font-semibold leading-none text-[#4fc2cf] lg:text-3xl bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent">
                                {award.year}
                            </h3>

                            <p className="mt-4 max-w-[240px] text-xs leading-snug text-[#4b5563] lg:text-base mb-4">
                                {award.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
