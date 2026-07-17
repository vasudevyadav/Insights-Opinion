import Image from "next/image";

const sections = [
    {
        title: "Professional Development",
        subtitle: "and Training",
        image: "/market-research-quality-standards/Professional-Development-and-Training.jpg",
        imageAlt: "Professional Development and Training",
        imageLeft: true,
        points: [
            {
                title: "Continuous Learning",
                desc: "We foster a culture of learning and excellence, running professional development programs that keep our team at the forefront of market research. ",
            },
            {
                title: "Staff Training",
                desc: "Our training programs cover current research methodology, data collection best practices, and ethical standards, keeping every researcher aligned with industry expectations and evolving requirements. ",
            },
            {
                title: "Quality Assurance Programs",
                desc: "Our QA programs involve systematic checks at every stage of the research process, maintaining consistency, accuracy, and service excellence across all projects.",
            },
            {
                title: "Client Collaboration",
                desc: "We work closely with clients throughout each project, ensuring our research services meet quality expectations through structured review and transparent communication at every stage.",
            },
        ],
    },
    {
        title: "Global Data Transfer ",
        subtitle: "and Management ",
        image: "/market-research-quality-standards/Global-Data-Transfer-and-Management-.jpg",
        imageAlt: "Global Data Transfer Management",
        imageLeft: false,
        points: [
            {
                title: "Cross-Border Data Flow Compliance",
                desc: "We manage international data transfers in line with GDPR-recognized mechanisms and current cross-border compliance requirements across every market and jurisdiction we serve. ",
            },
            {
                title: "International Standards Alignment",
                desc: "Our data management protocols align with recognized international security and privacy standards, supporting lawful, secure data transfers across every region we operate in. ",
            },
            {
                title: "Data Localization",
                desc: "We process data according to the legal requirements of each jurisdiction we operate in, keeping every transfer lawful, compliant, and properly documented. ",
            },
            {
                title: "Continuous Monitoring",
                desc: "Our compliance officers monitor evolving global data protection legislation, proactively updating our policies and practices to reflect new laws and regulations as they emerge. ",
            },
        ],
    },
    {
        title: "Industry Affiliations ",
        subtitle: "and Certifications",
        image: "/market-research-quality-standards/Industry-Affiliations-and-Certifications.jpg",
        imageAlt: "Industry Affiliations and Certifications",
        imageLeft: true,
        points: [
            {
                title: "Professional Memberships",
                desc: "We hold memberships with ESOMAR, MRSI, and the Insights Association, reflecting our commitment to recognized industry codes of conduct and ethics across every research project. ",
            },
            {
                title: "ISO Certifications",
                desc: "We are ISO 27001 certified for information security management and ISO 20252 certified for market, opinion, and social research quality management. ",
            },
            {
                title: "Research Expertise Backed by Standards",
                desc: "These certifications support every research vertical we serve, including Consumer Research, B2B Research, and Healthcare Research projects. ",
            },
            {
                title: "Method-Level Assurance",
                desc: "Standards apply equally across methods, including CATI fieldwork, panel studies, and every quantitative or qualitative service we deliver. ",
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
                                        <div className="relative h-[260px] w-full overflow-hidden rounded-[20px] shadow-md sm:h-[350px] sm:rounded-[28px] lg:h-[410px] lg:max-w-[540px]">
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
                                        <div className="relative h-[260px] w-full overflow-hidden rounded-[20px] shadow-md sm:h-[350px] sm:rounded-[24px] lg:h-[410px] lg:max-w-[540px]">
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
