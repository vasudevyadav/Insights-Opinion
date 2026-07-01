import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import { teamMembers } from "@/app/lib/team-data";

export default function TeamMembers() {
  return (
    <section className="quality-hex-bg relative overflow-hidden px-4 pb-14 pt-9 sm:px-6 sm:pb-16 sm:pt-10 lg:px-5 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="site-section-title quality-gradient-text font-semibold">
            At Insight Opinion,
          </h2>
          <p className="mt-3 text-xs leading-6 text-[#18213f] sm:text-sm sm:leading-7 lg:text-base">
            our team is composed of experienced professionals who bring a wealth
            of expertise in market research, data analytics, and business
            strategy. Their visionary approach has been pivotal in our growth
            and success. With decades of experience, our leaders are committed
            to driving innovation, ensuring quality, and delivering unparalleled
            client success. They lead with purpose, guiding us in our mission to
            empower businesses through data-driven insights.
          </p>
        </div>

        <h3 className="site-section-title mt-7 text-center font-light italic text-[#2f3643] sm:mt-8">
          Our{" "}
          <span className="quality-gradient-text font-semibold italic">
            Guiding Force
          </span>
        </h3>

        <div className="mx-auto mt-7 grid grid-cols-1 justify-items-center gap-x-6 gap-y-10 sm:mt-8 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-10">
          {teamMembers.map((member, index) => (
            <article
              key={member.name}
              className="w-full max-w-[310px] text-center"
            >
              <div className="relative flex h-[260px] items-end justify-center sm:h-[280px] lg:h-[300px]">
                <Link
                  href={`/our-team/${member.slug}`}
                  aria-label={`View ${member.name}'s profile`}
                  className="relative z-10 flex h-full items-end justify-center"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={360}
                    height={400}
                    className="relative z-10 mb-3 h-[235px] w-auto object-contain object-bottom sm:h-[255px] lg:h-[273px]"
                  />
                </Link>
                <a
                  href="#"
                  aria-label={`${member.name} on LinkedIn`}
                  className="absolute bottom-0 right-[7%] z-20 flex h-8 w-8 items-center justify-center rounded-[4px] bg-[#087db4] text-white shadow-sm"
                >
                  <Linkedin size={21} fill="currentColor" strokeWidth={1.5} />
                </a>
              </div>

              <Link href={`/our-team/${member.slug}`}>
                <h4
                  className={`mt-1 text-lg font-semibold leading-tight sm:text-xl lg:text-2xl ${
                    index === 1
                      ? "quality-gradient-text"
                      : "text-[#141b3d]"
                  }`}
                >
                  {member.name}
                </h4>
              </Link>
              <p className="my-1.5 text-sm text-[#303954] sm:text-base">
                {member.role}
              </p>
              <Link
                href={`/our-team/${member.slug}`}
                className="mt-2 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-[#14b8a6] to-[#59a9ee] px-4 py-2 text-xs font-medium uppercase text-white transition hover:brightness-105 sm:mt-3 lg:px-6 lg:text-base"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>

      <Link
        href="/contact-us"
        className="fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 rounded-l-2xl bg-gradient-to-b from-[#13b9a7] to-[#56a8eb] px-3 py-5 text-[10px] font-semibold uppercase tracking-wide text-white shadow-lg lg:block [writing-mode:vertical-rl]"
      >
        Request Callback
      </Link>
    </section>
  );
}
