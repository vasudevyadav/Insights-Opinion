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
    <section className="relative h-125 overflow-hidden bg-[linear-gradient(135deg,#151b3c_0%,#162e54_52%,#173c68_100%)] sm:h-145 lg:h-175 lg:bg-[#edf6ff] lg:bg-none">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(23,60,104,0.7),transparent_38%),radial-gradient(circle_at_12%_85%,rgba(21,27,60,0.55),transparent_42%)] lg:hidden" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <Image
          src={content.backgroundImage || "/quality/quant-banner.png"}
          alt=""
          fill
          priority
          sizes="100vw"
          unoptimized
          className="object-cover object-[right_0px_bottom_0px]" />
      </div>



      <div className="relative z-10 mx-auto max-w-[1450px] px-5 pt-12 lg:px-1 lg:pt-0">

        <div className="grid min-h-[420px] grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:pl-12">

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

            <p className="mt-8 max-w-[470px] text-sm leading-[1.85] text-white/70 lg:text-base">
              {/* <strong className="font-semibold text-white">
                {content.lead}
              </strong>{" "} */}
              {content.description}
            </p>

            <div className="my-5 space-y-2 hidden lg:block">
              <Link
                href="#"
                className="flex items-center gap-1.5 text-sm lg:text-lg text-white/75 transition hover:text-[#1dc3b3] hidden"
              >
                {content.insightText}
                <span className="text-white">→</span>
              </Link>
            </div>

            <div>
              <Link href="/contact" className="inline-block mt-5 lg:mt-0">
                <button className="h-10 whitespace-nowrap px-6 text-center text-sm font-semibold transition-all md:text-base rounded-full bg-gradient-to-r from-[#37c9c7] to-[#4a8fe8] text-white shadow-[0_8px_24px_rgba(74,143,232,0.22)]"> Get In Touch </button>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
