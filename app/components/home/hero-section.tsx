"use client";
import Image from "next/image";
export default function HomeHero() {
    return (
        <section className="bg-[#edf6fe]">

            <div className="relative overflow-hidden homebg text-white lg:mt-20 mt-8  ">
                <div className="relative z-10 mx-auto flex lg:min-h-[540px] min-h-[600px] w-full max-w-7xl lg:pt-0 pt-20 lg:items-center px-5 sm:px-4">

                    <div className="max-w-2xl">

                        <h1 className="text-xl font-semibold lg:font-medium lg:leading-tight lg:text-[50px]">

                            Global Market Research
                            <br /> For Better Business Decisions
                        </h1>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-white/90 sm:text-xl">

                            Evidence-Based Insights Across 8+ Key Industries
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-4">

                            <button className="rounded-full bg-[#17ae8f] px-6 py-2 text-sm font-medium text-white transition hover:scale-[1.02] sm:px-8 sm:py-[11px] sm:text-xl">

                                Get Started
                            </button>
                            <button className="rounded-full border border-white/40 px-6 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:px-8 sm:py-[11px] sm:text-xl">

                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
