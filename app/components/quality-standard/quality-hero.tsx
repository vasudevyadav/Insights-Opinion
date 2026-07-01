"use client";

export default function QualityHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative w-full overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white">

                <div className="relative z-10 mx-auto flex min-h-[300px] w-full max-w-7xl items-center justify-center px-5 pt-8 sm:px-4 lg:min-h-[420px] lg:pt-0">
                    <div className="mx-auto mb-8 max-w-2xl text-center">
                        <h1 className="site-page-title quality-gradient-text">
                            Quality Standard
                        </h1>
                        <p className="mt-5 text-lg text-white/85">
                            Home <span className="mx-1">&gt;</span> Quality Standard
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
