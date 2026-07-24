import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import type { TeamMember } from "@/app/lib/team-api";

type TeamMembersProps = {
  members: TeamMember[];
};

const LINKEDIN_URLS: Record<string, string> = {
  "shahab-s": "https://www.linkedin.com/in/shahab-ghauri-5712871a4/",
  "sharoz-ghauri": "https://www.linkedin.com/in/sharoz-ghauri-72262946/",
  "dan-schmitt": "https://www.linkedin.com/in/dan-schmitt-69ab29b",
  "sankar-dhara": "https://www.linkedin.com/in/sankardhara/",
  "priyanka-sarma": "https://www.linkedin.com/in/priyanka-sarma-a40b8817",
};

export default function TeamMembers({ members }: TeamMembersProps) {
  return (
    <section className="quality-hex-bg relative overflow-hidden px-4 pb-9 pt-9 sm:px-6 sm:pb-16 sm:pt-10 lg:px-5 lg:pb-24 lg:pt-14">
      <div className="mx-auto max-w-7xl">
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

        <h3 className="mt-7 flex items-center justify-center gap-1 whitespace-nowrap text-center sm:mt-8 sm:gap-2">
          <span className="inline-block translate-y-0.5 text-[38px] font-semibold leading-none tracking-[-0.06em] text-[#101938] [font-family:'Snell_Roundhand','Brush_Script_MT','Segoe_Script',cursive] sm:text-[46px] lg:text-[52px]">
            Our
          </span>
          <span className=" ml-1.5 quality-gradient-text text-[27px] font-medium leading-none tracking-[-0.035em] sm:text-[36px] lg:text-[44px] ">
            Guiding Force
          </span>
        </h3>


        <div className="mx-auto mt-7 flex flex-wrap justify-center gap-x-6 gap-y-10 sm:mt-8 sm:gap-y-12 lg:gap-x-10">
          {members.map((member, index) => (
            <article
              key={member.name}
              className="w-full max-w-[310px] text-center sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-27px)]"
            >
              <div className="relative flex w-full h-[260px] items-end justify-center sm:h-[280px] lg:h-[300px]">
                <Link
                  href={`/our-teams/${member.slug}`}
                  aria-label={`View ${member.name}'s profile`}
                  className="relative z-10 flex h-full items-end justify-center"
                >
                  <Image
                    src={member.image || "/our-team/shahab.png"}
                    alt={member.name}
                    width={360}
                    height={400}
                    unoptimized={member.image.startsWith("http")}
                    className="relative z-10 mb-3 h-[235px] w-auto object-contain object-bottom sm:h-[255px] lg:h-[273px]"
                  />
                </Link>
                <a
                  href={LINKEDIN_URLS[member.slug] || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on LinkedIn`}
                  className="absolute bottom-0 right-[7%] z-20 flex h-8 w-8 items-center justify-center rounded-[4px] bg-[#087db4] text-white shadow-sm"
                >
                  <Linkedin size={21} fill="currentColor" strokeWidth={1.5} />
                </a>
              </div>

              <Link href={`/our-teams/${member.slug}`}>
                <h4
                  className={`mt-1 text-lg font-semibold leading-tight sm:text-xl lg:text-2xl ${index === 1 ? "quality-gradient-text" : "text-[#141b3d]"
                    }`}
                >
                  {member.name}
                </h4>
              </Link>
              <p className="my-1.5 text-sm text-[#303954] sm:text-base">
                {member.role}
              </p>
              <Link
                href={`/our-teams/${member.slug}`}
                className="mt-2 inline-flex items-center gap-2 rounded-sm bg-gradient-to-r from-[#14b8a6] to-[#59a9ee] px-4 py-2 text-xs font-medium uppercase text-white transition hover:brightness-105 sm:mt-3 lg:px-6 lg:text-base"
              >
                Read More <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>


    </section>
  );
}
