"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { InstagramIcon, LinkedInIcon } from "./icons";

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="premium-nav fixed inset-x-0 top-[35px] z-[100] flex h-16 items-center justify-between border-b border-white/[0.08] px-5 sm:h-[76px] sm:px-8 lg:px-14">
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="group flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/70 transition-colors hover:text-white"
        >
          <span className="relative block h-3 w-5 shrink-0">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${
                open ? "translate-y-[5px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[5px] h-px w-full bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[10px] h-px w-full bg-current transition-transform ${
                open ? "-translate-y-[5px] -rotate-45" : ""
              }`}
            />
          </span>
          <span className="hidden sm:inline">{open ? "Close index" : "Explore"}</span>
        </button>

        <a
          href="#"
          aria-label="ProScaleMEDIA Home"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Image
            src="/images/brand/proscalemedia-logo.png"
            alt="ProScaleMEDIA"
            height={44}
            width={165}
            style={{ width: "auto" }}
            className="h-8 sm:h-10"
            priority
          />
        </a>

        <a
          href="#contact"
          className="rounded-full border border-white/25 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-white no-underline transition-colors hover:border-brand hover:text-brand sm:px-6 sm:py-3"
        >
          Private Consultation
        </a>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="menu-surface fixed inset-0 z-[99] flex flex-col justify-center bg-black px-6 pt-[90px] sm:px-12"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`menu-link block py-1 font-display text-[clamp(48px,9vw,108px)] leading-[0.95] tracking-[0.01em] no-underline transition-colors hover:text-brand ${
                      link.active ? "text-brand" : "text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="w-fit rounded-full bg-brand px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white no-underline transition-opacity hover:opacity-85"
              >
                Book a Call
              </a>
              <div className="flex items-center gap-1">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center text-white hover:text-brand"
                >
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center text-white hover:text-brand"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
