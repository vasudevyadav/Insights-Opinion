"use client";

import Image from "next/image";

const timelineItems = [
    { top: "Market and", bottom: "customer understanding" },
    { top: "Concept, pricing,", bottom: "and message testing" },
    { top: "Brand perception and", bottom: "awareness measurement" },
    { top: "Healthcare and B2B", bottom: "research support" },
    { top: "Ongoing tracking", bottom: "and experience studies" },
];

export default function MarketResearch() {
    return (
        <section className="relative overflow-hidden bg-[#eef7ff] py-12 md:py-16">
            {/* Hexagon Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                    backgroundImage: "url('/case-studies/hexagon-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "repeat",
                }}
            />

            <button className="fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 rounded-l-[16px] bg-gradient-to-b from-[#19b5a7] to-[#59aaf7] px-3 py-5 text-[11px] font-semibold uppercase tracking-widest text-white shadow-lg [writing-mode:vertical-rl] lg:block">
                Request Callback
            </button>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <h1 className="mb-6 text-center text-2xl font-semibold leading-tight lg:text-[40px]">
                    <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text text-transparent">
                        Market Research Company
                    </span>{" "}
                    <span className="text-[#1e2a4e]">in Chicago</span>
                </h1>


                <div className="mx-auto mb-20 max-w-7xl text-center">
                    <p className="text-sm leading-[1.75] text-[#1e2a4e] lg:text-base">
                        Chicago businesses often work in categories where decisions need proof, not assumptions.
                        Whether the goal is to understand customers, test pricing, refine messaging, or improve
                        experience, strong research helps teams move with more clarity.
                    </p>
                    <p className="mt-3 text-sm leading-[1.75] text-[#1e2a4e] lg:text-base">
                        Insights Opinion is a trusted global market research company in Chicago that supports
                        organizations with precise data, structured methodologies, and insights that lead to real
                        business decisions. For teams comparing options, our market research services in
                        Chicago are built to be practical, clear, and easy to use across departments.
                    </p>
                </div>

                <div className="mb-14 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                        <h2 className="mb-5 text-[22px] font-semibold leading-snug lg:text-3xl">
                            <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text text-transparent">
                                Market Research Services
                            </span>
                            <br />
                            <span className="text-[#1e2a4e]">in Chicago for Data-Driven Decisions</span>
                        </h2>
                        <p className="mt-3 text-sm leading-[1.75] text-[#1e2a4e] lg:text-base">
                            If you are looking for market research services in Chicago, the priority should be
                            simple: get evidence you can use. Chicago businesses often serve broad customer
                            groups, multiple regions, and competitive sectors, so research needs to stay focused
                            and decision-ready. As a dependable market research agency in Chicago, Insights
                            Opinion aligns the study design with your business question, target audience,
                            and timeline.
                        </p>
                    </div>

                    <div className="overflow-hidden rounded-[18px] shadow-lg">
                        <Image
                            src="/local/local-market.png"
                            alt="Market Research Services"
                            width={680}
                            height={420}
                            className="h-[240px] w-full object-cover sm:h-[280px] lg:h-[320px]"
                        />
                    </div>
                </div>

                {/* ── 3. Timeline ── */}
                <div className="mb-16 overflow-x-auto pb-2">
                    <div className="flex min-w-[620px] items-end">
                        {timelineItems.map((item, index) => (
                            <div key={index} className="flex flex-1 flex-col items-center">
                                {/* Label */}
                                <div className="mb-3 px-1 text-center">
                                    <p className="text-[11px] leading-[1.4] text-[#1e2a4e] lg:text-[12px]">
                                        {item.top}
                                    </p>
                                    <p className="text-[11px] leading-[1.4] text-[#1e2a4e] lg:text-[12px]">
                                        {item.bottom}
                                    </p>
                                </div>

                                {/* Dot row with connecting lines */}
                                <div className="flex w-full items-center">
                                    {/* Left line (hidden for first item) */}
                                    {index === 0 ? (
                                        <div className="flex-1" />
                                    ) : (
                                        <div className="h-[1.5px] flex-1 bg-[#1e2a4e]/25" />
                                    )}

                                    {/* Dot */}
                                    <div className="flex h-[28px] w-[28px] flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#14b3a1] to-[#5ba8fb] shadow-sm">
                                        <div className="h-[10px] w-[10px] rounded-full bg-white" />
                                    </div>

                                    {/* Right line + arrow (hidden for last item) */}
                                    {index < timelineItems.length - 1 ? (
                                        <div className="flex flex-1 items-center">
                                            <div className="h-[1.5px] flex-1 bg-[#1e2a4e]/25" />
                                            <svg
                                                width="7"
                                                height="9"
                                                viewBox="0 0 7 9"
                                                fill="none"
                                                className="flex-shrink-0"
                                            >
                                                <path d="M0 0L7 4.5L0 9V0Z" fill="#1e2a4e" fillOpacity="0.35" />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="flex-1" />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── 4. Bottom: Offers (left) + Why (right) ── */}
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* Insights Opinion Offers */}
                    <div>
                        <h3 className="mb-6 text-[18px] font-semibold sm:text-[20px]">
                            <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text text-transparent">
                                Insights Opinion
                            </span>{" "}
                            <span className="text-[#1e2a4e]">Offers:</span>
                        </h3>

                        <div className="flex flex-col gap-[10px]">
                            {/* Card 1 — dark navy, left */}
                            <div className="w-[62%] rounded-[10px] bg-[#1a3556] px-5 py-[10px]">
                                <p className="text-[13px] leading-[1.5] text-white">
                                    Access to <strong>8M+</strong> global panelists
                                </p>
                            </div>

                            {/* Card 2 — light border, right */}
                            <div className="ml-auto w-[68%] rounded-[10px] border border-[#b8d8f0] bg-white px-5 py-[10px]">
                                <p className="text-[13px] leading-[1.5] text-[#1e2a4e]">
                                    Coverage across <strong>100+</strong> countries and <strong>60+</strong> languages
                                </p>
                            </div>

                            {/* Card 3 — teal gradient, right */}
                            <div className="ml-auto w-[70%] rounded-[10px] bg-gradient-to-r from-[#14b3a1] to-[#5ba8fb] px-5 py-[10px]">
                                <p className="text-[13px] leading-[1.5] text-white">
                                    <strong>Multi-method</strong> capabilities across quant and qual
                                </p>
                            </div>

                            {/* Card 4 — light border, left */}
                            <div className="w-[65%] rounded-[10px] border border-[#b8d8f0] bg-white px-5 py-[10px]">
                                <p className="text-[13px] leading-[1.5] text-[#1e2a4e]">
                                    Experience across <strong>healthcare</strong>, B2B, and consumer sectors
                                </p>
                            </div>

                            {/* Card 5 — light border, right */}
                            <div className="ml-auto w-[68%] rounded-[10px] border border-[#b8d8f0] bg-white px-5 py-[10px]">
                                <p className="text-[13px] leading-[1.5] text-[#1e2a4e]">
                                    <strong>Clear delivery process</strong> from design through reporting
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Insights Opinion */}
                    <div className="flex flex-col justify-center">
                        <h3 className="mb-4 text-[18px] font-medium leading-[1.35] text-[#1e2a4e] sm:text-[20px] lg:text-[22px]">
                            Why Organizations in Chicago
                            <br />
                            <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text font-semibold text-transparent">
                                Work With Insights Opinion?
                            </span>
                        </h3>
                        <p className="text-[13px] leading-[1.85] text-[#1e2a4e]/75 sm:text-[14px]">
                            When teams review market research firms in Chicago, they usually want reliable data,
                            a clear process, and delivery that stays on track. Insights Opinion supports that
                            with global reach, strong fieldwork structure, and research methods that fit both
                            focused and large-scale studies.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
