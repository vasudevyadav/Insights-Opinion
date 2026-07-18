import Image from "next/image";
import CareerShape from "./career-shape";

export default function CareerValues() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-12 [font-family:var(--font-poppins)] lg:py-16">
            <CareerShape variant={1} className="-right-20 top-0 w-[340px] opacity-25 sm:w-[430px] lg:-right-2 lg:top-8 lg:w-[540px]" />
            <CareerShape variant={2} className="-left-24 bottom-[-190px] w-[330px] opacity-25 sm:w-[410px] lg:-left-2 lg:w-[510px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
                <div className="mb-10 text-center lg:mb-12">
                    <h2 className="text-2xl font-semibold lg:text-[40px] lg:leading-tight">
                        <span className="bg-linear-to-r from-[#1dc3b3] via-[#1dc3b3] to-[#3c8df6]  bg-clip-text text-transparent">People. Insights. Impact.</span>{" "}

                    </h2>
                    <p className="mx-auto mt-4 max-w-6xl text-sm leading-relaxed text-[#374151] lg:text-base">
                        Our success is based on teamwork, working together to have an environment based on
                        dignity and respect across the wide variety of job roles that exist within our
                        company. We actively encourage and promote the development of employees throughout
                        the company, nurturing and growing talented individuals to become the next
                        generation of leaders within our business.
                    </p>
                </div>

                <div className="relative mx-auto w-full max-w-[1051px]">
                    <Image
                        src="/career/people-impact.png"
                        alt="People Insights Impact"
                        width={1051}
                        height={273}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
