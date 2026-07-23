import BackgroundShape from "../about-us/background-shape";

export default function QuantAbout({ content }: { content?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#edf6ff] py-6 lg:py-10">
      <BackgroundShape variant={1} className="-right-24 -top-44 w-[320px] opacity-40 sm:w-[410px] lg:-right-3 lg:w-[500px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 text-center sm:px-6">
        <p className="text-[15px] leading-[1.9] text-[#374151] sm:text-[17px] lg:text-center text-justify">
          {content || (
            <>
              <span className="font-semibold text-[#1e2746]">
                At Insights Opinion,
              </span>{" "}
              we offer comprehensive quantitative market research services
              designed to give businesses clear, measurable answers. Our
              services include{" "}
              <strong className="font-semibold text-[#1e2746]">
                Online Surveys, CATI, CAPI, and CLT,
              </strong>{" "}
              making us a quantitative market research company that handles
              every stage from data collection through to analysis and
              reporting.
            </>
          )}
        </p>
      </div>
    </section>
  );
}
