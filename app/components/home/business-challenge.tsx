"use client";

import Image from "next/image";
// @ts-ignore - no type declarations for 'aos'
import AOS from 'aos';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

interface ChallengeCard {
    title: string;
    description: string;
    image: string;
    hoverImage: string;
    alt: string;
    className: string;
}

interface CardImageAreaProps {
    image: string;
    hoverImage: string;
    alt: string;
}

const challengeCards: ChallengeCard[] = [
    {
        title: "Need More Reliable Market Data?",
        description:
            "Improve decision-making with structured data collection, validation, and quality control.",
        image: "/Need-More-Reliable-Market-Data-.jpg",
        hoverImage: "/2_Need-More-Reliable-Market-Data-.jpg",
        alt: "Market expansion challenge",
        className: "lg:mt-16",
    },
    {
        title: "Struggling to Understand Customers?",
        description:
            "Identify customer needs, buying behavior, and shifting preferences through targeted research.",
        image: "/Struggling-to-Understand-Customers.jpg",
        hoverImage: "/Struggling-to-Understan.jpg",
        alt: "Data challenge",
        className: "",
    },
    {
        title: "Managing Research Across Markets?",
        description:
            "Manage multi-country research with consistent fieldwork, local coordination, and centralized oversight.",
        image: "/Managing-Research-Across-Markets.jpg",
        hoverImage: "/managing-Research.jpg",
        alt: "Consumer behavior challenge",
        className: "",
    },
    {
        title: "Trying to Reach Niche Audiences?",
        description:
            "Access verified audiences across consumer, B2B, healthcare, and niche research segments.",
        image: "/Trying-to-Reach-Niche-Audiences.jpg",
        hoverImage: "/trying-to-Reach-.jpg",
        alt: "Local research partners challenge",
        className: "lg:-mt-16",
    },
];

function CardImageArea({ image, hoverImage, alt }: CardImageAreaProps) {
    return (
        <div className="relative mt-5">
            <div className="flex items-end justify-center">
                <div className="relative h-[18rem] w-full overflow-hidden rounded-b-[18px]">
                    <Image
                        src={image}
                        alt={alt}
                        fill
                        className="object-cover object-bottom transition-delay duration-800 ease-in-out lg:group-hover:opacity-0"
                        onLoadingComplete={() => {
                            setTimeout(() => {
                                AOS.refreshHard();
                            }, 100);
                        }}
                    />
                    <Image
                        src={hoverImage}
                        alt={alt}
                        fill
                        className="object-cover object-bottom opacity-0 transition-delay duration-800 ease-in-out lg:group-hover:opacity-100"
                    />
                </div>
            </div>
        </div>
    );
}

function ChallengeCardItem({
    card,
    delay = 0,
}: {
    card: ChallengeCard;
    delay?: number;
}) {
    return (
        <div

            className={`group overflow-hidden rounded-[18px] border border-[#97a8d8] bg-white hover:shadow-[0_8px_24px_rgba(30,41,59,0.25)] ${card.className}`}
        >
            <div className="p-5">
                <div className="relative pl-5">
                    <div className="absolute left-1 top-1 h-10 w-[2px] bg-[#35c6cf]" />

                    <h3 className="max-w-[260px] text-lg font-semibold leading-[1.35] text-[#2f3850]">
                        {card.title}
                    </h3>

                    <p className="mt-2 max-w-[350px] text-base leading-5 text-black/90">
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
        <section className="bg-white py-8 lg:py-18">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div
                    className="lg:pt-2 lg:pl-20"

                >
                    <h2 className="mb-8 max-w-[400px] text-3xl font-light leading-[1.1] text-[#4a5370] lg:mb-0 lg:text-[45px]">
                        Business Challenges
                        <br />
                        <span className="bg-[linear-gradient(90deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] bg-clip-text text-3xl font-semibold leading-tight text-transparent lg:text-[45px]">
                            we solve
                        </span>
                    </h2>
                </div>

                {/* Mobile Slider */}
                <div
                    className="block lg:hidden"

                >
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={20}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        onInit={() => {
                            setTimeout(() => {
                                AOS.refreshHard();
                            }, 200);
                        }}
                        onSlideChange={() => {
                            setTimeout(() => {
                                AOS.refresh();
                            }, 100);
                        }}
                    >
                        {challengeCards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <ChallengeCardItem
                                    card={{ ...card, className: "" }}
                                    delay={index * 100}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Desktop Grid */}
                <div className="hidden grid-cols-1 gap-6 lg:-mt-8 lg:grid">
                    <div className="lg:col-start-2">
                        <ChallengeCardItem card={challengeCards[0]} delay={100} />
                    </div>

                    <div className="lg:col-start-3">
                        <ChallengeCardItem card={challengeCards[1]} delay={200} />
                    </div>

                    <div className="lg:col-start-2">
                        <ChallengeCardItem card={challengeCards[2]} delay={300} />
                    </div>

                    <div className="lg:col-start-3">
                        <ChallengeCardItem card={challengeCards[3]} delay={400} />
                    </div>
                </div>
            </div>
        </section>
    );
}