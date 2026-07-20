import Image from "next/image";
import BackgroundShape from "@/app/components/about-us/background-shape";

type WhoUsesItem = {
  label: string;
  href?: string;
};

type WhoUsesData = {
  items?: readonly WhoUsesItem[];
  imageSrc?: string;
  imageAlt?: string;
  titleTop?: string;
  titleMiddleLine1?: string;
  titleMiddleLine2?: string;
  titleBottom?: string;
};

export default function WhoUsesHealthcareResearch({
  data,
}: {
  data?: WhoUsesData;
}) {
  const items = data?.items || [];
  const imageSrc = data?.imageSrc;
  const imageAlt = data?.imageAlt || "";

  if (!data || items.length === 0) return null;

  return (
    <section
      data-aos="fade-up"
      className="relative overflow-hidden bg-[#edf6ff] py-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-10">
        <BackgroundShape side="right" variant={2} className="-right-20 -top-12 w-[300px] opacity-40 sm:w-[430px] lg:w-[510px]" />

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center lg:gap-14">
          <div data-aos="fade-up" data-aos-delay="100" className="order-2 w-full max-w-[430px] lg:order-1">
            <h2 className="leading-[1.05] tracking-[-0.02em]">
              <span className="block text-xl font-normal text-[#3a4654] sm:text-3xl">
                {data.titleTop}
              </span>

              <span className="block bg-gradient-to-r from-[#35c7c8] via-[#56c4d8] to-[#79a8ff] bg-clip-text py-1 text-2xl font-semibold text-transparent sm:text-4xl">
                {data.titleMiddleLine1}
              </span>

              <span className="mb-1 block bg-gradient-to-r from-[#35c7c8] via-[#56c4d8] to-[#79a8ff] bg-clip-text text-2xl font-semibold text-transparent sm:text-4xl">
                {data.titleMiddleLine2}
              </span>

              <span className="mt-1 block text-xl font-normal text-[#3a4654] sm:text-3xl">
                {data.titleBottom}
              </span>
            </h2>

            <ul className="mt-12 space-y-4">
              {items.map((item, idx) => (
                <li key={idx} data-aos="fade-up" data-aos-delay={150 + idx * 100} className="flex items-center gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#9ed8e6] text-lg font-medium text-[#62c5db]">
                    ✓
                  </span>

                  <a
                    href={item.href || "#"}
                    className={`text-lg leading-[1.45] text-[#5f6b78] transition hover:text-[#2b84e0] hover:underline hover:underline-offset-2 ${idx === 0 ? "font-normal text-[#4b95d9]" : ""
                      }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {imageSrc && (
            <div data-aos="fade-up" data-aos-delay="250" className="relative order-1 w-full max-w-[600px] lg:order-2">
              <div className="overflow-hidden rounded-[26px]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={540}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
