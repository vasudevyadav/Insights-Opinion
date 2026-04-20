"use client";

import Image from "next/image";

export default function Milestone() {
    return (

        <section className="relative overflow-hidden bg-[#edf6ff] lg:mt-0">

            <Image
                src="/about-us/milestone.png"
                alt="Milestone Image"
                objectFit="cover"
                height={2000}
                width={2000}
                className="lg:h-full h-[190px]"
            />

        </section>

    );
}