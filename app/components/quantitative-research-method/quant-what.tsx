"use client";

import Image from "next/image";

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
      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="grid items-center lg:min-h-[600px] lg:grid-cols-[32%_38%_30%]">

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
              <p className="mt-8 text-[22px] leading-[1.7] text-[#3f4b5f]">
                {data.bodyLeft}
              </p>
            </div>
          </div>

          <div className="relative h-[600px]">
            <Image
              src="/quantity-details/right-choice.png"
              alt={data.heading1}
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>

          <div className="px-8 lg:pr-20">
            <p className="max-w-[500px] text-[22px] leading-[1.6] text-[#3f4b5f]">
              {data.bodyRight1}
            </p>
            <p className="mt-5 max-w-[520px] text-[28px] font-semibold leading-[1.5] text-[#16c3b4]">
              {data.bodyRight2}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
