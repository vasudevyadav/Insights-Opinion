"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ChallengeCard {
    title: string;
    description: string;
    image: string;
    hoverImage: string;
    alt: string;
}

interface CardImageAreaProps {
    image: string;
    hoverImage: string;
    alt: string;
}

const challengeCards: ChallengeCard[] = [
    {
        title: "Market Expansion Comes with Uncertainty",
        description:
            "Limited market intelligence makes it difficult to assess demand, risk, and opportunity in new regions.",
        image: "/Market-Expansion-Comes.png",
        hoverImage: "/home/Market-Expansion.jpg",
        alt: "Market expansion challenge",
    },
    {
        title: "Data Is Fragmented and Unreliable",
        description:
            "Siloed data sources and inconsistent quality result in unclear insights and poor decision-making.",
        image: "/Data-Is-Fragmented.webp",
        hoverImage: "/home/Data-Is-Fragmented.jpg",
        alt: "Data challenge",
    },
    {
        title: "Consumer Behavior Varies Across Markets",
        description:
            "Regional, cultural, and economic differences directly impact customer preferences and outcomes.",
        image: "/Consumer-Behavior.png",
        hoverImage: "/home/Consumer-Behavior.jpg",
        alt: "Consumer behavior challenge",
    },
    {
        title: "Lack of Trusted Local Research Partners",
        description:
            "Without reliable in-market expertise, global research becomes slow, complex, and inefficient.",
        image: "/Lack-of-Trusted.png",
        hoverImage: "/home/Lack-of-Trusted-Local.jpg",
        alt: "Local research partners challenge",
    },
];

function CardImageArea({ image, hoverImage, alt }: CardImageAreaProps) {
    return (
        <div className="relative mt-5 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0">
            <div className="flex items-end justify-center">
                <div className="relative h-[20rem] w-full overflow-hidden rounded-b-[18px] lg:h-[390px]">
                    {/* Default Image */}
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        sizes="(max-width: 1023px) calc(100vw - 32px), 420px"
                        className="object-cover object-bottom transition-all duration-700 ease-out lg:group-hover:scale-105 lg:group-hover:opacity-0"
                    />

                    {/* Hover Image */}
                    <Image
                        src={hoverImage}
                        alt={`${alt} on hover`}
                        fill
                        sizes="(max-width: 1023px) calc(100vw - 32px), 420px"
                        className="object-cover object-center opacity-0 transition-all duration-700 ease-out lg:scale-105 lg:group-hover:scale-100 lg:group-hover:opacity-100"
                    />
                </div>
            </div>
        </div>
    );
}

function ChallengeCardItem({
    card,
}: {
    card: ChallengeCard;
}) {
    return (
        <div

            className="group relative overflow-hidden rounded-[16px] border border-[#5875c7] bg-white shadow-[0_8px_28px_rgba(30,41,59,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#22bec5] hover:shadow-[0_14px_34px_rgba(30,41,59,0.14)] lg:h-[550px] lg:w-full"
        >
            <div className="relative z-10 p-5 lg:h-[150px] lg:p-5">
                <div className="relative pl-5">
                    <div className="absolute left-1 top-1 h-9 w-[2px] bg-[#22bec5]" />

                    <h3 className="max-w-[300px] text-lg font-semibold leading-[1.3] text-[#2f3850] lg:h-[50px] lg:!text-xl lg:!leading-[1.3]">
                        {card.title}
                    </h3>

                    <p className="mt-2 max-w-[350px] text-sm leading-5 text-[#303030] lg:line-clamp-3 lg:!text-base lg:!leading-[1.5]">
                        {card.description}
                    </p>
                </div>
            </div>

            <div>
                <CardImageArea
                    image={card.image}
                    hoverImage={card.hoverImage}
                    alt={card.alt}
                />
            </div>
        </div>
    );
}

export default function BusinessChallenge() {
    return (
        <section className="bg-white py-8 lg:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className="lg:hidden"

                >
                    <h2 className="mb-8 max-w-[400px] text-2xl font-light leading-[1.1] text-[#4a5370] lg:mb-0 lg:text-[45px]">
                        Business Challenges
                        <br />
                        <span className="bg-[linear-gradient(90deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] bg-clip-text text-2xl font-semibold leading-tight text-transparent lg:text-[45px]">
                            we solve
                        </span>
                    </h2>
                </div>

                <div
                    className="block lg:hidden"

                >
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                    >
                        {challengeCards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <ChallengeCardItem
                                    card={card}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop Grid */}
                <div className="mx-auto hidden w-full max-w-4xl grid-cols-2 gap-x-[56px] lg:grid">
                    <div className="flex min-w-0 flex-col">
                        <div className="h-[180px]">
                            <h2 className="max-w-[260px] lg:max-w-[260px] !text-2xl lg:!text-[42px] font-light !leading-[1.2] text-[#202a4c]">
                                The Business
                                <br />
                                Challenges
                                <br />
                                <span className="bg-[linear-gradient(90deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] bg-clip-text font-semibold text-transparent">
                                    we solve
                                </span>
                            </h2>
                        </div>

                        <div className="w-full">
                            <ChallengeCardItem card={challengeCards[0]} />
                        </div>

                        <div className="mt-[26px] w-full">
                            <ChallengeCardItem card={challengeCards[2]} />
                        </div>
                    </div>

                    <div className="flex min-w-0 flex-col pt-[55px]">
                        <div className="w-full">
                            <ChallengeCardItem card={challengeCards[1]} />
                        </div>

                        <div className="mt-[26px] w-full">
                            <ChallengeCardItem card={challengeCards[3]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}