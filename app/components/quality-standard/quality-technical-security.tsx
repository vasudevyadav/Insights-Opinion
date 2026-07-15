import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const securityPoints = [
    {
        title: "Data Security Infrastructure",
        desc: "Our technology infrastructure aligns with ISO 27001 certification standards, reflecting our ongoing commitment to protecting research data and client information at every level. ",
    },
    {
        title: "Data Protection Protocols",
        desc: "We use advanced security protocols to safeguard data against breaches, unauthorized access, and other cyber threats across our entire technology environment and infrastructure. ",
    },
    {
        title: "Secure Data Handling",
        desc: "We invest in current data collection, storage, and transfer technologies to keep respondent and client information reliable, protected, and consistently accurate throughout the research lifecycle.",
    },
    {
        title: "Audit and Compliance",
        desc: "We conduct regular security audits and reviews to assess and strengthen our compliance with data protection laws and information security standards on an ongoing basis.",
    },
];

export default function QualityTechnicalSecurity() {
    return (
        <section className="quality-hex-bg relative overflow-hidden pt-8 lg:pt-12">
            <div className="relative overflow-hidden lg:min-h-[575px] lg:[clip-path:polygon(0_13%,100%_0,100%_100%,0_100%)]">
                <Image
                    src="/quality-standard/technical-security.png"
                    alt="Technical and Operational Security"
                    fill
                    className="object-cover object-left md:object-center"
                    sizes="100vw"
                />
              

                <div className="relative z-10 mx-auto grid max-w-7xl items-center px-4 py-10 sm:px-6 lg:min-h-[575px] lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-0 lg:pt-4">
                    <div />

                    <div className="text-white lg:py-16">
                        <h2 className="mb-7 text-2xl font-semibold leading-tight lg:text-4xl">
                            <span className="quality-gradient-text"> Technical and  </span><br />
                            <span className="quality-gradient-text"> Operational Security </span>
                        </h2>

                        <div className="space-y-5">
                            {securityPoints.map((pt, i) => (
                                <div key={i} className="flex gap-3">
                                    <CheckCircle2 className="mt-0.5 shrink-0 text-[#33c6d7]" size={22} />
                                    <div>
                                        <p className="text-sm font-semibold text-[#e2f0fb] lg:text-base">
                                            {pt.title}:
                                        </p>
                                        <p className="mt-1 text-xs leading-5 text-white/80 lg:text-sm lg:leading-6">
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
