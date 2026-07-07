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
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
