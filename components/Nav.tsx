"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/data";
import { InstagramIcon, LinkedInIcon } from "./icons";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-[38px] z-[100] flex h-16 items-center justify-between gap-4 border-b border-white/10 bg-black px-4 sm:top-[35px] sm:h-[68px] sm:px-6 lg:px-10">
      <a href="#" aria-label="ProScaleMEDIA Home" className="shrink-0">
        <Image
          src="/images/proscalemedia-logo.png"
          alt="ProScaleMEDIA"
          height={44}
          width={165}
          style={{ width: "auto" }}
          className="h-9 sm:h-11"
          priority
        />
      </a>

      <ul className="hidden items-center gap-8 lg:flex">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className={`border-b-2 pb-1 text-sm font-medium no-underline transition-colors hover:text-brand ${
                link.active ? "border-brand text-brand" : "border-transparent text-white"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="hidden items-center gap-4 lg:flex">
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Instagram" className="text-white transition-colors hover:text-brand">
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white transition-colors hover:text-brand">
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
        <a
          href="#contact"
          className="whitespace-nowrap rounded-full bg-brand px-7 py-3 text-sm font-bold text-white no-underline transition-opacity hover:opacity-85"
        >
          Book a Call
        </a>
      </div>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center border border-white/35 lg:hidden"
      >
        <span className="relative block h-4 w-5">
          <span
            className={`absolute left-0 top-0 h-[2px] w-full bg-white transition-transform ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[7px] h-[2px] w-full bg-white transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-[14px] h-[2px] w-full bg-white transition-transform ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-x-0 top-full overflow-hidden border-b border-white/10 bg-black lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block py-3 text-base font-medium no-underline ${
                      link.active ? "text-brand" : "text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-white/10 px-4 py-4">
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
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-brand px-6 py-3 text-sm font-bold text-white no-underline"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
