import React, { useState, useEffect } from "react";
import { ThemeMode } from "../types";
import { PROFILE_INFO } from "../data/portfolioData";
import { generateResumePdf } from "../utils/generateResumePdf";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Check,
  Copy,
  Bot,
  FileDown,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Code2,
} from "lucide-react";

interface HeroProps {
  theme: ThemeMode;
  onOpenChat: () => void;
  onScrollToProjects: () => void;
  onScrollToAILab: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  theme,
  onOpenChat,
  onScrollToProjects,
  onScrollToAILab,
}) => {
  const isDark = theme === "dark";
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [copiedToast, setCopiedToast] = useState<string | null>(null);
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

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(label);
    setCopiedToast(`Copied ${label}: ${text}`);
    setTimeout(() => {
      setCopiedKey(null);
      setCopiedToast(null);
    }, 2800);
  };

  return (
    <section
      id="overview"
      className="relative overflow-hidden py-14 md:py-22 border-b transition-colors border-inherit"
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
                <span>OPEN TO FULL-STACK & JUNIOR AI/ML ROLES</span>
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
                Full-Stack Developer & AI Systems Builder —
                Next.js, FastAPI, Python OCR pipelines, and AWS Serverless architectures.
              </p>
            </div>

            {/* Narrative summary */}
            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? "text-zinc-400" : "text-zinc-700"
              }`}
            >
              Full-stack developer building production software across Python, Next.js, FastAPI, PostgreSQL, and AWS Serverless (Lambda, DynamoDB). Currently engineering AI agent governance telemetry dashboards, automated research newsletter pipelines, and robust OCR extraction workflows. Backed by 3.7+ years in KYC fraud verification at Pi Network, enterprise reporting systems experience, and post-graduate project management credentials from Loyalist College (Canada).
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              {/* Download Resume Button (Recruiter priority #1) */}
              <button
                type="button"
                onClick={generateResumePdf}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 bg-blue-600 hover:bg-blue-500 text-white focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none cursor-pointer"
                aria-label="Download Bharatkumar Chandvani's Resume in PDF format"
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </button>

              {/* Career Assistant Chat Button (Unified Name) */}
              <button
                type="button"
                onClick={onOpenChat}
                className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md border shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none cursor-pointer ${
                  isDark
                    ? "bg-zinc-900 border-zinc-700 hover:bg-zinc-800 text-white"
                    : "bg-white border-zinc-400 hover:bg-zinc-100 text-zinc-900"
                }`}
              >
                <Bot className="w-4 h-4 text-blue-500" />
                <span>Career Assistant</span>
              </button>

              {/* View Projects shortcut */}
              <button
                type="button"
                onClick={onScrollToProjects}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-md border transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none cursor-pointer ${
                  isDark
                    ? "bg-zinc-950 border-zinc-800 text-zinc-300 hover:bg-zinc-900"
                    : "bg-zinc-50 border-zinc-300 text-zinc-800 hover:bg-zinc-100"
                }`}
              >
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* AI Lab Sandbox shortcut */}
              <button
                type="button"
                onClick={onScrollToAILab}
                className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold rounded-md border transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none cursor-pointer ${
                  isDark
                    ? "bg-zinc-950 border-zinc-800 text-purple-300 hover:bg-zinc-900"
                    : "bg-purple-50 border-purple-200 text-purple-900 hover:bg-purple-100"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-500" />
                <span>AI Lab Sandbox</span>
              </button>
            </div>

            {/* Verified Contact Details with Direct Clickable Links + Copy Badges */}
            <div
              className={`pt-5 border-t flex flex-wrap items-center gap-y-3 gap-x-6 text-xs ${
                isDark ? "border-zinc-800 text-zinc-400" : "border-zinc-300 text-zinc-700"
              }`}
            >
              {/* Clickable Email Link */}
              <div className="flex items-center gap-1.5 bg-inherit">
                <a
                  href={`mailto:${PROFILE_INFO.contact.email}`}
                  className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  title="Open mail client to send message"
                >
                  <Mail className="w-3.5 h-3.5 text-rose-500" aria-hidden="true" />
                  <span>{PROFILE_INFO.contact.email}</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PROFILE_INFO.contact.email, "email")}
                  className="p-1 rounded hover:bg-zinc-500/15 transition-colors text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedKey === "email" ? (
                    <Check className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <Copy className="w-3 h-3 opacity-70" />
                  )}
                </button>
              </div>

              {/* Clickable Phone Link */}
              <div className="flex items-center gap-1.5 bg-inherit">
                <a
                  href={`tel:${PROFILE_INFO.contact.phone}`}
                  className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
                  title="Call Bharatkumar Chandvani"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-500" aria-hidden="true" />
                  <span>{PROFILE_INFO.contact.phone}</span>
                </a>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PROFILE_INFO.contact.phone, "phone")}
                  className="p-1 rounded hover:bg-zinc-500/15 transition-colors text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedKey === "phone" ? (
                    <Check className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <Copy className="w-3 h-3 opacity-70" />
                  )}
                </button>
              </div>

              {/* GitHub */}
              <a
                href={PROFILE_INFO.contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                <span>github.com/bharatkumar00797</span>
              </a>

              {/* LinkedIn */}
              <a
                href={PROFILE_INFO.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors font-medium"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-600" aria-hidden="true" />
                <span>linkedin.com/in/bharat-chandvani</span>
              </a>
            </div>

            {/* Visual copy feedback toast notification */}
            {copiedToast && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-semibold bg-emerald-500 text-white shadow-lg animate-in fade-in slide-in-from-top-1">
                <Check className="w-3.5 h-3.5" />
                <span>{copiedToast}</span>
              </div>
            )}
          </div>

          {/* Quick Metrics & Highlights Card */}
          <div
            className={`lg:col-span-4 rounded-xl p-6 border transition-colors relative overflow-hidden ${
              isDark
                ? "bg-zinc-900/60 border-zinc-800 text-zinc-100"
                : "bg-white border-zinc-300 text-zinc-900 shadow-sm"
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-3 border-inherit">
                <div className="text-xs font-bold uppercase tracking-wider opacity-70">
                  Candidate Snapshot
                </div>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  Ready to Deploy
                </span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-500">Core Stack</div>
                  <div className="font-semibold text-sm mt-0.5">
                    Python · Next.js · FastAPI · AWS · .NET 8
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-500">Key Projects</div>
                  <div className="font-medium mt-0.5 leading-snug">
                    Agent Governance Dashboard, AI Newsletter Pipeline, OCR Extraction, AWS Serverless
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-500">Domain Background</div>
                  <div className="font-medium mt-0.5 leading-snug">
                    3.7+ Years KYC Identity Fraud Verification · Logistics Operations · Project Management
                  </div>
                </div>

                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-500">Education</div>
                  <div className="font-medium mt-0.5 leading-snug">
                    PG Project Management (Toronto, Canada) · B.E. Mechanical Engineering
                  </div>
                </div>
              </div>

              {/* Direct Resume Download Card Action */}
              <div className="pt-3 border-t border-inherit">
                <button
                  type="button"
                  onClick={generateResumePdf}
                  className="w-full py-2.5 px-3 rounded-md border text-xs font-bold transition-all flex items-center justify-center gap-2 bg-blue-50 dark:bg-blue-950/40 border-blue-300 dark:border-blue-800 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 cursor-pointer"
                >
                  <FileDown className="w-3.5 h-3.5" />
                  <span>Download Complete Resume (PDF)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
