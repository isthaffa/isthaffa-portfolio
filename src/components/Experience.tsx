"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { experience } from "@/data/profile";
import { SectionHeading } from "./Reveal";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="experience" className="relative px-4 py-28 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="02 / Experience"
          title="Where I've shipped."
          sub="Four companies across the UK, France and Sri Lanka."
        />

        <div ref={ref} className="relative">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10 md:left-1/2" />
          <motion.div
            style={{ scaleY: fill }}
            className="absolute left-[11px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-emerald-400 via-cyan-400 to-violet-500 md:left-1/2"
          />

          <div className="space-y-14">
            {experience.map((job, i) => {
              const left = i % 2 === 0;
              return (
                <div key={job.company} className="relative grid md:grid-cols-2 md:gap-16">
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="absolute left-0 top-6 z-10 grid h-6 w-6 place-items-center rounded-full border border-emerald-400/50 bg-[#05060a] md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_2px] shadow-emerald-400/60" />
                  </motion.span>

                  <motion.div
                    initial={{ opacity: 0, x: left ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`ml-10 md:ml-0 ${left ? "md:col-start-1 md:text-right" : "md:col-start-2"}`}
                  >
                    <div className="group rounded-3xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.04]">
                      <p className="font-mono text-xs text-emerald-300/80">{job.period}</p>
                      <h3 className="mt-2 font-display text-2xl font-semibold text-white">{job.company}</h3>
                      <p className="text-zinc-400">
                        {job.role} · {job.location}
                      </p>
                      <ul className={`mt-4 space-y-2 text-[15px] text-zinc-400 ${left ? "md:ml-auto" : ""}`}>
                        {job.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                      <div className={`mt-5 flex flex-wrap gap-2 ${left ? "md:justify-end" : ""}`}>
                        {job.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
