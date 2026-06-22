"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus, ChevronRight, FileText, Users, Phone, Eye, Database, TrendingDown, BookOpen, Wifi, UserCheck, RefreshCw, ArrowRight } from "lucide-react";

const whenToUseItems = [
  {
    Icon: TrendingDown,
    title: "Low Digital Reach",
    description: "Your target audience has lower digital engagement or is difficult to reach through online panels",
  },
  {
    Icon: BookOpen,
    title: "Sensitive Topics",
    description: "The study covers sensitive topics where a human interviewer improves response quality",
  },
  {
    Icon: Wifi,
    title: "Deep Probing",
    description: "You need structured probing to go deeper than a closed question allows",
  },
  {
    Icon: UserCheck,
    title: "Verified Respondents",
    description: "You are running a B2B, healthcare, or public opinion study where respondent verification is important",
  },
  {
    Icon: RefreshCw,
    title: "Consistent Tracking",
    description: "Longitudinal tracking requires a consistent method across multiple research waves",
  },
];

const services = [
  {
    id: "01",
    title: "Questionnaire Design and Scripting",
    description:
      "We design and script questionnaires built for telephone delivery — clear routing, controlled length, and language tuned for spoken responses rather than a screen.",
    image: "/Survey-Programming.jpg",
    Icon: FileText,
  },
  {
    id: "02",
    title: "Interviewer Training",
    description:
      "Every interviewer is briefed on the specific study and trained for the audience type. B2B research and healthcare research studies receive additional sector briefings.",
    image: "/quality/cati-telephone.png",
    Icon: Users,
  },
  {
    id: "03",
    title: "Automated Dialing and Scheduling",
    description:
      "Our dialing system manages call queues, time-zone scheduling, and callback windows so interviewers spend time talking, not waiting.",
    image: "/quality/cati-computer.png",
    Icon: Phone,
  },
  {
    id: "04",
    title: "Live Monitoring and Quality Review",
    description:
      "Supervisors monitor live calls throughout fieldwork. Interviews that fall outside quality thresholds are flagged and removed before data delivery.",
    image: "/Live-Project-Visibility.png",
    Icon: Eye,
  },
  {
    id: "05",
    title: "Data Delivery",
    description:
      "Clean, coded data delivered in your preferred format — SPSS, Excel, or CSV — with a full fieldwork summary and response rate breakdown.",
    image: "/Data-Insights.jpg",
    Icon: Database,
  },
];

export default function MarketResearch() {
  const [active, setActive] = useState(1);

  return (
    <>
      {/* When to Use CATI Market Research Section */}
      <section className="relative overflow-hidden bg-[#deeef7] py-16">


        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">

            <div>
              <p className="text-2xl font-light text-[#2b3553] sm:text-3xl">When to Use</p>
              <h2 className="mt-1 text-3xl font-bold sm:text-4xl">
                <span className="text-[#1dc3b3]">CATI</span>{" "}
                <span className="text-[#4faee8]">Market Research?</span>
              </h2>
              <p className="mt-5 text-base font-semibold leading-relaxed text-[#2b3553] sm:text-[15px]">
                Outsourcing CATI market research to Insights Opinion gives you fully managed CATI
                fieldwork services from brief to delivery. For studies needing panel respondents
                alongside telephone reach, our global panel of 8M+ profiled respondents works
                alongside CATI fieldwork.
              </p>
              <div className="mt-7 overflow-hidden rounded-2xl">
                <Image
                  src="/quality/cati-telephone.png"
                  alt="CATI Market Research"
                  width={640}
                  height={380}
                  unoptimized
                  className="h-64 w-full object-cover sm:h-80"
                />
              </div>
            </div>

            {/* Right Column — grid of use-case cards */}
            <div className="grid grid-cols-2 gap-6">
              {whenToUseItems.map((item) => (
                <div key={item.title}>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#1dc3b3] text-[#1dc3b3]">
                    <item.Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-[#2b3553]">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#4a5568]">{item.description}</p>
                </div>
              ))}

              {/* CTA card fills the 6th grid cell */}
              <div className="flex flex-col justify-end">
                <p className="mb-3 text-sm font-semibold text-[#2b3553]">
                  Not sure if CATI is the right method for your study?
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#1dc3b3] to-[#4faee8] px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:opacity-90"
                >
                  Speak With Insights Opinion <ArrowRight size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#deeef7] py-16">

        <div className="pointer-events-none absolute inset-y-0 right-0 w-52 opacity-25">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hex3" x="0" y="0" width="60" height="69.28" patternUnits="userSpaceOnUse">
                <polygon points="30,0 60,17.32 60,51.96 30,69.28 0,51.96 0,17.32" fill="none" stroke="#1dc3b3" strokeWidth="1.5" />
                <polygon points="30,34.64 60,51.96 60,86.6 30,103.92 0,86.6 0,51.96" fill="none" stroke="#1dc3b3" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hex3)" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
            <span className="text-[#1dc3b3]">CATI</span>{" "}
            <span className="text-[#4faee8]">vs Online Surveys</span>
          </h2>


          <div className="grid grid-cols-3 gap-x-6">
            <p className="mb-8 text-center text-2xl font-semibold text-[#1dc3b3]">Factor</p>
            <p className="mb-8 text-center text-2xl font-semibold text-[#1dc3b3]">CATI</p>
            <p className="mb-8 text-center text-2xl font-semibold text-[#1dc3b3]">Online Surveys</p>

            {[
              { factor: "Interviewer involvement", cati: "Trained interviewer throughout", online: "Self-completion only" },
              { factor: "Response quality control", cati: "High, real-time supervision", online: "Respondent-led" },
              { factor: "Audience reach", cati: "Broad, including non-digital populations", online: "Primarily digital users" },
              { factor: "Sensitive topic handling", cati: "Stronger, reduces dropout", online: "Higher abandonment rates" },
              { factor: "Cost per response", cati: "Higher", online: "Lower for large panels" },
              { factor: "Best for", cati: "B2B, healthcare, complex studies", online: "Large consumer panels, fast turnaround" },
            ].map((row) => (
              <>
                <div key={`f-${row.factor}`} className="mb-4 flex items-center rounded-xl bg-white/70 px-6 py-3 text-base font-medium text-[#2b3553]">
                  {row.factor}
                </div>
                <div key={`c-${row.factor}`} className="mb-4 flex items-center rounded-xl bg-white/70 px-6 py-3 text-base text-[#2b3553]">
                  {row.cati}
                </div>
                <div key={`o-${row.factor}`} className="mb-4 flex items-center rounded-xl bg-white/70 px-6 py-3 text-base text-[#2b3553]">
                  {row.online}
                </div>
              </>
            ))}
          </div>

          <div className="mt-6 max-w-lg text-base leading-relaxed text-[#4a5568]">
            <p>
              Many clients combine <strong className="text-[#2b3553]">CATI</strong> data collection services
              with online panel methods to build representative samples.
            </p>
            <p className="mt-1 font-semibold text-[#2b3553]">
              Both sit within Insights Opinion&apos;s quantitative research portfolio.{" "}
              <a href="#" className="inline-flex items-center gap-1 text-[#1dc3b3] hover:underline">
                <ArrowRight size={18} />
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          <div className="mb-10 text-center w-full">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl bg-linear-to-r from-[#1dc3b3] to-[#4faee8] bg-clip-text text-transparent">
              What Our CATI
            </h2>

            <h2 className="text-3xl font-light text-[#2b3553] sm:text-4xl py-1">
              Services Include?
            </h2>

            <p className="mx-auto mt-2 max-w-3xl text-lg leading-relaxed text-[#4a5568]">
              Insights Opinion manages the full project as a single CATI survey company, from
              questionnaire to final data.
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col">
            {services.map((s, i) => {
              const isActive = active === i;

              if (isActive) {
                return (
                  <div
                    key={s.id}
                    className="my-2 flex overflow-hidden rounded-2xl bg-[#1b2f5e]"
                  >
                    {/* Thumbnail — icon centered on image */}
                    <div className="relative hidden w-60 shrink-0 sm:block">
                      <Image src={s.image} alt={s.title} fill unoptimized className="object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1dc3b3]">
                          <s.Icon size={24} className="text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:flex-row sm:items-center">
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-[#1dc3b3] sm:text-lg">
                          {s.title}
                        </p>
                        <p className="text-5xl font-black leading-none text-white sm:text-6xl">
                          {s.id}
                        </p>
                      </div>
                      <div className="my-3 shrink-0 text-[#4faee8] sm:my-0 sm:px-5">
                        <ChevronRight size={22} />
                      </div>
                      <p className="max-w-xs text-sm leading-loose text-white/60">
                        {s.description}
                      </p>
                    </div>
                  </div>
                );
              }

              return (
                <button
                  key={s.id}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-4 border-b border-[#e8eff8] py-4 lg:pr-2 text-left last:border-b-0 transition hover:bg-[#f5faff] sm:gap-5"
                >
                  {/* Thumbnail — icon on left side of image */}
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-48">
                    <Image src={s.image} alt={s.title} fill unoptimized className="object-cover" />
                    <div className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#1dc3b3] sm:h-11 sm:w-11">
                      <s.Icon size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Title + number */}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[#1e2746] sm:text-lg">{s.title}</p>
                    <p className="text-4xl font-black leading-none text-gray-400 sm:text-5xl">
                      {s.id}
                    </p>
                  </div>

                  {/* READ MORE */}
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#1dc3b3] px-6 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white sm:px-5 lg:text-sm">
                    <Plus size={14} strokeWidth={3} /> Read More
                  </span>
                </button>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <p className="inline-block border border-[#2b3553] px-8 py-2.5 rounded text-xl text-[#2b3553]">
              Want to know how this applies to your study?
            </p>
            <p className="mt-5">
              <a
                href="#"
                className="bg-linear-to-r from-[#1dc3b3] to-[#4faee8] bg-clip-text text-lg font-semibold text-transparent "
              >
                [Talk to Our Research Team]
              </a>
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
