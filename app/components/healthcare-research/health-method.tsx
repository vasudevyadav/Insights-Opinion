"use client";

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
    <section className="relative overflow-hidden rounded-[8px] bg-[#eef5fb] px-4 py-6 lg:px-6 lg:py-8">
      <div className="mx-auto max-w-6xl lg:py-12">
        <Image
          src={data.imageSrc}
          alt={data.imageAlt || ""}
          width={2500}
          height={2500}
          className="h-auto w-full object-cover"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}