import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { TeamMember } from "@/app/lib/team-data";

type TeamMemberDetailProps = {
  member: TeamMember;
  previousMember: TeamMember;
  nextMember: TeamMember;
};

export default function TeamMemberDetail({
  member,
  previousMember,
  nextMember,
}: TeamMemberDetailProps) {
  return (
    <section className="quality-hex-bg relative overflow-hidden px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-[1120px] gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
        <div className="mx-auto w-full max-w-[430px] pb-3 sm:pb-4 lg:pb-0">
          <div className="relative mx-auto flex w-full max-w-full items-end justify-center lg:block lg:min-h-0 lg:w-10/12 lg:max-w-none">
            <Image
              src={member.detailImage}
              alt={member.name}
              width={340}
              height={471}
              priority
              className="relative z-10 h-full max-w-full object-contain object-bottom lg:h-full lg:max-h-none w-11/12 lg:max-w-none"
            />
            <a
              href="#"
              className="absolute -bottom-5 left-1/2 z-20 inline-flex -translate-x-1/2 items-center gap-4 whitespace-nowrap rounded-sm bg-gradient-to-r from-[#14b8a6] to-[#59a9ee] px-5 py-2.5 text-xs font-medium uppercase text-white shadow-md sm:px-6 sm:py-3 sm:text-sm lg:left-0 lg:translate-x-0 lg:text-base"
            >
              View Profile <ArrowRight size={18} />
            </a>
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h1 className="site-subsection-title quality-gradient-text font-semibold">
            {member.name}
          </h1>
          <h2 className="mt-1 text-sm font-normal text-[#26314d] sm:text-lg">
            {member.role}
          </h2>

          <div className="mt-4 space-y-3 text-left text-xs leading-6 text-[#19233f] sm:text-sm sm:leading-7">
            {member.description.map((paragraph, index) => (
              <p key={index} className={index === 0 ? "font-medium" : ""}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
            <Link
              href={`/our-team/${previousMember.slug}`}
              aria-label={`Previous member: ${previousMember.name}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#20b6b4] text-white transition hover:bg-[#151b48]"
            >
              <ArrowLeft size={19} />
            </Link>
            <Link
              href={`/our-team/${nextMember.slug}`}
              aria-label={`Next member: ${nextMember.name}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#20b6b4] text-white transition hover:bg-[#151b48]"
            >
              <ArrowRight size={19} />
            </Link>
          </div>
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
