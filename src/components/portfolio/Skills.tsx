import { motion } from "framer-motion";
import { Code, Server, Database, Wrench, Brain, Cpu } from "lucide-react";
import { Section } from "./Section";

const GROUPS = [
  {
    icon: Code,
    title: "Languages",
    items: ["Java", "C++", "Python", "SQL"],
  },

  {
    icon: Server,
    title: "Backend",
    items: [
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "GraphQL",
      "JWT",
      "Hibernate",
      "WebSockets",
    ],
  },

  {
    icon: Database,
    title: "Databases",
    items: ["MySQL", "MongoDB", "Redis", "SQLite"],
  },

  {
    icon: Wrench,
    title: "DevOps & Tools",
    items: [
      "Docker",
      "AWS EC2",
      "Git",
      "Linux",
      "Postman",
      "Vim",
      "CMake",
    ],
  },

  {
    icon: Cpu,
    title: "Systems & Performance",
    items: [
      "Multithreading",
      "Concurrency",
      "Memory Management",
      "Performance Optimization",
      "File I/O",
      "Thread Pools",
    ],
  },

  {
    icon: Brain,
    title: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
      "Caching",
      "System Design",
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="// stack"
      title={<>Tools I reach for, <span className="text-gradient-static">daily</span>.</>}
      description="A pragmatic stack tuned for performance and clarity. I pick the right tool for the job — not the loudest one."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {GROUPS.map((g, idx) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass glow-border rounded-2xl p-6 group hover:-translate-y-1 transition-transform"
          >
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)] group-hover:scale-110 transition-transform">
                <g.icon className="size-4" />
              </div>
              <h3 className="font-display font-semibold">{g.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {g.items.map((it, i) => (
                <motion.span
                  key={it}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 + i * 0.04 }}
                  className="rounded-md bg-muted/50 border border-border px-2.5 py-1 text-xs font-mono text-foreground/90 hover:border-[color-mix(in_oklab,var(--glow)_50%,transparent)] hover:text-[var(--glow)] transition-colors"
                >
                  {it}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
