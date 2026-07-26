import { services } from "@/lib/data";
import { ArrowRightIcon } from "@/components/icons";

const spanClasses = [
  "sm:col-span-3 lg:col-span-2",
  "sm:col-span-3 lg:col-span-2",
  "sm:col-span-6 lg:col-span-2",
  "sm:col-span-3 lg:col-span-3",
  "sm:col-span-3 lg:col-span-3",
];

export function Services() {
  return (
    <section id="services" className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
        <span className="h-0.5 w-6 bg-brand" />
        What We Build
      </div>
      <h2 className="mb-12 font-display text-[clamp(32px,13vw,60px)] leading-none tracking-[0.02em] sm:mb-16 sm:text-[clamp(48px,6vw,80px)]">
        WHAT WE <span className="text-brand">HANDLE</span>
      </h2>

      <div className="grid grid-cols-1 gap-px border border-white/10 bg-white/10 sm:grid-cols-6">
        {services.map((service, i) => (
          <div
            key={service.num}
            className={`group relative flex flex-col overflow-hidden bg-black p-8 transition-colors duration-200 hover:bg-[#111111] sm:col-span-3 ${spanClasses[i]}`}
          >
            <span className="mb-4 block font-display text-4xl leading-none text-[rgba(232,21,42,0.30)] transition-all duration-300 ease-out group-hover:scale-[1.07] group-hover:text-brand group-hover:[text-shadow:0_0_24px_rgba(232,21,42,0.65),0_0_48px_rgba(232,21,42,0.35)]">
              {service.num}
            </span>
            <div className="mb-3 text-[17px] font-bold text-white">{service.name}</div>
            <div className="mb-5 text-[13px] leading-[1.75] text-muted">{service.desc}</div>
            <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center sm:mt-12">
        <div className="services-cta-card relative flex w-full max-w-[1040px] flex-col items-start gap-6 overflow-hidden border border-white/10 bg-gradient-to-br from-[rgba(232,21,42,0.06)] to-transparent p-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:p-11">
          <div className="cta-scan pointer-events-none absolute inset-0 z-0 overflow-hidden" />
          <div className="cta-particles pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {[8, 22, 38, 55, 70, 85, 95].map((left, i) => (
              <span
                key={left}
                className="cta-particle"
                style={{ left: `${left}%`, animationDelay: `${[0, 1.1, 2.3, 0.6, 3.1, 1.8, 4][i]}s` }}
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="mb-2.5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-white/55">
              <span className="cta-dot-pulse relative h-[7px] w-[7px] shrink-0 rounded-full bg-brand" />
              The Complete Stack
            </div>
            <div className="max-w-[480px] font-display text-[clamp(20px,7vw,28px)] leading-[1.15] tracking-[0.01em] text-white sm:text-[clamp(24px,3vw,34px)]">
              Five Services.{" "}
              <span className="glitch-text" data-text="One Engine.">
                One Engine.
              </span>
            </div>
          </div>

          <a
            href="/services"
            className="relative z-10 flex w-full shrink-0 items-center justify-between gap-3.5 border border-white/25 py-4 pl-7 pr-3.5 text-xs font-bold uppercase tracking-[0.1em] text-white no-underline transition-[border-color,box-shadow] duration-300 hover:border-brand hover:shadow-[0_0_28px_rgba(232,21,42,0.35)] sm:w-auto"
          >
            See All Services
            <span className="cta-link-icon relative flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-brand transition-transform duration-300 ease-out group-hover:rotate-45">
              <ArrowRightIcon className="h-4 w-4 stroke-white" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
