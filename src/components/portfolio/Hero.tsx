import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Code2,
  Sparkles,
  Trophy,
  MessageCircle,
  Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/photo2.png";
import resumeUrl from "@/assets/saumya_dhakad_resume.pdf";

const ROLES = [
  "Competitive Programmer",
  "Backend Engineer",
  "Systems Developer",
  "Distributed Systems Enthusiast",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[i % ROLES.length];
    const speed = deleting ? 40 : 80;

    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);

        setText(next);

        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
      } else {
        const next = current.slice(0, text.length - 1);

        setText(next);

        if (next === "") {
          setDeleting(false);
          setI((p) => p + 1);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, i]);

  return (
    <span className="font-semibold bg-gradient-to-r from-[#6e86ff] via-[#8d7dff] to-[#ec9fc1] bg-clip-text text-transparent">
      {text}

      <span className="inline-block w-[2px] h-[1em] -mb-1 ml-1 bg-[#8d7dff] animate-blink" />
    </span>
  );
}

const STATS = [
  { label: "Problems Solved", value: "2000+" },
  { label: "Max LC Rating", value: "2100+" },
  { label: "CGPA", value: "9.04" },
  { label: "Projects Built", value: "10+" },
];

const SOCIALS = [
  {
    icon: Github,
    href: "https://github.com/SSmagus",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/saumya-dhakad-021937290/",
    label: "LinkedIn",
  },
  {
    icon: Trophy,
    href: "https://leetcode.com/u/crackedDev/",
    label: "LeetCode",
  },
  {
    icon: Code2,
    href: "https://codeforces.com/profile/Saumya",
    label: "Codeforces",
  },
  {
    icon: MessageCircle,
    href: "https://discord.com/users/1126142090900938752",
    label: "Discord",
  },
  {
    icon: Globe,
    href: "https://codolio.com/profile/SSmagus",
    label: "Codeolio",
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden"
    >
      {/* atmosphere */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-[#8ba8ff]/20 blur-[120px]" />

        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#f2a7c5]/20 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-[#687086] border border-white/40"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available for opportunities · Open to SDE roles
        </motion.div>

        <div className="mt-10 grid items-center gap-14 lg:grid-cols-[1fr_340px]">
          {/* LEFT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] leading-[0.98]"
            >
              <span className="block text-[#5b6275] text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal mb-4">
                Hi, I'm
              </span>

              <span className="bg-gradient-to-r from-[#6e86ff] via-[#8d7dff] to-[#ec9fc1] bg-clip-text text-transparent">
                Saumya Dhakad
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 text-lg sm:text-xl text-[#687086] max-w-2xl leading-relaxed"
            >
              <Typewriter />
              <br />
              Crafting scalable backends, low-latency systems, and elegant
              algorithms — with a deep love for performance and clean
              architecture.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button
                variant="hero"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View Projects <ArrowRight className="size-4" />
              </Button>

              <Button
                variant="glass"
                size="lg"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="size-4" />
                Contact Me
              </Button>

              <Button variant="ghost" size="lg" asChild>
                <a href={resumeUrl} download>
                  <Download className="size-4" />
                  Resume
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 flex items-center gap-2"
            >
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-11 w-11 place-items-center rounded-xl glass border border-white/40 text-[#5b6275] hover:text-[#7c95ff] transition-all duration-300 hover:-translate-y-1"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="absolute -inset-[3px] rounded-[2rem] bg-gradient-to-br from-[#8ba8ff] via-[#c6b7ff] to-[#f2a7c5] opacity-70 blur-xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/30 p-2 backdrop-blur-xl shadow-[0_20px_80px_rgba(124,149,255,0.18)]">
              <img
                src={profilePhoto}
                alt="Saumya Dhakad"
                className="h-[420px] w-[320px] rounded-[1.5rem] object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-[#8ba8ff]/15 bg-white/45 backdrop-blur-xl shadow-[0_8px_30px_rgba(124,149,255,0.08)] p-5"
            >
              <div className="font-display text-3xl md:text-4xl font-black tracking-tight bg-gradient-to-r from-[#5f7dff] via-[#8d7dff] to-[#ec9fc1] bg-clip-text text-transparent">
                {s.value}
              </div>

              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#8b93a7]">
                {s.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
