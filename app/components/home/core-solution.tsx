"use client";
import CoreTab from "./core-tab";
import Industries from "./industrise";
import WhyChoose from "./why-choose";

export default function CoreSolution() {

    // Desktop lines (6)
    const vlines = [
        { left: "14%", delay: "0s" },
        { left: "28%", delay: "0.8s" },
        { left: "42%", delay: "1.6s" },
        { left: "56%", delay: "0.4s" },
        { left: "70%", delay: "1.2s" },
        { left: "84%", delay: "2s" },
    ];

    const mobileVlines = [
        { left: "20%", delay: "0s" },
        { left: "40%", delay: "0.8s" },
        { left: "60%", delay: "1.6s" },
        { left: "80%", delay: "1.6s" },
    ];

    return (
        <section className="relative overflow-hidden bg-[#eef5fb] lg:py-14 py-6">

            {/* Animation + Line Styles */}
            <style>{`
                @keyframes moveLineGlow {
                    0% { top: -140px; }
                    100% { top: 110%; }
                }

                .industry-v-line {
                    position: absolute;
                    top: 0;
                    height: 100%;
                    width: 1px;
                    background: #d5e1ec;
                    pointer-events: none;
                    z-index: 0;
                }

                .industry-v-line::after {
                    content: "";
                    position: absolute;
                    top: -140px;
                    left: 0;
                    width: 100%;
                    height: 140px;
                    background: linear-gradient(
                        180deg,
                        transparent 0%,
                        rgba(72, 214, 168, 0.15) 20%,
                        rgba(72, 214, 168, 0.9) 50%,
                        rgba(255,255,255,0.95) 65%,
                        rgba(72, 214, 168, 0.6) 80%,
                        transparent 100%
                    );
                    animation: moveLineGlow 3.6s linear infinite;
                    animation-delay: var(--line-delay);
                }
            `}</style>

            {/* ✅ Mobile Lines (Only on small screens) */}
            {mobileVlines.map((line, i) => (
                <div
                    key={`m-${i}`}
                    className="industry-v-line block lg:hidden"
                    style={
                        {
                            left: line.left,
                            "--line-delay": line.delay,
                        } as React.CSSProperties
                    }
                />
            ))}

            {/* ✅ Desktop Lines (Only on large screens) */}
            {vlines.map((line, i) => (
                <div
                    key={`d-${i}`}
                    className="industry-v-line hidden lg:block"
                    style={
                        {
                            left: line.left,
                            "--line-delay": line.delay,
                        } as React.CSSProperties
                    }
                />
            ))}

            {/* Content */}
            <CoreTab />
            <WhyChoose />
            <Industries />
        </section>
    );
}