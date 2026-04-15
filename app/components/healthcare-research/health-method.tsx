"use client";

import React from "react";

const nodes = [
    {
        id: "qualitative",
        label: "Qualitative Research",
        iconBg: "bg-[#5aa9f6]",
        labelClass: "bottom-full mb-3 text-center",
        style: { top: "10%", left: "38%" },
        icon: (
            <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
            >
                <rect x="5" y="6" width="14" height="3" rx="1.5" fill="white" opacity="0.9" />
                <rect x="5" y="12" width="11" height="3" rx="1.5" fill="white" opacity="0.75" />
                <rect x="5" y="18" width="8" height="3" rx="1.5" fill="white" opacity="0.6" />
                <circle cx="21" cy="17" r="5.5" stroke="white" strokeWidth="1.8" fill="none" />
                <line x1="25" y1="21" x2="28" y2="24.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <path
                    d="M18 14 L20 16 L24 12"
                    stroke="white"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: "quantitative",
        label: "Quantitative Research",
        iconBg: "bg-[#53c3c7]",
        labelClass: "bottom-full mb-3 text-center",
        style: { top: "10%", right: "36%" },
        icon: (
            <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
            >
                <circle cx="16" cy="16" r="9" stroke="white" strokeWidth="1.8" fill="none" />
                <rect x="12" y="18" width="3" height="6" rx="1" fill="white" opacity="0.9" />
                <rect x="16.5" y="14" width="3" height="10" rx="1" fill="white" />
                <rect x="21" y="16" width="3" height="8" rx="1" fill="white" opacity="0.75" />
                <line x1="23" y1="9.5" x2="26.5" y2="6.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="26" cy="7" r="2" stroke="white" strokeWidth="1.5" fill="none" />
            </svg>
        ),
    },
    {
        id: "cati",
        label: "CATI Interviews",
        iconBg: "bg-[#53c3b2]",
        labelClass: "left-full ml-4 text-left",
        style: { top: "41%", right: "14%" },
        icon: (
            <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
            >
                <circle cx="11" cy="10" r="3.5" stroke="white" strokeWidth="1.6" fill="none" />
                <path d="M5 22 Q11 17 17 22" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <rect x="19" y="8" width="10" height="10" rx="2" stroke="white" strokeWidth="1.6" fill="none" />
                <circle cx="24" cy="12" r="2" fill="white" opacity="0.7" />
                <line x1="24" y1="18" x2="24" y2="22" stroke="white" strokeWidth="1.5" />
                <line x1="21" y1="22" x2="27" y2="22" stroke="white" strokeWidth="1.5" />
            </svg>
        ),
    },
    {
        id: "surveys",
        label: "Online Surveys",
        iconBg: "bg-[#53c3b2]",
        labelClass: "bottom-full mb-3 text-center",
        style: { bottom: "9%", right: "34%" },
        icon: (
            <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
            >
                <rect x="6" y="5" width="20" height="24" rx="2" stroke="white" strokeWidth="1.7" fill="none" />
                <line x1="10" y1="11" x2="22" y2="11" stroke="white" strokeWidth="1.4" />
                <line x1="10" y1="15" x2="22" y2="15" stroke="white" strokeWidth="1.4" />
                <line x1="10" y1="19" x2="18" y2="19" stroke="white" strokeWidth="1.4" />
                <path
                    d="M20 21 L23 25 L28 18"
                    stroke="white"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        ),
    },
    {
        id: "focus",
        label: "Focus Groups",
        iconBg: "bg-[#53c3b2]",
        labelClass: "bottom-full mb-3 text-center",
        style: { bottom: "9%", left: "39%" },
        icon: (
            <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
            >
                <circle cx="10" cy="10" r="3.5" stroke="white" strokeWidth="1.6" fill="none" />
                <circle cx="22" cy="10" r="3.5" stroke="white" strokeWidth="1.6" fill="none" />
                <circle cx="16" cy="9" r="3" stroke="white" strokeWidth="1.5" fill="none" />
                <path d="M4 23 Q10 18 16 23 Q22 18 28 23" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: "ethnographic",
        label: "Ethnographic\nResearch",
        iconBg: "bg-[#5aa9f6]",
        labelClass: "right-full mr-4 text-right",
        style: { top: "41%", left: "14%" },
        icon: (
            <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
            >
                <circle cx="12" cy="9" r="3.5" stroke="white" strokeWidth="1.6" fill="none" />
                <path d="M6 21 Q12 16 18 21" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <circle cx="21" cy="18" r="5.5" stroke="white" strokeWidth="1.8" fill="none" />
                <line x1="25" y1="22" x2="28.5" y2="25.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
                <circle cx="21" cy="18" r="2" fill="white" opacity="0.6" />
            </svg>
        ),
    },
];

export default function HealthcareMethodologies() {
    return (
        <section className="relative overflow-hidden rounded-[8px] bg-[#eef5fb] px-6 py-8">
            {/* Background hex pattern */}
            <svg
                className="absolute inset-0 h-full w-full pointer-events-none opacity-40"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="hexPattern" x="0" y="0" width="56" height="48" patternUnits="userSpaceOnUse">
                        <polygon
                            points="14,0 42,0 56,24 42,48 14,48 0,24"
                            stroke="#b7deef"
                            strokeWidth="1"
                            fill="none"
                        />
                    </pattern>
                    <mask id="leftFade">
                        <rect width="100%" height="100%" fill="black" />
                        <rect x="0" y="0" width="28%" height="100%" fill="white" />
                        <rect x="72%" y="0" width="28%" height="100%" fill="white" />
                    </mask>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexPattern)" mask="url(#leftFade)" />
            </svg>

            {/* Connector lines */}
            <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 900 420"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <style>{`
            .blue-path {
              fill: none;
              stroke: #5aa9f6;
              stroke-width: 3;
              stroke-linecap: round;
            }
            .teal-path {
              fill: none;
              stroke: #39b8b7;
              stroke-width: 3;
              stroke-linecap: round;
            }
            .dash-path {
              fill: none;
              stroke: #7ec9ee;
              stroke-width: 2;
              stroke-linecap: round;
              stroke-dasharray: 3 6;
            }
          `}</style>
                </defs>

                {/* top left to top center */}
                <path className="blue-path" d="M220 155 C220 110, 265 102, 320 102" />
                <path className="dash-path" d="M320 102 C340 102, 350 102, 365 102" />

                {/* top center to top right */}
                <path className="dash-path" d="M475 102 C515 102, 550 102, 595 102" />

                {/* top right to middle right */}
                <path className="teal-path" d="M690 126 C720 140, 730 175, 730 210" />
                <path className="dash-path" d="M730 210 C730 222, 730 235, 730 245" />

                {/* middle right to bottom right */}
                <path className="teal-path" d="M730 255 C730 315, 685 345, 640 348" />

                {/* bottom right to bottom center-left */}
                <path className="teal-path" d="M605 348 C555 348, 510 348, 470 348" />
                <path className="dash-path" d="M470 348 C445 348, 425 348, 405 348" />

                {/* bottom center-left to middle left */}
                <path className="teal-path" d="M260 348 C230 338, 215 300, 215 258" />

                {/* middle left to top left */}
                <path className="blue-path" d="M215 245 C215 190, 210 155, 220 155" />
                <path className="dash-path" d="M215 245 C215 230, 215 220, 215 210" />
            </svg>

            {/* Center title */}
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="text-center leading-none">
                    <h2 className="text-[34px] font-[300] tracking-[-0.02em] text-[#324a5f]">
                        Healthcare <span className="font-[700] text-[#39b8b7]">Research</span>
                    </h2>
                    <p className="mt-2 text-[18px] font-[700] text-[#2d4052]">Methodologies</p>
                </div>
            </div>

            {/* Nodes */}
            <div className="relative z-20 min-h-[390px]">
                {nodes.map((node) => (
                    <div
                        key={node.id}
                        className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                        style={node.style}
                    >
                        <div className="relative flex items-center justify-center">
                            <span
                                className={`absolute whitespace-pre-line text-[15px] font-[500] leading-[1.15] text-[#425466] ${node.labelClass}`}
                            >
                                {node.label}
                            </span>

                            <div
                                className={`flex h-[64px] w-[64px] items-center justify-center rounded-[8px] shadow-[0_6px_18px_rgba(38,91,136,0.12)] ${node.iconBg}`}
                            >
                                {node.icon}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}