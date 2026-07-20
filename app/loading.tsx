export default function Loading() {
  return (
    <div
      className="fixed inset-x-0 top-18 z-[90] h-1 overflow-hidden bg-[#16325b]/20 lg:top-24"
      role="status"
      aria-label="Loading page"
    >
      <div className="h-full w-1/3 animate-[route-loading_1s_ease-in-out_infinite] bg-gradient-to-r from-[#15c9a8] to-[#59a9ee]" />
      <style>{`
        @keyframes route-loading {
          0% { transform: translateX(-110%); }
          100% { transform: translateX(410%); }
        }
      `}</style>
    </div>
  );
}
