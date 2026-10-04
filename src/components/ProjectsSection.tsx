import React, { useState } from "react";
import { ThemeMode, ProjectItem } from "../types";
import { PROJECTS } from "../data/portfolioData";
import { Github, ExternalLink, Code, CheckCircle2, ArrowRight } from "lucide-react";

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

  const categories = ["All", "Python & Data", "Cloud & AWS", "Full-Stack", "AI Roadmap"];

  const filteredProjects =
    selectedFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-14 border-b transition-colors border-inherit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Featured Work & Repositories
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? "text-zinc-50" : "text-zinc-950"
              }`}
            >
              Open-Source Projects & Cloud Systems
            </h2>
            <p
              className={`text-xs sm:text-sm mt-1 max-w-2xl ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Real production repositories from GitHub showcasing automated OCR text extraction, AWS serverless cloud architectures, infrastructure deployments, and web engineering.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div
            className={`inline-flex items-center gap-1 p-1 rounded-md border text-xs ${
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
                  className={`px-3 py-1.5 font-medium rounded transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                    isSelected
                      ? isDark
                        ? "bg-zinc-800 text-white font-semibold shadow-xs"
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`rounded-lg border p-6 flex flex-col justify-between transition-colors ${
                isDark
                  ? "bg-zinc-900/60 border-zinc-800 hover:border-zinc-700 text-zinc-100"
                  : "bg-white border-zinc-300 hover:border-zinc-400 text-zinc-900 shadow-xs"
              }`}
            >
              <div className="space-y-4">
                {/* Clean unboxed category & status */}
                <div className="flex items-center gap-2 text-xs">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                  <span
                    className={isDark ? "text-zinc-600" : "text-zinc-300"}
                    aria-hidden="true"
                  >
                    ·
                  </span>
                  <span className={isDark ? "text-zinc-400" : "text-zinc-600"}>
                    Open Source on GitHub
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

                {/* Key Architectural Achievements */}
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

                {/* Architectural Highlight Note */}
                <div
                  className={`p-2.5 rounded-md border text-[11px] leading-relaxed ${
                    isDark
                      ? "bg-zinc-950/70 border-zinc-800 text-zinc-400"
                      : "bg-zinc-50 border-zinc-200 text-zinc-700"
                  }`}
                >
                  <span className="font-semibold text-zinc-200 dark:text-zinc-200">
                    Architecture Note:{" "}
                  </span>
                  <span>{project.architectureHighlights}</span>
                </div>

                {/* Technologies List */}
                <div className="pt-2 flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-zinc-500">
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
                className={`pt-5 mt-6 border-t flex items-center justify-between gap-3 text-xs ${
                  isDark ? "border-zinc-800" : "border-zinc-200"
                }`}
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-blue-600 focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-0.5 ${
                    isDark ? "text-zinc-300" : "text-zinc-900"
                  }`}
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>

                <button
                  type="button"
                  onClick={() =>
                    onOpenChatWithTopic(
                      `Tell me about Bharat's "${project.title}" project and how he architected the solution.`
                    )
                  }
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-semibold focus-visible:ring-2 focus-visible:ring-blue-600 rounded px-1 py-0.5"
                >
                  <span>Ask AI Co-Pilot</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
