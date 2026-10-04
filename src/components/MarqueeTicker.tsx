import React from "react";
import { ThemeMode } from "../types";
import { Sparkles, Cpu, ShieldCheck, Database, Terminal, ArrowUpRight } from "lucide-react";

interface MarqueeTickerProps {
  theme: ThemeMode;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({ theme }) => {
  const isDark = theme === "dark";

  const tickerItems = [
    { text: "AUTONOMOUS AI AGENTS", icon: Cpu },
    { text: "GEMINI 3.8 & PRO PREVIEW", icon: Sparkles },
    { text: ".NET 8 WEB APIS & C#", icon: Terminal },
    { text: "PYTHON LLM PIPELINES", icon: Cpu },
    { text: "KYC & FRAUD DETECTION", icon: ShieldCheck },
    { text: "SQL OPTIMIZATION & SCHEMAS", icon: Database },
    { text: "RAILWAY & VERCEL DEPLOYMENT", icon: ArrowUpRight },
    { text: "FULL-STACK ARCHITECTURE", icon: Terminal },
    { text: "OPEN FOR JUNIOR AI/ML ROLES", icon: Sparkles },
  ];

  return (
    <div
      className={`relative w-full overflow-hidden border-y py-3 select-none transition-colors ${
        isDark
          ? "bg-zinc-950 border-zinc-800 text-zinc-300"
          : "bg-zinc-950 border-zinc-950 text-zinc-100"
      }`}
      aria-label="Skills & Competencies Marquee"
    >
      <div className="flex w-max animate-marquee space-x-8">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center space-x-3 text-xs font-bold tracking-widest uppercase">
              <Icon className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              <span>{item.text}</span>
              <span className="text-zinc-600 dark:text-zinc-700" aria-hidden="true">
                ✦
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
