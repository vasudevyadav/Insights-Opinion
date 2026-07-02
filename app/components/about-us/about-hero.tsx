"use client";

export default function AboutHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white lg:mt-20 mt-8 w-full">
                <div className="relative z-10 mx-auto flex min-h-[280px] w-full max-w-7xl px-5 pt-16 sm:min-h-[350px] sm:px-4 lg:min-h-[430px] lg:items-center lg:pt-0">
                    <div className="max-w-2xl mx-auto mb-10">
                        <h1 className="site-page-title">
                            About Us
                        </h1>

                    </div>
                </div>
            </div>
        </section>
    );
}
