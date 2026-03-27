"use client";
import Image from "next/image";
export default function HomeHero() {
    return (
        <section className="relative overflow-hidden homebg text-white lg:mt-20 mt-8  ">

            <div className="relative z-10 mx-auto flex min-h-[590px] w-full max-w-7xl items-center px-5 sm:px-8 md:px-10">

                <div className="max-w-xl">

                    <h1 className="text-4xl font-semibold leading-tight lg:text-5xl">

                        Insights Behind <br /> Confident Decisions.
                    </h1>
                    <p className="mt-5 max-w-md text-base leading-7 text-white/80 sm:text-lg">

                        Evidence-led market intelligence across global markets.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center gap-4">

                        <button className="rounded-full bg-[#48d6a8] px-6 py-3 text-sm font-semibold text-[#0b1f52] transition hover:scale-[1.02] sm:px-8 sm:py-3.5 sm:text-base">

                            Get Started
                        </button>
                        <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-8 sm:py-3.5 sm:text-base">

                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
