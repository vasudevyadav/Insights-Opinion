"use client";

import React from "react";
import Image from "next/image";

const csrPoints = [
    {
        title: "Education:",
        description:
            "We support initiatives that enhance educational opportunities, particularly in underserved communities, by providing resources and funding for schools and educational programs.",
    },
    {
        title: "Environmental Sustainability:",
        description:
            "We are committed to reducing our environmental impact through sustainable practices such as minimizing waste, conserving energy, and supporting green initiatives.",
    },
    {
        title: "Social Welfare:",
        description:
            "We actively contribute to organizations and programs that address critical social issues, including poverty alleviation, healthcare, and disaster relief.",
    },
];

export default function OurSocial() {
    return (
        <section className="relative overflow-hidden bg-[#edf4fb] py-4 lg:py-8">

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
                <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
                    <div className=" w-full">
                        <div className="relative aspect-[1.6/1] overflow-hidden rounded-[24px]">
                            <Image
                                src="/about-us/our-social.png"
                                alt="Our Social Responsibility"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="max-w-[470px]">
                        <p className="text-[20px] leading-none text-[#5d6885] lg:text-[22px]">
                            Our Social
                        </p>

                        <h2
                            className="mt-2.5 text-2xl font-semibold leading-[1.05] 
              bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent 
              lg:text-[48px]"
                        >
                            Responsibility
                        </h2>

                        <p className="mt-4 text-xs leading-[1.7] text-[#3f4a5f] lg:text-base">
                            At Insights Opinion, we believe in the power of business to create
                            positive change. Our Corporate Social Responsibility (CSR)
                            initiatives focus on advancing education, promoting environmental
                            sustainability, and supporting social welfare. We are dedicated to
                            making a meaningful impact through responsible practices that
                            benefit both our communities and the environment.
                        </p>
                    </div>
                </div>

                <div className="mt-5 max-w-[920px] lg:mt-9">
                    <div className="space-y-4">
                        {csrPoints.map((item, index) => (
                            <div key={index}>
                                <h3
                                    className="text-xl mb-2 font-medium leading-tight 
                  bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent"
                                >
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-sm leading-[1.6] text-[#3f4a5f] lg:text-base">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}