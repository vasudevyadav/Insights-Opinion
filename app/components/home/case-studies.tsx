"use client";

import { ArrowRight } from "lucide-react";
import GlobalCoverage from "./  GlobalCoverage";

type CaseStudy = {
    title: string;
    desc: string;
    image: string;
    accent: string;
    large?: boolean;
};

type CaseCardProps = {
    title: string;
    desc: string;
    image: string;
    accent: string;
    large?: boolean;
};

const caseStudies: CaseStudy[] = [
    {
        title: "Automotive Industry",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image:
            "/automative.png",
        accent: "from-cyan-400/50 to-emerald-400/40",
        large: true,
    },
    {
        title: "Healthcare Industry\nDiabetes",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image:
            "/healcare.png",
        accent: "from-blue-500/40 to-fuchsia-500/30",
    },
    {
        title: "Chemical Industry",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image:
            "/chemical.png",
        accent: "from-sky-400/30 to-indigo-500/30",
    },
    {
        title: "Healthcare Industry\nHIV",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image:
            "/healcare.png",
        accent: "from-violet-500/30 to-cyan-400/20",
    },
    {
        title: "Automotive Industry",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image:
            "/automotive.png",
        accent: "from-blue-500/30 to-purple-500/30",
    },
    {
        title: "Telecom Industry",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image:
            "/telecom.png",
        accent: "from-sky-500/30 to-blue-700/40",
    },
];

function CaseCard({ title, desc, image, accent, large = false }: CaseCardProps) {
    return (
        <div
            className={`group relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/20 hover:shadow-[0_12px_40px_rgba(0,200,255,0.08)] ${large ? "h-[430px]" : "h-[495px]"
                }`}
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div
                className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-35 mix-blend-screen`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#07102b]/95 via-[#07102b]/45 to-transparent" />

            <div className="relative flex h-full flex-col justify-end p-5">
                <h3 className="whitespace-pre-line text-center text-[22px] font-semibold leading-snug tracking-wide text-cyan-300 group-hover:text-white line-clamp-2">
                    {title}
                </h3>
                <p className="mt-2 text-center text-sm leading-[1.6] text-white/75 line-clamp-3">
                    {desc}
                </p>
                <div className="mt-2 flex justify-end">
                    <button >
                        <ArrowRight size={30} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function CaseStudies() {
    const leftCards = caseStudies.filter((_, i) => i % 2 === 0);
    const rightCards = caseStudies.filter((_, i) => i % 2 !== 0);

    return (
        <div>

            <section className="relative overflow-hidden bg-[#07102b] py-16 text-white">
                {/* Background Glows */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.08] blur-[130px]" />
                    <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/[0.08] blur-[130px]" />
                </div>

                {/* Side border lines */}
                <div className="absolute inset-y-0 left-0 w-px bg-white/10" />
                <div className="absolute inset-y-0 right-0 w-px bg-white/10" />

                <div className="relative mx-auto max-w-5xl px-4 md:px-6">
                    {/* Header */}
                    <div className="lg:-mb-12">
                        <h2 className="text-2xl font-normal text-transparent bg-clip-text bg-[linear-gradient(120deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] lg:text-[45px]">
                            Case Studies
                        </h2>
                        <p className="mt-2 max-w-md text-base leading-6 text-white/90">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                        <div className="flex flex-col gap-10 md:mt-28">
                            {leftCards.map((item, i) => (
                                <CaseCard key={i} {...item} large={i === 0} />
                            ))}
                        </div>

                        {/* Right Column — starts at top */}
                        <div className="flex flex-col gap-10">
                            {rightCards.map((item, i) => (
                                <CaseCard key={i} {...item} />
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            <GlobalCoverage />
        </div>

    );
}