import Image from "next/image";
import Link from "next/link";
import {
  serviceCategories,
  serviceDetailPath,
  type ServiceCatalogItem,
} from "@/app/lib/service-catalog";

type MethodService = ServiceCatalogItem & {
  href?: string;
};

export default function QuantMethods({
  initialCategoryKey = "quantitative",
  services,
  categoryTitle,
}: {
  initialCategoryKey?: "quantitative" | "qualitative" | "support";
  services?: readonly MethodService[];
  categoryTitle?: string;
}) {
  const catalogCategory =
    serviceCategories.find(
      (category) => category.key === initialCategoryKey
    ) ?? serviceCategories[0];
  const activeCategory = {
    ...catalogCategory,
    services: services ? [...services] : catalogCategory.services,
  };
  const titleLead = (categoryTitle || activeCategory.title).replace(
    " Research",
    ""
  );
  const evenServices = activeCategory.services.filter(
    (_, index) => index % 2 === 0
  );
  const oddServices = activeCategory.services.filter(
    (_, index) => index % 2 !== 0
  );

  return (
    <section
      id="research-methods"
      className="relative overflow-hidden bg-[#edf6ff] py-10 lg:py-16"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg
          className="h-full w-full"
          viewBox="0 0 1280 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient
              id="hexGradMethods"
              x1="0"
              y1="0"
              x2="1280"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#b8dff5" />
              <stop offset="0.5" stopColor="#d8eefb" />
              <stop offset="1" stopColor="#b8dff5" />
            </linearGradient>
          </defs>
          {Array.from({ length: 15 }).map((_, row) =>
            Array.from({ length: 22 }).map((__, col) => {
              const x = col * 62 + (row % 2 ? 31 : 0);
              const y = row * 54;

              return (
                <polygon
                  key={`${row}-${col}`}
                  points={`${x + 15},${y} ${x + 45},${y} ${x + 60},${y + 26} ${x + 45},${y + 52} ${x + 15},${y + 52} ${x},${y + 26}`}
                  stroke="url(#hexGradMethods)"
                  strokeWidth="1.2"
                  fill="none"
                />
              );
            })
          )}
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div key={activeCategory.key} className="accordion-content-enter">
          <div className="mb-12 text-center">
            <h2 className="text-[32px] font-semibold leading-tight sm:text-[42px] lg:text-[50px]">
              <span className="bg-linear-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
                {titleLead}
              </span>
            </h2>
          </div>

          <div className="hidden gap-5 md:grid md:grid-cols-2">
            <div className="flex flex-col gap-5">
              {evenServices.map((service) => (
                <MethodCard key={service.slug} service={service} />
              ))}
            </div>
            <div className="flex flex-col gap-5 pt-14">
              {oddServices.map((service) => (
                <MethodCard key={service.slug} service={service} />
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
              {activeCategory.services.map((service) => (
                <div
                  key={service.slug}
                  className="min-w-[85%] snap-center"
                >
                  <MethodCard service={service} mobile />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MethodCard({
  service,
  mobile = false,
}: {
  service: MethodService;
  mobile?: boolean;
}) {
  return (
    <Link
      href={service.href || serviceDetailPath(service.slug)}
      className={`group relative block w-full overflow-hidden rounded-[20px] shadow-[0_8px_28px_rgba(0,0,0,0.14)] transition-transform duration-500 hover:-translate-y-1 ${
        mobile ? "h-[240px]" : "h-[350px]"
      }`}
    >
      <Image
        src={service.image}
        alt={service.title}
        fill
        sizes={mobile ? "85vw" : "(max-width: 1024px) 50vw, 600px"}
        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#1dc3b3]/85 via-[#1dc3b3]/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
        <h3 className="text-lg font-semibold leading-[1.35] text-white drop-shadow-sm sm:text-xl">
          {service.title}
        </h3>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-[#1dc3b3]">
          →
        </span>
      </div>
    </Link>
  );
}
