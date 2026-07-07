import Image from "next/image";
import Link from "next/link";
import { type ServiceChild } from "@/app/lib/service-catalog";

type QuantDetailsMethodsProps = {
  currentSlug: string;
  categoryTitle?: string;
  parentHref?: string;
  relatedServices?: ServiceChild[];
};

export default function QuantDetailsMethods({
  categoryTitle,
  relatedServices,
}: QuantDetailsMethodsProps) {
  const displayServices = relatedServices ?? [];

  if (!displayServices.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#edf6ff] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <>
          {categoryTitle && (
            <div className="mb-9 text-center">
              <h2 className="bg-linear-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-[32px] font-semibold leading-tight text-transparent sm:text-[42px]">
                {categoryTitle}
              </h2>
            </div>
          )}

            <div className="grid gap-5 md:grid-cols-3">
              {displayServices.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="group relative h-[230px] overflow-hidden rounded-[20px] shadow-[0_8px_28px_rgba(0,0,0,0.14)]"
                >
                  {service.image && (
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-[#162950]/95 via-[#1dc3b3]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5">
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition group-hover:bg-white group-hover:text-[#1dc3b3]">
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
        </>

      </div>
    </section>
  );
}
