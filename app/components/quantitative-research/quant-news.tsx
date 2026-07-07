import Image from "next/image";
import Link from "next/link";

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
    <section className="relative overflow-hidden bg-white py-10 lg:py-14">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:pb-0 lg:grid-cols-3">
          {articles.map((a, i) => (
            <Link key={i} href={a.href} className="group block min-w-[82vw] snap-center sm:min-w-0">
              <div className="overflow-hidden rounded-[18px] border border-[#e5ecf4] bg-white shadow-[0_4px_16px_rgba(37,99,235,0.06)] transition-all duration-300 group-hover:shadow-[0_8px_28px_rgba(37,99,235,0.14)]">
                <div className="relative h-[200px] w-full overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#35d0c7] px-3 py-1 text-[11px] font-semibold text-white">
                    {a.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-[11px] text-[#9ba3af]">{a.date}</p>
                  <h3 className="mt-1.5 text-[15px] font-semibold leading-[1.4] text-[#1e2746] transition-colors group-hover:text-[#1687c9] sm:text-[16px]">
                    {a.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-[13px] leading-[1.65] text-[#4a5568]">
                    {a.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
