import Image from "next/image";
import type { BackendCaseStudy } from "@/app/lib/case-studies-api";

export default function BackendStudyDetail({ study }: { study: BackendCaseStudy }) {
  const { detail } = study;
  const heading = detail.heading || study.title;
  return (
            <article className="min-w-0 text-[#172446]">
              <header>
                {detail.results && (
                  <p className="mb-6 text-sm font-medium leading-6 text-[#172446] lg:text-base">
                    {detail.results}
                  </p>
                )}
                <h2 className="text-[22px] font-medium leading-tight text-[#172446] sm:text-[25px]">
                  {heading}
                </h2>

                <div className="mt-4">
                  <h3 className="text-sm font-semibold text-[#172446]">
                    {detail.clientLabel}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#172446] lg:text-base">
                    {detail.client}
                  </p>
                </div>

                <div className="mt-3">
                  <h3 className="text-sm font-semibold text-[#172446]">
                    {detail.mandateLabel}
                  </h3>
                  <div className="mt-1 space-y-2 text-sm leading-6 text-[#172446] lg:text-base">
                    {(detail.mandate.length
                      ? detail.mandate
                      : detail.overview
                    ).map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </header>

              <section className="mt-6 rounded-[22px] bg-[#dceffb]/80 px-4 py-6 sm:px-5 sm:py-7">
                <h2 className="text-[22px] font-medium leading-tight text-[#172446]">
                  {detail.methodologyHeading}
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-[#172446] lg:text-base">
                  {detail.methodology.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {detail.methodologyImage && (
                  <div className="relative mx-auto mt-5 aspect-[2.55/1] w-full max-w-[520px] overflow-hidden">
                    <Image src={detail.methodologyImage} alt="Methodology" fill className="object-cover" sizes="(max-width: 1024px) 90vw, 520px" />
                  </div>
                )}
              </section>

              <section className="mt-6">
                <h2 className="text-[22px] font-medium leading-tight text-[#172446]">
                  Basic Inputs/{detail.deliveryHeading}
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-6 text-[#172446] lg:text-base">
                  {detail.delivery.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="mt-6">
                <h2 className="text-[22px] font-medium leading-tight text-[#172446]">
                  {detail.resultsHeading}
                </h2>
                <p className="mt-3 text-sm font-medium leading-6 text-[#172446] sm:text-base">
                  {detail.results}
                </p>
              </section>
            </article>
  );
}
