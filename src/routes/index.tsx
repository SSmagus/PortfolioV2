import { useState } from "react";
import { AnimatedBackground } from "@/components/portfolio/AnimatedBackground";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { CompetitiveProgramming } from "@/components/portfolio/CompetitiveProgramming";
import { Timeline } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CommandPalette } from "@/components/portfolio/CommandPalette";
import { ScrollToTop } from "@/components/portfolio/ScrollToTop";

export function Index() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar onOpenPalette={() => setPaletteOpen(true)} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </div>
  );
}
