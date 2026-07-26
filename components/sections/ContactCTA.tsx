import { CtaParticles } from "@/components/CtaParticles";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/icons";

export function ContactCTA() {
  return (
    <section
      id="contact"
      className="contact-cinema relative overflow-hidden border-t border-white/10 px-5 py-28 text-center sm:px-8 sm:py-40 lg:py-[190px]"
    >
      <div
        className="cta-bg-grid pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 52% at 50% 112%, rgba(232,21,42,0.28) 0%, rgba(232,21,42,0.08) 38%, transparent 72%)",
        }}
        aria-hidden="true"
      />
      <CtaParticles />

      <div className="relative z-[2] mx-auto max-w-3xl">
        <div className="cta-badge mb-8 inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand">
          <span className="h-1 w-1 animate-pulse-dot rounded-full bg-brand motion-reduce:animate-none" />
          Selective by design
        </div>
        <h2 className="mb-8 font-display text-[clamp(56px,16vw,100px)] leading-[0.88] tracking-[0.02em] text-white sm:text-[clamp(80px,12vw,160px)]">
          SET THE
          <br />
          <span
            className="block"
            style={{ color: "transparent", WebkitTextStroke: "3px #e8152a" }}
          >
            STANDARD.
          </span>
        </h2>
        <p className="mb-12 text-base leading-[1.8] text-muted sm:mb-14">
          Four mandates per quarter. Senior attention, protected.
          <br className="hidden sm:block" /> If the ambition is mutual, begin here.
        </p>

        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-4">
          <a
            href="mailto:hello@pro-scalemedia.com"
            className="luxury-button luxury-button--solid inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand px-10 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white no-underline sm:w-auto"
          >
            <span>Request a Private Consultation</span>
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
