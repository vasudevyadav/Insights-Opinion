"use client";

export default function BlogHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative overflow-hidden bg-[url('/contact-us/contact-us-panner.png')] bg-cover bg-bottom bg-no-repeat text-white lg:mt-20 mt-8 w-full">
                <div className="absolute inset-0 bg-[#0a1640]/60" />
                <div className="relative z-10 mx-auto flex lg:min-h-[390px] min-h-[280px] w-full max-w-7xl items-center justify-center px-5 sm:px-4">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold lg:text-[52px] lg:font-medium leading-tight">
                            Blog
                        </h1>
                        <p className="mt-3 text-sm text-white/70">
                            Home &gt; Blog
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}