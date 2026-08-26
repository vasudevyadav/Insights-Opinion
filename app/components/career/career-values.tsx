import CareerShape from "./career-shape";
import { BadgeCheck, ChartNoAxesCombined, HeartHandshake } from "lucide-react";

const values = [
    {
        title: "We’re empowering the human connection",
        description: "We champion the power of human connection. We’re united globally by our shared values of innovation, grit, humility, and passion for customer success.",
        icon: HeartHandshake,
    },
    {
        title: "Our industry is growing rapidly",
        description: "The Market Research industry has undergone strong growth over the past five years. This has been supported by increased research and development (R&D) and internet advertising expenditure, which have driven demand for industry services.",
        icon: ChartNoAxesCombined,
    },
    {
        title: "We provide solutions that make an impact",
        description: "We constantly push ourselves to be our best, focus on solutions, and arrive every day inspired to make an impact through our talents, passion, and hard work.",
        icon: BadgeCheck,
    },
];

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

                <div className="relative mx-auto grid w-full max-w-[1051px] gap-5 md:grid-cols-3">
                    {values.map(({ title, description, icon: Icon }, index) => (
                        <article
                            key={title}
                            className={`relative min-h-[270px] border border-[#55b9df]/40 p-6 ${index === 1 ? "bg-gradient-to-br from-[#54b9e6] to-[#20b6aa] text-white" : "bg-white text-[#18213f]"}`}
                        >
                            <Icon className={`mb-5 h-10 w-10 ${index === 1 ? "text-white" : "text-[#20b6b4]"}`} aria-hidden="true" />
                            <h3 className={`text-xl font-semibold leading-snug ${index === 1 ? "text-white" : "text-[#20abc1]"}`}>
                                {title}
                            </h3>
                            <p className={`mt-3 text-sm leading-6 ${index === 1 ? "text-white/90" : "text-[#374151]"}`}>
                                {description}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
