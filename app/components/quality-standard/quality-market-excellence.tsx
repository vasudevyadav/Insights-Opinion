import Image from "next/image";
import { ArrowRight, BarChart2 } from "lucide-react";

const cards = [
    {
        title: "Quantitative and Qualitative Standards",
        description:
            "We maintain strict methodological standards across quantitative and qualitative research, delivering validated instruments and structured processes that keep results accurate and reliable. ",
        image: "/market-research-quality-standards/Quantitative-and-Qualitative-Standards.jpg",

    },
    {
        title: "Data Collection and Integrity",
        description:
            "Our data collection uses a multi-layered approach across online panels, CATI, and CAPI systems, keeping every dataset accurate, consistent, and audit ready. ",
        image: "/market-research-quality-standards/Data-Collection-and-Integrity.jpg",

    },
    {
        title: "Participant Selection",
        description:
            "We use representative sampling and thorough screening protocols so respondent pools reflect the target market accurately, supporting research you can act on confidently.",
        image: "/market-research-quality-standards/Participant-Selection-.jpg",

    },
    {
        title: "Researcher Training and Expertise",
        description:
            "Every researcher completes ongoing training and professional development, staying current with research methodologies, ethical standards, and emerging market research trends and tools.",
        image: "/market-research-quality-standards/Researcher-Training-and-Expertise.jpg",

    },
];

export default function QualityMarketExcellence() {
    return (
        <section className="quality-hex-bg relative overflow-hidden pt-8 lg:pt-14">
            <div className="relative z-10 mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8 lg:pb-4">
                <div className="mb-10 text-center">
                    <h2 className="text-[26px] font-light text-[#1a2340] lg:text-[36px] mb-3 lg:mb-5">
                        <span className="quality-gradient-text font-semibold"> Market Research  </span>{" "}
                        Excellence
                    </h2>
                    <p className="lg:text-base text-sm">
                        Our market research quality standards start with methodology, since accurate results depend on how data is collected, not just how it&apos;s reported.
                    </p>
                </div>

                <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4 lg:px-8">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="group relative flex min-h-[294px] min-w-[86%] snap-center flex-col overflow-hidden rounded-[5px] bg-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:min-w-0"
                        >
                            <div className="relative h-full w-full bg-white">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-white/90 px-4 py-1.5 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0">
                                    <h3 className="px-2 py-1 text-[14px] font-bold leading-snug text-[#101538] lg:text-[15px]">
                                        {card.title}
                                    </h3>
                                </div>
                            </div>
                            <button className="inline-flex h-11 w-full items-center gap-4 bg-gradient-to-r from-[#18b9aa] to-[#4bb7d9] px-6 text-sm font-semibold text-white transition-opacity duration-300 group-hover:opacity-0">
                                READ MORE <ArrowRight size={14} />
                            </button>

                            <div className="absolute inset-0 flex flex-col bg-[#101538] p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="mb-4 flex items-start justify-between">
                                    <h3 className="max-w-[76%] text-[14px] font-semibold leading-snug text-white lg:text-[15px]">
                                        {card.title}
                                    </h3>
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] bg-[#24bfb7]">
                                        <BarChart2 size={18} className="text-white" />
                                    </div>
                                </div>
                                <p className="flex-1 text-sm leading-6 text-white/80 lg:text-sm line-clamp-6">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
