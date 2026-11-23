"use client";

import { useRef } from "react";
import clsx from "clsx";

/** Card with a radial glow that follows the cursor and a glowing border. */
export default function SpotlightCard({
  children,
  className,
  color = "52, 211, 153",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - r.left}px`);
        el.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      style={{ "--c": color } as React.CSSProperties}
      className={clsx(
        "group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02] transition-colors duration-500 hover:border-white/20",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(500px circle at var(--x) var(--y), rgba(var(--c), 0.12), transparent 40%)",
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
