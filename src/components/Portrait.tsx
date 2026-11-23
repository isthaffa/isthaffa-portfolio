"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { profile } from "@/data/profile";

/** Portrait on a "studio" backdrop: soft spotlight, emerald/violet rim light, faint grid. */
export default function Portrait() {
  const [missing, setMissing] = useState(false);
  return (
    <div className="group relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-white/[0.08]">
      {/* studio backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#2a3140_0%,#141821_55%,#07080c_100%)]" />
      <div className="absolute -left-16 top-8 h-64 w-64 rounded-full bg-emerald-400/25 blur-3xl transition-transform duration-700 group-hover:translate-x-6" />
      <div className="absolute -right-16 top-16 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl transition-transform duration-700 group-hover:-translate-x-6" />
      <div className="grid-bg absolute inset-0 opacity-60" />

      {missing ? (
        <div className="absolute inset-0 grid place-items-center font-display text-8xl font-bold text-white/10">AI</div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 1.04 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 bottom-0 top-6"
        >
          <Image
            src="/profile.webp"
            alt={`Portrait of ${profile.name}`}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] transition-transform duration-700 group-hover:scale-[1.03]"
            onError={() => setMissing(true)}
            priority
          />
        </motion.div>
      )}

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/90 to-transparent" />
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-white">{profile.name}</p>
          <p className="text-sm text-emerald-300">AI Engineer · Full Stack</p>
        </div>
        <span className="rounded-full border border-white/15 bg-black/40 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-zinc-300 backdrop-blur">
          LK · Remote
        </span>
      </div>
    </div>
  );
}
