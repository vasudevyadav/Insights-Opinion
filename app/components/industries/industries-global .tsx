import Image from "next/image";
import type { Industry } from "@/app/lib/industries-data";

type IndustriesGlobalProps = {
    industries: Industry[];
};

export default function IndustriesGlobal({ industries }: IndustriesGlobalProps) {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-12 lg:py-16">
            {/* Hex background pattern */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-[42%] opacity-30">
                <svg
                    viewBox="0 0 300 300"
                    className="h-full w-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="hexPatternGlobal"
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
                    <rect width="100%" height="100%" fill="url(#hexPatternGlobal)" />
                </svg>
            </div>
            {/* Hex background pattern left */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-[20%] opacity-20">
                <svg
                    viewBox="0 0 300 300"
                    className="h-full w-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="hexPatternLeft"
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
                    <rect width="100%" height="100%" fill="url(#hexPatternLeft)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* ── Top: Text + Image ── */}
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left: text */}
                    <div>
                        <p className="text-xl font-normal leading-snug text-[#4b5563] sm:text-[17px] lg:text-[20px]">
                            Comprehensive
                            <br />
                            Industry Coverage by
                        </p>
                        <h2
                            className="mt-1 bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text
                            text-[26px] font-bold leading-tight text-transparent
                            sm:text-[30px] lg:text-[38px]"
                        >
                            Insights Opinion
                        </h2>
                        <p className="mt-4 text-[13px] leading-6 text-[#4b5563] sm:text-[14px] lg:text-[15px]">
                            With a broad spectrum of industry expertise, Insights Opinion empowers
                            organizations across diverse sectors by providing the insights needed to
                            innovate and lead. Our dedicated teams combine technical knowledge with
                            market insights, delivering actionable intelligence tailored to each
                            industry&apos;s unique landscape.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-[500px] overflow-hidden rounded-[18px] shadow-lg sm:rounded-[22px]">
                            <Image
                                src="/industris/globle-industry.png"
                                alt="Industry Coverage"
                                width={600}
                                height={400}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Section Heading ── */}
                <div className="mt-14 lg:mt-20">
                    <p className="text-[25px] font-light leading-snug text-[#334155] sm:text-[26px] lg:text-[32px]">
                        Your Global Industry
                    </p>
                    <h3
                        className="bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text
                        text-[24px] font-semibold leading-tight text-transparent
                        sm:text-[28px] lg:text-[36px]"
                    >
                        Knowledge Partner
                    </h3>
                </div>

                {/* ── Industry Cards Grid ── */}
                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {industries.map((industry) => (
                        <div
                            key={industry.name}
                            className="group flex flex-col items-center rounded-2xl border border-[#b8dff0] bg-white/60 px-6 py-8 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-[#1bb0a4] hover:to-[#74b9ff] hover:shadow-lg"
                        >
                            {/* Image */}
                            <div className="mb-4 flex h-16 w-16 items-center justify-center sm:h-20 sm:w-20">
                                <Image
                                    src={industry.image}
                                    alt={industry.name}
                                    width={400}
                                    height={400}
                                    className="h-full w-full object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                                />
                            </div>

                            {/* Name */}
                            <h4 className="text-[17px] font-semibold leading-snug text-[#334155] transition-colors duration-300 group-hover:text-white sm:text-[18px]">
                                {industry.name}
                            </h4>

                            {/* Description */}
                            <p className="mt-3 text-[13px] leading-5 text-[#6b7280] transition-colors duration-300 group-hover:text-white/90 sm:text-[14px]">
                                {industry.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
