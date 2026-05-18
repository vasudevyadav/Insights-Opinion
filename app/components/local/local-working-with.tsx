"use client";

import Image from "next/image";

const checklistItems = [
    "Clearly defined research scopes and timelines",
    "Methodologies aligned with business objectives",
    "Transparent communication during fieldwork",
    "Structured outputs that support internal discussions",
];

export default function LocalWorkingWith() {
    return (
        <section className="relative overflow-hidden ">
            <div className="absolute inset-0">
                <Image
                    src="/local/working-on.png"
                    alt="Working With Insights Opinion"
                    fill
                    className="object-cover object-center-top"
                    unoptimized
                />
            </div>

            <div className="relative z-10 mx-auto flex max-w-7xl items-center px-4 sm:px-6 lg:px-8">
                <div className="ml-auto w-full max-w-[520px] py-16 lg:py-24 lg:pt-40">
                    <h2 className="mb-5 text-[28px] font-light leading-tight text-white lg:text-[40px]">
                        Working With
                        <br />
                        <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text font-semibold text-transparent">
                            Insights Opinion
                        </span>
                    </h2>

                    <p className="mb-8 text-sm leading-7 text-white/80 lg:text-base">
                        Clients usually come to us with a clear business question and a decision they need to
                        support. As a reliable{" "}
                        <strong className="font-semibold text-white">
                            market research agency in Chicago
                        </strong>
                        , we keep the process structured, transparent, and easy to manage.
                    </p>

                    <p className="mb-4 text-lg font-semibold text-[#17afa1]">
                        What we offer includes:
                    </p>

                    <ul className="mb-8 space-y-3">
                        {checklistItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#14b3a1] to-[#5ba8fb]">
                                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                        <path
                                            d="M1 4L3.5 6.5L9 1"
                                            stroke="white"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </span>
                                <span className="text-sm leading-6 text-white/85 lg:text-base">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="text-sm leading-7 text-white/65 lg:text-base">
                        <span className="cursor-pointer font-medium text-[#17afa1] underline underline-offset-2">
                            Based on the study scope,
                        </span>{" "}
                        clients working with market research firms in Chicago typically receive a topline
                        summary, a detailed report, cross-tabulations and data tables, dashboards or visual
                        summaries, and raw data files.
                    </p>
                </div>
            </div>
        </section>
    );
}
