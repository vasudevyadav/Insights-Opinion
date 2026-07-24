import Image from "next/image";

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  backgroundImage?: string;
}

export default function QuantDetailsHero({ data }: { data: HeroData }) {
  const titleLines = data.title.split("\n");
  const subtitleLines = data.subtitle.split("\n");

  return (
    <section className="relative min-h-[580px] overflow-hidden bg-[linear-gradient(135deg,#151b3c_0%,#162e54_52%,#173c68_100%)] lg:h-175 lg:min-h-0 lg:bg-[#edf6ff] lg:bg-none">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(23,60,104,0.7),transparent_38%),radial-gradient(circle_at_12%_85%,rgba(21,27,60,0.55),transparent_42%)] lg:hidden" />
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src={data.backgroundImage || "/quantity-details/quantity-details-hero.png"}
          alt=""
          fill
          priority
          sizes="100vw"
          unoptimized
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1450px] px-5 pt-16 lg:px-1 lg:pt-0">
        <div className="grid min-h-[420px] grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div className="py-8 lg:py-16 lg:pt-32">
            <h1 className="text-[32px] font-semibold leading-[1.08] lg:text-[50px] bg-linear-to-r from-[#1dc3b3] via-[#1dc3b3] to-[#3c8df6] bg-clip-text text-transparent">
              {titleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < titleLines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="mt-5 max-w-[490px] text-sm leading-7 text-white lg:text-3xl lg:leading-10">
              {subtitleLines.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < subtitleLines.length - 1 && <br />}
                </span>
              ))}
            </p>

            <p className="mt-5 max-w-[500px] text-sm leading-8 text-white lg:text-lg mb-10">
              {data.description}
            </p>

            <a href="/contact-us" className="py-3 whitespace-nowrap px-10 text-center text-sm font-semibold transition-all lg:text-lg rounded-full bg-gradient-to-r from-[#37c9c7] to-[#4a8fe8] text-white shadow-[0_8px_24px_rgba(74,143,232,0.22)]"> Get In Touch </a>


          </div>
        </div>
      </div>
    </section>
  );
}
