import Image from "next/image";
import type { Industry } from "@/app/lib/industries-data";

type IndustriesGlobalProps = {
    industries: Industry[];
};

type IndustryContent = Industry & { bullets: string[] };

const industryContent: IndustryContent[] = [
    { name: "Healthcare & Life Sciences", description: "Healthcare and life sciences research audiences.", bullets: ["Physicians, nurses, and healthcare professionals (HCPs)", "Hospitals and healthcare systems", "Medical device and pharmaceutical stakeholders"], image: "/industris/industry-healthcare.png" },
    { name: "B2B & Corporate Research", description: "B2B and corporate decision-maker research.", bullets: ["C-level executives and senior decision-makers", "Procurement, operations, and strategy leaders", "Cross-functional business insights across global markets"], image: "/industris/industry-others.png" },
    { name: "Technology & IT", description: "Technology and IT research audiences.", bullets: ["IT decision-makers and digital leaders", "SaaS, enterprise tech, and innovation teams"], image: "/industris/globle-it.png" },
    { name: "Manufacturing & Industrial", description: "Manufacturing and industrial research audiences.", bullets: ["Large manufacturing enterprises", "Operations, supply chain, and plant management professionals"], image: "/industris/industry-construction.png" },
    { name: "Automotive", description: "Automotive research audiences.", bullets: ["OEMs and suppliers", "Industry stakeholders and market trends"], image: "/industris/industry-automotive.png" },
    { name: "Retail & Consumer", description: "Retail and consumer research audiences.", bullets: ["Retail organisations and distribution networks", "Consumer behaviour and market trends"], image: "/industris/industry-others.png" },
    { name: "Supply Chain & Logistics", description: "Supply chain and logistics research audiences.", bullets: ["Distribution companies and logistics providers", "Procurement and supply chain decision-makers"], image: "/industris/industry-automotive.png" },
    { name: "Construction & Building Materials", description: "Construction and building materials research audiences.", bullets: ["Construction firms and infrastructure companies", "Building materials and specialised sectors like timber"], image: "/industris/industry-construction.png" },
    { name: "Financial Services & Investment", description: "Financial services and investment research audiences.", bullets: ["Pension funds, insurers, and sovereign funds", "Wealth managers, family offices, and HNWI segments"], image: "/industris/industry-others.png" },
    { name: "Non-Profit & Social Sector", description: "Non-profit and social-sector research audiences.", bullets: ["Non-profits and social services", "Public and impact-driven initiatives"], image: "/industris/industry-others.png" },
];

export default function IndustriesGlobal({ industries }: IndustriesGlobalProps) {
    const apiImages = new Map(
        industries.map((industry) => [industry.name.trim().toLowerCase(), industry.image])
    );
    const displayedIndustries = industryContent.map((industry) => ({
        ...industry,
        image: apiImages.get(industry.name.toLowerCase()) || industry.image,
    }));

    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-6 lg:py-16">
            <div className="industry-shape-layer pointer-events-none absolute inset-0" aria-hidden="true" />

            <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                {/* ── Top: Text + Image ── */}
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
                    {/* Left: text */}
                    <div>
                        <p className="text-xl font-normal leading-snug text-[#4b5563] lg:text-3xl">Industries We Serve</p>
                        <h2
                            className="mt-1 bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text
                            text-2xl font-medium leading-tight text-transparent lg:text-4xl"
                        >
                            Deep Domain Understanding
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-[#4b5563] sm:text-[14px] lg:text-base">
                            At <strong>Insights Opinion</strong>, we partner with organisations across a diverse range of industries, delivering high-quality research driven by deep domain understanding and access to hard-to-reach audiences.
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[#4b5563] sm:text-[14px] lg:text-base">
                            Our strength lies in <strong>B2B and decision-maker research</strong>, complemented by specialised expertise across key sectors.
                        </p>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="w-full max-w-[500px] overflow-hidden rounded-[18px] shadow-lg sm:rounded-[22px]">
                            <Image
                                src="/industris/globle-industry.png"
                                alt="Industry Coverage"
                                width={600}
                                height={400}
                                className="h-auto w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Section Heading ── */}
                <div className="mt-12 lg:mt-16">
                    <p className="text-[25px] font-light leading-snug text-[#334155] lg:text-4xl">
                        Your Global Industry
                    </p>
                    <h3
                        className="bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text
                        text-[24px] font-semibold leading-tight text-transparent lg:text-4xl"
                    >
                        Knowledge Partner
                    </h3>
                </div>

                {/* ── Industry Cards Grid ── */}
                <div className="industry-mobile-slider no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:justify-items-center lg:gap-x-16 lg:gap-y-12 lg:overflow-visible lg:pb-0">
                    {displayedIndustries.map((industry, index) => (
                        <div
                            key={`${industry.name}-${index}`}
                            className={`group relative flex min-h-[250px] min-w-[82%] snap-center flex-col items-center justify-center overflow-hidden rounded-[14px] border px-5 lg:py-10 py-6 text-center shadow-sm backdrop-blur-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-transparent hover:bg-gradient-to-br hover:from-[#1bb0a4] hover:to-[#74b9ff] hover:shadow-[0_18px_38px_rgba(28,182,165,0.22)] sm:min-w-[46%] lg:min-w-0 lg:w-full ${index === 1 ? "border-transparent bg-gradient-to-br from-[#64b9ed] to-[#1cb6a5] text-white shadow-lg" : "border-[#55b9df] bg-white/70"}`}
                        >
                            <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-white/25 opacity-0 blur-sm transition-all duration-700  " />
                            {/* Image */}
                            <div className="mb-4 lg:mb-4 flex w-16 items-center justify-center lg:w-16">
                                <Image
                                    src={industry.image}
                                    alt={industry.name}
                                    width={96}
                                    height={96}
                                    unoptimized
                                    className={`w-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:brightness-0 group-hover:invert ${index === 1 ? "brightness-0 invert" : ""}`}
                                />
                            </div>

                            {/* Name */}
                            <h4 className={`text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-white lg:text-lg ${index === 1 ? "text-white" : "text-[#334155]"}`}>
                                {industry.name}
                            </h4>

                            <ul className={`mt-3 space-y-1 text-left text-sm leading-5 transition-colors duration-300 group-hover:text-white/90 ${index === 1 ? "text-white/90" : "text-[#6b7280]"}`}>
                                {industry.bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-2">
                                        <span aria-hidden="true">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <p className="mx-auto mt-10 max-w-4xl text-center text-base font-semibold leading-7 text-[#334155] lg:mt-14 lg:text-lg">
                    Our flexible approach allows us to adapt to niche and emerging industries, ensuring every study is tailored, relevant, and impactful.
                </p>
            </div>
        </section>
    );
}
