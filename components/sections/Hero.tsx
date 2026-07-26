import Image from "next/image";
import { StatCounter } from "@/components/StatCounter";
import { heroStats } from "@/lib/data";

export function Hero() {
  return (
    <section className="hero-stage relative flex min-h-screen flex-col justify-center overflow-hidden px-5 pb-0 pt-[150px] sm:px-8 sm:pt-[170px] lg:px-14">
      <div className="site-grain" aria-hidden="true" />
      <div className="hero-light" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(232,21,42,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[56%] overflow-hidden sm:block"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.92) 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 25%, rgba(0,0,0,0.8) 62%, rgba(0,0,0,0.92) 100%)",
        }}
      >
        <video
          className="hero-film absolute inset-0 h-full w-full object-cover opacity-90"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-burj-khalifa.png"
          aria-hidden="true"
        >
          <source src="/images/hero-burj-khalifa.mp4" type="video/mp4" />
        </video>
        <Image
          src="/images/hero-burj-khalifa.png"
          alt=""
          fill
          priority
          sizes="56vw"
          className="hero-film-fallback object-cover opacity-90"
          style={{ objectPosition: "center 75%" }}
        />
      </div>

      <div className="hero-kicker relative z-10 mb-6 inline-flex w-fit items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60 sm:mb-8">
        <span className="h-1 w-1 animate-pulse-dot rounded-full bg-brand motion-reduce:animate-none" />
        Performance Marketing for Luxury Brands
      </div>

      <h1 className="hero-heading relative z-10 mb-8 max-w-full font-display text-[clamp(58px,16vw,96px)] leading-[0.82] tracking-[0.01em] sm:mb-10 sm:max-w-[74%] sm:text-[clamp(76px,10vw,154px)]">
        <span>SCALE IS</span>
        <br />
        <span>A <em className="not-italic text-brand">NUMBER</em>.</span>
        <br />
        <span>NOT AN ADJECTIVE.</span>
      </h1>

      <div className="relative z-10 max-w-[460px]">
        <p className="text-sm leading-[1.8] text-white/75">
          <strong className="font-semibold text-white">
            Two founders. Real numbers. No exceptions.
          </strong>
          <br />
          We build systems that produce reservations, appointments, and qualified leads on a
          predictable weekly cadence. Not activity reports dressed up as strategy.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
          <a
            href="#contact"
            className="luxury-button luxury-button--solid rounded-full bg-brand px-9 py-4 text-xs font-bold uppercase tracking-[0.15em] text-white no-underline"
          >
            Book a 15-Minute Call
          </a>
          <a
            href="#work"
            className="luxury-button rounded-full border border-white/20 px-9 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-white no-underline"
          >
            See the Numbers
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-16 flex flex-col gap-8 border-t border-white/10 pt-6 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <p className="max-w-md text-sm font-medium leading-snug tracking-[0.01em] text-white/50">
          Presence is what agencies sell when they can&apos;t sell results.
        </p>
        <div className="grid grid-cols-2 gap-y-8 sm:flex sm:items-center sm:gap-0">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`px-5 text-center first:pl-0 sm:px-8 ${
                i === 0 ? "border-l-0" : "border-l border-white/10"
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
