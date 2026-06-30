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
        <section className="quality-hex-bg relative overflow-hidden pb-12 pt-4 lg:pb-16 lg:pt-8">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-8">

                    <div className="flex justify-center lg:justify-start lg:pl-16">
                        <div className="relative h-[330px] w-full max-w-[560px] overflow-hidden rounded-[24px] shadow-md lg:h-[420px]">
                            <Image
                                src="/market-research/uses-image.png"
                                alt="Industry Affiliations and Certifications"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="mb-6 text-[26px] font-light leading-tight text-[#18213d] lg:text-[31px]">
                            <span className="quality-gradient-text font-semibold">Industry Affiliations</span><br />
                            and Certifications
                        </h2>

                        <div className="space-y-5">
                            {affiliationPoints.map((pt, i) => (
                                <div key={i}>
                                    <div>
                                        <p className="text-sm font-bold text-[#24b8ae] lg:text-[15px]">
                                            {pt.title}:
                                        </p>
                                        <p className="mt-1 max-w-[500px] text-xs font-medium leading-5 text-[#101538] lg:text-[13px] lg:leading-6">
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
