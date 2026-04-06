"use client";
import Image from "next/image";
export default function HomeHero() {
    return (
        <section className="bg-[#edf6fe]">

            <div className="relative overflow-hidden homebg text-white lg:mt-20 mt-8  ">
                <div className="relative z-10 mx-auto flex min-h-[590px] w-full max-w-7xl items-center px-5 sm:px-8 md:px-10">

                    <div className="max-w-xl">

                        <h1 className="text-2xl font-medium leading-tight lg:text-5xl">

                            Insights Behind <br /> Confident Decisions.
                        </h1>
                        <p className="mt-5 max-w-md text-base leading-7 text-white/80 sm:text-lg">

                            Evidence-led market intelligence across global markets.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">

                            <button className="rounded-full bg-[#17ae8f] px-6 py-3 text-lg font-semibold text-white transition hover:scale-[1.02] sm:px-8 sm:py-[11px] sm:text-base">

                                Get Started
                            </button>
                            <button className="rounded-full border border-white/40 px-6 py-2 text-lg font-semibold text-white transition hover:bg-white/10 sm:px-8 sm:py-[11px] sm:text-base">

                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
