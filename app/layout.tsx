import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.pro-scalemedia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ProScaleMEDIA: Dubai's Growth Agency",
    template: "%s | ProScaleMEDIA",
  },
  description:
    "Performance marketing for luxury brands in Dubai. We build systems that produce reservations, appointments, and qualified leads on a predictable weekly cadence.",
  keywords: [
    "Dubai marketing agency",
    "performance marketing",
    "luxury brand marketing",
    "paid advertising Dubai",
    "lead generation Dubai",
  ],
  openGraph: {
    title: "ProScaleMEDIA: Dubai's Growth Agency",
    description:
      "Performance marketing for luxury brands. Two founders. Real numbers. No exceptions.",
    url: siteUrl,
    siteName: "ProScaleMEDIA",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProScaleMEDIA: Dubai's Growth Agency",
    description:
      "Performance marketing for luxury brands. Two founders. Real numbers. No exceptions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text-primary font-sans">
        {children}
      </body>
    </html>
  );
}
