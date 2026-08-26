import Image from "next/image";

export default function LoadingOverlay() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex min-h-dvh items-center justify-center overflow-hidden bg-[#15244d]"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(49,182,223,0.18),transparent_42%)]" />
      <div className="relative flex items-center justify-center">
        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-white/10 p-[5px] shadow-[0_18px_55px_rgba(0,0,0,0.28)] sm:h-28 sm:w-28">
          <div
            className="absolute inset-0 animate-spin rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(29,195,179,0.2)_80deg,#1dc3b3_190deg,#59a9ee_285deg,transparent_360deg)]"
            aria-hidden="true"
          />
          <div className="relative z-10 flex h-[82px] w-[82px] items-center justify-center rounded-full bg-white shadow-inner sm:h-[98px] sm:w-[98px]">
            <Image
              src="/favicon.ico"
              alt="Insights Opinion"
              width={48}
              height={48}
              className="h-11 w-11 object-contain sm:h-12 sm:w-12"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}
