export default function ContactHero() {
    return (
        <section className="bg-[#edf6fe]">
            <div className="relative w-full overflow-hidden bg-[url('/contact-us/contact-us-panner.png')] bg-cover bg-bottom bg-no-repeat text-white">
                <div className="relative z-10 mx-auto flex min-h-[300px] w-full max-w-7xl items-center px-5 pt-16 sm:min-h-[360px] sm:px-6 lg:min-h-[430px] lg:pt-0">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="bg-[linear-gradient(90deg,#18b3a3_0%,#42bdcb_48%,#70b4ff_100%)] bg-clip-text text-[38px] font-semibold leading-tight text-transparent sm:text-[48px] lg:text-[58px]">
                            Contact Us
                        </h1>
                        <p className="mt-4 text-sm text-white/85 sm:text-base">Home &gt; Contact Us</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
