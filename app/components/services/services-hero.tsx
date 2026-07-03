export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#172b57]">
      <div className="absolute inset-0 bg-[url('/quality/research-services.png')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-linear-to-r from-[#172b57] via-[#172b57]/90 to-[#1dc3b3]/35" />

      <div className="relative mx-auto flex min-h-[300px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:min-h-[390px] lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#59d8cc]">
            Research solutions
          </p>
          <h1 className="site-page-title text-white">Our Services</h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Explore our quantitative, qualitative, and research support
            capabilities. Choose a service group to see every available
            solution.
          </p>
        </div>
      </div>
    </section>
  );
}
