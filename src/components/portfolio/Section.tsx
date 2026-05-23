import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative overflow-hidden py-16 sm:py-24"
    >
      {/* FULL WIDTH ATMOSPHERE */}
      <div className="absolute inset-0 -z-10">
        {/* top wash */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#8ba8ff]/8 to-transparent blur-3xl" />

        {/* left blob */}
        <div className="absolute top-[10%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[#8ba8ff]/10 blur-[120px]" />

        {/* right blob */}
        <div className="absolute bottom-[0%] right-[-10%] h-[420px] w-[420px] rounded-full bg-[#f2a7c5]/10 blur-[120px]" />

        {/* soft fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#7c95ff]/[0.03] to-[#5f7dff]/[0.08]" />
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          {eyebrow && (
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#8ba8ff]">
              {eyebrow}
            </div>
          )}

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#2a3042]">
            {title}
          </h2>

          {description && (
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#687086]">
              {description}
            </p>
          )}
        </motion.div>

        <div className="mt-12">
          {children}
        </div>
      </div>
    </section>
  );
}