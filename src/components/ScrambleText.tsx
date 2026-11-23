"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#01ABCDEFabcdef";

/** Text that "decodes" from random glyphs when it scrolls into view. */
export default function ScrambleText({
  text,
  className,
  speed = 28,
}: {
  text: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [out, setOut] = useState(text);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const total = text.length * 3;
    const id = setInterval(() => {
      frame++;
      const revealed = Math.floor(frame / 3);
      setOut(
        text
          .split("")
          .map((ch, i) =>
            ch === " " || i < revealed ? ch : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          )
          .join("")
      );
      if (frame >= total) {
        clearInterval(id);
        setOut(text);
      }
    }, speed);
    return () => clearInterval(id);
  }, [inView, text, speed]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      <span aria-hidden>{out}</span>
    </span>
  );
}
