"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { CTAGroup } from "@/components/ui/cta-group";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

const headline = ["PRESENCE", "ISN'T", "PERFORMANCE."];
const supportingLines = ["Attention is visible.", "Business impact is measurable."];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setAnimationComplete(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 24) {
        setAnimationComplete(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    const timeout = window.setTimeout(() => {
      setAnimationComplete(true);
    }, 1400);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(timeout);
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden bg-background px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(232,21,42,0.16),transparent_36%)]" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 hidden w-[36%] border-l border-white/10 lg:block" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" aria-hidden="true" />

      <Container size="xl" className="relative z-10">
        <div className="max-w-4xl">
          <Eyebrow className="mb-6">ProScaleMEDIA</Eyebrow>

          <Heading as="h1" variant="display" className="mb-8 text-display-xl leading-[0.86] sm:mb-10">
            {headline.map((word, index) => (
              <motion.span
                key={word}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                animate={animationComplete || prefersReducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.6, delay: prefersReducedMotion ? 0 : index * 0.08, ease: "var(--ease-verdict)" }}
                className="block"
              >
                {word}
              </motion.span>
            ))}
          </Heading>

          <div className="max-w-144 space-y-6">
            <Text size="bodyLarge" tone="secondary" className="max-w-128">
              {supportingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </Text>

            <CTAGroup>
              <Button asChild variant="primary" className="min-h-[44px] px-6 py-3 text-[0.75rem] sm:px-8">
                <a href="#contact">Examine the evidence</a>
              </Button>
            </CTAGroup>
          </div>
        </div>
      </Container>
    </section>
  );
}
