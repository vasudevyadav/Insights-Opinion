import Image from "next/image";
import CareerShape from "./career-shape";

export default function CareerLife() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-12 [font-family:var(--font-poppins)] lg:py-16">
            <CareerShape variant={3} className="-left-20 -top-8 w-[320px] opacity-25 sm:w-[400px] lg:-left-1 lg:-top-20 lg:w-[480px]" />
            <CareerShape variant={4} className="-right-20 -top-44 w-[310px] opacity-25 sm:w-[390px] lg:-right-2 lg:-top-56 lg:w-[460px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
                <div className="mb-8 text-center lg:mb-10">
                    <h2 className="text-[25px] font-medium leading-tight lg:text-[31px]">
                        <span className="mr-1 inline-block -rotate-6 text-[32px] font-normal italic text-[#101938] [font-family:'Snell_Roundhand','Brush_Script_MT','Segoe_Script',cursive] lg:text-[42px]">Life</span>{" "}
                        <span className="bg-linear-to-r from-[#1dc3b3] via-[#1dc3b3] to-[#3c8df6] bg-clip-text font-medium text-transparent">@ Insights Opinion</span>

                    </h2>

                </div>

                <div className="no-scrollbar relative mx-auto w-full max-w-[1142px] overflow-x-auto">
                    <Image
                        src="/career/life-img.png"
                        alt="Life at Insights Opinion"
                        width={1142}
                        height={466}
                        className="h-auto min-w-[720px] object-contain sm:min-w-0 sm:w-full"
                    />
                </div>
            </div>
        </section>
    );
}
