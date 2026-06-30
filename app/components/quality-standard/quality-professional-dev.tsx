"use client";

import Image from "next/image";

const devPoints = [
    {
        title: "Continuous Learning and Improvement",
        desc: "We foster a culture of learning and excellence, with professional development programs designed to keep our staff at the forefront of market research.",
    },
    {
        title: "Staff Training",
        desc: "Our comprehensive training programs cover the latest research methodology, data collection best practices, and ethical standards.",
    },
    {
        title: "QA Programs",
        desc: "Our QA programs involve systematic checks at every stage of the research process to maintain excellence and ensure consistency.",
    },
    {
        title: "Client Collaboration",
        desc: "We work closely with clients to ensure our services not only meet but exceed their quality expectations through rigorous review processes.",
    },
];

export default function QualityProfessionalDev() {
    return (
        <section className="quality-hex-bg relative overflow-hidden py-12 lg:py-18">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

                    <div className="flex justify-center lg:justify-start lg:pl-12">
                        <div className="w-full max-w-[560px] overflow-hidden rounded-[28px] shadow-md">
                            <Image
                                src="/quality-standard/professional-development.png"
                                alt="Professional Development and Training"
                                width={640}
                                height={440}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-6 text-2xl font-light leading-tight text-[#18213d] lg:text-4xl">
                            <span className="quality-gradient-text font-semibold">Professional Development</span><br />
                            and Training
                        </h2>

                        <div className="space-y-5">
                            {devPoints.map((pt, i) => (
                                <div key={i}>
                                    <p className="text-sm font-semibold text-[#24b8ae] lg:text-lg">
                                        {pt.title}:
                                    </p>
                                    <p className="mt-1 max-w-[500px] text-xs font-normal leading-5 text-[#101538] lg:text-[15px] lg:leading-6">
                                        {pt.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
