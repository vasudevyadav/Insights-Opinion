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
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80",
        accent: "from-cyan-400/50 to-emerald-400/40",
        large: true,
    },
    {
        title: "Healthcare Industry\nDiabetes",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
        accent: "from-blue-500/40 to-fuchsia-500/30",
    },
    {
        title: "Chemical Industry",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image:
            "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?auto=format&fit=crop&w=1200&q=80",
        accent: "from-sky-400/30 to-indigo-500/30",
    },
    {
        title: "Healthcare Industry\nHIV",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image:
            "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80",
        accent: "from-violet-500/30 to-cyan-400/20",
    },
    {
        title: "Automotive Industry",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image:
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        accent: "from-blue-500/30 to-purple-500/30",
    },
    {
        title: "Telecom Industry",
        desc: "With your unique blend of expertise and entrepreneurial drive, you are now equipped to navigate the complexities of the legal landscape with confidence.",
        image:
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80",
        accent: "from-sky-500/30 to-blue-700/40",
    },
];

function CaseCard({
    title,
    desc,
    image,
    accent,
    large = false,
}: CaseCardProps) {
    return (
        <div
            className={`group relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/20 hover:shadow-[0_12px_40px_rgba(0,200,255,0.08)] ${large ? "h-[420px]" : "h-[380px]"
                }`}
        >
            <img
                src={image}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
                className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-40 mix-blend-screen`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07102b]/95 via-[#07102b]/45 to-transparent" />

            <div className="relative flex h-full flex-col justify-end p-5">
                <h3 className="whitespace-pre-line text-center text-[14px] font-semibold leading-snug tracking-wide text-cyan-300">
                    {title}
                </h3>
                <p className="mt-2 text-center text-xs leading-5 text-white/80 line-clamp-3">
                    {desc}
                </p>
                <div className="mt-3 flex justify-end">
                    <button className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-200 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/20 group-hover:text-cyan-300">
                        <ArrowRight size={14} />
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
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/8 blur-[130px]" />
                    <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/8 blur-[130px]" />
                </div>

                <div className="absolute inset-y-0 left-0 w-px bg-white/10" />
                <div className="absolute inset-y-0 right-0 w-px bg-white/10" />

                <div className="relative mx-auto max-w-6xl px-5 md:px-8">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-cyan-400 md:text-4xl">
                            Case Studies
                        </h2>
                        <p className="mt-2 max-w-md text-sm leading-6 text-white/50">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:-mt-10">
                        <div className="flex flex-col gap-12 md:mt-20">
                            {leftCards.map((item, i) => (
                                <CaseCard key={i} {...item} large={i === 0} />
                            ))}
                        </div>

                        <div className="flex flex-col gap-12">
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