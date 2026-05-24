import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Check,
  Mail,
  Github,
  Linkedin,
  Download,
  MapPin,
  FileText,
} from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import resumeUrl from "@/assets/saumya_dhakad_resume.pdf";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setTimeout(() => setSent(false), 3500);
    }, 1200);
  };

  return (
    <Section
      id="contact"
      eyebrow="// contact"
      title={
        <>
          Let's build something{" "}
          <span className="text-gradient-static">great</span>.
        </>
      }
      description="Got an opportunity, a question, need guidance or just want to talk ? My inbox is open."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-3"
        >
          <a
            href="mailto:saumya12004@gmail.com"
            className="group flex items-start gap-3 glass glow-border rounded-2xl p-5 hover:border-[color-mix(in_oklab,var(--glow)_40%,transparent)] transition-all"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)]">
              <Mail className="size-4" />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </div>
              <div className="font-mono text-sm truncate">
                saumya122004@gmail.com
              </div>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/saumya-dhakad-100x"
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-3 glass rounded-2xl p-5 hover:border-[color-mix(in_oklab,var(--glow)_40%,transparent)] transition-all"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)]">
              <Linkedin className="size-4" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                LinkedIn
              </div>
              <div className="font-mono text-sm">/in/saumya-dhakad-100x</div>
            </div>
          </a>
          <a
            href="https://github.com/SSmagus"
            target="_blank"
            rel="noreferrer"
            className="group flex items-start gap-3 glass rounded-2xl p-5 hover:border-[color-mix(in_oklab,var(--glow)_40%,transparent)] transition-all"
          >
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)]">
              <Github className="size-4" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                GitHub
              </div>
              <div className="font-mono text-sm">@SSmagus</div>
            </div>
          </a>
          <div className="flex items-start gap-3 glass rounded-2xl p-5">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-[var(--glow)]/20 to-[var(--glow-2)]/20 border border-border text-[var(--glow)]">
              <MapPin className="size-4" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Location
              </div>
              <div className="font-mono text-sm">India · Remote-friendly</div>
            </div>
          </div>
          <Button variant="hero" size="lg" className="w-full" asChild>
            <a href={resumeUrl} download>
              <Download /> Download Resume
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 glass-strong glow-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            {/* <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
      Open to Opportunities */}
            {/* </p> */}

            <h3 className="mt-3 text-3xl sm:text-4xl font-semibold leading-tight">
              {/* Building scalable backend systems,
      performant applications, and meaningful products. */}
              Let's Connect
            </h3>

            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              I enjoy solving complex engineering problems — from competitive
              programming and low-level optimization to scalable backend
              architectures and distributed systems. Always open to impactful
              opportunities, collaborations, and ambitious ideas.
            </p>
          </div>

          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-border/50 bg-muted/20 p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Focus
              </div>

              <div className="mt-2 text-sm font-medium">
                Backend · Systems · CP
              </div>
            </div>

            <div className="rounded-2xl border border-border/50 bg-muted/20 p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Availability
              </div>

              <div className="mt-2 text-sm font-medium">
                Internships · Full-time
              </div>
            </div>

            <div className="rounded-2xl border border-border/50 bg-muted/20 p-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Preferred Work
              </div>

              <div className="mt-2 text-sm font-medium">
                In-office · Remote · Hybrid
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button variant="hero" size="lg" asChild>
              <a href="mailto:saumya122004@gmail.com">
                <Mail className="mr-2 size-4" />
                Contact Me
              </a>
            </Button>

            <Button variant="secondary" size="lg" asChild>
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                <FileText className="mr-2 size-4" />
                View Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
