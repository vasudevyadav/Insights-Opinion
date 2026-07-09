import Image from "next/image";

export default function HealthLeaderIndustry() {
    const brands = [
        { name: "Google", src: "/google.png" },
        { name: "Walmart", src: "/walmart.png" },
        { name: "Amazon", src: "/amazon.png" },
        { name: "Airbnb", src: "/airbnb.png" },
        { name: "Maersk", src: "/maersk.png" },
        { name: "DoorDash", src: "/doordash.png" },
        { name: "Mindvalley", src: "/mindvalley.png" },
        { name: "SEMrush", src: "/semrush.png" },
    ];

    const firstRow = brands.slice(0, 4);
    const secondRow = brands.slice(4, 8);

    const repeatedFirstRow = [...firstRow, ...firstRow, ...firstRow];
    const repeatedSecondRow = [...secondRow, ...secondRow, ...secondRow];

    return (
        <>

            <section className="relative overflow-hidden bg-[#edf6ff] py-2 lg:py-8">


                <div className="relative z-10 mx-auto max-w-7xl px-4">
                    <div className="grid items-center gap-8 md:grid-cols-[1.15fr_1fr] lg:py-10">
                        <div className="relative mx-auto w-full max-w-[650px] overflow-hidden rounded-lg lg:rounded-[22px]">
                            <Image
                                src="/market-research/Healthcare-1.jpg"
                                alt="Healthcare market research"
                                width={900}
                                height={520}
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>

                        <div className="max-w-[610px]">


                            <h2 className="text-2xl font-light leading-[1.1] text-[#3d4461] lg:text-5xl">
                                How Consumer
                                <span className="ml-2 bg-[linear-gradient(90deg,#1bc39a_0%,#58c5ea_48%,#5a7cf0_100%)] bg-clip-text font-semibold text-transparent">
                                    Research Works?
                                </span>
                            </h2>

                            <p className="mb-3 text-sm font-medium text-[#4e5a70] lg:text-base">
                                We start by defining your target audience and research objectives, then match the right method, quantitative, qualitative, or panel-based, to those goals. Verified Consumer Panels are recruited and screened for the exact demographic or behavioral criteria you need. Data is collected through CAPI, CLT, online surveys, or moderated discussions, then processed into clear, decision-ready insights your team can act on immediately.

                            </p>

                            <div className="mt-6 flex flex-wrap gap-4">
                                <button className="inline-flex items-center gap-2 bg-[linear-gradient(90deg,#5ed0df_0%,#2a7de1_100%)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                                    Get Started
                                    <span>→</span>
                                </button>

                                <button className="border border-[#9aa7bf] bg-transparent px-6 py-3 text-sm font-medium text-[#3d4461] transition hover:bg-white/60">
                                    Watch demo
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="grid items-center gap-8 md:grid-cols-[1.15fr_1fr] lg:py-10">

                        <div className="max-w-[610px]">


                            <h2 className="text-2xl font-light leading-[1.1] text-[#3d4461] lg:text-5xl">
                                Benefits of
                                <span className="ml-2 bg-[linear-gradient(90deg,#1bc39a_0%,#58c5ea_48%,#5a7cf0_100%)] bg-clip-text font-semibold text-transparent">
                                    Consumer Research
                                </span>
                            </h2>

                            <p className="mb-3 text-sm font-medium text-[#4e5a70] lg:text-base">
                                Consumer Research turns assumptions into evidence, helping brands act with confidence rather than guesswork.

                            </p>

                            <ul className="ml-5">
                                <li className="mb-2 text-sm font-medium text-[#4e5a70] lg:text-base list-disc" >
                                    Clearer understanding of what drives purchase decisions
                                </li>
                                <li className="mb-2 text-sm font-medium text-[#4e5a70] lg:text-base list-disc" >
                                    Faster identification of emerging market trends
                                </li>
                                <li className="mb-2 text-sm font-medium text-[#4e5a70] lg:text-base list-disc" >
                                    Stronger, evidence-based marketing and pricing strategies
                                </li>
                                <li className="mb-2 text-sm font-medium text-[#4e5a70] lg:text-base list-disc" >
                                    Reduced risk before major product or brand launches
                                </li>

                                <li className="mb-2 text-sm font-medium text-[#4e5a70] lg:text-base list-disc" >

                                    Ongoing visibility into shifting consumer sentiment
                                </li>

                            </ul>

                            <div className="mt-6 flex flex-wrap gap-4">
                                <button className="inline-flex items-center gap-2 bg-[linear-gradient(90deg,#5ed0df_0%,#2a7de1_100%)] px-6 py-3 text-sm font-medium text-white transition hover:opacity-90">
                                    Get Started
                                    <span>→</span>
                                </button>

                                <button className="border border-[#9aa7bf] bg-transparent px-6 py-3 text-sm font-medium text-[#3d4461] transition hover:bg-white/60">
                                    Watch demo
                                </button>
                            </div>
                        </div>
                        <div className="relative mx-auto w-full max-w-[650px] overflow-hidden rounded-lg lg:rounded-[22px]">
                            <Image
                                src="/market-research/Healthcare-1.jpg"
                                alt="Healthcare market research"
                                width={900}
                                height={520}
                                className="h-full w-full object-cover"
                                priority
                            />
                        </div>


                    </div>


                </div>
            </section>
        </>
    );
}