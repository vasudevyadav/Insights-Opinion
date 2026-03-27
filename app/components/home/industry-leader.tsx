"use client";

import Image from "next/image";

export default function HomeHero() {
    const brands = [
        "Google",
        "Walmart",
        "Amazon",
        "Airbnb",
        "Maersk",
        "DoorDash",
        "Mindvalley",
        "SEMrush",
    ];

    return (


        <section className="indstrybg">

            <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-5">
                {/* Left Text Block */}
                <div className="flex items-center justify-center px-6 py-10 md:col-span-1">
                    <div>
                        <p className="text-2xl font-medium leading-tight text-[#5d6778]">
                            Trusted by
                        </p>
                        <h2 className="text-3xl font-semibold leading-tight text-[#48d6a8]">
                            Industry Leaders
                        </h2>
                    </div>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:col-span-4 md:grid-cols-4">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex min-h-[110px] items-center justify-center  px-6 py-8 text-center"
                        >
                            <span className="text-lg font-semibold text-[#3d4757] sm:text-xl">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}