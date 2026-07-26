import Image from "next/image";
import { tickerLogos } from "@/lib/data";

export function LogoTicker() {
  const items = [...tickerLogos, ...tickerLogos];

  return (
    <div className="logo-rail overflow-hidden border-y border-white/10 bg-[#070707] py-2">
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {items.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex h-16 items-center justify-center border-r border-white/[0.07] px-8 sm:h-20 sm:px-12"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={64}
              className="h-11 w-auto max-w-[150px] object-contain opacity-55 grayscale brightness-[2] transition-all duration-500 hover:opacity-100 hover:grayscale-0 hover:brightness-100 sm:h-14 sm:max-w-[190px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
