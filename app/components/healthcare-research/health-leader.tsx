import Image from "next/image";

export default function HealthLeader() {
    const brands = [
        { name: "Google", src: "/google.png" },
        { name: "Walmart", src: "/walmart.png" },
        { name: "Amazon", src: "/amazon.png" },
        { name: "Airbnb", src: "/airbnb.png" },
        { name: "Maersk", src: "/maersk.png" },
        { name: "DoorDash", src: "/doordash.png" },
        { name: "Mindvalley", src: "/mindvalley.png" },
        { name: "SEMrush", src: "/semrush.png" },
    ];

    const firstRow = brands.slice(0, 4);
    const secondRow = brands.slice(4, 8);

    const repeatedFirstRow = [...firstRow, ...firstRow, ...firstRow];
    const repeatedSecondRow = [...secondRow, ...secondRow, ...secondRow];

    return (
        <>
            <section className="relative overflow-hidden bg-[#edf6ff] pt-10 ">
                <style>{`
                    .logo-row-wrap {
                        width: 100%;
                        overflow: hidden;
                        position: relative;
                    }

                    .logo-marquee {
                        display: flex;
                        width: max-content;
                        will-change: transform;
                    }

                    .logo-marquee-left {
                        animation: marqueeLeft 16s linear infinite;
                    }

                    .logo-marquee-right {
                        animation: marqueeRight 16s linear infinite;
                    }

                    .logo-item {
                        flex: 0 0 auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 50vw;
                        max-width: 140px;
                        min-width: 140px;
                        height: 70px;
                        padding: 8px 16px;
                    }

                    .logo-box {
                        position: relative;
                        width: 100px;
                        height: 32px;
                    }

                    @keyframes marqueeLeft {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-33.333%);
                        }
                    }

                    @keyframes marqueeRight {
                        0% {
                            transform: translateX(-33.333%);
                        }
                        100% {
                            transform: translateX(0);
                        }
                    }

                    @media (min-width: 1024px) {
                        .logo-item {
                            width: 25%;
                            max-width: 160px;
                            min-width: 160px;
                            height: 92px;
                            padding: 12px 20px;
                        }

                        .logo-box {
                            width: 120px;
                            height: 38px;
                        }
                    }
                `}</style>


                <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-5 lg:pb-2 pb-4">
                    <div className="flex items-center justify-center px-2 lg:pb-10 pb-6 md:col-span-2">
                        <div className="w-full max-w-[400px]">
                            <p className="mb-1 text-center text-2xl font-light leading-tight text-[#5d6778] md:text-left lg:text-4xl">
                                Trusted by
                            </p>
                            <h2 className="bg-[linear-gradient(90deg,#17ae8f_0%,#539ae2_50%,#5a8fc8_100%)] bg-clip-text text-center text-2xl font-semibold leading-tight text-transparent md:text-left lg:text-4xl">
                                Industry Leaders
                            </h2>
                        </div>
                    </div>

                    <div className="md:col-span-3 flex flex-col justify-center gap-2 lg:gap-4 lg:mb-4 mb-0">
                        <div className="logo-row-wrap">
                            <div className="logo-marquee logo-marquee-left">
                                {repeatedFirstRow.map((brand, index) => (
                                    <div key={`row1-${brand.name}-${index}`} className="logo-item">
                                        <div className="logo-box">
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

                        <div className="logo-row-wrap">
                            <div className="logo-marquee logo-marquee-right">
                                {repeatedSecondRow.map((brand, index) => (
                                    <div key={`row2-${brand.name}-${index}`} className="logo-item">
                                        <div className="logo-box">
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
                    </div>
                </div>
            </section>

         
        </>
    );
}