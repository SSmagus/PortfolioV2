import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Command } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "cp", label: "CP" },
  { id: "timeline", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-6xl px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all",
            scrolled ? "glass-strong" : "glass",
          )}
        >
          <button
            onClick={() => go("home")}
            className="flex items-center gap-2 font-display font-bold tracking-tight"
            aria-label="Home"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] text-primary-foreground shadow-[0_4px_20px_-4px_var(--glow)]">
              SD
            </span>
            <span className="hidden sm:inline">Saumya<span className="text-gradient-static">.</span></span>
          </button>

          <ul className="hidden md:flex items-center gap-1">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => go(s.id)}
                  className={cn(
                    "relative px-3 py-1.5 text-sm rounded-md transition-colors",
                    active === s.id ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {active === s.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-md bg-accent/30 border border-border"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {s.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              variant="glass"
              size="sm"
              onClick={onOpenPalette}
              className="hidden sm:inline-flex font-mono text-xs"
              aria-label="Open command palette"
            >
              <Command className="size-3.5" />
              <span className="hidden md:inline">Search</span>
              {/* <kbd className="hidden md:inline ml-1 rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">⌘</kbd> */}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass-strong mt-2 rounded-2xl p-2"
          >
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                onClick={() => go(s.id)}
                className={cn(
                  "w-full text-left rounded-lg px-3 py-2 text-sm transition-colors",
                  active === s.id ? "bg-accent/30 text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-accent/20",
                )}
              >
                {s.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
