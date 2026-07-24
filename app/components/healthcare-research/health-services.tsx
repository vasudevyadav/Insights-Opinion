import Image from "next/image";
import BackgroundShape from "@/app/components/about-us/background-shape";

type Service = {
  title: string;
  image: string;
  points: readonly string[];
};

type HealthServicesData = {
  sectionLabel?: string;
  heading?: string;
  services?: readonly Service[];
};

type HealthServicesProps = {
  data?: HealthServicesData;
};

export default function HealthServices({ data }: HealthServicesProps) {
  const services = data?.services || [];

  if (!data || services.length === 0) return null;

  return (
    <section
      data-aos="fade-up"
      className="relative overflow-hidden bg-[#edf6ff] py-8 lg:py-12"
    >
      <BackgroundShape side="left" variant={1} className="-left-24 -top-10 w-[320px] opacity-40 sm:w-[450px] lg:w-[520px]" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          {data.sectionLabel && (
            <p className="text-lg font-medium text-[#1f2a44] lg:text-2xl">
              {data.sectionLabel}
            </p>
          )}

          {data.heading && (
            <h2 className="mt-1 text-[25px] font-semibold lg:text-4xl">
              <span className="bg-gradient-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
                {data.heading}
              </span>
            </h2>
          )}
        </div>

        <div className="md:hidden">
          <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
            {services.map((service, index) => (
              <div key={index} className="min-w-[88%] snap-center">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        <div
          className={`hidden gap-8 md:grid ${services.length === 2
            ? "md:grid-cols-2"
            : services.length === 4
              ? "md:grid-cols-2 lg:grid-cols-4"
              : "md:grid-cols-2 lg:grid-cols-3"
            }`}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group mx-auto flex w-full max-w-[330px] flex-col overflow-hidden rounded-[24px] border border-[#2f86d6] bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out will-change-transform hover:-translate-y-2 hover:border-transparent hover:bg-gradient-to-b hover:from-[#1687c9] hover:to-[#39c5c7] hover:shadow-[0_16px_36px_rgba(22,135,201,0.22)]">
      {service.image && (
        <div className="relative h-[200px] w-full overflow-hidden rounded-b-[22px] transition-all duration-500 group-hover:h-[220px]">
          <Image
            src={service.image}
            alt={service.title?.replace(/\\n|\n/g, " ") || "Service image"}
            fill
            unoptimized
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
      )}

      <div className="px-6 pb-6 pt-5 text-center">
        {service.title && (
          <h3 className="whitespace-pre-line text-sm font-semibold text-[#1e2746] transition-colors duration-500 ease-out group-hover:text-white lg:text-lg">
            {service.title.replace(/\\n/g, "\n")}
          </h3>
        )}

        {service.points?.length > 0 && (
          <ul className="mt-3 space-y-1 text-sm text-[#2f3850] transition-colors duration-500 ease-out group-hover:text-white/95 lg:text-sm line-clamp-3 lg:line-clamp-16">
            {service.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
