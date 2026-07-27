import Link from "next/link";

export default function HomeHero() {
    return (
        <section className="bg-[#edf6fe]">

            <div className="relative overflow-hidden text-white">
                <picture>
                    <source media="(max-width: 639px)" srcSet="/home-mob.webp" />
                    <source media="(min-width: 640px)" srcSet="/home-hero-img-1.webp" />
                    {/* A native picture ensures only the matching responsive hero
                        is requested; rendering and crop remain unchanged. */}
                    <img
                        src="/home-hero-img-1.webp"
                        alt=""
                        width={1366}
                        height={583}
                        fetchPriority="high"
                        decoding="async"
                        className="absolute inset-0 h-full w-full object-cover object-bottom"
                    />
                </picture>
                <div className="relative z-10 mx-auto flex min-h-[650px] w-full max-w-7xl items-start px-5 pt-6 sm:min-h-[560px] sm:px-6 lg:min-h-[540px] lg:items-center lg:pt-0">

                    <div className="max-w-2xl rounded-2xl bg-[#102b52]/35 p-4 backdrop-blur-[2px] sm:bg-transparent sm:p-0 sm:backdrop-blur-none">

                        <h1 className="text-lg font-semibold lg:font-medium lg:leading-tight lg:text-[50px]">

                            Insights Behind
                            <br /> Confident Decisions.
                        </h1>
                        <p className="mt-3 max-w-xl text-sm leading-7 text-white/90 sm:text-xl">

                            Evidence-led market research that turns complex data into
                            clear direction.
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-4">

                            <Link href="/contact-us" className="rounded-full bg-[#17ae8f] px-6 py-2 text-sm font-medium text-white transition hover:scale-[1.02] sm:px-8 sm:py-[11px] sm:text-xl">

                                Get Started
                            </Link>
                            <Link href="/about-us" className="rounded-full border border-white/40 px-6 py-2 text-sm font-medium text-white transition hover:bg-white/10 sm:px-8 sm:py-[11px] sm:text-xl">

                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
