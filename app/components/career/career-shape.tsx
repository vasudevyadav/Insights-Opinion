import Image from "next/image";

type CareerShapeProps = {
    variant: 1 | 2 | 3 | 4 | 5 | 7;
    className: string;
};

const widths = { 1: 526, 2: 464, 3: 408, 4: 399, 5: 526, 7: 464 };

export default function CareerShape({ variant, className }: CareerShapeProps) {
    return (
        <Image
            src={`/comman/shape-${variant}.png`}
            alt=""
            aria-hidden="true"
            width={widths[variant]}
            height={534}
            className={`pointer-events-none absolute select-none object-contain ${className}`}
        />
    );
}
