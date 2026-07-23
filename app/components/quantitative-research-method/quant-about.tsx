import BackgroundShape from "@/app/components/about-us/background-shape";

export default function QuantDetailsAbout({ data }: { data: string }) {
  return (
    <section className="relative overflow-hidden bg-[#eef7ff] pt-8 lg:pt-12 pb-8 lg:pb-0 ">
      <BackgroundShape variant={5} className="-right-16 top-0 z-0 w-[360px] opacity-45 sm:w-[440px] lg:-right-1 lg:-top-6 lg:w-[526px] lg:opacity-55" />
      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:text-center text-justify sm:px-6">
        <p className="text-sm leading-[1.9] text-[#374151]  sm:text-lg">
          {data}
        </p>
      </div>
    </section>
  );
}
