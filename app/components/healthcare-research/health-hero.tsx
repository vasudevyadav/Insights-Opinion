import Link from "next/link";

export default function HealthHero({
  data,
}: {
  data?: {
    backgroundImage?: string;
    titleLine1?: string;
    titleLine2?: string;
    subtitle?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonUrl?: string;
    secondaryButtonText?: string;
    secondaryButtonUrl?: string;
  };
}) {
  if (!data) return null;

  return (
    <section className="bg-[#edf6fe] lg:pt-4">
      <div className="max-w-full">
        <div className="relative overflow-hidden bg-[#f1f8ff] text-white">
          {data.backgroundImage && (
            <div
              className="absolute inset-0 lg:bg-bottom"
              style={{
                backgroundImage: `url('${data.backgroundImage}')`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
          )}

          <div className="relative z-10 mx-auto flex min-h-[400px] max-w-7xl items-center px-5 py-14 sm:px-6 lg:min-h-[570px] lg:px-10 lg:py-0">
            <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div className="max-w-[560px]">
                {(data.titleLine1 || data.titleLine2) && (
                  <h1 className="text-[34px] font-semibold leading-[1.02] sm:text-[42px] lg:text-[58px]">
                    {data.titleLine1 && (
                      <span className="block text-[#35d0c7]">
                        {data.titleLine1}
                      </span>
                    )}
                    {data.titleLine2 && (
                      <span className="block text-[#79bfff]">
                        {data.titleLine2}
                      </span>
                    )}
                  </h1>
                )}

                {data.subtitle && (
                  <p className="mt-5 max-w-[430px] text-[18px] leading-[1.45] text-white/95 sm:text-[22px]">
                    {data.subtitle}
                  </p>
                )}

                {data.description && (
                  <p className="mt-4 max-w-[500px] text-[14px] leading-7 text-white/80 sm:text-[17px]">
                    {data.description}
                  </p>
                )}

                {(data.primaryButtonText || data.secondaryButtonText) && (
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {data.primaryButtonText && (
                      <Link
                        href={data.primaryButtonUrl || "#"}
                        className="rounded-full bg-[#52d3b0] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(82,211,176,0.25)] transition hover:scale-[1.02] sm:px-9 sm:text-base"
                      >
                        {data.primaryButtonText}
                      </Link>
                    )}

                    {data.secondaryButtonText && (
                      <Link
                        href={data.secondaryButtonUrl || "#"}
                        className="rounded-full border border-white/45 bg-transparent px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10 sm:px-9 sm:text-base"
                      >
                        {data.secondaryButtonText}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}