import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QuantNews({
  articles,
}: {
  articles?: {
    image: string;
    category: string;
    date: string;
    title: string;
    desc: string;
    href: string;
  }[];
}) {
  if (!articles?.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#eef5fb] py-10 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-light leading-tight text-[#2f3643] sm:text-4xl">
            Latest
          </h2>
          <h3
            className="text-[28px] font-medium leading-tight text-transparent sm:text-[38px]"
            style={{
              background: "linear-gradient(90deg, #20b7a6 0%, #5da6f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            News &amp; Articles
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((a, i) => (
            <Link key={i} href={a.href} className="group block">
              <article className="overflow-hidden rounded-[18px] border border-[#17214b] bg-white transition-all duration-500 hover:border-[#1a1f52] hover:bg-[#1a1f52]">
                <div className="relative h-[220px] w-full overflow-hidden rounded-t-[18px]">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-0 left-4 rounded-t-md bg-gradient-to-r from-[#18bfa9] to-[#74b9ff] px-4 py-2 text-[11px] font-semibold uppercase tracking-wide text-white">
                    {a.category} | {a.date}
                  </div>
                </div>
                <div className="p-5 transition-colors duration-500 group-hover:bg-[#1a1f52]">
                  <h3 className="text-lg font-semibold leading-[1.45] text-[#1f2937] transition-colors duration-500 group-hover:text-white line-clamp-1">
                    {a.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-[1.65] text-[#667085] transition-colors duration-500 group-hover:text-white/75">
                    {a.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-end">
                    <ArrowRight
                      className="text-[#1a1f52] transition-colors duration-500 group-hover:text-white"
                      size={18}
                    />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
