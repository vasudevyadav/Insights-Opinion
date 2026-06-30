"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function QualityGrowForm() {
    return (
        <section id="quality-grow-form" className="quality-hex-bg relative overflow-hidden pb-10 pt-8 lg:pb-12 lg:pt-10">
            <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                <div className="grid items-center gap-4 sm:grid-cols-[0.8fr_1fr] lg:pl-20">
                    <div>
                        <p className="text-[25px] font-light leading-tight text-[#18213d] lg:text-[29px]">Grow Better with</p>
                        <h2 className="quality-gradient-text mt-2 text-[39px] font-light leading-tight lg:text-[44px]">
                            Insight<br />Opinion
                        </h2>
                    </div>
                    <div className="relative h-[280px] sm:h-[350px]">
                        <Image src="/grow-better.png" alt="Grow Better with Insight Opinion" fill className="object-contain object-center" />
                    </div>
                </div>

                <form className="grid gap-6 lg:grid-cols-2 lg:pr-20">
                    <input className="h-12 rounded-[6px] bg-[#101538] px-6 text-sm text-white outline-none placeholder:text-white" placeholder="Name" />
                    <input className="h-12 rounded-[6px] bg-[#101538] px-6 text-sm text-white outline-none placeholder:text-white" placeholder="Email" />
                    <SelectField label="Country" />
                    <SelectField label="Mobile" />
                    <SelectField label="Please Select" />
                    <div className="hidden lg:block" />
                    <button
                        type="button"
                        className="h-11 w-full max-w-[190px] rounded-[6px] bg-gradient-to-r from-[#18b9aa] to-[#65adff] text-base text-white transition hover:opacity-90"
                    >
                        Submit Now
                    </button>
                </form>
            </div>
        </section>
    );
}

function SelectField({ label }: { label: string }) {
    return (
        <button
            type="button"
            className="flex h-12 items-center justify-between rounded-[6px] bg-[#101538] px-6 text-left text-sm text-white"
        >
            {label}
            <ChevronDown size={17} />
        </button>
    );
}
