
export default function HealthHero() {
    return (
        <section className="bg-[#edf6fe] lg:pt-4">
            <div className="max-w-full">
                <div className="relative overflow-hidden bg-[#f1f8ff] text-white">


                    <div
                        className="absolute inset-0 "
                        style={{
                            backgroundImage: "url('/market-research/reacher-bg.png')",
                            backgroundSize: "cover",
                            backgroundPosition: " bottom ",
                            backgroundRepeat: "no-repeat",
                        }}
                    />


                    <div className="relative z-10 mx-auto flex min-h-[630px] max-w-7xl items-center px-5 py-14 sm:px-6 lg:min-h-[570px] lg:px-10 lg:py-0">
                        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">

                            <div className="max-w-[560px]">
                                <h1 className="text-[34px] font-semibold leading-[1.02] sm:text-[42px] lg:text-[58px]">
                                    <span className="block text-[#35d0c7]">Healthcare</span>
                                    <span className="block text-[#79bfff]">Market Research</span>
                                </h1>

                                <p className="mt-5 max-w-[430px] text-[18px] leading-[1.45] text-white/95 sm:text-[22px]">
                                    Company for Pharma,
                                    <br />
                                    MedTech & Healthcare Brands
                                </p>

                                <p className="mt-4 max-w-[500px] text-[14px] leading-7 text-white/80 sm:text-[17px]">
                                    Access verified healthcare panels, physician insights, and
                                    qualitative healthcare research to make data-driven business
                                    decisions.
                                </p>

                                <div className="mt-8 flex flex-wrap items-center gap-4">
                                    <button className="rounded-full bg-[#52d3b0] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(82,211,176,0.25)] transition hover:scale-[1.02] sm:px-9 sm:text-base">
                                        Get Started
                                    </button>

                                    <button className="rounded-full border border-white/45 bg-transparent px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-9 sm:text-base">
                                        Learn More
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}