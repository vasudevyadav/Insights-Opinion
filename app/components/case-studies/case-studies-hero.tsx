"use client";
import Image from "next/image";

export default function CaseStudiesHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white mt-8 lg:mt-20 w-full">
                <div className="relative z-10 mx-auto flex min-h-[220px] w-full max-w-7xl items-center px-5 py-10 sm:min-h-[300px] sm:px-8 sm:py-14 lg:min-h-[430px] lg:px-10 lg:py-0">
                    <div className="w-full max-w-2xl">
                        <h1 className="text-2xl font-semibold leading-tight sm:text-3xl lg:font-medium lg:text-[45px] lg:leading-tight">
                            Case Studies
                        </h1>
                        <p className="mt-2 text-sm text-white/80 sm:text-base lg:mt-3 lg:text-[17px]">
                            Explore our industry success stories and insights
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
