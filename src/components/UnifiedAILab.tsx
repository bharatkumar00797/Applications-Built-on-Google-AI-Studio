import React, { useState } from "react";
import { ThemeMode } from "../types";
import { AudioSummary } from "./AudioSummary";
import { VeoVideoGenerator } from "./VeoVideoGenerator";
import { MapsGrounding } from "./MapsGrounding";
import {
  Volume2,
  Film,
  Compass,
  Sparkles,
  Info,
  Layers,
} from "lucide-react";

interface UnifiedAILabProps {
  theme: ThemeMode;
}

export const UnifiedAILab: React.FC<UnifiedAILabProps> = ({ theme }) => {
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState<"audio" | "veo" | "maps">("audio");

  return (
    <section id="ai-lab" className="py-16 border-b transition-colors border-inherit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Applied Multimodal Prototypes</span>
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? "text-zinc-50" : "text-zinc-950"
              }`}
            >
              AI Engineering Lab & Sandbox
            </h2>
            <p
              className={`text-xs sm:text-sm mt-1 max-w-2xl ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Hands-on implementations demonstrating real Google Gemini model capabilities: text-to-speech voice generation, Veo 3.1 video keyframe synthesis, and real-time Google Maps grounding.
            </p>
          </div>

          {/* Unified Lab Tab Switcher */}
          <div
            className={`inline-flex rounded-lg border p-1 text-xs ${
              isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-100 border-zinc-300"
            }`}
            role="tablist"
            aria-label="AI Lab Modules"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "audio"}
              onClick={() => setActiveTab("audio")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold rounded-md transition-all ${
                activeTab === "audio"
                  ? isDark
                    ? "bg-zinc-800 text-emerald-400 shadow-xs"
                    : "bg-white text-emerald-700 font-bold shadow-xs border border-zinc-300"
                  : isDark
                  ? "text-zinc-400 hover:text-zinc-200"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Audio Bio (TTS)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "veo"}
              onClick={() => setActiveTab("veo")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold rounded-md transition-all ${
                activeTab === "veo"
                  ? isDark
                    ? "bg-zinc-800 text-purple-400 shadow-xs"
                    : "bg-white text-purple-700 font-bold shadow-xs border border-zinc-300"
                  : isDark
                  ? "text-zinc-400 hover:text-zinc-200"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Veo 3.1 Studio</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "maps"}
              onClick={() => setActiveTab("maps")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 font-semibold rounded-md transition-all ${
                activeTab === "maps"
                  ? isDark
                    ? "bg-zinc-800 text-amber-400 shadow-xs"
                    : "bg-white text-amber-700 font-bold shadow-xs border border-zinc-300"
                  : isDark
                  ? "text-zinc-400 hover:text-zinc-200"
                  : "text-zinc-600 hover:text-zinc-950"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Maps Grounding</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="transition-all duration-200">
          {activeTab === "audio" && (
            <div className="space-y-3">
              <div
                className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                  isDark ? "bg-zinc-950/80 border-zinc-800 text-zinc-400" : "bg-zinc-50 border-zinc-200 text-zinc-600"
                }`}
              >
                <span>Module: Voice synthesis powered by <code className="font-mono text-emerald-500 font-semibold">gemini-3.8-flash-tts</code></span>
                <span className="text-[11px] font-mono">Real-time Audio Generation</span>
              </div>
              <AudioSummary theme={theme} />
            </div>
          )}

          {activeTab === "veo" && (
            <div className="space-y-3">
              <div
                className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                  isDark ? "bg-zinc-950/80 border-zinc-800 text-zinc-400" : "bg-zinc-50 border-zinc-200 text-zinc-600"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Generative Video Sandbox: Animate architectural blueprints or uploaded photos using <code className="font-mono text-purple-500 font-semibold">veo-3.1-fast-generate-preview</code>.</span>
                </div>
                <span className="text-[11px] font-mono shrink-0 hidden sm:inline">On-Demand Synthesis</span>
              </div>
              <VeoVideoGenerator theme={theme} />
            </div>
          )}

          {activeTab === "maps" && (
            <div className="space-y-3">
              <div
                className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                  isDark ? "bg-zinc-950/80 border-zinc-800 text-zinc-400" : "bg-zinc-50 border-zinc-200 text-zinc-600"
                }`}
              >
                <span>Geographic Grounding: Real-time location intelligence via <code className="font-mono text-amber-500 font-semibold">gemini-3.5-flash</code> and Google Maps.</span>
                <span className="text-[11px] font-mono">Transit & Tech Corridors</span>
              </div>
              <MapsGrounding theme={theme} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
