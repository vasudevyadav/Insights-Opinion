import Image from "next/image";

export default function CareerLife() {
    return (
        <section className="bg-[#edf6ff] relative overflow-hidden pb-8 lg:pb-12">

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl lg:text-[40px] font-medium leading-tight">
                        <span className="font-serif italic font-normal text-[#1a1a2e]">Life</span>{" "}
                        <span className="bg-linear-to-r from-[#1dc3b3] via-[#1dc3b3] to-[#3c8df6]  bg-clip-text text-transparent font-semibold">@ Insights Opinion</span>

                    </h2>

                </div>

                <div className="relative w-full">
                    <Image
                        src="/career/life-img.png"
                        alt="Life at Insights Opinion"
                        width={1280}
                        height={600}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
