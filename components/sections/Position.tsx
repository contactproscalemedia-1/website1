export function Position() {
  return (
    <section id="position" className="position-editorial position-red relative overflow-hidden bg-brand px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-[180px]">
      <div className="position-watermark" aria-hidden="true">STANDARD</div>
      <div className="mx-auto grid max-w-[1360px] items-start gap-12 lg:grid-cols-[minmax(320px,480px)_minmax(0,720px)] lg:justify-between lg:gap-24">
        <div className="flex flex-col">
          <div className="mb-3 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
            <span className="h-0.5 w-6 bg-brand" />
            The Position
          </div>
          <h2 className="mb-8 font-display text-[clamp(32px,13vw,60px)] leading-none tracking-[0.02em] text-white sm:text-[clamp(48px,6vw,80px)]">
            WE BELIEVE<span className="text-black">.</span>
          </h2>
          <div className="font-display text-[clamp(42px,10vw,64px)] leading-[.9] tracking-[0.01em] text-white sm:text-[clamp(58px,6vw,92px)]">
            RESTRAINT
            <br />
            EARNS
            <br />
            <span className="text-black">ATTENTION.</span>
          </div>
        </div>
        <div>
          <p className="mb-7 text-lg font-medium leading-[1.5] text-white sm:text-xl">
            Luxury brands deserve marketing that respects them.
          </p>
          <p className="mb-7 text-base leading-[1.8] text-white/75 sm:text-[17px]">
            Not activity reports dressed up as strategy. Not vanity metrics from an agency that
            thinks reach equals results. Not the same generic playbook every marketing manager in
            Dubai has seen twelve times.
          </p>
          <p className="mb-7 text-base leading-[1.8] text-white/75 sm:text-[17px]">
            The best marketing looks like your best guest. Considered. Restrained. Unforgettable.
            Brand and performance are not in tension. They are the same discipline, executed at
            different depths.
          </p>
          <p className="mb-7 text-base leading-[1.8] text-white/75 sm:text-[17px]">
            We work with owners who take their category seriously. We build systems that produce
            revenue on a schedule. We say no to work that doesn&apos;t fit.
          </p>
          <div className="mt-10 border-t border-black/20 pt-8 font-display text-[clamp(24px,8vw,36px)] leading-[1.15] tracking-[0.02em] text-white sm:text-[clamp(28px,3vw,42px)]">
            WE&apos;RE NOT FOR EVERYONE<span className="text-black">.</span>
            <br />
            THAT&apos;S THE POINT<span className="text-black">.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
