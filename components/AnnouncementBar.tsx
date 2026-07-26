export function AnnouncementBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[101] border-b border-white/[0.08] bg-[#1a1a1a] px-4 py-2.5 text-center sm:px-6">
      <p className="text-xs font-semibold tracking-[0.01em] text-white sm:text-[13px]">
        Two spots open this quarter.{" "}
        <a href="#contact" className="text-brand underline underline-offset-2 hover:opacity-80">
          Book the call
        </a>
      </p>
    </div>
  );
}
