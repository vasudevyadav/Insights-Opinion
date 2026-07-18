export default function LocalHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white w-full">
                <div className="relative z-10 mx-auto flex min-h-[280px] w-full max-w-7xl items-center px-5 py-10 sm:min-h-[350px] sm:px-8 sm:py-14 lg:min-h-[430px] lg:px-10 lg:py-0">
                    <div className="w-full text-center lg:-mt-10 mt-8">
                        <h1 className="site-page-title bg-[linear-gradient(90deg,#18afa1_0%,#43bccb_45%,#74b9ff_100%)] bg-clip-text text-transparent">
                            Market Research Company in Chicago
                        </h1>
                        <p className="mt-5 text-base leading-[1.45] text-white/95 lg:text-xl">
                            Company for Pharma, MedTech &amp; Healthcare Brands
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
