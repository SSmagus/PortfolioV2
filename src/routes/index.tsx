import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Saumya Dhakad — Backend Engineer & Competitive Programmer" },
      {
        name: "description",
        content:
          "Portfolio of Saumya Dhakad — backend engineer, systems developer, and competitive programmer. Spring Boot, C++, distributed systems, and high-performance algorithms.",
      },
      { property: "og:title", content: "Saumya Dhakad — Backend Engineer & Competitive Programmer" },
      { property: "og:description", content: "Portfolio showcasing backend systems, distributed architectures, and competitive programming achievements." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
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
