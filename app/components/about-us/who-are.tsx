import Image from "next/image";
import BackgroundShape from "./background-shape";

export default function WhoWeAre() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-8 lg:py-12">
            <BackgroundShape variant={1} className="-right-16 top-0 w-[330px] opacity-55 sm:w-[430px] lg:-right-8 lg:w-[570px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                {/* Top Content */}
                <div className="mx-auto max-w-5xl text-center">
                    <h2
                        className="bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text
                        text-[24px] font-semibold leading-tight text-transparent
                        sm:text-[28px] md:text-[32px] lg:text-[40px]"
                    >
                        Who We Are
                    </h2>

                    <p
                        className="mx-auto mt-3 max-w-5xl text-[13px] leading-6 text-[#4b5563] md:text-[15px] lg:mt-2 lg:text-[15px]"
                    >
                        Welcome to Insights Opinion, where we provide actionable insights through expert data collection and research solutions. As a global leader in market research and data services, we empower businesses with the critical knowledge they need to make well-informed decisions. Our unwavering commitment to quality, innovation, and client success drives every aspect of our work.
                    </p>
                </div>

                <div
                    className="mt-8 grid items-center gap-8
                    md:mt-10 md:gap-10
                    lg:mt-16 lg:grid-cols-[1.18fr_0.82fr] lg:gap-16"
                >
                    {/* Left Image */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="aspect-[16/10] w-full max-w-[575px] overflow-hidden rounded-[20px] sm:aspect-auto sm:rounded-[24px]">
                            <Image
                                src="/about-us/revolution.webp"
                                alt="Who We Are"
                                width={620}
                                height={360}
                                className="h-full w-full object-cover object-center sm:h-auto"
                            />
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="mx-auto w-full lg:max-w-md text-center lg:mx-0 lg:text-left">
                        <p className="text-[24px] font-light leading-none text-[#334155] sm:text-[26px] lg:text-[34px]">
                            Our
                        </p>

                        <h3
                            className="bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text
                            text-[26px] font-medium leading-tight text-transparent
                            sm:text-[30px] md:text-[34px] lg:text-[40px]"
                        >
                            Evolution
                        </h3>

                        <p className="mt-4 text-[14px] leading-6 text-[#4b5563] sm:text-[15px] lg:mt-5 lg:text-base">
                            Since our founding in 2018, we have grown from a small, dedicated team into a global leader in data-driven decision-making. Our journey reflects our commitment to continuous innovation, strategic expansion, and a relentless focus on adding value to our clients. Here&apos;s how we&apos;ve evolved:
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
}
