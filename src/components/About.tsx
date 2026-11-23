"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";
import { Bot, Brain, Layers, ScanSearch, GraduationCap } from "lucide-react";
import { profile, strengths, education } from "@/data/profile";
import { Reveal, SectionHeading } from "./Reveal";
import SpotlightCard from "./SpotlightCard";
import Portrait from "./Portrait";

const icons = { brain: Brain, scan: ScanSearch, bot: Bot, layers: Layers } as const;

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, ease: "easeOut", onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref}>
      {v}
      {suffix}
    </span>
  );
}

const agents = [
  { name: "Claude Code", role: "Architecture, refactors, deep reasoning", dot: "bg-orange-400" },
  { name: "OpenAI Codex", role: "Parallel tasks, background PRs", dot: "bg-emerald-400" },
  { name: "GitHub Copilot", role: "Inline completion while I type", dot: "bg-sky-400" },
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="01 / About"
          title="I build AI that does real work."
          sub="And I take apart systems until I understand them."
        />

        <div className="grid auto-rows-[minmax(0,auto)] gap-4 md:grid-cols-12">
          {/* portrait */}
          <Reveal className="md:col-span-4 md:row-span-2">
            <Portrait />
          </Reveal>

          {/* story */}
          <Reveal className="md:col-span-8">
            <SpotlightCard className="h-full p-8">
              <div className="space-y-5 text-[15px] leading-relaxed text-zinc-400 sm:text-base">
                {profile.about.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-zinc-200" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
            </SpotlightCard>
          </Reveal>

          {/* AI agents */}
          <Reveal delay={0.1} className="md:col-span-8">
            <SpotlightCard className="h-full p-6" color="167, 139, 250">
              <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">My AI pair programmers</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {agents.map((a, i) => (
                  <motion.div
                    key={a.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12 }}
                    className="rounded-2xl border border-white/5 bg-black/40 p-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 animate-pulse rounded-full ${a.dot}`} />
                      <span className="font-medium text-white">{a.name}</span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-500">{a.role}</p>
                  </motion.div>
                ))}
              </div>
              <p className="mt-5 text-sm text-zinc-400">
                I set direction and review every diff. The agents handle volume.
              </p>
            </SpotlightCard>
          </Reveal>

          {/* stats */}
          {profile.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="md:col-span-6 lg:col-span-3">
              <SpotlightCard className="h-full p-6">
                <p className="font-display text-5xl font-semibold text-white">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-zinc-500">{s.label}</p>
              </SpotlightCard>
            </Reveal>
          ))}

          {/* strengths */}
          {strengths.map((s, i) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <Reveal key={s.title} delay={i * 0.06} className="md:col-span-6">
                <SpotlightCard className="h-full p-7" color={i % 2 ? "167, 139, 250" : "52, 211, 153"}>
                  <div className="mb-5 inline-flex rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-3 text-emerald-300 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-zinc-400">{s.body}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}

          {/* education */}
          <Reveal className="md:col-span-12">
            <SpotlightCard className="p-7">
              <div className="flex flex-col gap-6 md:flex-row md:items-center">
                <div className="flex items-center gap-3 text-zinc-400">
                  <GraduationCap className="text-violet-300" />
                  <span className="font-mono text-xs uppercase tracking-widest">Education</span>
                </div>
                <div className="grid flex-1 gap-6 sm:grid-cols-2">
                  {education.map((e) => (
                    <div key={e.school}>
                      <p className="font-medium text-white">{e.degree}</p>
                      <p className="text-sm text-zinc-400">
                        {e.school} · {e.period}
                      </p>
                      {e.detail && <p className="text-sm text-zinc-500">{e.detail}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
