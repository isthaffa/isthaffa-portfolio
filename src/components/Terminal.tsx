"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

type Line = { kind: "cmd" | "out" | "ok" | "ai"; text: string };

const script: Line[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "Ahmed Isthaffa · AI Engineer · 5+ yrs" },
  { kind: "cmd", text: "claude \"trace the credit report pipeline\"" },
  { kind: "ai", text: "Reading OCR → extraction → scoring flow…" },
  { kind: "ok", text: "✓ 3 agents ready: Claude Code · Codex · Copilot" },
  { kind: "cmd", text: "reverse-engineer ./undocumented-api" },
  { kind: "out", text: "→ 14 endpoints mapped, auth flow decoded" },
  { kind: "cmd", text: "ship --to production" },
  { kind: "ok", text: "✓ deployed. coffee level: critical" },
];

const color: Record<Line["kind"], string> = {
  cmd: "text-white",
  out: "text-zinc-400",
  ok: "text-emerald-300",
  ai: "text-violet-300",
};

export default function Terminal() {
  const [shown, setShown] = useState<Line[]>([]);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    let cancelled = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      await sleep(1200);
      while (!cancelled) {
        setShown([]);
        for (const line of script) {
          if (cancelled) return;
          if (line.kind === "cmd") {
            for (let c = 1; c <= line.text.length; c++) {
              if (cancelled) return;
              setTyping(line.text.slice(0, c));
              await sleep(35 + Math.random() * 40);
            }
            await sleep(250);
            setTyping("");
          } else {
            await sleep(380);
          }
          setShown((s) => [...s, line]);
        }
        await sleep(4500);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-emerald-400/40 via-cyan-400/10 to-violet-500/40 blur-sm" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0c12]/90 shadow-2xl shadow-emerald-500/10 backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-zinc-500">~/isthaffa — zsh</span>
        </div>
        <div className="h-[340px] space-y-1.5 overflow-hidden p-5 font-mono text-[13px] leading-relaxed">
          {shown.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              className={color[l.kind]}
            >
              {l.kind === "cmd" && <span className="text-emerald-400">❯ </span>}
              {l.text}
            </motion.div>
          ))}
          <div className="text-white">
            <span className="text-emerald-400">❯ </span>
            {typing}
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-emerald-300" />
          </div>
        </div>
      </div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-6 -left-6 hidden rounded-xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl sm:block"
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Daily drivers</p>
        <p className="text-sm text-white">Claude Code · Codex · Copilot</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 -top-6 hidden rounded-xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl sm:block"
      >
        <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Focus</p>
        <p className="text-sm text-white">LLMs · OCR · RAG</p>
      </motion.div>
    </div>
  );
}
