import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const offices = [
  {
    title: "Quantitative Research Services in the USA",
    desc: "Our New York office serves US-based clients across consumer research, B2B research, and healthcare research. We are among the quantitative market research companies US businesses can engage directly for domestic and multi-country studies.",
    phone: "+1 646 475 7865",
    email: "bids@insightsopinion.com",
    address: "100 Church Street, Suite 800, New York, NY 10007",
  },
  {
    title: "Quantitative Research Services in the UK",
    desc: "Our London office supports UK and European clients across FMCG, financial services, technology, healthcare, and public sector programmes.",
    phone: "+44 20 3239 5786",
    email: "bids@insightsopinion.com",
    address: "71-75 Shelton Street, Covent Garden, London WC2H 9JQ",
  },
  {
    title: "Quantitative Research Services in India",
    desc: "Our Noida office supports Indian and Asia Pacific clients and serves as a delivery hub for multilingual fieldwork, survey programming, data processing, and CATI operations at scale.",
    phone: "+91 120 359 4799",
    email: "bids@insightsopinion.com",
    address: "E-144, Sector-63, Noida, Uttar Pradesh 201301",
  },
];

function OfficeCard({ office }: { office: (typeof offices)[0] }) {
  return (
    <div
      className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#15af9e] via-[#15af9e] to-[#71b8fc]"
    >
      {/* Card body */}
      <div className="px-7 py-8 rounded-b-4xl bg-[#1c2350] border border-[#63b3ed]/12" >
        <h3
          className="text-base font-medium leading-snug lg:text-2xl"
          style={{
            background: "linear-gradient(90deg, #00f2fe 0%,  #4facfe 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {office.title}
        </h3>
        <p className="mt-4 text-sm leading-[1.75] lg:text-base line-clamp-4 lg:line-clamp-5" style={{ color: "rgba(203,213,225,0.7)" }}>
          {office.desc}
        </p>

      </div>

      {/* Contact strip */}
      <div
        className="flex flex-wrap gap-x-5 gap-y-2 px-7 py-4 rounded-b-2xl"

      >
        {[
          { icon: Phone, text: office.phone },
          { icon: Mail, text: office.email },
          { icon: MapPin, text: office.address },
        ].map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-2 text-sm text-white"  >
            <Icon size={14} style={{ flexShrink: 0 }} />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function QuantGlobalServices({
  content,
}: {
  content?: {
    heading: string;
    description: string;
    officeDescriptions: readonly string[];
  };
}) {
  const displayOffices = offices.map((office, index) => ({
    ...office,
    title: content
      ? `${content.heading} in ${["the USA", "the UK", "India"][index]}`
      : office.title,
    desc: content?.officeDescriptions[index] || office.desc,
  }));

  return (
    <section className="relative overflow-hidden py-5 lg:py-12 bg-[#eaf5fc]">
      {/* Globe background */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/quality/research-services.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Heading block */}
        <div className="mb-16 text-center">
          <h2 className="text-[28px] font-semibold leading-tight lg:text-4xl">
            <span
              style={{
                background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {content?.heading || "Quantitative Research Services"}
            </span>
          </h2>
          <p className="mt-1 text-lg font-normal text-white lg:text-2xl">
            Across Our Global Offices
          </p>
          <p
            className="mx-auto mt-4 max-w-4xl text-sm leading-[1.75] lg:text-base text-white"
          >
            {content?.description || (
              <>
                Insights Opinion is a quantitative market research company US,
                UK, and India-based businesses can work with directly. We have
                offices in three key markets and fieldwork capability across
                100+&nbsp;countries, so whether your study is domestic or spans
                multiple regions, you have a research partner on the ground.
              </>
            )}
          </p>
        </div>

        {/* Mobile / tablet — horizontal scroll */}
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide lg:pb-4 pb-20 lg:hidden">
          {displayOffices.map((office, i) => (
            <div key={i} className="min-w-[85vw] snap-center">
              <OfficeCard office={office} />
            </div>
          ))}
        </div>

        {/* Desktop — staggered overlap layout */}
        <div className="relative mx-auto hidden max-w-6xl lg:block">
          <div style={{ marginLeft: "3%", maxWidth: 520 }}>
            <OfficeCard office={displayOffices[0]} />
          </div>
          <div style={{ marginLeft: "auto", marginRight: 0, maxWidth: 520, marginTop: -180 }}>
            <OfficeCard office={displayOffices[1]} />
          </div>
          <div style={{ marginLeft: "10%", maxWidth: 520, marginTop: 45 }}>
            <OfficeCard office={displayOffices[2]} />
          </div>
        </div>
      </div>
    </section>
  );
}
