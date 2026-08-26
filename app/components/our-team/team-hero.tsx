export default function TeamHero() {
  return (
    <section className="bg-[#edf6fe]">
      <div className="relative mt-0 w-full overflow-hidden bg-[url('/about-us/about-us-hero-bg.webp')] bg-cover bg-bottom bg-no-repeat text-white">
        <div className="relative z-10 mx-auto flex min-h-[280px] w-full max-w-7xl items-center justify-center px-4 py-12 text-center sm:min-h-[350px] sm:px-6 lg:min-h-[430px] lg:px-5 lg:py-0">
          <div className="mx-auto max-w-2xl lg:mb-10">
            <h1 className="site-page-title quality-gradient-text">
              Our Team
            </h1>
            <p className="mt-4 text-sm text-white/85">Home <span className="mx-2 text-[#35c6cf]">›</span> Our Team</p>
          </div>
        </div>
      </div>
    </section>
  );
}
