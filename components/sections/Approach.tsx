"use client";

import { motion, useReducedMotion } from "framer-motion";
import { protocolSteps } from "@/lib/data";

export function Approach() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="approach" className="protocol-light bg-[#f0eee9] px-5 py-28 text-black sm:px-8 sm:py-36 lg:px-14 lg:py-48">
      <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
        <div className="lg:sticky lg:top-40 lg:h-fit">
          <div className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand">
            <span className="h-px w-8 bg-brand" />
            The operating system
          </div>
          <h2 className="font-display text-[clamp(58px,8vw,116px)] leading-[0.82]">
            THE
            <br />
            PROSCALE
            <br />
            <span className="text-brand">PROTOCOL.</span>
          </h2>
          <p className="mt-8 max-w-sm text-sm leading-[1.8] text-black/50">
            Four decisions. One direction. Every stage exists to remove ambiguity before capital is deployed.
          </p>
        </div>

        <div className="border-t border-black/15">
          {protocolSteps.map((step, i) => (
            <motion.article
              key={step.num}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: .7, delay: i * .06 }}
              className="group grid gap-6 border-b border-black/15 py-10 sm:grid-cols-[70px_180px_1fr] sm:items-start lg:py-14"
            >
              <span className="font-display text-2xl text-brand">{step.num}</span>
              <h3 className="font-display text-[38px] leading-none tracking-[0.04em]">{step.title}</h3>
              <p className="text-sm leading-[1.85] text-black/50 transition-colors group-hover:text-black/80">{step.desc}</p>
            </motion.article>
          ))}
          <blockquote className="mt-14 border-l border-brand py-2 pl-7 font-display text-[clamp(28px,4vw,52px)] leading-[1.05]">
            THE WRONG MESSAGE NEVER GETS BETTER
            <span className="text-brand"> WITH A BIGGER BUDGET.</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
