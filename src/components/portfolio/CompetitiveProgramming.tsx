import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Trophy, Flame, Target, Award } from "lucide-react";
import { Section } from "./Section";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

const PLATFORMS = [
  { name: "LeetCode", rating: "Guardian", value: 2127, label: "Max Rating", color: "from-amber-500 to-orange-500" },
  { name: "Codeforces", rating: "Specialist", value: 1506, label: "Max Rating", color: "from-cyan-500 to-blue-500" },
  { name: "CodeChef", rating: "3★", value: 1691, label: "Max Rating", color: "from-fuchsia-500 to-purple-500" },
  { name: "AtCoder", rating: "7 Kyu", value: 615, label: "Problems", color: "from-emerald-500 to-teal-500" },
];

const ACHIEVEMENTS = [
  { icon: Trophy, label: "Top 1.33%", sub: "Leetcode" },
  { icon: Flame, label: "600-day streak", sub: "Daily problem solving" },
  { icon: Target, label: "Round 3", sub: "Meta Hacker Cup" },
  { icon: Award, label: "Top 3", sub: "University Competitions ( GLA etc )" },
];

// Pseudo heatmap (53 weeks × 7 days)
function Heatmap() {
  const [cells, setCells] = useState<number[]>([]);

  useEffect(() => {
  async function load() {
    const res = await fetch("/leetcode/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
          query userProfileCalendar($username: String!) {
            matchedUser(username: $username) {
              userCalendar {
                submissionCalendar
              }
            }
          }
        `,
        variables: {
          username: "crackedDev",
        },
      }),
    });

    const json = await res.json();

    const raw = JSON.parse(
      json.data.matchedUser.userCalendar.submissionCalendar
    );

    const arr: number[] = [];

    Object.values(raw).forEach((v: any) => {
      const count = Number(v);

      if (count === 0) arr.push(0);
      else if (count < 3) arr.push(1);
      else if (count < 6) arr.push(2);
      else if (count < 10) arr.push(3);
      else arr.push(4);
    });

    while (arr.length < 371) arr.unshift(0);

    setCells(arr.slice(-371));
  }

  load();
}, []);

 const colors = [
  "bg-[#161b22]",
  "bg-[#0e4429]",
  "bg-[#006d32]",
  "bg-[#26a641]",
  "bg-[#39d353]",
];

  return (
  <div className="overflow-x-auto scrollbar-none">

    <div className="grid grid-flow-col grid-rows-7 gap-[3px] min-w-max">
      {cells.map((v, i) => (
        <motion.div
          key={i}
          className={`size-2.5 rounded-[3px] ${colors[v]}`}
        />
      ))}
    </div>

    <div className="mt-5 grid grid-cols-3 gap-3">
      <div className="rounded-xl border border-border/50 bg-card/40 p-3">
        <p className="text-xs text-muted-foreground">
          Submissions
        </p>
        <h3 className="mt-1 text-xl font-semibold">
          5000
        </h3>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/40 p-3">
        <p className="text-xs text-muted-foreground">
          Current Streak
        </p>
        <h3 className="mt-1 text-xl font-semibold text-emerald-400">
          587
        </h3>
      </div>

      <div className="rounded-xl border border-border/50 bg-card/40 p-3">
        <p className="text-xs text-muted-foreground">
          Total Days
        </p>
        <h3 className="mt-1 text-xl font-semibold">
          607
        </h3>
      </div>
    </div>

  </div>
);
}

export function CompetitiveProgramming() {
  return (
    <Section
      id="cp"
      eyebrow="// competitive programming"
      title={<>Algorithms are my <span className="text-gradient-static">playground</span>.</>}
      description="From graph theory to segment trees, from contests at 8 AM Sunday to debugging WA at 3 AM — competitive programming sharpened how I think about every system I build."
    >
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Platforms */}
        <div className="grid sm:grid-cols-2 gap-4">
          {PLATFORMS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass glow-border rounded-2xl p-5 relative overflow-hidden"
            >
              <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${p.color} opacity-20 blur-2xl`} />
              <div className="text-sm text-muted-foreground">{p.name}</div>
              <div className="mt-1 font-display text-3xl font-bold text-gradient-static">
                <Counter to={p.value} />
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{p.label}</div>
              <div className={`mt-3 inline-flex rounded-md bg-gradient-to-r ${p.color} px-2 py-0.5 text-[11px] font-mono text-white`}>
                {p.rating}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass glow-border rounded-2xl p-5"
        >
          <div className="flex items-baseline justify-between">
            <div>
              <h3 className="font-display font-semibold">Activity</h3>
              <p className="text-xs text-muted-foreground">Problems solved this year</p>
            </div>
            <div className="font-display text-2xl font-bold text-gradient-static">
              <Counter to={612} />
            </div>
          </div>
          <div className="mt-5">
            <Heatmap />
          </div>
        </motion.div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {ACHIEVEMENTS.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            whileHover={{ y: -3 }}
            className="glass rounded-xl p-4 hover:border-[color-mix(in_oklab,var(--glow)_40%,transparent)] transition-all"
          >
            <a.icon className="size-5 text-[var(--glow)]" />
            <div className="mt-2 font-semibold">{a.label}</div>
            <div className="text-xs text-muted-foreground">{a.sub}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
