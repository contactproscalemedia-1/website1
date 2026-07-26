"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function StatCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
  delay = 0,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    let raf: number;
    let start: number | null = null;
    const timeout = setTimeout(() => {
      function step(timestamp: number) {
        if (start === null) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setValue(Math.floor(ease * target));
        if (progress < 1) raf = requestAnimationFrame(step);
        else setValue(target);
      }
      raf = requestAnimationFrame(step);
    }, delay);
    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [inView, reduceMotion, target, duration, delay]);

  return (
    <div ref={ref} className="font-display text-5xl leading-none text-white sm:text-6xl">
      {prefix}
      {value}
      {suffix}
    </div>
  );
}
