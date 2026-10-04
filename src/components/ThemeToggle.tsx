import React from "react";
import { Sun, Moon } from "lucide-react";
import { ThemeMode } from "../types";

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, onToggle }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      role="switch"
      aria-checked={isDark}
      aria-label={`Toggle high-contrast theme. Currently in ${isDark ? "dark" : "high-contrast light"} mode.`}
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-md transition-colors border focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
        isDark
          ? "bg-zinc-900 border-zinc-700 text-zinc-100 hover:bg-zinc-800 hover:border-zinc-600"
          : "bg-white border-zinc-950 text-zinc-950 hover:bg-zinc-100 shadow-sm"
      }`}
    >
      {isDark ? (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
          <span>High Contrast Light</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-zinc-950" aria-hidden="true" />
          <span className="font-bold">Dark Mode</span>
        </>
      )}
    </button>
  );
};
