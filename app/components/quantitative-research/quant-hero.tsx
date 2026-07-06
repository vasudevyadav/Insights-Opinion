import Image from "next/image";
import Link from "next/link";

type QuantHeroContent = {
  titleLine1: string;
  titleLine2: string;
  label: string;
  lead: string;
  description: string;
  insightText: string;
  backgroundImage?: string;
};

const defaultContent: QuantHeroContent = {
  titleLine1: "Quantitative",
  titleLine2: "Market Research",
  label: "Services",
  lead: "Quantitative market research",
  description:
    "is how businesses get reliable numbers behind their decisions. It tells you how many customers prefer a product, how often they buy, what drives their choices, and how your brand compares in the market.",
  insightText: "Turn Market Uncertainty into Actionable Insights",
  backgroundImage: "/quality/quant-banner.png",
};

export default function QuantHero({
  content = defaultContent,
}: {
  content?: QuantHeroContent;
}) {
  return (
    <section className="relative h-125 bg-[#edf6ff] sm:h-145 lg:h-175">

      <div className="absolute inset-0">
        <Image
          src={content.backgroundImage || "/quality/quant-banner.png"}
          alt=""
          fill
          priority
          className="object-cover lg:object-bottom object-left"
        />
      </div>



      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-12 lg:px-1 lg:pt-0">

        <div className="grid min-h-[420px] grid-cols-1 items-center gap-6 lg:grid-cols-2">

          {/* LEFT TEXT */}
          <div className="py-8 lg:py-16 lg:pt-32">
            <h1 className="text-4xl font-extrabold leading-[1.05] lg:text-5xl">
              <span className="block text-[#1dc3b3]">
                {content.titleLine1}
              </span>
              <span className="block text-[#1dc3b3]">
                {content.titleLine2}
              </span>
              <span className="mt-1 block text-[28px] font-semibold text-white/90 sm:text-[36px] lg:text-[42px]">
                {content.label}
              </span>
            </h1>

            <p className="mt-5 max-w-[470px] text-[14px] leading-[1.85] text-white/70 sm:text-[15px]">
              <strong className="font-semibold text-white">
                {content.lead}
              </strong>{" "}
              {content.description}
            </p>

            <div className="mt-5 space-y-2">
              <Link
                href="#"
                className="flex items-center gap-1.5 text-[14px] text-white/75 transition hover:text-[#1dc3b3]"
              >
                {content.insightText}
                <span className="text-[#1dc3b3]">→</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-1.5 text-[14px] text-white/75 transition hover:text-[#1dc3b3]"
              >
                Talk to a Market Research Expert
              </Link>
            </div>

            <div className="mt-8">
              <Link
                href="#"
                className="inline-block rounded-full bg-[#1dc3b3] px-10 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(29,195,179,0.4)] transition hover:scale-[1.02] hover:opacity-90 sm:text-base"
              >
                Get Started
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
