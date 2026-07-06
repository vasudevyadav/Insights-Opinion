export default function QuantDetailsAbout({ data }: { data: string }) {
  return (
    <section className="relative overflow-hidden bg-[#edf6ff] py-8 lg:py-12">
      <div className="relative z-10 mx-auto max-w-6xl px-5 text-center sm:px-6">
        <p className="text-[15px] leading-[1.9] text-[#374151] sm:text-[17px]">
          {data}
        </p>
      </div>
    </section>
  );
}
