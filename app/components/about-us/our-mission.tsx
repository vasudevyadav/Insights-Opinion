import Image from "next/image";
import BackgroundShape from "./background-shape";

export default function OurMission() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-12 lg:py-20">
            <BackgroundShape variant={2} side="left" className="-left-20 -top-64 hidden w-[420px] opacity-50 lg:block" />
            <BackgroundShape variant={2} className="-right-16 -top-24 w-[330px] opacity-55 sm:w-[420px] lg:-right-3 lg:-top-36 lg:w-[500px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
                <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">

                    <div className="max-w-xl lg:pl-8">
                        <p className="mb-2 text-[28px] font-light leading-none text-[#4b5563] lg:text-[34px]">
                            Our
                        </p>

                        <h2 className="text-[28px] font-medium leading-tight 
            bg-gradient-to-r from-[#1bb0a4] to-[#74b9ff] bg-clip-text text-transparent 
            lg:text-[40px]">
                            Mission
                        </h2>

                        <p className="mt-3 text-xs leading-6 text-gray-700 lg:text-base">
                            At Insights Opinion, our mission is to empower organizations with accurate and insightful data that fuels impactful decision-making. We firmly believe in the transformative power of data and are dedicated to delivering top-quality research services that turn information into a strategic advantage.

                        </p>

                    </div>


                    <div className="flex justify-center lg:justify-end">
                        <div className="relative z-10 overflow-hidden rounded-[22px] w-full">
                            <Image
                                src="/about-us/our-mission.png"
                                alt="Our Mission"
                                width={700}
                                height={420}
                                className="h-auto w-full max-w-[575px] object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
