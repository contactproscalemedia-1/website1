import Image from "next/image";
import { StatCounter } from "@/components/StatCounter";
import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-0 pt-[130px] sm:px-8 sm:pt-[148px] lg:px-12">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(232,21,42,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[52%] overflow-hidden sm:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.95) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 20%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0.95) 100%)",
        }}
      >
        <Image
          src="/images/hero-city.webp"
          alt=""
          fill
          priority
          sizes="52vw"
          className="object-cover opacity-95"
          style={{ objectPosition: "center 75%" }}
        />
      </div>

      <div
        className="relative z-10 mb-3.5 inline-flex w-fit items-center gap-2 border border-[rgba(232,21,42,0.4)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-brand"
      >
        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-brand motion-reduce:animate-none" />
        Performance Marketing for Luxury Brands
      </div>

      <h1 className="relative z-10 mb-4 max-w-full font-display text-[clamp(48px,15vw,90px)] leading-[0.88] tracking-[0.02em] sm:max-w-[75%] sm:text-[clamp(64px,9.5vw,140px)]">
        SCALE IS
        <br />
        A <span className="text-brand">NUMBER</span>.
        <br />
        NOT AN ADJECTIVE.
      </h1>

      <div className="relative z-10 mb-0 max-w-[500px]">
        <p className="text-sm leading-[1.7] text-white/80">
          <strong className="font-semibold text-white">
            Two founders. Real numbers. No exceptions.
          </strong>
          <br />
          We build systems that produce reservations, appointments, and qualified leads on a
          predictable weekly cadence. Not activity reports dressed up as strategy.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="bg-brand px-8 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-white no-underline transition-opacity hover:opacity-85"
          >
            Book a 15-Minute Call
          </a>
          <a
            href="#work"
            className="border border-white/25 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-white no-underline transition-colors hover:border-white"
          >
            See the Numbers
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-8 flex flex-col gap-6 border-t border-white/10 bg-gradient-to-r from-black/70 via-black/50 to-black/70 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="max-w-md text-base font-extrabold leading-snug tracking-[0.01em] text-brand sm:whitespace-nowrap">
          Presence is what agencies sell when they can&apos;t sell results.
        </p>
        <div className="grid grid-cols-2 gap-y-6 sm:flex sm:items-center sm:gap-0">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 text-center first:border-l-0 sm:px-7 ${
                i === 0 ? "border-l-0" : "border-l border-white/20"
              }`}
            >
              <StatCounter
                target={stat.target}
                prefix={stat.prefix}
                suffix={stat.suffix}
                delay={i * 150}
              />
              <div className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
    </section>
  );
}
