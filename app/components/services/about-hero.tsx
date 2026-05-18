"use client";
import Image from "next/image";

export default function AboutHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white lg:mt-20 mt-8 w-full">
                <div className="relative z-10 mx-auto flex lg:min-h-[430px] min-h-[400px] w-full max-w-7xl lg:pt-0 pt-16 lg:items-center px-5 sm:px-4">
                    <div className="max-w-2xl mx-auto mb-10">
                        <h1 className="text-xl font-semibold lg:font-medium lg:leading-tight lg:text-[45px]">
                            About Us
                        </h1>

                    </div>
                </div>
            </div>
        </section>
    );
}