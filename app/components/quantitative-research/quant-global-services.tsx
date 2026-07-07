import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

type Office = {
  title?: string;
  description: string;
  phone?: string;
  email?: string;
  address?: string;
};

type GlobalContent = {
  heading?: string;
  subheading?: string;
  description: string;
  officeDescriptions: readonly string[];
  offices?: readonly Office[];
};

function OfficeCard({ office }: { office: Office }) {
  const contactItems = [
    { icon: Phone, value: office.phone },
    { icon: Mail, value: office.email },
    { icon: MapPin, value: office.address },
  ].filter((item) => item.value);

  return (
    <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#15af9e] via-[#15af9e] to-[#71b8fc]">
      <div className="rounded-b-4xl border border-[#63b3ed]/12 bg-[#1c2350] px-7 py-8">
        {office.title && (
          <h3
            className="text-base font-medium leading-snug lg:text-2xl"
            style={{
              background: "linear-gradient(90deg, #00f2fe 0%, #4facfe 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {office.title}
          </h3>
        )}
        <p className="mt-4 line-clamp-5 text-sm leading-[1.75] text-slate-300/80 lg:text-base">
          {office.description}
        </p>
      </div>

      {contactItems.length > 0 && (
        <div className="flex flex-wrap gap-x-5 gap-y-2 rounded-b-2xl px-7 py-4">
          {contactItems.map(({ icon: Icon, value }) => (
            <div key={value} className="flex items-center gap-2 text-sm text-white">
              <Icon size={14} className="shrink-0" />
              <span>{value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function getOffices(content: GlobalContent): Office[] {
  if (content.offices?.length) {
    return content.offices.filter((office) => office.description);
  }

  return content.officeDescriptions
    .filter(Boolean)
    .map((description) => ({ description }));
}

export default function QuantGlobalServices({
  content,
}: {
  content?: GlobalContent;
}) {
  if (!content) return null;

  const offices = getOffices(content);
  if (offices.length === 0) return null;

  return (
    <section className="relative overflow-hidden bg-[#eaf5fc] py-5 lg:py-12">
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/quality/research-services.png"
          alt=""
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          {content.heading && (
            <h2 className="text-[28px] font-semibold leading-tight lg:text-4xl">
              <span
                style={{
                  background: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {content.heading}
              </span>
            </h2>
          )}
          {content.subheading && (
            <p className="mt-1 text-lg font-normal text-white lg:text-2xl">
              {content.subheading}
            </p>
          )}
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-[1.75] text-white lg:text-base">
            {content.description}
          </p>
        </div>

        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-20 lg:hidden">
          {offices.map((office, index) => (
            <div key={`${office.title || "office"}-${index}`} className="min-w-[85vw] snap-center">
              <OfficeCard office={office} />
            </div>
          ))}
        </div>

        <div className="relative mx-auto hidden max-w-6xl lg:block">
          {offices[0] && (
            <div style={{ marginLeft: "3%", maxWidth: 520 }}>
              <OfficeCard office={offices[0]} />
            </div>
          )}
          {offices[1] && (
            <div style={{ marginLeft: "auto", marginRight: 0, maxWidth: 520, marginTop: -180 }}>
              <OfficeCard office={offices[1]} />
            </div>
          )}
          {offices[2] && (
            <div style={{ marginLeft: "10%", maxWidth: 520, marginTop: 45 }}>
              <OfficeCard office={offices[2]} />
            </div>
          )}
          {offices.slice(3).map((office, index) => (
            <div
              key={`${office.title || "office"}-${index + 3}`}
              style={{
                marginLeft: index % 2 ? "auto" : "6%",
                maxWidth: 520,
                marginTop: 45,
              }}
            >
              <OfficeCard office={office} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
