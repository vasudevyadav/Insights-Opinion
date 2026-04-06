"use client";

import Image from "next/image";

export default function IndustryLeader() {
    const brands = [
        {
            name: "Google",
            src: "/google.png",
        },
        {
            name: "Walmart",
            src: "/walmart.png",
        },
        {
            name: "Amazon",
            src: "/amazon.png",
        },
        {
            name: "Airbnb",
            src: "/airbnb.png",
        },
        {
            name: "Maersk",
            src: "/maersk.png",
        },
        {
            name: "DoorDash",
            src: "/doordash.png",
        },
        {
            name: "Mindvalley",
            src: "/mindvalley.png",
        },
        {
            name: "SEMrush",
            src: "/semrush.png",
        },
    ];

    const vlines = [
        { left: "20%", delay: "2s" },
        { left: "40%", delay: "0.8s" },
        { left: "55%", delay: "1.6s" },
        { left: "70%", delay: "0s" },
        { left: "85%", delay: "1.2s" },
    ];

    return (
        <section
            className=" bg-[#edf6ff] py-12"
            style={{ position: "relative", overflow: "hidden" }}
        >
            <style>{`
        @keyframes moveLeftBounces-one {
          0%   { top: -150px; }
          100% { top: 110%;   }
        }

        .industry-v-line {
          position: absolute;
          top: 0;
          height: 100%;
          width: 1px;
          background: #cedfef;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .industry-v-line::after {
          content: "";
          display: block;
          position: absolute;
          height: 150px;
          width: 100%;
          top: -150px;
          left: 0;
          background-image: linear-gradient(
            180deg,
            transparent 0%,
            #48d6a8     40%,
            #ffffff     60%,
            #48d6a8     80%,
            transparent 100%
          );
          animation: moveLeftBounces-one 3.5s linear infinite;
          animation-delay: var(--line-delay);
        }
      `}</style>

            {vlines.map((line, i) => (
                <div
                    key={i}
                    className="industry-v-line"
                    style={{
                        left: line.left,
                        "--line-delay": line.delay,
                    } as React.CSSProperties}
                />
            ))}

            <div
                className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-5 z-50 lg:pb-20"
                style={{ position: "relative", zIndex: 1 }}
            >
                <div className="flex items-center justify-center px-2 py-10 md:col-span-2">
                    <div className="w-full max-w-[400px]">
                        <p className="text-xl font-medium leading-tight text-[#5d6778] lg:text-[38px] mb-2">
                            Trusted by
                        </p>
                        <h2 className="text-2xl font-semibold leading-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#17ae8f_0%,#539ae2_50%,#5a8fc8_100%)] lg:text-[38px]">
                            Industry Leaders
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:col-span-3 md:grid-cols-4">
                    {brands.map((brand, index) => (
                        <div
                            key={index}
                            className="flex min-h-[110px] items-center justify-center px-6 lg:py-8 py-2 lg:pt-4 pt-1"
                        >
                            <div className="relative h-10 w-32">
                                <Image
                                    src={brand.src}
                                    alt={brand.name}
                                    fill
                                    className="object-contain"
                                    unoptimized
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}