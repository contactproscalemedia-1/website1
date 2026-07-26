import { CtaParticles } from "@/components/CtaParticles";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/icons";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-24 text-center sm:px-8 sm:py-32 lg:py-[140px]"
    >
      <div
        className="cta-bg-grid pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(232,21,42,0.55) 0%, rgba(232,21,42,0.2) 35%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <CtaParticles />

      <div className="relative z-[2] mx-auto max-w-3xl">
        <div className="cta-badge mb-8 inline-flex items-center gap-2 border border-[rgba(232,21,42,0.4)] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
          <span className="h-[7px] w-[7px] animate-pulse-dot rounded-full bg-brand motion-reduce:animate-none" />
          Limited Spots Available
        </div>
        <h2 className="mb-7 font-display text-[clamp(56px,16vw,100px)] leading-[0.88] tracking-[0.02em] text-white sm:text-[clamp(80px,12vw,160px)]">
          READY TO
          <br />
          <span
            className="cta-title-red block"
            style={{ color: "transparent", WebkitTextStroke: "3px #e8152a" }}
          >
            SCALE?
          </span>
        </h2>
        <p className="mb-10 text-base leading-[1.8] text-muted sm:mb-12">
          We take four clients a quarter. Not more.
          <br className="hidden sm:block" /> If we&apos;re a fit, our calendar is here.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
          <a
            href="mailto:hello@pro-scalemedia.com"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-10 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white no-underline shadow-[0_8px_32px_rgba(232,21,42,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(232,21,42,0.6)] sm:w-auto"
          >
            <span>Book a 15-Minute Call</span>
            <ArrowRightIcon className="h-[18px] w-[18px]" />
          </a>
          <a
            href="https://wa.me/971000000000"
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/25 px-10 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-white sm:w-auto"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
