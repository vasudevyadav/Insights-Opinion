"use client";
import Image from "next/image";

export default function CaseStudiesHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white mt-8 lg:mt-20 w-full">
                <div className="relative z-10 mx-auto flex min-h-[220px] w-full max-w-7xl items-center px-5 py-10 sm:min-h-[300px] sm:px-8 sm:py-14 lg:min-h-[400px] lg:px-10 lg:py-0">
                    <div className="w-full text-center -mt-10">
                        <h1 className="text-2xl font-semibold leading-tight lg:font-medium lg:text-5xl lg:leading-tight bg-[linear-gradient(90deg,#17afa1_0%,#43bccb_45%,#74b9ff_100%)] bg-clip-text text-transparent">
                            Case Studies
                        </h1>

                    </div>
                </div>
            </div>
        </section>
    );
}


