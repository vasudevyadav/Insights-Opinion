import Image from "next/image";

export default function QuantDataAnalysis({
  content,
}: {
  content?: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };
}) {
  return (
    <section className="relative overflow-hidden bg-[#161b3c] min-h-105 lg:h-187.5">
      <div className="absolute inset-0">
        <Image
          src="/quality/services-analays.png"
          alt="Working With Insights Opinion"
          fill
          className="object-cover object-center hidden lg:block"
          unoptimized
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-[1400px] items-center px-4 sm:px-6 lg:px-8">

        <div className="w-full max-w-[450px] py-6 pt-16 sm:pt-24 lg:py-24 lg:pt-64">
          <h2 className="mb-5 text-[28px] font-light leading-tight text-white lg:text-[40px]">

            <span className="bg-[linear-gradient(90deg,#17afa1,#43bccb,#74b9ff)] bg-clip-text font-semibold text-transparent">
              {content ? content.heading.split(" ").slice(0, 2).join(" ") : "Insights Opinion"}
            </span>
            {content ? (
              <>
                {" "}
                {content.heading.split(" ").slice(2).join(" ")}
              </>
            ) : (
              <>
                <br />
                Analysis Services
              </>
            )}

          </h2>

          <p className="mb-12 text-sm leading-7 text-white/80 lg:text-lg">
            {content?.paragraph1 ||
              "Collecting data is only part of the job. Our quantitative data analysis services turn raw survey and fieldwork output into findings your team can act on."}
          </p>

          <p className=" text-sm leading-7 text-white/80 lg:text-lg">
            {content?.paragraph2 ||
              "Every analysis is built around your study objectives, not a standard template. Learn more about our Data Insights capabilities."}

          </p>

        </div>
      </div>
    </section >
  );
}
