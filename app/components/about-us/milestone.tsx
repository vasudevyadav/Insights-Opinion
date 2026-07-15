import Image from "next/image";

export default function Milestone() {
    return (

        <section className="relative bg-[#07172f] lg:mt-0">
            <div className="about-horizontal-scroll overflow-x-auto">
                <Image
                    src="/about-us/milestone.png"
                    alt="Insights Opinion growth timeline"
                    height={2000}
                    width={2000}
                    className="h-auto min-h-[270px] min-w-[760px] object-cover lg:min-h-0 lg:w-full lg:min-w-0"
                />
            </div>

        </section>

    );
}
