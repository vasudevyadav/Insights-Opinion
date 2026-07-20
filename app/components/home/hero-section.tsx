import Image from "next/image";
export default function HomeHero() {
    return (
        <section className="bg-[#edf6fe]">

            <div className="relative overflow-hidden text-white">
                <Image
                    src="/home-hero-img-1.png"
                    alt=""
                    fill
                    priority
                    fetchPriority="high"
                    className="object-cover object-bottom hidden sm:block"
                    sizes="100vw"
                />
                <Image
                    src="/home-mob.png"
                    alt=""
                    fill
                    priority
                    className="object-cover object-bottom sm:hidden"
                    sizes="100vw"
                />
                <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-7xl items-start px-5 pt-24 sm:min-h-[560px] sm:px-6 sm:pt-20 lg:min-h-[540px] lg:items-center lg:pt-0">

                    <div className="max-w-2xl rounded-2xl bg-[#102b52]/35 p-4 backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:backdrop-blur-none">

                        <h1 className="text-xl font-semibold lg:font-medium lg:leading-tight lg:text-[50px]">

                            Insights Behind
                            <br /> Confident Decisions.
                        </h1>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-white/90 sm:text-xl">

                            Evidence-led market research that turns complex data into
                            clear direction.
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-4">

                            <button className="rounded-full bg-[#17ae8f] px-6 py-2 text-sm font-medium text-white transition hover:scale-[1.02] sm:px-8 sm:py-[11px] sm:text-xl">

                                Get Started
                            </button>
                            <button className="rounded-full border border-white/40 px-6 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:px-8 sm:py-[11px] sm:text-xl">

                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
