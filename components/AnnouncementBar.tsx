export function AnnouncementBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[101] border-b border-white/[0.07] bg-[#090909] px-4 py-2.5 text-center sm:px-6">
      <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/65 sm:text-[11px]">
        Independent growth partner · Dubai, UAE{" "}
        <a href="#contact" className="ml-2 text-white underline decoration-brand underline-offset-4 transition-colors hover:text-brand">
          Q3 mandate requests
        </a>
      </p>
    </div>
  );
}
