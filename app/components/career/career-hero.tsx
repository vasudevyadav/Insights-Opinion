export default function CareerHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative w-full overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom-left bg-no-repeat text-white">
                <div className="relative z-10 mx-auto flex min-h-[280px] w-full max-w-7xl items-center justify-center px-5 sm:min-h-[350px] sm:px-6 lg:min-h-[430px]">
                    <div className="mx-auto mb-10 max-w-2xl text-center">
                        <h1 className="site-page-title quality-gradient-text">
                            Career
                        </h1>
                        <p className="mt-4 text-sm text-white/85">Home <span className="mx-2 text-[#35c6cf]">›</span> Career</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
