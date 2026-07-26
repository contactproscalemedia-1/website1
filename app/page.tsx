import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Services } from "@/components/sections/Services";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Position } from "@/components/sections/Position";
import { Approach } from "@/components/sections/Approach";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <LogoTicker />
        <Services />
        <CaseStudies />
        <Position />
        <Approach />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
