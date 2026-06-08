"use client";

export default function BlogHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white lg:mt-20 mt-8 w-full">
                <div className="relative z-10 mx-auto flex lg:min-h-[500px] min-h-[300px] w-full max-w-7xl lg:pt-0 pt-16 items-center px-5 sm:px-4">
                    <div className="max-w-2xl mx-auto mb-10">
                        <h1 className="text-4xl font-semibold lg:text-[52px] lg:font-medium leading-tight">
                            Blog
                        </h1>
                        <p className="mt-3 text-base text-white/70">
                            Home &gt; Blog
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}