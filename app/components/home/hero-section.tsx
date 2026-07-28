import Image from "next/image";
import Link from "next/link";
import LeadModalTrigger from "@/app/components/shared/lead-modal-trigger";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#edf6ff] text-white">
      <div className="absolute inset-0 bg-[#14284d] sm:[clip-path:polygon(0_0,100%_0,100%_92%,55%_100%,0_100%)]">
        <Image
          src="/home/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hidden object-cover object-[64%_bottom] sm:block lg:object-center"
        />
        <Image
          src="/home/hero-banner-mob.png"
          alt=""
          fill
          priority
          sizes="(max-width: 639px) 100vw, 0px"
          className="object-cover object-center sm:hidden"
        />
      </div>

      <div className="relative mx-auto min-h-[clamp(550px,150vw,850px)] w-full max-w-[1500px] px-5 sm:px-8 lg:min-h-[clamp(584px,42.75vw,642px)] lg:px-[clamp(48px,6.7vw,100px)]">
        <div className="relative z-20 max-w-[650px] pt-12 sm:pt-16 lg:flex lg:min-h-[clamp(584px,42.75vw,642px)] lg:items-center lg:pb-20 lg:pt-0">
          <div>
            <h1 className="text-[34px] font-medium leading-[1.16] tracking-[-0.02em] sm:text-[46px] lg:text-[clamp(42px,3.4vw,58px)]">
              Insights Behind
              <br />
              Confident Decisions.
            </h1>
            <p className="mt-5 max-w-[540px] text-base leading-[1.45] text-white/90 sm:text-xl lg:text-[22px]">
              Evidence-led market research that turns complex data into clear
              direction.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <LeadModalTrigger className="rounded-full bg-[#17b99c] px-7 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#12a98e] sm:px-8 sm:text-lg">
                Get Started
              </LeadModalTrigger>
              <Link
                href="/about-us"
                className="rounded-full border border-white px-7 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:px-8 sm:text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[250px] sm:right-0 sm:left-auto sm:w-[610px] lg:inset-0 lg:h-full lg:w-full">
          <Image
            src="/home/12-years.png"
            alt="12+ years of research expertise"
            width={186}
            height={85}
            className="hero-stat-float hero-stat-float--one absolute top-[24%] left-[3%] h-auto w-[138px] lg:top-[44%] lg:left-[56%] lg:w-[clamp(165px,12.4vw,160px)]"
          />
          <Image
            src="/home/95-client.png"
            alt="95%+ client retention"
            width={167}
            height={85}
            className="hero-stat-float hero-stat-float--two absolute top-[5%] right-[2%] h-auto w-[128px] lg:top-[28%] lg:right-[10%] lg:w-[clamp(150px,11.15vw,160px)]"
          />
          <Image
            src="/home/8m-globle.png"
            alt="8 million plus global panellists"
            width={1000}
            height={1000}
            className="hero-stat-float hero-stat-float--three absolute right-[2%] bottom-[11%] h-auto w-[128px] lg:right-[6.5%] lg:bottom-[18%] lg:w-[clamp(150px,11.15vw,160px)]"
          />
        </div>
      </div>
    </section>
  );
}
