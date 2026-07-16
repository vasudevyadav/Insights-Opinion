export default function AboutHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative w-full overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-center bg-no-repeat text-white">

                <div className="relative z-10 mx-auto flex min-h-[350px] w-full max-w-7xl items-center px-5 sm:min-h-[500px] sm:px-6 lg:min-h-[390px] lg:px-8">
                    <div className="mx-auto text-center">
                        <h1 className="site-page-title bg-gradient-to-r from-[#21c4b4] to-[#5ba9ef] bg-clip-text text-transparent">
                            About Us
                        </h1>
                        <p className="mt-4 text-sm text-white/85">Home <span className="mx-2 text-[#35c6cf]">›</span> About Us</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
