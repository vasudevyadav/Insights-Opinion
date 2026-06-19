"use client";

import Image from "next/image";

export default function CatiDetailsWhy() {
  return (
    <section className="relative overflow-hidden bg-[#eef5fb]">


      <div className="relative z-10 mx-auto max-w-[1450px]">
        <div className="grid items-center lg:min-h-[600px] lg:grid-cols-[32%_38%_30%]">

          <div>
            {/* LEFT CONTENT */}
            <div className="px-8 py-12 lg:pl-16">
              <h2>
                <span className=" bg-gradient-to-r from-[#16c3b4] to-[#5caee7] bg-clip-text text-5xl font-bold text-transparent">
                  Why is CATI
                </span>
              </h2>

              <h2 className="mt-5">
                <span className="text-5xl font-light text-[#2b3553]">
                  the Right Choice?
                </span>
              </h2>


              <p className="mt-8 text-[22px] leading-[1.7] text-[#3f4b5f]">
                CATI is a better fit than online surveys when the study
                needs more than a link sent to a panel. It works well
                when your audience is harder to reach online, when
                questions are sensitive or complex, when you need to
                probe beyond a yes or no answer, or when you are running
                a B2B or healthcare study where respondent verification
                matters.
              </p>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="relative h-[600px]">
            <Image
              src="/quantity-details/right-choice.png"
              alt="Why Choose CATI"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="px-8 lg:pr-20">
            <p className="max-w-[500px] text-[22px] leading-[1.6] text-[#3f4b5f]">
              Our telephone interviewing services are designed
              for studies where data quality comes first.
            </p>

            <p className="mt-5 max-w-[520px] text-[28px] font-semibold leading-[1.5]">
              <span className="text-[#5caee7]">
                For studies that need face-to-face
                interaction instead,
              </span>{" "}
              <span className="text-[#16c3b4]">
                our CAPI services are the right alternative.
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}