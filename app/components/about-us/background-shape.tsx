import Image from "next/image";

type BackgroundShapeProps = {
    side?: "left" | "right";
    variant?: 1 | 2 | 3 | 4 | 5 | 7;
    className?: string;
};

export default function BackgroundShape({
    side = "right",
    variant,
    className = "",
}: BackgroundShapeProps) {
    const fallbackSrc = side === "left"
        ? "/comman/comman-bg-left-shape.png"
        : "/comman/comman-bg-shape-2.png";
    const src = variant ? `/comman/shape-${variant}.png` : fallbackSrc;
    const widths = { 1: 526, 2: 464, 3: 408, 4: 399, 5: 526, 7: 464 };
    const width = variant ? widths[variant] : side === "left" ? 394 : 526;

    return (
        <Image
            src={src}
            alt=""
            width={width}
            height={534}
            aria-hidden="true"
            className={`pointer-events-none absolute select-none object-contain [filter:brightness(0)_saturate(100%)_invert(74%)_sepia(61%)_saturate(952%)_hue-rotate(167deg)_brightness(104%)_contrast(97%)] ${className}`}
        />
    );
}
