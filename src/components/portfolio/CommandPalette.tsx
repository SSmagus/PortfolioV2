import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Code,
  FolderGit2,
  Trophy,
  Clock,
  Mail,
  Github,
  Linkedin,
  Download,
  Search,
} from "lucide-react";

type Item = {
  label: string;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  group: "Navigate" | "Links" | "Actions";
};

export function CommandPalette({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);

  const go = (id: string) => {
    onOpenChange(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const items: Item[] = [
    { label: "Home", icon: Home, action: () => go("home"), group: "Navigate" },
    { label: "About", icon: User, action: () => go("about"), group: "Navigate" },
    { label: "Skills", icon: Code, action: () => go("skills"), group: "Navigate" },
    { label: "Projects", icon: FolderGit2, action: () => go("projects"), group: "Navigate" },
    { label: "Competitive Programming", icon: Trophy, action: () => go("cp"), group: "Navigate" },
    { label: "Journey", icon: Clock, action: () => go("timeline"), group: "Navigate" },
    { label: "Contact", icon: Mail, action: () => go("contact"), group: "Navigate" },
    { label: "GitHub", hint: "↗", icon: Github, action: () => window.open("https://github.com/", "_blank"), group: "Links" },
    { label: "LinkedIn", hint: "↗", icon: Linkedin, action: () => window.open("https://linkedin.com/", "_blank"), group: "Links" },
    { label: "Email me", hint: "↗", icon: Mail, action: () => (window.location.href = "mailto:saumya@example.com"), group: "Links" },
    { label: "Download Resume", icon: Download, action: () => {}, group: "Actions" },
  ];

  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  useEffect(() => {
    setIdx(0);
  }, [q, open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (!open) return;
      if (e.key === "Escape") onOpenChange(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setIdx((i) => Math.min(filtered.length - 1, i + 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setIdx((i) => Math.max(0, i - 1));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        filtered[idx]?.action();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, idx, onOpenChange]);

  const groups = ["Navigate", "Links", "Actions"] as const;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onOpenChange(false)}
          className="fixed inset-0 z-[200] grid place-items-start justify-center pt-[15vh] bg-background/70 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong glow-border rounded-2xl w-full max-w-lg overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search className="size-4 text-muted-foreground" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
              />
              <kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground font-mono">ESC</kbd>
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {groups.map((g) => {
                const groupItems = filtered.filter((i) => i.group === g);
                if (!groupItems.length) return null;
                return (
                  <div key={g} className="mb-2">
                    <div className="px-2 py-1 text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{g}</div>
                    {groupItems.map((it) => {
                      const realIdx = filtered.indexOf(it);
                      return (
                        <button
                          key={it.label}
                          onMouseEnter={() => setIdx(realIdx)}
                          onClick={it.action}
                          className={`w-full flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm transition-colors ${
                            realIdx === idx ? "bg-accent/30 text-foreground" : "text-muted-foreground"
                          }`}
                        >
                          <it.icon className="size-4" />
                          <span className="flex-1 text-left">{it.label}</span>
                          {it.hint && <span className="text-xs text-muted-foreground font-mono">{it.hint}</span>}
                        </button>
                      );
                    })}
                  </div>
                );
              })}
              {!filtered.length && (
                <div className="px-3 py-8 text-center text-sm text-muted-foreground">No results</div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
