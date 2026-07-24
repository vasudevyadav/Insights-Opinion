import Image from "next/image";
import BackgroundShape from "../about-us/background-shape";

const bottomCards = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <rect x="3" y="18" width="5" height="10" rx="1.5" fill="white" />
        <rect x="11" y="12" width="5" height="16" rx="1.5" fill="white" />
        <rect x="19" y="7" width="5" height="21" rx="1.5" fill="white" />
        <path d="M3 6 L13 2 L20 8 L29 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2" />
        <path d="M16 8 L16 16 L22 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="25" cy="7" r="3" fill="white" />
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <circle cx="16" cy="16" r="12" stroke="white" strokeWidth="2" />
        <path d="M10 16 L14 20 L22 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 4 L16 8 M28 16 L24 16 M16 28 L16 24 M4 16 L8 16" stroke="white" strokeWidth="1.5"
          strokeLinecap="round" />
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <path d="M4 28 L14 18 L20 24 L28 10" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="2" y="26" width="28" height="2" rx="1" fill="white" opacity="0.4" />
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
        <path d="M6 16 H10 L14 6 L18 26 L22 16 H26" stroke="white" strokeWidth="2.5" strokeLinecap="round"
          strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function QuantWhat({
  content,
}: {
  content?: {
    headingLine1: string;
    headingLine2: string;
    suffix: string;
    description: string;
    image: string;
    imageAlt: string;
    cards: readonly string[];
  };
}) {
  if (!content) return null;

  return (
    <section className="relative overflow-hidden bg-[#f0f7ff] pt-4 lg:pt-4">
      <BackgroundShape variant={2} side="left" className="-left-24 bottom-[-180px] w-[320px] opacity-40 sm:w-[410px] lg:-left-2 lg:w-[490px]" />
      <BackgroundShape variant={4} className="-right-24 top-8 w-[300px] opacity-35 sm:w-[380px] lg:-right-2 lg:w-[450px]" />
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Top row: heading left + quant-about image right */}
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10">
          {/* Left: heading + description */}
          <div className="w-full max-w-[500px] shrink-0">
            <h2 className="text-3xl font-semibold leading-[1.1] lg:text-5xl">
              <span className="bg-gradient-to-r from-[#1dc3b3] to-[#4faee8] bg-clip-text text-transparent">
                {content.headingLine1}
                <br />
                {content.headingLine2}
              </span>
              <br />
              <span className="text-4xl font-normal text-[#1e2746]">
                {content.suffix}
              </span>
            </h2>
            <p className="mt-5 text-sm leading-[1.8] text-[#4a5568] lg:text-lg">
              {content.description}
            </p>
          </div>

          {/* Right: API-provided section image */}
          <div className="relative flex w-full flex-1 items-center justify-center">
            <div className="relative w-full">
              <Image src={content.image || "/quality/quant-about.png"} alt={content.imageAlt || `${content.headingLine1} ${content.headingLine2}`} width={1500} height={1000}
                className="h-auto w-full object-contain" priority />
            </div>
          </div>
        </div>

        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-5 scrollbar-hide sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 sm:pt-0 lg:mt-16 lg:grid-cols-5">
          {content.cards.map((text, i) => {
            const card = bottomCards[i % bottomCards.length];

            return (
              <div key={i} className="relative min-w-[72vw] snap-center sm:min-w-0">
                {/* Card */}
                <div className="
          relative min-h-[140px]
          bg-gradient-to-r from-[#1dc3b3] to-[#48b6dc]
          rounded-tl-[12px]
          rounded-bl-[12px]
          rounded-br-[12px]
          rounded-tr-[24px]
          p-5
          shadow-lg
          flex items-center
        ">
                  {/* Icon Box */}
                  <div className="
            absolute
            -top-4
            right-0
            flex
            h-[52px]
            w-[52px]
            items-center
            justify-center
            rounded-[8px]
            bg-[#57bde7]
            shadow-md
          ">
                    {card.icon}
                  </div>

                  {/* Text */}
                  <p className=" pr-4 text-[14px] font-medium leading-[1.7] text-white line-clamp-4">
                    {text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
