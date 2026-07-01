import Link from "next/link";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

type LegalPageProps = {
  title: string;
  intro?: string;
  sections: LegalSection[];
};

export default function LegalPage({
  title,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <>
      <section className="bg-[#edf6fe]">
        <div className="relative w-full overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white lg:mt-20">
          <div className="relative z-10 mx-auto flex min-h-[280px] w-full max-w-7xl items-center justify-center px-4 py-12 text-center sm:min-h-[350px] sm:px-6 lg:min-h-[430px] lg:px-5 lg:py-0">
            <h1 className="site-page-title lg:mb-10">{title}</h1>
          </div>
        </div>
      </section>

      <section className="quality-hex-bg px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <article className="mx-auto max-w-7xl rounded-2xl border border-[#d5e5f1] bg-white/90 p-5 shadow-sm sm:p-8 lg:p-12">
          {intro && (
            <p className="site-body border-l-4 border-[#20b7a6] pl-4 text-[#374158]">
              {intro}
            </p>
          )}

          <div className={intro ? "mt-10 space-y-9" : "space-y-9"}>
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="site-subsection-title quality-gradient-text font-semibold">
                  {section.title}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="site-body mt-3 text-[#4a5268]"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="mt-4 space-y-3 pl-5 text-[#4a5268]">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="site-body list-disc marker:text-[#20b7a6]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-[#eef7ff] p-5 text-center sm:p-7">
            <h2 className="site-subsection-title text-[#1d2746]">
              Need more information?
            </h2>
            <p className="site-body mt-2 text-[#596176]">
              Contact Insights Opinion if you have questions about this policy
              or your privacy choices.
            </p>
            <Link
              href="/contact-us"
              className="mt-5 inline-flex rounded-full bg-gradient-to-r from-[#14b8a6] to-[#59a9ee] px-7 py-3 text-sm font-semibold text-white transition hover:brightness-105"
            >
              Contact Us
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}
