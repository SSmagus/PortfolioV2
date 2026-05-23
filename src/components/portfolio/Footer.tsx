import { Github, Linkedin, Mail, Code2, Sparkles, Heart } from "lucide-react";

const SOCIALS = [
  { icon: Github, href: "https://github.com/SSmagus", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/saumya-dhakad-100x", label: "LinkedIn" },
  { icon: Code2, href: "https://leetcode.com/CrackedDev", label: "LeetCode" },
  { icon: Sparkles, href: "https://codeforces.com/profile/saumya", label: "Codeforces" },
  { icon: Mail, href: "mailto:saumya122004@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-10">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)] to-[var(--glow-2)] text-primary-foreground font-display font-bold">
              SD
            </div>
            <div>
              <div className="font-display font-semibold">Saumya Dhakad</div>
              <div className="text-xs text-muted-foreground font-mono">
                Backend Engineer · Competitive Programmer
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
            <a href="#cp" className="hover:text-foreground transition-colors">CP</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-1.5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-9 w-9 place-items-center rounded-lg glass hover:text-[var(--glow)] transition-colors"
              >
                <s.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground font-mono">
          <div>© {new Date().getFullYear()} Saumya Dhakad. All rights reserved.</div>
          <div className="flex items-center gap-1.5">
            Built with <Heart className="size-3 text-[var(--glow)] fill-[var(--glow)]" /> using React, Tailwind & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
