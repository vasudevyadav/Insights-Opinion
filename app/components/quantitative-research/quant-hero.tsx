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

export default function QuantHero({
  content,
}: {
  content?: QuantHeroContent;
}) {
  if (!content) return null;

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
          <div className="py-8 lg:py-16 lg:pt-20">
            <h1 className="text-3xl font-semibold leading-[1.15] lg:text-6xl">
              <span className="block text-[#1dc3b3]">
                {content.titleLine1}
              </span>
              <span className="block text-[#1dc3b3]">
                {content.titleLine2}
              </span>
              <span className="mt-1 block text-[28px] font-medium text-white/90 sm:text-[36px] lg:text-[42px]">
                {content.label}
              </span>
            </h1>

            <p className="mt-8 max-w-[470px] text-sm leading-[1.85] text-white/70 lg:text-lg">
              <strong className="font-semibold text-white">
                {content.lead}
              </strong>{" "}
              {content.description}
            </p>

            <div className="my-5 space-y-2">
              <Link
                href="#"
                className="flex items-center gap-1.5 text-sm lg:text-lg text-white/75 transition hover:text-[#1dc3b3]"
              >
                {content.insightText}
                <span className="text-white">→</span>
              </Link>
            </div>

            <div>
              <button className="h-13 whitespace-nowrap px-6 text-center text-sm font-semibold transition-all md:text-base rounded-full bg-gradient-to-r from-[#37c9c7] to-[#4a8fe8] text-white shadow-[0_8px_24px_rgba(74,143,232,0.22)]">Quantitative Research</button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
