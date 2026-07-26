import Image from "next/image";
import { tickerLogos } from "@/lib/data";

export function LogoTicker() {
  const items = [...tickerLogos, ...tickerLogos];

  return (
    <div className="overflow-hidden bg-brand py-2">
      <div className="flex w-max animate-marquee items-center motion-reduce:animate-none">
        {items.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex h-16 items-center justify-center px-4 sm:h-20 sm:px-5"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={64}
              className="h-12 w-auto max-w-[160px] object-contain sm:h-16 sm:max-w-[200px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
