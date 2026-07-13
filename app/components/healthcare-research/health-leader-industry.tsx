import Image from "next/image";
import Link from "next/link";
import type {
    ConsumerResearchContentBlock,
    ConsumerResearchSection,
} from "@/lib/getResearchPage";

function decodeHtmlText(value: string) {
    const entities: Record<string, string> = {
        "&amp;": "&",
        "&quot;": '"',
        "&#039;": "'",
        "&apos;": "'",
        "&lt;": "<",
        "&gt;": ">",
        "&nbsp;": " ",
    };

    return value
        .replace(/<[^>]+>/g, "")
        .replace(/&(amp|quot|#039|apos|lt|gt|nbsp);/g, (entity) =>
            entities[entity] ?? entity
        )
        .trim();
}

function parseListItems(points?: string) {
    if (!points) return [];

    return Array.from(points.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi))
        .map((match) => decodeHtmlText(match[1]))
        .filter(Boolean);
}

function hasSectionContent(
    content?: ConsumerResearchContentBlock
): content is ConsumerResearchContentBlock {
    if (!content) return false;

    return [
        content.title,
        content.highlightTitle,
        content.description,
        content.image,
    ].every((value) => typeof value === "string" && value.trim().length > 0);
}

function ResearchContentRow({
    content,
    imagePosition,
    points = [],
}: {
    content: ConsumerResearchContentBlock;
    imagePosition: "left" | "right";
    points?: string[];
}) {
    const imageOnLeft = imagePosition === "left";

    return (
        <div className="grid items-center gap-8 py-8 md:grid-cols-[1.15fr_1fr] lg:py-10">
            <div className={imageOnLeft ? "md:order-1" : "md:order-2"}>
                <div className="relative mx-auto aspect-[9/5.2] w-full max-w-[650px] overflow-hidden rounded-lg shadow-[0_12px_35px_rgba(27,74,110,0.12)] lg:rounded-[22px]">
                    <Image
                        src={content.image}
                        alt={`${content.title} ${content.highlightTitle}`}
                        fill
                        unoptimized
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                </div>
            </div>

            <div
                className={`max-w-[610px] ${imageOnLeft ? "md:order-2" : "md:order-1"
                    }`}
            >
                <h2 className="text-2xl font-light leading-[1.1] text-[#3d4461] lg:text-5xl">
                    {content.title}{" "}
                    <span className="bg-[linear-gradient(90deg,#1bc39a_0%,#58c5ea_48%,#5a7cf0_100%)] bg-clip-text font-semibold text-transparent">
                        {content.highlightTitle}
                    </span>
                </h2>

                <p className="mt-4 text-sm font-medium leading-relaxed text-[#4e5a70] lg:text-base">
                    {content.description}
                </p>

                {points.length > 0 && (
                    <ul className="mt-5 space-y-2 pl-5">
                        {points.map((point) => (
                            <li
                                key={point}
                                className="list-disc text-sm font-medium leading-relaxed text-[#4e5a70] marker:text-[#1bc39a] lg:text-base"
                            >
                                {point}
                            </li>
                        ))}
                    </ul>
                )}

                <div className="mt-6 flex flex-wrap gap-4">
                    {content.primaryButton?.text && content.primaryButton.link && (
                        <Link
                            href={content.primaryButton.link}
                            className="inline-flex items-center gap-2 bg-[linear-gradient(90deg,#5ed0df_0%,#2a7de1_100%)] px-6 py-2.5 text-base font-medium text-white transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                            {content.primaryButton.text}
                            <span aria-hidden="true">→</span>
                        </Link>
                    )}

                    {content.secondaryButton?.text && content.secondaryButton.link && (
                        <Link
                            href={content.secondaryButton.link}
                            className="border border-[#9aa7bf] bg-transparent px-6 py-2.5 text-base font-medium text-[#3d4461] transition hover:bg-white/70"
                        >
                            {content.secondaryButton.text}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function HealthLeaderIndustry({
    data,
}: {
    data?: ConsumerResearchSection;
}) {
    const howResearchWorks = hasSectionContent(data?.howResearchWorks)
        ? data.howResearchWorks
        : null;
    const benefits = hasSectionContent(data?.benefits) ? data.benefits : null;

  if (!howResearchWorks && !benefits) return null;

  const howResearchWorksPoints = parseListItems(howResearchWorks?.points);
  const benefitPoints = parseListItems(benefits?.points);

    return (
        <section className="relative overflow-hidden bg-[#edf6ff] py-2 lg:py-8">
            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {howResearchWorks && (
          <ResearchContentRow
            content={howResearchWorks}
            imagePosition="left"
            points={howResearchWorksPoints}
          />
                )}

                {benefits && (
                    <ResearchContentRow
                        content={benefits}
                        imagePosition="right"
                        points={benefitPoints}
                    />
                )}
            </div>
        </section>
    );
}
