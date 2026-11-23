import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Ahmed Isthaffa | AI Engineer",
  description:
    "AI Engineer and Senior Full Stack Engineer. LLM pipelines, OCR, RAG, reverse engineering, and AI-native development with Claude Code, Codex and Copilot.",
  openGraph: {
    title: "Ahmed Isthaffa | AI Engineer",
    description:
      "AI Engineer and Senior Full Stack Engineer building LLM, OCR and RAG systems.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable} ${mono.variable}`}>
      <body className="bg-[#05060a] text-zinc-200 antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
