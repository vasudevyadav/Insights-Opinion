"use client";
import Image from "next/image";

const timelineItems = [
    { top: "Market and", bottom: "customer understanding" },
    { top: "Concept, pricing,", bottom: "and message testing" },
    { top: "Brand perception and", bottom: "awareness measurement" },
    { top: "Healthcare and B2B", bottom: "research support" },
    { top: "Ongoing tracking", bottom: "and experience studies" },
];

const HexSVGBackground = () => (
    <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.35 }}
    >
        <defs>
            <pattern
                id="hex-svg-pattern"
                x="0"
                y="0"
                width="90"
                height="104"
                patternUnits="userSpaceOnUse"
            >
                <path
                    d="M45 2 L88 25 L88 79 L45 102 L2 79 L2 25Z"
                    fill="none"
                    stroke="#80d0e0"
                    strokeWidth="1.2"
                />
            </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-svg-pattern)" />
    </svg>
);

export default function MarketResearch() {
    return (
        <section className="relative overflow-hidden bg-[#eef7ff] py-12 md:py-12">
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
                <h1 className="mb-6 text-center text-2xl font-medium leading-tight lg:text-[38px]">
                    <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text text-transparent">
                        Market Research Company
                    </span>
                    <span className="text-[#1e2a4e] font-normal">in Chicago</span>
                </h1>
                <div className="mx-auto mb-16 max-w-7xl text-center">
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
                <div className="mb-20 grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    <div>
                        <h2 className="mb-5 text-[22px] font-medium leading-snug lg:text-3xl">
                            <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text font-semibold text-transparent">
                                Market Research Services
                            </span>
                            <br />
                            <span className="text-[#1e2a4e]">in Chicago for Data-Driven <br /> Decisions</span>
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
                            className="h-[240px] w-full object-cover lg:h-[350px]"
                        />
                    </div>
                </div>
                <div className="mb-16 overflow-x-auto pb-2">
                    <div className="flex min-w-[620px] items-end">
                        {timelineItems.map((item, index) => (
                            <div key={index} className="flex flex-1 flex-col items-center">
                                <div className="mb-3 px-1 text-center">
                                    <p className="text-xs leading-[1.4] text-[#1e2a4e] lg:text-sm">
                                        {item.top}
                                    </p>
                                    <p className="text-xs leading-[1.4] text-[#1e2a4e] lg:text-sm">
                                        {item.bottom}
                                    </p>
                                </div>
                                <div className="flex w-full items-center">
                                    {index === 0 ? (
                                        <div className="flex-1" />
                                    ) : (
                                        <div className="h-[1.5px] flex-1 bg-black" />
                                    )}
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#14b3a1] to-[#5ba8fb] shadow-sm">
                                        <div className="h-[15px] w-[15px] rounded-full bg-white" />
                                    </div>
                                    {index < timelineItems.length - 1 ? (
                                        <div className="flex flex-1 items-center">
                                            <div className="h-[1.5px] flex-1 bg-black" />
                                            <svg
                                                width="7"
                                                height="9"
                                                viewBox="0 0 7 9"
                                                fill="none"
                                                className="flex-shrink-0"
                                            >
                                                <path d="M0 0L7 4.5L0 9V0Z" fill="#000" fillOpacity="100" />
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

                <div className="relative overflow-hidden rounded-[24px] px-4 py-4 lg:px-8 lg:py-4">
                    <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[2fr_1.5fr] lg:gap-12">

                        <div className="flex flex-col justify-start pt-1">

                            <div className="grid grid-cols-2 gap-10">
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-[22px] font-medium leading-[1.3] lg:text-3xl">
                                        <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text font-semibold text-transparent">
                                            Insights Opinion
                                        </span>
                                        <br />
                                        <span className="text-[#1e2a4e]">Offers:</span>
                                    </h3>

                                    <div
                                        className="rounded-[14px] px-5 py-4 text-xs leading-[1.55] text-white lg:text-sm min-h-[80px] line-clamp-2"
                                        style={{ background: "linear-gradient(135deg, #14b3a1, #5bc4e8)" }}
                                    >
                                        Access to <strong>8M+</strong> global panelists
                                    </div>
                                    <div
                                        className="rounded-[14px] px-5 py-4 text-xs leading-[1.55] text-white lg:text-sm min-h-[80px] line-clamp-2"
                                        style={{ background: "linear-gradient(135deg, #14b3a1, #5bc4e8)" }}
                                    >
                                        Experience across <strong>healthcare,</strong> B2B, and consumer sectors
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    <div
                                        className="rounded-[14px] px-5 py-4 text-xs leading-[1.55] text-white lg:text-sm min-h-[80px] line-clamp-2"
                                        style={{ background: "linear-gradient(135deg, #1ab0a5, #48b8d8)" }}
                                    >
                                        Coverage across <strong>100+ countries</strong> and <strong>60+</strong> languages
                                    </div>
                                    <div
                                        className="rounded-[14px] px-5 py-4 text-xs leading-[1.55] text-white lg:text-sm min-h-[80px] line-clamp-2"
                                        style={{ background: "linear-gradient(135deg, #1aaea0, #2d9fba)" }}
                                    >
                                        <strong>Multi-method</strong> capabilities across quant and qual
                                    </div>
                                    <div
                                        className="rounded-[14px] px-5 py-4 text-xs leading-[1.55] text-white lg:text-sm min-h-[80px] line-clamp-2"
                                        style={{ background: "linear-gradient(135deg, #1aaea0, #2d9fba)" }}
                                    >
                                        <strong>Clear delivery process</strong> from design through reporting
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col justify-start">

                            <h3 className="mb-4 text-xl font-normal leading-[1.5] text-[#1e2a4e] lg:text-3xl">
                                Why Organizations in Chicago
                                <br />
                                <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text font-semibold text-transparent">
                                    Work With Insights Opinion?
                                </span>
                            </h3>

                            <p className="text-xs lg:text-base leading-[1.7] text-[#1e2a4e]">
                                When teams review market research firms in Chicago,
                                they usually want reliable data, a clear process, and
                                delivery that stays on track. Insights Opinion supports
                                that with global reach, strong fieldwork structure, and
                                research methods that fit both focused and
                                large-scale studies.
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}