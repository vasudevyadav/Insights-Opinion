import Image from "next/image";

type HealthcareMethodologiesData = {
  imageSrc?: string;
  imageAlt?: string;
};

type HealthcareMethodologiesProps = {
  data?: HealthcareMethodologiesData;
};

export default function HealthcareMethodologies({
  data,
}: HealthcareMethodologiesProps) {
  if (!data?.imageSrc) return null;

  return (
    <section className="relative overflow-hidden rounded-[8px] bg-[#eef5fb] px-4 py-10 lg:px-6 lg:py-8">
      <div className="no-scrollbar -mx-4 overflow-x-auto px-4 pb-3 overscroll-x-contain lg:mx-auto lg:max-w-6xl lg:overflow-visible lg:px-0 lg:pb-0 lg:py-12">
        <div className="min-w-[620px] lg:min-w-0">
          <Image
            src={data.imageSrc}
            alt={data.imageAlt || ""}
            width={2500}
            height={2500}
            className="h-auto w-full object-contain"
            priority
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
