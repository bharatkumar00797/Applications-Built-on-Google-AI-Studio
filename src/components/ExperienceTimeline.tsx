import React from "react";
import { ThemeMode } from "../types";
import { EXPERIENCES } from "../data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight } from "lucide-react";

interface ExperienceTimelineProps {
  theme: ThemeMode;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section id="experience" className="py-14 border-b transition-colors border-inherit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
            Career Journey & Track Record
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isDark ? "text-zinc-50" : "text-zinc-950"
            }`}
          >
            Professional Work Experience
          </h2>
          <p
            className={`text-xs sm:text-sm mt-1 max-w-2xl ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Verified history spanning software development (.NET, C#, Python), technical support operations, compliance verification (KYC), and production AI engineering.
          </p>
        </div>

        {/* Chronological Timeline */}
        <div className="relative pl-4 sm:pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 space-y-8">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline marker */}
              <div
                className={`absolute -left-[23px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-colors ${
                  exp.id === "ai-engineer"
                    ? "bg-blue-600 border-white dark:border-zinc-950 ring-4 ring-blue-500/20"
                    : isDark
                    ? "bg-zinc-800 border-zinc-950 group-hover:bg-blue-500"
                    : "bg-zinc-300 border-white group-hover:bg-blue-600"
                }`}
                aria-hidden="true"
              />

              <div
                className={`rounded-lg border p-5 transition-colors ${
                  isDark
                    ? "bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 text-zinc-100"
                    : "bg-white border-zinc-300 hover:border-zinc-400 text-zinc-900 shadow-xs"
                }`}
              >
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 border-b pb-3 mb-3 border-inherit">
                  <div>
                    <h3 className="text-base font-bold tracking-tight text-blue-600 dark:text-blue-400">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold flex items-center gap-1.5 mt-0.5">
                      <span>{exp.company}</span>
                      <span className="opacity-40" aria-hidden="true">
                        ·
                      </span>
                      <span className="text-xs font-normal opacity-80">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs opacity-75">
                    <span className="flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-1.5 text-xs leading-relaxed">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="pt-3 mt-3 border-t flex flex-wrap gap-x-2 gap-y-1 text-[11px] opacity-75 border-inherit">
                  <span className="font-semibold">Tools & Focus:</span>
                  {exp.technologies.map((tech, i) => (
                    <span key={tech}>
                      {tech}
                      {i < exp.technologies.length - 1 && <span className="ml-2 opacity-40">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
