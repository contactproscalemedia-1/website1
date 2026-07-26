"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { caseStudies } from "@/lib/data";

const AUTOPLAY_MS = 6200;

function getPos(cardIdx: number, active: number, total: number) {
  const diff = (cardIdx - active + total) % total;
  if (diff === 0) return 1;
  if (diff === 1) return 2;
  if (diff === total - 1) return 0;
  return 3;
}

const posStyles: Record<number, { x: number; scale: number; rotateY: number; opacity: number; z: number; filter: string }> = {
  1: { x: 0, scale: 1, rotateY: 0, opacity: 1, z: 3, filter: "brightness(1)" },
  0: { x: -390, scale: 0.78, rotateY: 8, opacity: 0.38, z: 2, filter: "brightness(0.55)" },
  2: { x: 390, scale: 0.78, rotateY: -8, opacity: 0.38, z: 2, filter: "brightness(0.55)" },
  3: { x: 0, scale: 0.5, rotateY: 0, opacity: 0, z: 1, filter: "brightness(1)" },
};

export function CaseStudies() {
  const total = caseStudies.length;
  const [cur, setCur] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);

  const update = useCallback(
    (next: number) => setCur(((next % total) + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = setInterval(() => update(cur + 1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [cur, paused, reduceMotion, update]);

  return (
    <section id="work" className="cases-section relative overflow-hidden bg-surface px-5 pb-20 pt-24 sm:px-8 sm:pt-32 lg:px-14 lg:pt-40">
      <div className="cases-index" aria-hidden="true">01 — 12</div>
      <div className="mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
        <span className="h-0.5 w-6 bg-brand" />
        Selected Work
      </div>
      <h2 className="mb-12 font-display text-[clamp(32px,13vw,60px)] leading-none tracking-[0.02em] sm:mb-16 sm:text-[clamp(48px,6vw,80px)]">
        CASE <span className="text-brand">STUDIES</span>
      </h2>

      {/* Desktop coverflow */}
      <div className="hidden items-center gap-5 lg:flex">
        <button
          type="button"
          aria-label="Previous case study"
          onClick={() => update(cur - 1)}
          className="carousel-arrow carousel-arrow--prev"
        />
        <div
          ref={stageRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="case-stage relative flex h-[720px] flex-1 items-center justify-center"
          style={{ perspective: 1200 }}
        >
          {caseStudies.map((c, i) => {
            const pos = getPos(i, cur, total);
            const style = posStyles[pos];
            const clickable = pos !== 1 && pos !== 3;
            return (
              <motion.article
                key={c.name + i}
                onClick={() => clickable && update(i)}
                onKeyDown={(e) => {
                  if (clickable && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                    update(i);
                  }
                }}
                role={clickable ? "button" : undefined}
                tabIndex={clickable ? 0 : -1}
                aria-label={clickable ? `Show case study: ${c.name}` : undefined}
                aria-hidden={pos === 3}
                animate={{
                  x: style.x,
                  scale: style.scale,
                  rotateY: style.rotateY,
                  opacity: style.opacity,
                  filter: style.filter,
                }}
                transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.4, 0, 0.2, 1] }}
                style={{ zIndex: style.z, pointerEvents: pos === 3 ? "none" : "auto" }}
                className={`case-card absolute w-[390px] overflow-hidden border bg-black backface-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                  clickable ? "cursor-pointer" : ""
                } ${
                  pos === 1
                    ? "border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.75)]"
                    : "border-white/10"
                }`}
              >
                <div className="case-image aspect-square w-full overflow-hidden border-b border-white/10 bg-[#0a0a0a]">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    width={360}
                    height={360}
                    className="h-full w-full object-contain transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>
                <div className="px-6 pb-6 pt-5">
                  <span className="inline-block text-[9px] font-bold uppercase tracking-[0.2em] text-brand">
                    {c.tag}
                  </span>
                  <div className="my-2.5 font-display text-[28px] leading-none tracking-[0.02em] text-white">
                    {c.name}
                  </div>
                  <p className="mb-4 text-xs leading-[1.65] text-white/55">{c.desc}</p>
                  <div className="flex gap-6">
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <div className="font-display text-[28px] leading-none text-brand">{s.val}</div>
                        <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-muted">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        <button
          type="button"
          aria-label="Next case study"
          onClick={() => update(cur + 1)}
          className="carousel-arrow"
        />
      </div>

      <div className="mt-4 mb-2 hidden justify-center gap-2.5 lg:flex">
        {caseStudies.map((c, i) => (
          <button
            key={c.name + i}
            type="button"
            aria-label={`Go to case study ${i + 1}`}
            onClick={() => update(i)}
            className={`h-2.5 w-2.5 rounded-full transition-transform ${
              i === cur ? "scale-[1.3] bg-brand" : "bg-white/35"
            }`}
          />
        ))}
      </div>

      {/* Mobile / tablet: scroll-snap list */}
      <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:hidden">
        {caseStudies.map((c) => (
          <article
            key={c.name + c.desc}
            className="w-[85vw] shrink-0 snap-center overflow-hidden rounded-xl border border-white/10 bg-black sm:w-[420px]"
          >
            <div className="aspect-square w-full overflow-hidden border-b-[3px] border-brand bg-[#0a0a0a]">
              <Image
                src={c.img}
                alt={c.alt}
                width={420}
                height={420}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="px-5 pb-6 pt-5">
              <span className="inline-block border border-[rgba(232,21,42,0.3)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-brand">
                {c.tag}
              </span>
              <div className="my-2.5 font-display text-2xl leading-none tracking-[0.02em] text-white">
                {c.name}
              </div>
              <p className="mb-4 text-xs leading-[1.65] text-white/55">{c.desc}</p>
              <div className="flex gap-6">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl leading-none text-brand">{s.val}</div>
                    <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-muted">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-start gap-8 border-t border-white/10 pt-10 sm:mt-20 sm:flex-row sm:items-center sm:gap-12">
        <div className="flex-1">
          <div className="mb-2.5 font-display text-3xl text-white sm:text-4xl">Want to See More?</div>
          <div className="text-sm leading-[1.7] text-muted sm:text-[15px]">
            Restaurants, shisha lounges, fitness brands, gyms, clinics, finance, real estate,
            brokers. Different verticals, one engine.
            <br className="hidden sm:block" />
            Numbers we can point to, in every category.
          </div>
        </div>
        <div className="hidden h-24 w-px shrink-0 bg-white/10 sm:block" />
        <div className="flex w-full shrink-0 items-center justify-center sm:w-auto">
          <a
            href="#contact"
            className="w-full rounded-full bg-brand px-9 py-4 text-center text-xs font-bold uppercase tracking-[0.15em] text-white no-underline transition-opacity hover:opacity-85 sm:w-auto"
          >
            Discover More Case Studies →
          </a>
        </div>
      </div>
    </section>
  );
}
