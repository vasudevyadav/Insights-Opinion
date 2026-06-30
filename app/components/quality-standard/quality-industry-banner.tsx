"use client";

import Image from "next/image";

const industries = [
    { title: "IT", image: "/quality-standard/it-icon.png" },
    { title: "Agriculture", image: "/quality-standard/agriculture-icon.png" },
    { title: "Automotive", image: "/quality-standard/automotive-icon.png" },
    { title: "Construction", image: "/quality-standard/construction-icon.png" },
    { title: "Healthcare", image: "/quality-standard/healthcare-icon.png" },
    { title: "Chemical", image: "/quality-standard/chemical-icon.png" },
    { title: "Education", image: "/quality-standard/education-icon.png" },
    { title: "Telecom", image: "/quality-standard/telecom-icon.png" },
];

export default function QualityIndustryBanner() {
    return (
        <section className="relative overflow-hidden bg-[url('/quality-standard/across-globe.png')] bg-cover bg-center py-9 lg:py-12">
            <div className="absolute inset-0 bg-[#081844]/20" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <h2 className="text-xl font-light text-white/85 lg:text-4xl mb-2">
                        Your Industry Knowledge Partner
                    </h2>
                    <h3 className="quality-gradient-text text-xl font-semibold lg:text-4xl mb-2">
                        Across the Globe
                    </h3>
                    <p className="mt-2 text-sm text-white lg:text-lg ">
                        Delivering Specialised Insights Across Diverse Sectors
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4 lg:grid-cols-8 lg:gap-6">
                    {industries.map((ind, i) => (
                        <div
                            key={i}
                            className="group flex flex-col items-center gap-3"
                        >
                            <div className="relative h-10 w-10 transition-transform duration-300 group-hover:-translate-y-1 lg:h-14 lg:w-14 mb-4">
                                <Image
                                    src={ind.image}
                                    alt={ind.title}
                                    fill
                                    sizes="(min-width: 1024px) 56px, 40px"
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-center text-sm font-semibold text-white transition-colors group-hover:text-[#3dd6c8] sm:text-base lg:text-lg">
                                {ind.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
