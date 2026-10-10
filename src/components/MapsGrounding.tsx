import React, { useState } from "react";
import { ThemeMode } from "../types";
import { MapPin, Navigation, Compass, Globe, Loader2, Sparkles, Building2 } from "lucide-react";

interface MapsGroundingProps {
  theme: ThemeMode;
}


const renderInline = (text: string): React.ReactNode[] =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );

const renderMarkdown = (text: string): React.ReactNode[] =>
  text
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((raw, i) => {
      const line = raw.trim();
      const heading = line.match(/^#{1,6}\s+(.*)$/);
      if (heading) return <p key={i} className="font-bold pt-1">{renderInline(heading[1])}</p>;
      const bullet = line.match(/^[-*•]\s+(.*)$/);
      if (bullet) return <p key={i} className="pl-3">• {renderInline(bullet[1])}</p>;
      return <p key={i}>{renderInline(line)}</p>;
    });

export const MapsGrounding: React.FC<MapsGroundingProps> = ({ theme }) => {
  const isDark = theme === "dark";
  const [selectedPrompt, setSelectedPrompt] = useState(
    "What are the major software hubs, tech corridors, and connectivity near Nadiad, Ahmedabad, and GIFT City for an AI / full-stack engineer?"
  );
  const [customQuery, setCustomQuery] = useState("");
  const [isQuerying, setIsQuerying] = useState(false);
  const [groundedText, setGroundedText] = useState<string | null>(null);
  const [modelUsed, setModelUsed] = useState<string>("gemini-3.5-flash (with googleMaps)");

  const presetQueries = [
    {
      label: "GIFT City & Ahmedabad Tech Corridor",
      query: "Detail the transit distance, connectivity, and major software parks between Nadiad and GIFT City / SG Highway Ahmedabad for an engineering commuter.",
    },
    {
      label: "Charotar University (CHARUSAT) Ecosystem",
      query: "Provide location details and surrounding software development presence around Charotar University of Science and Technology (CHARUSAT) in Changa / Nadiad, Gujarat.",
    },
    {
      label: "Relocation & International Reach",
      query: "Analyze Bharatkumar's geographical versatility across Canada (Toronto, Barrie, Belleville, Fredericton) and India (Gujarat) for remote and hybrid engineering teams.",
    },
  ];

  const handleRunQuery = async (queryText?: string) => {
    const text = queryText || customQuery || selectedPrompt;
    setIsQuerying(true);
    try {
      const res = await fetch("/api/maps-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text }),
      });
      const data = await res.json();
      setGroundedText(data.text);
      if (data.modelUsed) setModelUsed(data.modelUsed);
    } catch (e: any) {
      console.error("Maps query error:", e);
      setGroundedText("Failed to query Google Maps grounding API. Please retry.");
    } finally {
      setIsQuerying(false);
    }
  };

  return (
    <div
      className={`rounded-lg border p-6 transition-colors ${
        isDark ? "bg-zinc-900/60 border-zinc-800 text-zinc-100" : "bg-white border-zinc-300 text-zinc-900 shadow-xs"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 mb-5 border-inherit">
        <div className="flex items-center gap-3">
          <div
            className={`p-2.5 rounded-md border ${
              isDark ? "bg-zinc-800 border-zinc-700 text-amber-400" : "bg-zinc-100 border-zinc-300 text-amber-600"
            }`}
          >
            <Compass className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span>Google Maps Grounding & Geographic Intelligence</span>
              <span
                className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded border ${
                  isDark ? "bg-zinc-950 border-zinc-800 text-amber-300" : "bg-amber-50 border-amber-300 text-amber-800"
                }`}
              >
                gemini-3.5-flash + googleMaps
              </span>
            </h2>
            <p className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
              Real-time grounded location data covering Bharatkumar's base in Nadiad, Gujarat, proximity to tech corridors, and global relocation readiness.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Nadiad, Gujarat (IST · UTC+5:30)</span>
        </div>
      </div>

      {/* Preset Queries */}
      <div className="space-y-3 mb-4">
        <span className="text-xs font-semibold opacity-75">
          Select or run a Google Maps grounded inquiry:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {presetQueries.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setSelectedPrompt(item.query);
                handleRunQuery(item.query);
              }}
              className={`p-3 text-left rounded-md border text-xs transition-colors flex flex-col justify-between ${
                selectedPrompt === item.query
                  ? isDark
                    ? "bg-amber-950/60 border-amber-600 text-amber-200"
                    : "bg-amber-50 border-amber-600 text-amber-950 font-medium"
                  : isDark
                  ? "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                  : "bg-zinc-50 border-zinc-300 text-zinc-700 hover:text-zinc-950"
              }`}
            >
              <div className="font-semibold flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{item.label}</span>
              </div>
              <span className="text-[11px] opacity-70 line-clamp-2">{item.query}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Custom Query Input */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 pt-1">
        <input
          type="text"
          value={customQuery}
          onChange={(e) => setCustomQuery(e.target.value)}
          placeholder="Ask Google Maps about tech hubs, commute times, or software parks..."
          className={`flex-1 px-3 py-2 text-xs rounded-md border focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
            isDark
              ? "bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-600"
              : "bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400"
          }`}
        />
        <button
          type="button"
          disabled={isQuerying}
          onClick={() => handleRunQuery()}
          className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-md shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none disabled:opacity-50 ${
            isDark ? "bg-amber-600 hover:bg-amber-500 text-white" : "bg-amber-700 hover:bg-amber-600 text-white"
          }`}
        >
          {isQuerying ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Grounding with Maps...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Query Google Maps</span>
            </>
          )}
        </button>
      </div>

      {/* Grounded Result Display */}
      {groundedText && (
        <div
          className={`mt-5 p-4 rounded-md border text-xs leading-relaxed space-y-2 ${
            isDark ? "bg-zinc-950/80 border-zinc-800 text-zinc-200" : "bg-zinc-50 border-zinc-300 text-zinc-900"
          }`}
        >
          <div className="flex items-center justify-between border-b pb-2 border-inherit font-semibold text-amber-600 dark:text-amber-400">
            <div className="flex items-center gap-1.5">
              <Navigation className="w-4 h-4" />
              <span>Grounded Location Intelligence</span>
            </div>
            <span className="font-mono text-[10px] opacity-70">{modelUsed}</span>
          </div>
          <div className="pt-1 space-y-1.5">{renderMarkdown(groundedText)}</div>
        </div>
      )}
    </div>
  );
};
