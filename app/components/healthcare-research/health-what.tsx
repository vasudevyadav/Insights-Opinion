type HealthCard = {
  title?: string;
  highlight?: string;
  desc?: string;
};

type HealthWhatProps = {
  data?: {
    cards?: readonly HealthCard[];
    backgroundImage?: string;
  };
};

export default function HealthWhat({ data }: HealthWhatProps) {
  const cards = data?.cards || [];

  if (!data || cards.length === 0) return null;

  return (
    <section
      data-aos="fade-up"
      className="relative overflow-hidden bg-[#edf6ff] pt-4 lg:pt-8"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {data.backgroundImage && (
          <div className="relative z-50 mx-auto hidden h-[300px] w-full max-w-[1200px] overflow-hidden lg:block">
            <div
              className="absolute inset-0 bg-[length:100%_100%] bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${data.backgroundImage}')`,
              }}
            />

            <div
              className={`relative z-10 grid h-full gap-14 ${
                cards.length === 2
                  ? "grid-cols-2"
                  : cards.length === 4
                  ? "grid-cols-4"
                  : "grid-cols-3"
              }`}
            >
              {cards.map((card, i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="flex w-full flex-col items-center px-7 text-center">
                    {(card.title || card.highlight) && (
                      <h3 className="line-clamp-3 max-w-[95%] text-xl font-medium leading-[1.2] text-[#66758b]">
                        {card.title}{" "}
                        {card.highlight && (
                          <span className="font-semibold text-[#37c0c9]">
                            {card.highlight}
                          </span>
                        )}
                      </h3>
                    )}

                    {card.desc && (
                      <p className="mt-4 line-clamp-6 text-sm leading-[1.55] text-[#26384b]">
                        {card.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="lg:hidden">
          <div className="overflow-hidden">
            <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {cards.map((card, i) => (
                <div key={i} className="w-full shrink-0 snap-center">
                  <div className="rounded-[18px] bg-[#eaf0f5] px-5 py-6 text-center shadow-[0_6px_18px_rgba(0,0,0,0.08)]">
                    {(card.title || card.highlight) && (
                      <h3 className="mx-auto max-w-[210px] text-xl lg:text-2xl font-medium leading-[1.2] text-[#66758b]">
                        {card.title}{" "}
                        {card.highlight && (
                          <span className="font-semibold text-[#37c0c9]">
                            {card.highlight}
                          </span>
                        )}
                      </h3>
                    )}

                    {card.desc && (
                      <p className="mt-4 text-xs lg:text-sm leading-[1.6] text-[#26384b]">
                        {card.desc}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BackgroundShape side="right" variant={2} className="-right-20 -top-16 w-[300px] opacity-40 sm:w-[430px] lg:w-[500px]" />
      </div>
    </section>
  );
}
import BackgroundShape from "@/app/components/about-us/background-shape";
