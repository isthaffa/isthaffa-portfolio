"use client";

import { motion } from "motion/react";
import { marquee, skillGroups } from "@/data/profile";
import { SectionHeading } from "./Reveal";
import SpotlightCard from "./SpotlightCard";

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      <div
        className="flex shrink-0 animate-marquee gap-4 pr-4"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {[...items, ...items].map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-3 font-display text-lg text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const half = Math.ceil(marquee.length / 2);
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="04 / Stack" title="Tools I reach for." sub="From prompt to production." />
      </div>

      <div className="space-y-4">
        <Marquee items={marquee.slice(0, half)} />
        <Marquee items={marquee.slice(half)} reverse />
      </div>

      <div className="mx-auto mt-16 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {skillGroups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (gi % 3) * 0.08 }}
          >
            <SpotlightCard className="h-full p-6" color={gi % 2 ? "167, 139, 250" : "52, 211, 153"}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">{g.title}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s, si) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + si * 0.03 }}
                    whileHover={{ y: -3 }}
                    className={`cursor-default rounded-lg border px-3 py-1.5 text-sm transition-colors ${
                      s === "Reverse Engineering" || g.title === "AI Dev Tools"
                        ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-200"
                        : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/25 hover:text-white"
                    }`}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
