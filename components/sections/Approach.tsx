"use client";

import { motion, useReducedMotion } from "framer-motion";
import { protocolSteps } from "@/lib/data";

export function Approach() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="approach" className="bg-[#050505] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mb-4 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
        <span className="h-0.5 w-6 bg-brand" />
        How We Work
      </div>
      <h2 className="mb-4 text-center font-display text-[clamp(30px,11vw,60px)] leading-none tracking-[0.02em] sm:text-[clamp(48px,6vw,80px)]">
        THE PROSCALE <span className="text-brand">PROTOCOL</span>
      </h2>
      <p className="mx-auto mb-16 max-w-[560px] text-center text-[15px] leading-[1.7] text-muted">
        Diagnose. Build. Ship. Compound.
      </p>

      <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {protocolSteps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={reduceMotion ? false : { opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: reduceMotion ? 0 : i * 0.1 }}
            className="group relative border border-[#1a1a1a] bg-black transition-colors hover:border-[#2a2a2a]"
          >
            {i < protocolSteps.length - 1 && (
              <span className="protocol-arrow absolute left-full top-1/2 z-10 hidden h-[54px] w-[68px] -translate-y-1/2 lg:block" />
            )}
            <div className="flex min-h-[340px] flex-col items-center justify-center px-8 py-10 text-center">
              <div className="mb-10 font-display text-4xl leading-none tracking-[0.02em] text-[rgba(232,21,42,0.30)] transition-all duration-300 ease-out group-hover:scale-[1.07] group-hover:text-brand group-hover:[text-shadow:0_0_24px_rgba(232,21,42,0.65),0_0_48px_rgba(232,21,42,0.35)]">
                {step.num}
              </div>
              <div className="mb-8 text-sm leading-[1.75] text-white/70">{step.desc}</div>
              <div className="font-display text-4xl tracking-[0.05em] text-white">{step.title}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="border-l-[3px] border-brand bg-[rgba(232,21,42,0.03)] px-6 py-10 sm:px-12"
      >
        <div className="mb-4 font-display text-[clamp(18px,6vw,26px)] leading-[1.3] text-white sm:text-[clamp(22px,2.5vw,32px)]">
          &quot;Most agencies ship first and think later. We think first. The wrong message never
          gets better <span className="text-brand">with a bigger budget.</span>&quot;
        </div>
        <div className="text-[13px] tracking-[0.05em] text-muted">Founders of ProScaleMEDIA</div>
      </motion.div>
    </section>
  );
}
