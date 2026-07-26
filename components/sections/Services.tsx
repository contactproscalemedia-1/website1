import { services } from "@/lib/data";
import { ArrowRightIcon } from "@/components/icons";

export function Services() {
  return (
    <section id="services" className="services-light bg-[#f0eee9] px-5 py-28 text-black sm:px-8 sm:py-36 lg:px-14 lg:py-48">
      <div className="mb-16 grid gap-8 border-b border-black/15 pb-12 lg:grid-cols-[1fr_1.1fr] lg:items-end">
        <div>
          <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand">
            <span className="h-px w-8 bg-brand" />
            Capabilities / 01—05
          </div>
          <h2 className="font-display text-[clamp(58px,9vw,132px)] leading-[0.78] tracking-[-0.01em]">
            BUILT TO
            <br />
            <span className="text-brand">COMPOUND.</span>
          </h2>
        </div>
        <p className="max-w-xl text-[15px] leading-[1.8] text-black/55 lg:justify-self-end">
          Strategy, creative, media and technology operated as one revenue system. No disconnected
          retainers. No activity disguised as progress.
        </p>
      </div>

      <div className="service-index border-t border-black/15">
        {services.map((service) => (
          <article
            key={service.num}
            className="service-row group grid gap-6 border-b border-black/15 py-8 transition-colors duration-500 sm:grid-cols-[80px_1fr] lg:grid-cols-[100px_minmax(260px,.8fr)_1.2fr_40px] lg:items-center lg:py-11"
          >
            <span className="font-display text-2xl text-black/25 transition-colors duration-500 group-hover:text-brand">
              {service.num}
            </span>
            <h3 className="font-display text-[clamp(32px,4vw,58px)] leading-none tracking-[0.02em] text-black">
              {service.name}
            </h3>
            <p className="max-w-2xl text-[13px] leading-[1.8] text-black/48 transition-colors duration-500 group-hover:text-black/75 sm:col-start-2 lg:col-start-auto">
              {service.desc}
            </p>
            <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-black/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand group-hover:text-white lg:flex">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </article>
        ))}
      </div>

      <div className="mt-14 flex flex-col gap-6 border-l border-brand pl-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-black/40">One accountable system</p>
          <p className="font-display text-3xl tracking-[0.02em]">FIVE DISCIPLINES. ONE STANDARD.</p>
        </div>
        <a href="#contact" className="luxury-button w-fit rounded-full border border-black/25 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em]">
          Discuss the mandate
        </a>
      </div>
    </section>
  );
}
