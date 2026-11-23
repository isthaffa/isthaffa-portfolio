"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";
import ScrambleText from "./ScrambleText";

function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
        y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-4 pb-10 pt-32 sm:px-6">
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/20 via-cyan-500/10 to-violet-600/20 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-emerald-300/80">
          <ScrambleText text="05 / Contact" />
        </p>
        <Reveal>
          <h2 className="mx-auto mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-7xl">
            Have a hard problem? <span className="text-gradient">Let&apos;s build it.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
            AI products, LLM pipelines, reverse engineering puzzles or a full stack build. I reply fast.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-3 rounded-2xl bg-white px-7 py-4 text-lg font-medium text-black transition hover:bg-emerald-300"
            >
              <Mail size={20} /> Say hello
              <ArrowUpRight size={20} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-5 py-4 font-mono text-sm text-zinc-300 transition hover:border-white/40 hover:text-white"
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
            {copied ? "Copied!" : profile.email}
          </button>
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex justify-center gap-3">
          {[
            { href: profile.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: profile.github, icon: Github, label: "GitHub" },
          ].map(({ href, icon: Icon, label }) => (
            <Magnetic key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-zinc-300 transition hover:border-white/30 hover:text-white"
              >
                <Icon size={18} /> {label}
              </a>
            </Magnetic>
          ))}
        </Reveal>
      </div>

      <footer className="relative mx-auto mt-32 max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="select-none bg-gradient-to-b from-white/15 to-transparent bg-clip-text text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-transparent lg:text-[200px]"
        >
          ISTHAFFA
        </motion.p>
        <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-sm text-zinc-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p className="font-mono text-xs">Built with Next.js, Motion & Claude Code</p>
        </div>
      </footer>
    </section>
  );
}
