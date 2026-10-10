import React, { useState } from "react";
import { ProjectItem, ThemeMode } from "../types";
import {
  X,
  ExternalLink,
  Github,
  Play,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  Server,
  FileText,
  Mail,
  Shield,
  Activity,
  BarChart3,
  Database,
  ArrowRight,
  Maximize2,
} from "lucide-react";

interface ProjectMockupModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const ProjectMockupModal: React.FC<ProjectMockupModalProps> = ({
  project,
  isOpen,
  onClose,
  theme,
}) => {
  const isDark = theme === "dark";
  const [activeTab, setActiveTab] = useState<"visual" | "architecture" | "specs">("visual");

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        className={`relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-xl border shadow-2xl overflow-hidden transition-all ${
          isDark
            ? "bg-zinc-950 border-zinc-800 text-zinc-100"
            : "bg-white border-zinc-300 text-zinc-900"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-inherit">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`p-2 rounded-lg border ${
                isDark
                  ? "bg-blue-950/60 border-blue-800 text-blue-400"
                  : "bg-blue-50 border-blue-200 text-blue-700"
              }`}
            >
              <Cpu className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 id="project-modal-title" className="text-base sm:text-lg font-bold truncate">
                  {project.title}
                </h3>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    isDark
                      ? "bg-zinc-900 border-zinc-700 text-zinc-300"
                      : "bg-zinc-100 border-zinc-300 text-zinc-700"
                  }`}
                >
                  {project.category}
                </span>
              </div>
              <p className={`text-xs truncate ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
                {project.tagline}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className={`p-2 rounded-lg border transition-colors ${
              isDark
                ? "border-zinc-800 hover:bg-zinc-900 text-zinc-400 hover:text-zinc-200"
                : "border-zinc-200 hover:bg-zinc-100 text-zinc-600 hover:text-zinc-900"
            }`}
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center px-4 sm:px-5 border-b border-inherit gap-3 text-xs font-semibold bg-zinc-500/5">
          <button
            type="button"
            onClick={() => setActiveTab("visual")}
            className={`py-2.5 border-b-2 transition-colors inline-flex items-center gap-1.5 ${
              activeTab === "visual"
                ? "border-blue-600 text-blue-600 dark:text-blue-400 font-bold"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Interactive Demo & UI</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("architecture")}
            className={`py-2.5 border-b-2 transition-colors inline-flex items-center gap-1.5 ${
              activeTab === "architecture"
                ? "border-blue-600 text-blue-600 dark:text-blue-400 font-bold"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>System Architecture</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("specs")}
            className={`py-2.5 border-b-2 transition-colors inline-flex items-center gap-1.5 ${
              activeTab === "specs"
                ? "border-blue-600 text-blue-600 dark:text-blue-400 font-bold"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Highlights</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {activeTab === "visual" && (
            <div className="space-y-4">
              {/* Dynamic Mockup View according to Project Type */}
              {project.id === "agent-governance-dashboard" && (
                <div
                  className={`rounded-lg border p-4 space-y-4 font-mono text-xs ${
                    isDark ? "bg-zinc-900/90 border-zinc-800" : "bg-zinc-900 text-zinc-100 border-zinc-800"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="text-zinc-400 text-[11px] ml-2">agent-governance.enterprise.internal</span>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800">
                      LIVE FLEET: HEALTHY
                    </span>
                  </div>

                  {/* Top Metric Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800">
                      <div className="text-[10px] text-zinc-400">REGISTERED AGENTS</div>
                      <div className="text-lg font-bold text-white mt-1">16 Active</div>
                      <div className="text-[9px] text-emerald-400">100% policy passing</div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800">
                      <div className="text-[10px] text-zinc-400">24H TOKEN CONSUMPTION</div>
                      <div className="text-lg font-bold text-purple-400 mt-1">1.48M</div>
                      <div className="text-[9px] text-zinc-400">Avg $0.0028 / req</div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800">
                      <div className="text-[10px] text-zinc-400">P95 LATENCY</div>
                      <div className="text-lg font-bold text-sky-400 mt-1">420ms</div>
                      <div className="text-[9px] text-emerald-400">-18% vs baseline</div>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-950/80 border border-zinc-800">
                      <div className="text-[10px] text-zinc-400">AUDIT ANOMALIES</div>
                      <div className="text-lg font-bold text-emerald-400 mt-1">0 Flagged</div>
                      <div className="text-[9px] text-zinc-400">Strict RBAC active</div>
                    </div>
                  </div>

                  {/* Agent Roster Table */}
                  <div className="rounded border border-zinc-800 overflow-hidden text-[11px]">
                    <div className="grid grid-cols-12 bg-zinc-950 p-2 font-bold text-zinc-400 border-b border-zinc-800">
                      <span className="col-span-4">Agent Identifier</span>
                      <span className="col-span-3">Primary Model</span>
                      <span className="col-span-3">Tool Permissions</span>
                      <span className="col-span-2 text-right">Status</span>
                    </div>
                    <div className="grid grid-cols-12 p-2 border-b border-zinc-800/60 items-center">
                      <span className="col-span-4 font-semibold text-white">doc-verifier-agent-v2</span>
                      <span className="col-span-3 text-zinc-300">gemini-3.5-flash</span>
                      <span className="col-span-3 text-zinc-400">ocr_read, hash_check</span>
                      <span className="col-span-2 text-right text-emerald-400">● Operational</span>
                    </div>
                    <div className="grid grid-cols-12 p-2 border-b border-zinc-800/60 items-center">
                      <span className="col-span-4 font-semibold text-white">news-synthesis-orchestrator</span>
                      <span className="col-span-3 text-zinc-300">gemini-3.8-flash</span>
                      <span className="col-span-3 text-zinc-400">rss_fetch, send_digest</span>
                      <span className="col-span-2 text-right text-emerald-400">● Operational</span>
                    </div>
                    <div className="grid grid-cols-12 p-2 items-center">
                      <span className="col-span-4 font-semibold text-white">support-ticket-classifier</span>
                      <span className="col-span-3 text-zinc-300">gemini-3.1-flash-lite</span>
                      <span className="col-span-3 text-zinc-400">db_query, slack_alert</span>
                      <span className="col-span-2 text-right text-emerald-400">● Operational</span>
                    </div>
                  </div>
                </div>
              )}

              {project.id === "ai-newsletter-automation" && (
                <div
                  className={`rounded-lg border p-4 space-y-4 font-mono text-xs ${
                    isDark ? "bg-zinc-900/90 border-zinc-800" : "bg-zinc-900 text-zinc-100 border-zinc-800"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <span className="text-zinc-300 font-bold">PIPELINE EXECUTION: DAILY AI SYNTHESIS</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-purple-950 text-purple-300 border border-purple-800">
                      CRON: 06:00 UTC (DAILY)
                    </span>
                  </div>

                  {/* Pipeline Flow Stages */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="p-3 rounded bg-zinc-950/80 border border-zinc-800">
                      <div className="text-[10px] text-zinc-400 font-bold">STEP 1: INGESTION</div>
                      <div className="text-xs text-white mt-1">48 Articles Fetched</div>
                      <div className="text-[10px] text-zinc-500">arXiv, HN, OpenAI News, HuggingFace</div>
                    </div>
                    <div className="p-3 rounded bg-zinc-950/80 border border-zinc-800">
                      <div className="text-[10px] text-zinc-400 font-bold">STEP 2: LLM SUMMARIZER</div>
                      <div className="text-xs text-purple-400 mt-1">Top 6 High-Impact Papers</div>
                      <div className="text-[10px] text-zinc-500">Key benchmarks & code snippets</div>
                    </div>
                    <div className="p-3 rounded bg-zinc-950/80 border border-zinc-800">
                      <div className="text-[10px] text-zinc-400 font-bold">STEP 3: DISPATCH</div>
                      <div className="text-xs text-emerald-400 mt-1">HTML Digest Dispatched</div>
                      <div className="text-[10px] text-zinc-500">100% Deliverability (0 bounces)</div>
                    </div>
                  </div>

                  {/* Formatted Digest Preview */}
                  <div className="p-3 rounded bg-zinc-950 border border-zinc-800 space-y-2">
                    <div className="text-[11px] font-bold text-white flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      <span>Subject: [The AI Signal #42] Scalable Speculative Decoding & Agentic Tool Governance</span>
                    </div>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">
                      "Today's breakthrough: Researchers demonstrate 2.8x speedups in inference pipelines using multi-token speculative decoding. Plus, how production engineering teams are enforcing strict JSON schema contracts on tool-calling loops..."
                    </p>
                  </div>
                </div>
              )}

              {project.id === "pdf-data-extraction-ocr" && (
                <div
                  className={`rounded-lg border p-4 space-y-4 font-mono text-xs ${
                    isDark ? "bg-zinc-900/90 border-zinc-800" : "bg-zinc-900 text-zinc-100 border-zinc-800"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <span className="text-zinc-300 font-bold">OCR DATA EXTRACTION & VERIFICATION PIPELINE</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800">
                      ACCURACY: 99.7%
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 rounded bg-zinc-950 border border-zinc-800 space-y-2">
                      <div className="text-[10px] font-bold text-zinc-400">INPUT: SCANNED REPORT PAGE</div>
                      <div className="p-3 rounded border border-dashed border-zinc-700 bg-zinc-900 text-zinc-400 text-[10px] space-y-1">
                        <div>[Document: Annual_Financial_Report_2024.pdf]</div>
                        <div>Page 18 - Segment Revenue & Operating Costs</div>
                        <div className="text-amber-400">Scanning bounding boxes: 42 cells detected</div>
                      </div>
                    </div>
                    <div className="p-3 rounded bg-zinc-950 border border-zinc-800 space-y-2">
                      <div className="text-[10px] font-bold text-zinc-400">OUTPUT: STRUCTURED EXCEL / JSON</div>
                      <div className="p-2.5 rounded bg-zinc-900 text-[10px] text-emerald-400 font-mono space-y-1">
                        <div>{`{ "q4_revenue": "$4,250,000", "delta": "+14.2%",`}</div>
                        <div>{`  "operating_margin": "28.4%", "verified": true }`}</div>
                        <div className="text-zinc-400 text-[9px] pt-1">Exported: /output/financials_extracted.xlsx</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {project.id === "web-application-aws-serverless" && (
                <div
                  className={`rounded-lg border p-4 space-y-4 font-mono text-xs ${
                    isDark ? "bg-zinc-900/90 border-zinc-800" : "bg-zinc-900 text-zinc-100 border-zinc-800"
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                    <span className="text-zinc-300 font-bold">AWS SERVERLESS APPLICATION TOPOLOGY</span>
                    <span className="px-2 py-0.5 rounded text-[10px] bg-sky-950 text-sky-300 border border-sky-800">
                      US-EAST-1 · PRODUCTION
                    </span>
                  </div>
                  <div className="p-4 rounded bg-zinc-950 border border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-center">
                    <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 min-w-[100px]">
                      <div className="text-[10px] text-zinc-400">CLIENT</div>
                      <div className="font-bold text-white text-xs mt-0.5">S3 + CloudFront</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-600" />
                    <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 min-w-[100px]">
                      <div className="text-[10px] text-zinc-400">GATEWAY</div>
                      <div className="font-bold text-sky-400 text-xs mt-0.5">API Gateway</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-600" />
                    <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 min-w-[100px]">
                      <div className="text-[10px] text-zinc-400">COMPUTE</div>
                      <div className="font-bold text-amber-400 text-xs mt-0.5">AWS Lambda (Node)</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-600" />
                    <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 min-w-[100px]">
                      <div className="text-[10px] text-zinc-400">PERSISTENCE</div>
                      <div className="font-bold text-purple-400 text-xs mt-0.5">DynamoDB (NoSQL)</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Generic Visual if other project */}
              {!["agent-governance-dashboard", "ai-newsletter-automation", "pdf-data-extraction-ocr", "web-application-aws-serverless"].includes(project.id) && (
                <div
                  className={`rounded-lg border p-6 text-center space-y-3 font-mono text-xs ${
                    isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-900 text-zinc-100 border-zinc-800"
                  }`}
                >
                  <Server className="w-8 h-8 text-blue-400 mx-auto" />
                  <div className="font-bold text-sm text-white">{project.title}</div>
                  <p className="text-zinc-400 max-w-md mx-auto text-xs">{project.tagline}</p>
                  <div className="pt-2 flex flex-wrap items-center justify-center gap-1.5">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-zinc-800 border border-zinc-700 text-zinc-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "architecture" && (
            <div className="space-y-4">
              <div
                className={`p-4 rounded-lg border text-xs leading-relaxed space-y-2 ${
                  isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-50 border-zinc-200"
                }`}
              >
                <div className="font-bold text-sm text-blue-600 dark:text-blue-400">
                  Architectural Blueprint & Design Choices
                </div>
                <p className={isDark ? "text-zinc-300" : "text-zinc-700"}>
                  {project.architectureHighlights}
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider opacity-70">
                  Key Deliverables & Verified Outcomes
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {project.achievements.map((ach, idx) => (
                    <div
                      key={idx}
                      className={`p-3 rounded-lg border text-xs flex items-start gap-2.5 ${
                        isDark ? "bg-zinc-900/50 border-zinc-800" : "bg-white border-zinc-200 shadow-xs"
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>{ach}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider opacity-70">
                  Full Technology Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-md text-xs font-semibold border ${
                        isDark
                          ? "bg-zinc-900 border-zinc-700 text-blue-300"
                          : "bg-blue-50 border-blue-200 text-blue-900"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`p-4 rounded-lg border text-xs space-y-2 ${
                  isDark ? "bg-zinc-900/50 border-zinc-800 text-zinc-300" : "bg-zinc-50 border-zinc-200 text-zinc-700"
                }`}
              >
                <div className="font-bold">Project Overview</div>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-inherit flex flex-wrap items-center justify-between gap-3 bg-zinc-500/5">
          <div className="text-xs opacity-70 font-mono">
            {project.category} · Verified GitHub Repository
          </div>

          <div className="flex items-center gap-2.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-semibold border transition-colors ${
                  isDark
                    ? "bg-zinc-900 border-zinc-700 hover:bg-zinc-800 text-white"
                    : "bg-white border-zinc-300 hover:bg-zinc-100 text-zinc-900 shadow-xs"
                }`}
              >
                <Github className="w-3.5 h-3.5" />
                <span>View Repository</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1.5 rounded-md text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
