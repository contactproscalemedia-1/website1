import Image from "next/image";
import { EmailCapture } from "@/components/EmailCapture";
import { InstagramIcon, LinkedInIcon, WhatsAppIcon } from "@/components/icons";
import { footerCompanyLinks, footerServiceLinks } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="grid grid-cols-1 gap-10 border-b border-[#1a1a1a] px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16 lg:px-14">
        <div>
          <div className="mb-5 flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            <span className="h-0.5 w-6 bg-brand" />
            Free Audit
          </div>
          <h3 className="mb-5 max-w-xl font-display text-[clamp(28px,9vw,40px)] leading-[1.05] tracking-[0.02em] text-white sm:text-[clamp(32px,3.2vw,48px)]">
            WE&apos;LL TELL YOU WHERE YOU&apos;RE BLEEDING MONEY.
          </h3>
          <p className="max-w-[540px] text-[15px] leading-[1.65] text-white/60">
            Send us your website. We send back a 3-page audit. No call required.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <EmailCapture />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-[2fr_1fr_1fr_1fr] lg:gap-16 lg:px-14 lg:py-20">
        <div>
          <a href="#">
            <Image
              src="/images/brand/proscalemedia-logo.png"
              alt="ProScaleMEDIA"
              width={165}
              height={44}
              style={{ width: "auto" }}
              className="h-11"
            />
          </a>
          <p className="my-5 text-sm leading-[1.8] text-muted">
            We don&apos;t build a presence.
            <br />
            We build brands that <span className="text-brand">scale.</span>
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted no-underline transition-colors hover:border-brand hover:text-brand"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted no-underline transition-colors hover:border-brand hover:text-brand"
            >
              <LinkedInIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href="https://wa.me/971000000000"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-muted no-underline transition-colors hover:border-brand hover:text-brand"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-2 font-display text-lg tracking-[0.08em] text-white">Services</div>
          {footerServiceLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-muted no-underline transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-2 font-display text-lg tracking-[0.08em] text-white">Company</div>
          {footerCompanyLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-muted no-underline transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <div className="mb-2 font-display text-lg tracking-[0.08em] text-white">Contact</div>
          <a
            href="https://wa.me/971522824102"
            className="text-[13px] text-muted no-underline transition-colors hover:text-brand"
          >
            +971 522 824 102
          </a>
          <a
            href="mailto:contact@pro-scalemedia.com"
            className="text-[13px] text-muted no-underline transition-colors hover:text-brand"
          >
            contact@pro-scalemedia.com
          </a>
          <p className="mt-2 text-[13px] text-muted">Dubai, United Arab Emirates</p>
        </div>
      </div>

      <div className="flex flex-col items-start gap-2 border-t border-white/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <div className="text-xs tracking-[0.05em] text-muted">
          © 2026 ProScaleMEDIA. All rights reserved. Dubai, UAE.
        </div>
      </div>
    </footer>
  );
}
