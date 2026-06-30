"use client";

import Image from "next/image";

const sections = [
    {
        title: "Professional Development",
        subtitle: "and Training",
        image: "/quality-standard/professional-development.png",
        imageAlt: "Professional Development and Training",
        imageLeft: true,
        points: [
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
        ],
    },
    {
        title: "Global Data Transfer",
        subtitle: "and Management",
        image: "/quality-standard/news-image.png",
        imageAlt: "Global Data Transfer Management",
        imageLeft: false,
        points: [
            {
                title: "Cross-Border Data Flow Compliance",
                desc: "We navigate the complexities of international data transfers and ensure compliance with GDPR Standard Contractual Clauses, Privacy Shield frameworks, and other cross-border data transfer mechanisms.",
            },
            {
                title: "International Standards",
                desc: "Our data management standards are aligned with top international security and privacy standards, ensuring lawful and secure data transfers across all markets.",
            },
            {
                title: "Data Localization",
                desc: "We process data in accordance with the legal requirements of specific jurisdictions, ensuring lawful and secure data transfers remain compliant at all times.",
            },
            {
                title: "Continuous Monitoring",
                desc: "Our legal team monitors global data protection legislation to proactively adapt our policies to new laws and regulations as they emerge.",
            },
        ],
    },
    {
        title: "Industry Affiliations",
        subtitle: "and Certifications",
        image: "/market-research/uses-image.png",
        imageAlt: "Industry Affiliations and Certifications",
        imageLeft: true,
        points: [
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
        ],
    },
];

export default function QualityGlobalTransfer() {
    return (
        <>
            {sections.map((section, i) => (
                <section key={i} className="quality-hex-bg relative overflow-hidden py-12 lg:py-18">
                    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

                            {section.imageLeft ? (
                                <>
                                    <div className="flex justify-center lg:justify-start lg:pl-12">
                                        <div className="relative h-[260px] w-full overflow-hidden rounded-[20px] shadow-md sm:h-[350px] sm:rounded-[28px] lg:h-[500px]">
                                            <Image
                                                src={section.image}
                                                alt={section.imageAlt}
                                                fill
                                                sizes="(min-width: 1024px) 50vw, 100vw"
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="mb-6 text-2xl font-light leading-tight text-[#18213d] lg:text-4xl">
                                            <span className="quality-gradient-text font-semibold">{section.title}</span><br />
                                            {section.subtitle}
                                        </h2>
                                        <div className="space-y-5">
                                            {section.points.map((pt, j) => (
                                                <div key={j}>
                                                    <p className="text-sm font-semibold text-[#24b8ae] lg:text-lg">
                                                        {pt.title}:
                                                    </p>
                                                    <p className="mt-1 text-xs font-normal leading-5 text-[#101538] lg:text-base lg:leading-6">
                                                        {pt.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="lg:pl-16">
                                        <h2 className="mb-6 text-2xl font-light leading-tight text-[#18213d] lg:text-4xl">
                                            <span className="quality-gradient-text font-semibold">{section.title}</span><br />
                                            {section.subtitle}
                                        </h2>
                                        <div className="space-y-5">
                                            {section.points.map((pt, j) => (
                                                <div key={j}>
                                                    <p className="text-sm font-semibold text-[#24b8ae] lg:text-lg">
                                                        {pt.title}:
                                                    </p>
                                                    <p className="mt-1 text-xs font-normal leading-5 text-[#101538] lg:text-base lg:leading-6">
                                                        {pt.desc}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-center lg:justify-end lg:pr-10">
                                        <div className="relative h-[260px] w-full overflow-hidden rounded-[20px] shadow-md sm:h-[350px] sm:rounded-[24px] lg:h-[500px]">
                                            <Image
                                                src={section.image}
                                                alt={section.imageAlt}
                                                fill
                                                sizes="(min-width: 1024px) 50vw, 100vw"
                                                className="object-cover object-center"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}
