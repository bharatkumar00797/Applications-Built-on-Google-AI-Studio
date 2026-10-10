import React, { useState } from "react";
import { ThemeMode, ProjectItem } from "../types";
import { PROJECTS } from "../data/portfolioData";
import { ProjectMockupModal } from "./ProjectMockupModal";
import {
  Github,
  ExternalLink,
  Code,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  Play,
  Activity,
  Layers,
  Sparkles,
  Bot,
} from "lucide-react";

interface ProjectsSectionProps {
  theme: ThemeMode;
  onOpenChatWithTopic: (topic: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  theme,
  onOpenChatWithTopic,
}) => {
  const isDark = theme === "dark";
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "AI & Governance",
    "AI Automation",
    "Python & Data",
    "Cloud & AWS",
    "Full-Stack",
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-16 border-b transition-colors border-inherit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Featured Work & Systems
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? "text-zinc-50" : "text-zinc-950"
              }`}
            >
              Projects & Interactive Demos
            </h2>
            <p
              className={`text-xs sm:text-sm mt-1 max-w-2xl ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Featured AI systems, cloud architectures, and automated pipelines. Click "View Demo" on any project to inspect interactive dashboards, OCR workflows, and system topologies.
            </p>
          </div>

          {/* Filter Segmented Control */}
          <div
            className={`inline-flex flex-wrap items-center gap-1 p-1 rounded-lg border text-xs ${
              isDark ? "bg-zinc-900 border-zinc-800" : "bg-zinc-100 border-zinc-300"
            }`}
            role="tablist"
            aria-label="Filter projects by category"
          >
            {categories.map((cat) => {
              const isSelected = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-3 py-1.5 font-medium rounded-md transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                    isSelected
                      ? isDark
                        ? "bg-zinc-800 text-white font-bold shadow-xs"
                        : "bg-white text-zinc-950 font-bold shadow-xs border border-zinc-300"
                      : isDark
                      ? "text-zinc-400 hover:text-zinc-200"
                      : "text-zinc-700 hover:text-zinc-950"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`rounded-xl border p-6 flex flex-col justify-between transition-all duration-200 hover:shadow-md ${
                isDark
                  ? "bg-zinc-900/70 border-zinc-800 hover:border-zinc-700 text-zinc-100"
                  : "bg-white border-zinc-300 hover:border-zinc-400 text-zinc-900 shadow-xs"
              }`}
            >
              <div className="space-y-4">
                {/* Visual Snapshot / Interactive Thumbnail Teaser */}
                <div
                  onClick={() => setActiveModalProject(project)}
                  className={`group relative rounded-lg border p-3 cursor-pointer overflow-hidden transition-all duration-200 ${
                    isDark
                      ? "bg-zinc-950 border-zinc-800 hover:border-blue-700/80"
                      : "bg-zinc-50 border-zinc-200 hover:border-blue-400"
                  }`}
                >
                  <div className="flex items-center justify-between pb-2 border-b border-inherit text-[11px] font-mono opacity-80">
                    <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5" />
                      <span>{project.demoLabel || "Interactive Demo"}</span>
                    </span>
                    <span className="flex items-center gap-1 group-hover:text-blue-500 transition-colors">
                      <Maximize2 className="w-3 h-3" />
                      <span>Expand</span>
                    </span>
                  </div>

                  {/* Visual preview content according to project */}
                  <div className="pt-2">
                    {project.id === "agent-governance-dashboard" && (
                      <div className="space-y-1.5 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                          <span>Active Agents: 16 Operational</span>
                          <span className="text-emerald-500 font-bold">100% Policy Pass</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full w-[88%]" />
                        </div>
                        <div className="text-[10px] text-zinc-500 flex justify-between pt-0.5">
                          <span>Token Burn: 1.48M</span>
                          <span>P95 Latency: 420ms</span>
                        </div>
                      </div>
                    )}

                    {project.id === "ai-newsletter-automation" && (
                      <div className="space-y-1.5 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                          <span>Feed Ingestion: technical sources</span>
                          <span className="text-purple-400 font-bold">Gemini 3 Filter</span>
                        </div>
                        <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-300 truncate">
                          [Daily AI Signal] Scalable Speculative Decoding & Agent Audits
                        </div>
                      </div>
                    )}

                    {project.id === "pdf-data-extraction-ocr" && (
                      <div className="space-y-1.5 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                          <span>Optical Character Recognition Engine</span>
                          <span className="text-emerald-400 font-bold">OCR to Excel/Word</span>
                        </div>
                        <div className="text-[10px] text-zinc-500 flex justify-between">
                          <span>Input: Scanned PDFs</span>
                          <span>Output: Structured Excel/JSON</span>
                        </div>
                      </div>
                    )}

                    {project.id === "web-application-aws-serverless" && (
                      <div className="space-y-1 font-mono text-[10px] text-zinc-400">
                        <div className="flex items-center justify-between">
                          <span>Cloud Topology</span>
                          <span className="text-sky-400">AWS Lambda + DynamoDB</span>
                        </div>
                        <div className="text-zinc-500">Decoupled serverless auto-scaling microservices</div>
                      </div>
                    )}

                    {project.id === "personal-portfolio-scratch" && (
                      <div className="space-y-1 font-mono text-[10px] text-zinc-400">
                        <div className="flex items-center justify-between">
                          <span>GitHub Pages Hosted</span>
                          <span className="text-emerald-400">HTML5 + CSS + JS</span>
                        </div>
                        <div className="text-zinc-500">Live deployment at bharatkumar00797.github.io</div>
                      </div>
                    )}

                    {!["agent-governance-dashboard", "ai-newsletter-automation", "pdf-data-extraction-ocr", "web-application-aws-serverless", "personal-portfolio-scratch"].includes(project.id) && (
                      <div className="font-mono text-[10px] text-zinc-400 flex items-center justify-between">
                        <span>{project.tagline.slice(0, 48)}...</span>
                        <span className="text-blue-400">Click to Inspect</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Unboxed Category Badge */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                  <span className="opacity-40" aria-hidden="true">
                    ·
                  </span>
                  <span className="opacity-70 text-[11px]">
                    GitHub Project
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-lg font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <p
                    className={`text-xs mt-1 leading-snug ${
                      isDark ? "text-zinc-300" : "text-zinc-700"
                    }`}
                  >
                    {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-1.5 pt-1">
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider block ${
                      isDark ? "text-zinc-300" : "text-zinc-800"
                    }`}
                  >
                    Key Implementations:
                  </span>
                  <ul className="space-y-1">
                    {project.achievements.map((ach, idx) => (
                      <li
                        key={idx}
                        className={`text-xs flex items-start gap-2 ${
                          isDark ? "text-zinc-300" : "text-zinc-700"
                        }`}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture Highlights Note */}
                <div
                  className={`p-2.5 rounded-lg border text-[11px] leading-relaxed ${
                    isDark
                      ? "bg-zinc-950/70 border-zinc-800 text-zinc-400"
                      : "bg-zinc-50 border-zinc-200 text-zinc-700"
                  }`}
                >
                  <span className="font-semibold text-zinc-200 dark:text-zinc-200">
                    Architecture:{" "}
                  </span>
                  <span>{project.architectureHighlights}</span>
                </div>

                {/* Technologies List */}
                <div className="pt-1 flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-zinc-500">
                  {project.technologies.map((tech, i) => (
                    <span key={tech}>
                      {tech}
                      {i < project.technologies.length - 1 && (
                        <span className="ml-2 text-zinc-400 dark:text-zinc-600">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                className={`pt-5 mt-5 border-t flex flex-wrap items-center justify-between gap-3 text-xs ${
                  isDark ? "border-zinc-800" : "border-zinc-200"
                }`}
              >
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>View Demo</span>
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-blue-600 ${
                      isDark ? "text-zinc-300" : "text-zinc-800"
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  {project.id === "personal-portfolio-scratch" && (
                    <a
                      href="https://bharatkumar00797.github.io"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Live Site</span>
                    </a>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    onOpenChatWithTopic(
                      `Tell me about Bharat's "${project.title}" project and how he architected the solution.`
                    )
                  }
                  className="inline-flex items-center gap-1 text-zinc-500 hover:text-blue-600 dark:hover:text-blue-400 text-[11px] font-medium"
                >
                  <Bot className="w-3 h-3" />
                  <span>Ask Career Assistant</span>
                  <ArrowRight className="w-2.5 h-2.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Live Interactive Project Modal */}
      <ProjectMockupModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
        theme={theme}
      />
    </section>
  );
};
