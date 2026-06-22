"use client";

import Image from "next/image";

export default function CareerValues() {
    return (
        <section className="bg-[#edf6fe] relative overflow-hidden py-8 lg:py-12">

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-semibold lg:text-[40px] lg:leading-tight">
                        <span className="bg-linear-to-r from-[#1dc3b3] via-[#1dc3b3] to-[#3c8df6]  bg-clip-text text-transparent">People. Insights. Impact.</span>{" "}

                    </h2>
                    <p className="mx-auto mt-4 max-w-6xl text-sm leading-relaxed text-[#374151] lg:text-base">
                        Our success is based on teamwork, working together to have an environment based on
                        dignity and respect across the wide variety of job roles that exist within our
                        company. We actively encourage and promote the development of employees throughout
                        the company, nurturing and growing talented individuals to become the next
                        generation of leaders within our business.
                    </p>
                </div>

                <div className="relative w-full">
                    <Image
                        src="/career/people-impact.png"
                        alt="People Insights Impact"
                        width={1280}
                        height={500}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
