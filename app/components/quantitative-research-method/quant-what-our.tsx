"use client";
import { useState } from "react";
import Image from "next/image";
import { Plus, ChevronRight, FileText, Users, Phone, Eye, Database } from "lucide-react";

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

export default function CatiWhatOur() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
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
  );
}
