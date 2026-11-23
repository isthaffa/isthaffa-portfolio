"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Sparkles } from "lucide-react";
import { projects } from "@/data/profile";
import { SectionHeading } from "./Reveal";

type Project = (typeof projects)[number];

function ProjectCard({
  p,
  i,
  total,
  progress,
}: {
  p: Project;
  i: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, 1 - (total - i) * 0.04]);
  const dim = useTransform(progress, [start, Math.min(1, start + 0.35)], [0, (total - 1 - i) * 0.12]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center pt-6 sm:top-28">
      <motion.article
        style={{ scale, top: i * 24 }}
        className="relative w-full origin-top overflow-hidden rounded-[2rem] border border-white/10 bg-[#0a0c12] shadow-2xl shadow-black/60"
      >
        <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.accent}`} />
        <div className={`pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl`} />

        <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs text-zinc-500">
                {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              {p.featured && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-xs text-emerald-300">
                  <Sparkles size={12} /> Current focus
                </span>
              )}
              <span className="font-mono text-xs text-zinc-500">{p.period}</span>
            </div>
            <h3 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {p.name}
            </h3>
            <p className={`mt-2 bg-gradient-to-r ${p.accent} bg-clip-text text-lg font-medium text-transparent`}>
              {p.tagline}
            </p>
            <p className="mt-5 leading-relaxed text-zinc-400">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] text-zinc-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/5 bg-black/40 p-6">
            <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">What I built</p>
            <ul className="mt-4 space-y-4">
              {p.highlights.map((h, k) => (
                <li key={h} className="flex gap-3 text-zinc-300">
                  <span className={`mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-gradient-to-br ${p.accent} font-mono text-[10px] font-bold text-black`}>
                    {k + 1}
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <motion.div style={{ opacity: dim }} className="pointer-events-none absolute inset-0 bg-black" />
      </motion.article>
    </div>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="projects" className="relative px-4 pt-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="03 / Projects"
          title="Selected work."
          sub="AI products, fintech platforms and developer tools."
        />
        <div ref={ref} className="relative pb-[10vh]">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} i={i} total={projects.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
