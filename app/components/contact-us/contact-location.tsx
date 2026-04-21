"use client";
import React from "react";

const locations = [
    {
        country: "US",
        flag: "🇺🇸",
        address: "100 Church Street, Suite 800,\nNew York 10007",
        phone: "+1 646 475 7865",
        email: "bids@insightopinion.com",
        pinWidth: "w-[105px] sm:w-[115px] lg:w-[145px]",
        wrapperClass: "mt-0 ml-0 lg:-ml-10 lg:mt-0",
        pinWrapClass: "mb-3 sm:mb-4 lg:mb-10 lg:-translate-y-1",
        titleClass: "",
        listClass: "",
    },
    {
        country: "UK",
        flag: "🇬🇧",
        address: "71-75, Shelton Street, Covent Garden,\nLondon WC2H 9JQ, United Kingdom",
        phone: "+44 20 3239 5786",
        email: "bids@insightopinion.com",
        pinWidth: "w-[105px] sm:w-[115px] lg:w-[142px]",
        wrapperClass: "mt-0 ml-0",
        pinWrapClass: "mb-3 sm:mb-4 lg:mb-10",
        titleClass: "",
        listClass: "lg:px-2",
    },
    {
        country: "India",
        flag: "🇮🇳",
        address: "E-144, Sector-63, Noida-201301",
        phone: "+91 120 359 4799",
        email: "bids@insightopinion.com",
        pinWidth: "w-[105px] sm:w-[115px] lg:w-[145px]",
        wrapperClass: "mt-0 ml-0 lg:ml-7 lg:mt-0",
        pinWrapClass: "mb-3 sm:mb-4 lg:mb-10 lg:translate-y-1 lg:ml-2",
        titleClass: "",
        listClass: "",
    },
];

export default function ContactLocation() {
    return (
        <section className="relative overflow-hidden bg-[#edf6ff] pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-4">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[4%] top-[10%] h-[70px] w-[70px] rounded-full opacity-25 [background-image:radial-gradient(#f2dec8_1.2px,transparent_1.2px)] [background-size:10px_10px] sm:left-[8%] sm:top-[18%] sm:h-[120px] sm:w-[120px] sm:opacity-35 sm:[background-size:12px_12px]" />
                <div className="absolute left-[34%] top-[8%] hidden h-[130px] w-[130px] rounded-full opacity-35 [background-image:radial-gradient(#f2dec8_1.4px,transparent_1.4px)] [background-size:12px_12px] sm:block" />
                <div className="absolute right-[6%] top-[8%] h-[80px] w-[80px] rounded-full opacity-25 [background-image:radial-gradient(#f2dec8_1.2px,transparent_1.2px)] [background-size:10px_10px] sm:right-[12%] sm:top-[10%] sm:h-[145px] sm:w-[145px] sm:opacity-35 sm:[background-size:12px_12px]" />
                <div className="absolute left-[12%] bottom-[4%] hidden h-[110px] w-[110px] rounded-full opacity-25 [background-image:radial-gradient(#f2dec8_1.2px,transparent_1.2px)] [background-size:10px_10px] sm:block lg:left-[22%] lg:bottom-[6%] lg:h-[130px] lg:w-[130px] lg:opacity-30 lg:[background-size:12px_12px]" />
                <div className="absolute right-[4%] bottom-[4%] hidden h-[125px] w-[125px] rounded-full opacity-30 [background-image:radial-gradient(#f2dec8_1.4px,transparent_1.4px)] [background-size:12px_12px] sm:block" />
            </div>

            <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">
                <div className="pointer-events-none absolute left-1/2 top-[90px] hidden w-[72%] -translate-x-1/2 lg:block">
                    <svg
                        viewBox="0 0 900 120"
                        className="h-[100px] w-full"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M20 58 C110 8, 190 8, 280 58 S450 108, 580 58 S770 8, 880 58"
                            stroke="#7d9eb3"
                            strokeWidth="1.5"
                            strokeDasharray="3 5"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-14">
                    {locations.map((loc, index) => (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-center ${loc.wrapperClass}`}
                        >
                            <div className={`relative flex items-center justify-center ${loc.pinWrapClass}`}>
                                <svg
                                    viewBox="0 0 96 118"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`${loc.pinWidth} drop-shadow-[0_10px_18px_rgba(72,140,190,0.25)]`}
                                >
                                    <defs>
                                        <linearGradient
                                            id={`pinGrad${index}`}
                                            x1="15"
                                            y1="10"
                                            x2="82"
                                            y2="100"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop offset="0%" stopColor="#54c1c1" />
                                            <stop offset="100%" stopColor="#4f97f2" />
                                        </linearGradient>

                                        <filter
                                            id={`shadow${index}`}
                                            x="0"
                                            y="0"
                                            width="96"
                                            height="118"
                                            filterUnits="userSpaceOnUse"
                                        >
                                            <feDropShadow
                                                dx="0"
                                                dy="8"
                                                stdDeviation="8"
                                                floodColor="#4a90d9"
                                                floodOpacity="0.18"
                                            />
                                        </filter>

                                        <clipPath id={`flagClip${index}`}>
                                            <circle cx="48" cy="38" r="26" />
                                        </clipPath>
                                    </defs>

                                    <path
                                        d="M48 4C28.7 4 13 19.6 13 39C13 61.5 48 112 48 112C48 112 83 61.5 83 39C83 19.6 67.3 4 48 4Z"
                                        fill={`url(#pinGrad${index})`}
                                        filter={`url(#shadow${index})`}
                                    />

                                    <circle cx="48" cy="38" r="26" fill="white" />

                                    <foreignObject
                                        x="22"
                                        y="12"
                                        width="52"
                                        height="52"
                                        clipPath={`url(#flagClip${index})`}
                                    >
                                        <div
                                            /* @ts-ignore */
                                            xmlns="http://www.w3.org/1999/xhtml"
                                            style={{
                                                width: "52px",
                                                height: "52px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                fontSize: "36px",
                                                lineHeight: 1,
                                                borderRadius: "9999px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {loc.flag}
                                        </div>
                                    </foreignObject>
                                </svg>
                            </div>

                            <h3
                                className={`mb-3 text-[20px] font-semibold leading-none text-[#1f2937] sm:text-[22px] lg:mb-5 lg:text-[34px] ${loc.titleClass}`}
                            >
                                {loc.country}
                            </h3>

                            <ul className={`max-w-[280px] space-y-3 text-left sm:max-w-[300px] lg:max-w-[300px] lg:space-y-4 ${loc.listClass}`}>
                                <li className="flex items-start gap-2">
                                    <span className="mt-[2px] shrink-0 text-[#39bdd4]">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="sm:h-[20px] sm:w-[20px] lg:h-[22px] lg:w-[22px]"
                                        >
                                            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
                                            <circle cx="12" cy="10" r="3" />
                                        </svg>
                                    </span>
                                    <span className="whitespace-pre-line text-[12px] leading-6 text-[#394150] sm:text-[13px] sm:leading-6 lg:text-sm lg:leading-7">
                                        {loc.address}
                                    </span>
                                </li>

                                <li className="flex items-center gap-2">
                                    <span className="shrink-0 text-[#39bdd4]">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="sm:h-[20px] sm:w-[20px] lg:h-[22px] lg:w-[22px]"
                                        >
                                            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.63a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.13 1 .39 1.98.74 2.91a2 2 0 01-.45 2.11L6.91 8.5a16 16 0 006.59 6.59l1.76-1.56a2 2 0 012.11-.45c.93.35 1.91.61 2.91.74A2 2 0 0122 16.92z" />
                                        </svg>
                                    </span>
                                    <span className="text-[12px] text-[#394150] sm:text-[13px] lg:text-sm">
                                        {loc.phone}
                                    </span>
                                </li>

                                <li className="flex items-center gap-2">
                                    <span className="shrink-0 text-[#39bdd4]">
                                        <svg
                                            width="18"
                                            height="18"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="sm:h-[20px] sm:w-[20px] lg:h-[22px] lg:w-[22px]"
                                        >
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                            <polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    </span>
                                    <span className="break-all text-[12px] text-[#394150] sm:text-[13px] lg:text-sm">
                                        {loc.email}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}