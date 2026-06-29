"use client";

import Image from "next/image";

const affiliationPoints = [
    {
        title: "Industry Memberships and Affiliations",
        desc: "We hold memberships with leading global market research associations, reinforcing our commitment to the highest professional and ethical standards in the industry.",
    },
    {
        title: "Quality Assurance Programs",
        desc: "Our comprehensive QA programs are designed to maintain excellence at every stage of research, ensuring consistent and reliable outputs across all client projects.",
    },
    {
        title: "Third-Party Certifications",
        desc: "Our certifications from recognised third-party bodies validate our methods and processes, giving clients the confidence that their research meets international benchmarks.",
    },
    {
        title: "Client Partnerships",
        desc: "We work closely with clients to ensure our services not only meet but exceed their quality expectations through transparent collaboration and rigorous review.",
    },
];

export default function QualityAffiliations() {
    return (
        <section className="relative overflow-hidden bg-white py-12 lg:py-16">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-[40%] opacity-20">
                <svg viewBox="0 0 300 300" className="h-full w-full" fill="none">
                    <defs>
                        <pattern id="hexAffil" x="0" y="0" width="51" height="42" patternUnits="userSpaceOnUse">
                            <path d="M13 1H39L52 22.5L39 44H13L0 22.5L13 1Z" stroke="#9EDFF2" strokeWidth="1.2" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexAffil)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

                    {/* Left - Image */}
                    <div
                       
                       
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="w-full max-w-135 overflow-hidden rounded-2xl shadow-md">
                            <Image
                                src="/market-research/uses-image.png"
                                alt="Industry Affiliations and Certifications"
                                width={640}
                                height={480}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div>
                        <p className="text-[18px] font-light text-[#4b5563] lg:text-[24px]">
                            Industry Affiliations
                        </p>
                        <h2
                            className="text-[22px] font-bold lg:text-[36px] mb-6"
                            style={{
                                background: "linear-gradient(90deg, #1bb0a4 0%, #74b9ff 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            and Certifications
                        </h2>

                        <div className="space-y-5">
                            {affiliationPoints.map((pt, i) => (
                                <div
                                    key={i}
                                   
                                   
                                    className="flex gap-3"
                                >
                                    <div className="mt-[7px] h-2 w-2 shrink-0 rounded-full bg-[#1bb0a4]" />
                                    <div>
                                        <p className="text-sm font-semibold text-[#1a2340] lg:text-[15px]">
                                            {pt.title}
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-[#6b7280] lg:text-[13px] lg:leading-6">
                                            {pt.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
