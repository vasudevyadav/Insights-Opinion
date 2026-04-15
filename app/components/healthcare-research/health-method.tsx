"use client";
import Image from "next/image";

export default function HealthcareMethodologies() {
    return (
        <section className="relative overflow-hidden rounded-[8px] bg-[#eef5fb] px-6 py-8">

            <div className="max-w-6xl mx-auto py-12">
                <Image
                    src="/market-research/methodologies-image.png"
                    alt="Healthcare market research"
                    width={2500}
                    height={2500}
                    className="h-auto w-full object-cover"
                    priority
                />
            </div>

        </section>
    );
}