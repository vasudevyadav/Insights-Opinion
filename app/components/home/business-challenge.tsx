"use client";

import Image from "next/image";

interface ChallengeCard {
    title: string;
    description: string;
    image: string;
    alt: string;
    className: string;
}

interface CardImageAreaProps {
    image: string;
    alt: string;
}

const challengeCards: ChallengeCard[] = [
    {
        title: "Market Expansion Comes with Uncertainty",
        description:
            "Limited market intelligence makes it difficult to assess demand, risk, and opportunity in new regions.",
        image: "/challenges-1.png",
        alt: "Market expansion challenge",
        className: "lg:mt-16",
    },
    {
        title: "Data Is Fragmented and Unreliable",
        description:
            "Siloed data sources and inconsistent quality result in unclear insights and poor decision-making.",
        image: "/challenges-2.png",
        alt: "Data challenge",
        className: "",
    },
    {
        title: "Consumer Behavior Varies Across Markets",
        description:
            "Regional, cultural, and economic differences directly impact customer preferences and outcomes.",
        image: "/challenges-2.png",
        alt: "Consumer behavior challenge",
        className: "",
    },
    {
        title: "Lack of Trusted Local Research Partners",
        description:
            "Without reliable in-market expertise, global research becomes slow, complex, and inefficient.",
        image: "/challenges-2.png",
        alt: "Local research partners challenge",
        className: "lg:-mt-16",
    },
];

function CardImageArea({ image, alt }: CardImageAreaProps) {
    return (
        <div className="relative mt-5">
            <div className="flex items-end justify-center">
                <Image
                    src={image}
                    alt={alt}
                    width={400}
                    height={260}
                    className="h-[18rem] w-full rounded-b-[18px] object-cover object-bottom"

                />
            </div>
        </div>
    );
}

function ChallengeCardItem({ card, index }: { card: ChallengeCard; index: number }) {
    return (
        <div
            className={`overflow-hidden rounded-[18px] border border-[#97a8d8] bg-white hover:shadow-[0_8px_24px_rgba(30,41,59,0.25)] ${card.className}`}
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

            <CardImageArea image={card.image} alt={card.alt} />
        </div>
    );
}

export default function BusinessChallenge() {
    return (
        <section className="bg-white py-14 lg:py-18">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                <div className=" lg:pt-2 lg:pl-20">
                    <h2 className="max-w-[400px] text-[34px] font-light leading-[1.1] text-[#4a5370]  lg:text-[45px]">
                        The Business
                        Challenges
                        <br />
                        <span className="text-2xl font-semibold leading-tight text-transparent bg-clip-text bg-[linear-gradient(90deg,#5fb9aa_0%,#4fa7b4_50%,#5a8fc8_100%)] lg:text-[45px]">we solve</span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-6 -mt-8">

                    <div className="lg:col-start-2">
                        <ChallengeCardItem card={challengeCards[0]} index={0} />
                    </div>

                    <div className="lg:col-start-3">
                        <ChallengeCardItem card={challengeCards[1]} index={1} />
                    </div>

                    <div className="lg:col-start-2">
                        <ChallengeCardItem card={challengeCards[2]} index={2} />
                    </div>

                    <div className="lg:col-start-3">
                        <ChallengeCardItem card={challengeCards[3]} index={3} />
                    </div>
                </div>
            </div>
        </section>
    );
}