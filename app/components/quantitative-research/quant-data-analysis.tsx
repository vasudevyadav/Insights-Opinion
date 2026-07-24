import Image from "next/image";

type ServiceCategory = "quantitative" | "qualitative" | "support";

const CATEGORY_BACKGROUND_IMAGES: Record<ServiceCategory, string> = {
  quantitative: "/comman/Quantitative-Market-Research-Services.png",
  qualitative: "/comman/Online-Qualitative-Market-Research.png",
  support: "/comman/Market-Research-Support-Services-.png",
};

export default function QuantDataAnalysis({
  content,
  category,
}: {
  content?: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };
  category: ServiceCategory;
}) {
  if (!content) return null;

  return (
    <section className="relative overflow-hidden bg-[#edf5ff] min-h-105 lg:h-187.5">
      <div className="absolute inset-0">
        <Image
          src={CATEGORY_BACKGROUND_IMAGES[category]}
          alt=""
          fill
          className="object-cover object-center hidden lg:block"
          unoptimized
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] items-center px-4 sm:px-6 lg:px-8">

        <div className="w-full max-w-[450px] py-6 pt-10 lg:py-24 lg:pt-48">
          <h2 className="mb-5 text-[28px] font-light leading-tight text-white lg:text-[40px]">

            <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text font-semibold text-transparent">
              {content.heading.split(" ").slice(0, 2).join(" ")}
            </span>
            {" "}
            {content.heading.split(" ").slice(2).join(" ")}

          </h2>

          <p className="mb-12 text-sm leading-7 text-white/80 lg:text-lg line-clamp-6">
            {content.paragraph1}
          </p>

          <p className=" text-sm leading-7 text-white/80 lg:text-lg line-clamp-6">
            {content.paragraph2}

          </p>

        </div>
      </div>
    </section >
  );
}
