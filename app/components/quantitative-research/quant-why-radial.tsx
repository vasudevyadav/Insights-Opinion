import Image from "next/image";

export default function QuantWhyRadial({
  content,
}: {
  content?: { heading: string; image?: string; imageAlt?: string; items: readonly string[] };
}) {
  if (!content) return null;
  const image = content.image || "/quality/why-chose.png";

  return (
    <section className="overflow-hidden bg-[#eaf5fc] py-6 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-xl font-medium leading-tight lg:text-4xl">
            <span className="font-semibold bg-linear-to-r from-[#3c8df6] via-[#31b6df] to-[#1dc3b3] bg-clip-text text-transparent">
              {content.heading}
            </span>
          </h2>
        </div>

        <div className="relative">
          <Image
            src={image}
            alt={content.imageAlt || content.heading}
            width={2000}
            height={1000}
            unoptimized
            priority
            className="h-auto w-full"
          />
        </div>

        <div
          className="hidden grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {content.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl px-4 py-3 text-center text-sm font-medium leading-snug text-white shadow-sm"
              style={{
                background: i === 6
                  ? "linear-gradient(135deg,#2ecc8f 0%,#1aab7a 50%,#0e8f63 100%)"
                  : "linear-gradient(135deg,#5ab3f0 0%,#2f7de0 50%,#1a5fbf 100%)",
              }}
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
