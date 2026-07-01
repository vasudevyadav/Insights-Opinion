import Image from "next/image";

const fieldClass =
  "h-12 w-full rounded-md border border-transparent bg-[#151a45] px-5 text-sm text-white outline-none placeholder:text-white/90 focus:border-[#4bc4c7]";

export default function TeamGrowthForm() {
  return (
    <section className="quality-hex-bg overflow-hidden px-4 pb-14 pt-2 sm:px-6 sm:pb-16 sm:pt-4 lg:px-5 lg:pb-20 lg:pt-8">
      <div className="mx-auto grid max-w-[1040px] gap-8 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="grid grid-cols-1 items-center sm:grid-cols-[0.8fr_1.2fr]">
          <h2 className="text-center text-2xl font-light leading-tight text-[#2f3643] sm:text-left lg:text-[31px]">
            Grow Better with
            <span className="quality-gradient-text mt-2 block text-4xl font-light lg:leading-[1.05] lg:text-[47px]">
              Insight
              <br />
              Opinion
            </span>
          </h2>
          <div className="relative mx-auto h-[260px] w-full max-w-[300px] sm:max-w-none lg:h-[370px]">
            <Image
              src="/grow-better.png"
              alt="Grow better with Insight Opinion"
              fill
              sizes="(max-width: 1024px) 55vw, 320px"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        <form className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          <input className={fieldClass} type="text" placeholder="Name" />
          <input className={fieldClass} type="email" placeholder="Email" />
          <select className={fieldClass} defaultValue="">
            <option value="" disabled>
              Country
            </option>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
          </select>
          <input className={fieldClass} type="tel" placeholder="Mobile" />
          <select className={fieldClass} defaultValue="">
            <option value="" disabled>
              Please Select
            </option>
            <option>Market Research</option>
            <option>Healthcare Research</option>
            <option>Consumer Research</option>
          </select>
          <div className="sm:col-span-2">
            <button
              type="button"
              className="w-full rounded-md bg-gradient-to-r from-[#15b9a6] to-[#5aa8ee] px-9 py-3 text-sm text-white transition hover:brightness-105 sm:w-auto"
            >
              Submit Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
