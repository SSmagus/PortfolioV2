import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ ["--mx" as never]: "50%", ["--my" as never]: "30%" }}
    >
      <div className="absolute inset-0 grid-bg" />
      <div
        className="glow-orb"
        style={{
          width: 520,
          height: 520,
          background: "var(--glow)",
          top: "-10%",
          left: "-10%",
          opacity: 0.25,
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 600,
          height: 600,
          background: "var(--glow-2)",
          top: "30%",
          right: "-15%",
          opacity: 0.20,
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 420,
          height: 420,
          background: "var(--glow)",
          bottom: "-10%",
          left: "30%",
          opacity: 0.18,
        }}
      />
      {/* Mouse glow */}
      <div
        className="absolute pointer-events-none transition-opacity"
        style={{
          left: "var(--mx)",
          top: "var(--my)",
          width: 400,
          height: 400,
          transform: "translate(-50%,-50%)",
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--glow) 22%, transparent), transparent 60%)",
          filter: "blur(20px)",
        }}
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
    </div>
  );
}
