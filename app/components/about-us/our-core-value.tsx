import React from "react";
import { Eye, Fingerprint, Gem, Users, Trophy } from "lucide-react";
import BackgroundShape from "./background-shape";

const coreValues = [
    {
        title: "Integrity",
        icon: Eye,
        description:
            "We uphold the highest standards of honesty, transparency, and ethical conduct in everything we do. Trust is the foundation of our relationships with clients, partners, and team members.",
    },
    {
        title: "Innovation",
        icon: Fingerprint,
        description:
            "We embrace creativity and continuous improvement to develop smarter solutions. By staying ahead of industry trends, we help our clients adapt, grow, and achieve lasting success.",
    },
    {
        title: "Quality",
        icon: Gem,
        description:
            "Quality is at the heart of every project we deliver. We ensure accuracy, reliability, and attention to detail, providing insights and solutions our clients can confidently rely on.",
    },
    {
        title: "Client-Centricity",
        icon: Users,
        description:
            "Our clients are our priority. We take the time to understand their unique goals and challenges, delivering tailored strategies and personalized support that create measurable value.",
    },
    {
        title: "Excellence",
        icon: Trophy,
        description:
            "We are committed to excellence in every aspect of our work. Through dedication, expertise, and continuous learning, we strive to exceed expectations and build long-term partnerships.",
    },
];

function ArcCircle({ Icon }: { Icon: React.ElementType }) {
    return (
        <div className="relative h-[110px] w-[110px]">
            <svg
                viewBox="0 0 86 86"
                className="absolute inset-0 h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle
                    cx="43"
                    cy="46"
                    r="34"
                    fill="#f8f8f8"
                    stroke="#bfc3c7"
                    strokeWidth="1.8"
                />
                <path
                    d="M11 46 A32 32 0 0 1 75 46"
                    fill="none"
                    stroke="#4ca9de"
                    strokeWidth="6"
                    strokeLinecap="butt"
                />
            </svg>

            <div className="absolute inset-0  flex items-center justify-center">
                <Icon
                    size={36}
                    color="#38b9cb"
                    strokeWidth={1.6}
                    className="translate-y-[6px]"
                />
            </div>
        </div>
    );
}

export default function OurCoreValues() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-9 lg:py-16">
            <BackgroundShape variant={3} side="left" className="-left-12 top-6 w-[290px] opacity-55 sm:w-[370px] lg:-left-1 lg:top-4 lg:w-[430px]" />

            <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-10">
                {/* Heading */}
                <div className="mb-8 text-center lg:mb-14">
                    <h2 className="text-[28px] font-semibold leading-none text-[#34b8c9] lg:text-4xl mb-2">
                        Our Core Values
                    </h2>
                    <p className="mt-1 text-xs leading-tight text-[#374151] lg:text-base">
                        Our core values shape every decision and interaction at Insights Opinion:
                    </p>
                </div>

                {/* Value Cards */}
                <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto lg:grid lg:grid-cols-5 lg:gap-x-8 lg:overflow-visible">
                    {coreValues.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <div key={i} className="flex min-w-[82%] snap-center flex-col items-start rounded-2xl border border-[#cfe4f2] bg-white/80 p-5 shadow-sm sm:min-w-[46%] lg:min-w-0 lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                                <div className="relative min-h-[130px] pl-4">
                                    <div className="absolute left-0 top-[7px] h-[7px] w-[7px] rounded-full bg-[#3fb8c9]" />
                                    <div className="absolute left-[3px] top-[15px] h-[130px] w-[1.5px] bg-[#56bfd0]" />

                                    <h3 className="text-sm font-semibold leading-none text-[#37b9ca] lg:text-lg mb-3">
                                        {item.title}
                                    </h3>

                                    <p className="mt-1.5 max-w-[200px] text-xs line-clamp-6 leading-[1.45] text-[#1f2937] font-medium lg:text-[13px]">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="-mt-1 ml-[-42px]">
                                    <ArcCircle Icon={Icon} />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom Banner */}
                <div className="mx-auto mt-10 w-fit border border-[#8a97a3] bg-[#f7fbff]/80 px-6 py-2.5 text-center text-xs leading-tight text-[#374151] lg:text-[15px]">
                   At Insights Opinion, we are more than just a service provider, we are your partner in turning data into strategic success.
                </div>
            </div>
        </section>
    );
}
