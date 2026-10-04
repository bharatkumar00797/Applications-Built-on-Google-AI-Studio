import React, { useState, useEffect } from "react";
import { ThemeMode } from "../types";
import { PROFILE_INFO } from "../data/portfolioData";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Check,
  Copy,
  Bot,
  Volume2,
  Film,
  Compass,
  ArrowRight,
  ShieldCheck,
  Code2,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  theme: ThemeMode;
  onOpenChat: () => void;
  onScrollToAudio: () => void;
  onScrollToVeo: () => void;
  onScrollToMaps: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  theme,
  onOpenChat,
  onScrollToAudio,
  onScrollToVeo,
  onScrollToMaps,
}) => {
  const isDark = theme === "dark";
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST is UTC+5:30
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat([], options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section
      id="overview"
      className="relative overflow-hidden py-14 md:py-24 border-b transition-colors border-inherit"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/10 dark:bg-blue-600/10 blur-[130px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Editorial Bio Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Live Status & IST Time Ribbon */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium">
              <span className="inline-flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>OPEN TO JUNIOR AI/ML & FULL-STACK ROLES</span>
              </span>
              <span className="opacity-40" aria-hidden="true">
                ·
              </span>
              <span className="opacity-80">
                Nadiad, Gujarat, India (IST {localTime || "12:00 PM"})
              </span>
            </div>

            {/* Headline and Name */}
            <div className="space-y-3">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] ${
                  isDark ? "text-zinc-50" : "text-zinc-950"
                }`}
              >
                Bharatkumar Chandvani
              </h1>
              <p
                className={`text-xl sm:text-2xl font-bold leading-snug ${
                  isDark ? "text-zinc-200" : "text-zinc-800"
                }`}
              >
                Transitioning into AI engineering with real production systems —
                from Python OCR data extraction and AWS cloud architectures to .NET backends.
              </p>
            </div>

            {/* Narrative summary */}
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? "text-zinc-400" : "text-zinc-700"
              }`}
            >
              Full-stack and cloud developer (Python, AWS Serverless, .NET, SQL, WordPress) transitioning into AI engineering. Experienced in building automated OCR document extraction pipelines, AWS Lambda microservices, enterprise reporting systems, and 3.7+ years of rigorous KYC fraud verification at Pi Network. I combine post-graduate project management credentials with practical software engineering to ship scalable, reliable products.
            </p>

            {/* Primary Action Buttons (Inspired by The Drop Store's punchy call-to-actions) */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenChat}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                  isDark
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-zinc-950 hover:bg-zinc-800 text-white"
                }`}
              >
                <Bot className="w-4 h-4" aria-hidden="true" />
                <span>Chat with AI Co-Pilot</span>
              </button>

              <button
                type="button"
                onClick={onScrollToAudio}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold rounded-md border transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                  isDark
                    ? "bg-zinc-900 border-zinc-700 text-zinc-100 hover:bg-zinc-800"
                    : "bg-white border-zinc-400 text-zinc-950 hover:bg-zinc-100 shadow-xs"
                }`}
              >
                <Volume2 className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                <span>Audio Bio (TTS)</span>
              </button>

              <button
                type="button"
                onClick={onScrollToVeo}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold rounded-md border transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                  isDark
                    ? "bg-zinc-900 border-zinc-700 text-purple-300 hover:bg-zinc-800"
                    : "bg-purple-50 border-purple-300 text-purple-900 hover:bg-purple-100 shadow-xs"
                }`}
              >
                <Film className="w-3.5 h-3.5 text-purple-500" aria-hidden="true" />
                <span>Veo 3.1 Studio</span>
              </button>

              <button
                type="button"
                onClick={onScrollToMaps}
                className={`inline-flex items-center gap-2 px-3.5 py-2.5 text-xs font-semibold rounded-md border transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                  isDark
                    ? "bg-zinc-900 border-zinc-700 text-amber-300 hover:bg-zinc-800"
                    : "bg-amber-50 border-amber-300 text-amber-900 hover:bg-amber-100 shadow-xs"
                }`}
              >
                <Compass className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                <span>Maps Grounding</span>
              </button>
            </div>

            {/* Verified Contact Details with One-Click Copy */}
            <div
              className={`pt-5 border-t flex flex-wrap items-center gap-y-3 gap-x-6 text-xs ${
                isDark ? "border-zinc-800 text-zinc-400" : "border-zinc-300 text-zinc-700"
              }`}
            >
              <a
                href={PROFILE_INFO.contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                <span>github.com/bharatkumar00797</span>
              </a>

              <a
                href={PROFILE_INFO.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
                <span>linkedin.com/in/bharat-chandvani</span>
              </a>

              <button
                type="button"
                onClick={() =>
                  copyToClipboard(PROFILE_INFO.contact.email, "email")
                }
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-rose-500" aria-hidden="true" />
                <span>{PROFILE_INFO.contact.email}</span>
                {copiedKey === "email" ? (
                  <Check className="w-3 h-3 text-emerald-500" />
                ) : (
                  <Copy className="w-3 h-3 opacity-60" />
                )}
              </button>

              <button
                type="button"
                onClick={() =>
                  copyToClipboard(PROFILE_INFO.contact.phone, "phone")
                }
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium cursor-pointer"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-amber-500" aria-hidden="true" />
                <span>{PROFILE_INFO.contact.phone}</span>
                {copiedKey === "phone" ? (
                  <Check className="w-3 h-3 text-emerald-500" />
                ) : (
                  <Copy className="w-3 h-3 opacity-60" />
                )}
              </button>
            </div>
          </div>

          {/* Quick Metrics & Highlights Card (The Drop Store aesthetic) */}
          <div
            className={`lg:col-span-4 rounded-xl p-6 border transition-colors relative overflow-hidden ${
              isDark
                ? "bg-zinc-900/80 border-zinc-800 text-zinc-100"
                : "bg-zinc-50 border-zinc-300 text-zinc-900 shadow-sm"
            }`}
          >
            <div className="space-y-5">
              <div className="border-b pb-3 border-inherit">
                <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  VERIFIED PROFILE METRICS
                </span>
                <div className="mt-1 flex items-baseline justify-between">
                  <span className="text-lg font-black">Core Attributes</span>
                  <span className="text-xs opacity-70">Nadiad, Gujarat</span>
                </div>
              </div>

              {/* Bold Stat Numbers */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg border border-inherit bg-inherit">
                  <div className="text-2xl font-black text-blue-500">3.7+</div>
                  <div className="text-[11px] font-semibold opacity-75 mt-0.5">
                    Years KYC Validation
                  </div>
                  <div className="text-[10px] opacity-60 mt-1">Pi Network compliance</div>
                </div>

                <div className="p-3 rounded-lg border border-inherit bg-inherit">
                  <div className="text-2xl font-black text-emerald-500">5+</div>
                  <div className="text-[11px] font-semibold opacity-75 mt-0.5">
                    Production AI Patterns
                  </div>
                  <div className="text-[10px] opacity-60 mt-1">Tool calling & schema</div>
                </div>

                <div className="p-3 rounded-lg border border-inherit bg-inherit">
                  <div className="text-2xl font-black text-amber-500">3</div>
                  <div className="text-[11px] font-semibold opacity-75 mt-0.5">
                    Academic Degrees
                  </div>
                  <div className="text-[10px] opacity-60 mt-1">Loyalist, Lambton, CHARUSAT</div>
                </div>

                <div className="p-3 rounded-lg border border-inherit bg-inherit">
                  <div className="text-2xl font-black text-purple-500">99.9%</div>
                  <div className="text-[11px] font-semibold opacity-75 mt-0.5">
                    Uptime & Operations
                  </div>
                  <div className="text-[10px] opacity-60 mt-1">Tanmay & Claire Salon</div>
                </div>
              </div>

              {/* Verified Assurance */}
              <div
                className={`p-3 rounded-md border text-xs flex items-start gap-2.5 ${
                  isDark
                    ? "bg-zinc-950/70 border-zinc-800 text-zinc-300"
                    : "bg-white border-zinc-300 text-zinc-800"
                }`}
              >
                <ShieldCheck
                  className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <p className="leading-relaxed text-[11px]">
                  Verified directly from LinkedIn & official resume. Ready for hands-on technical assessment, code pairing, and immediate deployment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
