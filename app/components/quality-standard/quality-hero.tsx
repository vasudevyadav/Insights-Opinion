"use client";

export default function QualityHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white lg:mt-20 mt-8 w-full">
                <div className="absolute inset-0 bg-[#0d1b4b]/60" />
                <div className="relative z-10 mx-auto flex lg:min-h-[360px] min-h-[300px] w-full max-w-7xl lg:pt-0 pt-14 lg:items-center px-5 sm:px-4">
                    <div className="max-w-2xl mx-auto text-center mb-10">
                        <p className="text-sm text-white/70 mb-3">
                            Home <span className="mx-1">&gt;</span> Quality Standard
                        </p>
                        <h1 className="text-[28px] font-semibold lg:font-bold lg:leading-tight lg:text-[52px]">
                            Quality Standard
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
}
