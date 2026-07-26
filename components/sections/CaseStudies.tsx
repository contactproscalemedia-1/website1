"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { caseStudies } from "@/lib/data";

const AUTOPLAY_MS = 7000;

export function CaseStudies() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const total = caseStudies.length;
  const current = caseStudies[active];

  const move = useCallback(
    (direction: number) => setActive((index) => (index + direction + total) % total),
    [total]
  );

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => move(1), AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [move, paused, reduceMotion]);

  return (
    <section id="work" className="case-dossier relative overflow-hidden bg-[#080808] px-5 py-28 sm:px-8 sm:py-36 lg:px-14 lg:py-48">
      <div className="mb-14 flex items-end justify-between border-b border-white/10 pb-10">
        <div>
          <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand">
            <span className="h-px w-8 bg-brand" />
            Evidence, not promises
          </div>
          <h2 className="font-display text-[clamp(58px,9vw,132px)] leading-[0.78]">
            SELECTED
            <br />
            <span className="text-brand">OUTCOMES.</span>
          </h2>
        </div>
        <span className="hidden text-[10px] tracking-[.25em] text-white/30 sm:block">
          {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
      </div>

      <div
        className="grid min-h-[650px] overflow-hidden border border-white/10 bg-black lg:grid-cols-[1.18fr_.82fr]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative min-h-[400px] overflow-hidden bg-[#0d0d0d] lg:min-h-[650px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.img}
              initial={reduceMotion ? false : { opacity: 0, scale: 1.035 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              <Image src={current.img} alt={current.alt} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-contain p-4 sm:p-10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-white/[.025]" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute bottom-6 left-6 text-[9px] uppercase tracking-[.24em] text-white/40 sm:bottom-8 sm:left-8">
            ProScaleMEDIA / Case file {String(active + 1).padStart(2, "0")}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.article
            key={current.name + active}
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: .55 }}
            className="flex flex-col justify-between p-7 sm:p-10 lg:p-12"
          >
            <div>
              <p className="mb-10 text-[9px] font-bold uppercase tracking-[.22em] text-brand">{current.tag}</p>
              <h3 className="mb-6 font-display text-[clamp(42px,6vw,76px)] leading-[.92] tracking-[.01em]">{current.name}</h3>
              <p className="max-w-md text-sm leading-[1.85] text-white/48">{current.desc}</p>
            </div>
            <div>
              <div className="my-10 grid grid-cols-2 border-y border-white/10">
                {current.stats.map((stat) => (
                  <div key={stat.label} className="border-r border-white/10 py-7 pr-5 last:border-r-0 last:pl-6">
                    <div className="font-display text-[clamp(36px,4vw,58px)] leading-none text-brand">{stat.val}</div>
                    <div className="mt-2 text-[8px] font-semibold uppercase tracking-[.18em] text-white/35">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <button onClick={() => move(-1)} className="text-[10px] uppercase tracking-[.2em] text-white/45 transition-colors hover:text-white" aria-label="Previous case study">← Previous</button>
                <div className="flex gap-1.5">
                  {caseStudies.map((item, index) => (
                    <button key={item.name + index} onClick={() => setActive(index)} aria-label={`Show case study ${index + 1}`} className={`h-px transition-all ${index === active ? "w-7 bg-brand" : "w-2 bg-white/25"}`} />
                  ))}
                </div>
                <button onClick={() => move(1)} className="text-[10px] uppercase tracking-[.2em] text-white/45 transition-colors hover:text-white" aria-label="Next case study">Next →</button>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}
