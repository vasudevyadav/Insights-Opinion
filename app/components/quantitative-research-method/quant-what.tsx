import Image from "next/image";
import BackgroundShape from "@/app/components/about-us/background-shape";

interface WhyData {
  heading1: string;
  heading2: string;
  bodyLeft: string;
  bodyRight1: string;
  bodyRight2: string;
}

export default function QuantDetailsWhat({ data }: { data: WhyData }) {
  return (
    <section className="relative overflow-hidden bg-[#eef5fb]">
      <BackgroundShape variant={5} className="-right-14 top-0 z-0 w-[360px] opacity-55 sm:w-[440px] lg:-right-1 lg:top-2 lg:w-[526px] lg:opacity-70" />
      <div className="relative z-10 mx-auto max-w-[1450px]">

        {/* ── Desktop layout (unchanged) ── */}
        <div className="hidden lg:block">
          <div className="grid items-center lg:min-h-[600px] lg:grid-cols-[40%_60%]">

            <div>
              <div className="px-8 py-12 lg:pl-16">
                <h2>
                  <span className="bg-gradient-to-r from-[#16c3b4] to-[#5caee7] bg-clip-text text-5xl font-bold text-transparent">
                    {data.heading1}
                  </span>
                </h2>
                <h2 className="mt-5">
                  <span className="text-5xl font-light text-[#2b3553]">
                    {data.heading2}
                  </span>
                </h2>
                <p className="mt-8 text-[21px] leading-[1.7] text-[#3f4b5f]">
                  {data.bodyLeft}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="px-0 absolute -bottom-20 right-14">
                <p className="max-w-[450px] text-2xl leading-[1.6] text-[#3f4b5f]">
                  {data.bodyRight1}
                </p>
                <p className="mt-5 max-w-[450px] text-2xl font-semibold leading-[1.5] text-[#16c3b4]">
                  {data.bodyRight2}
                </p>
              </div>
            </div>

          </div>

          <div className="w-full">
            <Image
              src="/quantity-details/right-choice.png"
              alt={data.heading1}
              fill
              priority
              className="object-contain object-bottom !w-[50%] mr-64 mx-auto"
            />
          </div>
        </div>

        {/* ── Mobile / tablet layout ── */}
        <div className="lg:hidden px-6 pb-10 sm:px-10">

          <h2>
            <span className="bg-gradient-to-r from-[#16c3b4] to-[#5caee7] bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
              {data.heading1}
            </span>
          </h2>
          <h2 className="mt-3">
            <span className="text-2xl font-light text-[#2b3553] sm:text-4xl">
              {data.heading2}
            </span>
          </h2>

          <p className="mt-5 text-base text-[#3f4b5f] sm:text-lg">
            {data.bodyLeft}
          </p>

          <div className="relative mx-auto my-8 h-56 w-full max-w-sm sm:h-72">
            <Image
              src="/quantity-details/right-choice.png"
              alt={data.heading1}
              fill
              priority
              className="object-contain"
            />
          </div>

          <p className="text-base leading-[1.7] text-[#3f4b5f] sm:text-lg">
            {data.bodyRight1}
          </p>
          <p className="mt-4 text-sm font-semibold leading-[1.6] text-[#16c3b4] sm:text-lg">
            {data.bodyRight2}
          </p>

        </div>

      </div>
    </section>
  );
}
