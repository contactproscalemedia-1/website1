"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

type Particle = {
  id: number;
  size: number;
  left: number;
  duration: number;
  delay: number;
};

export function CtaParticles({ count = 16 }: { count?: number }) {
  const reduceMotion = useReducedMotion();
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (reduceMotion) return;
    // Randomized, client-only decoration: generated post-mount to avoid an
    // SSR/client markup mismatch, since Math.random() can't run during render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        size: Math.random() * 6 + 4,
        left: Math.random() * 100,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 8,
      }))
    );
  }, [count, reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="rising-particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
