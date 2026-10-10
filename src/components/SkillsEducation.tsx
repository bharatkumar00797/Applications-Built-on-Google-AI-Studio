import React from "react";
import { ThemeMode } from "../types";
import { EDUCATIONS, CERTIFICATIONS, SKILL_CATEGORIES } from "../data/portfolioData";
import { GraduationCap, Award, CheckCircle, BookOpen, Layers } from "lucide-react";

interface SkillsEducationProps {
  theme: ThemeMode;
}

export const SkillsEducation: React.FC<SkillsEducationProps> = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section id="skills" className="py-14 border-b transition-colors border-inherit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Skills Section */}
        <div>
          <div className="mb-6">
            <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Technical Competencies
            </div>
            <h2
              className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? "text-zinc-50" : "text-zinc-950"
              }`}
            >
              Skills & Engineering Stack
            </h2>
            <p
              className={`text-xs sm:text-sm mt-1 max-w-2xl ${
                isDark ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              Grounded across modern generative AI agents, backend development (.NET / Python), relational database optimization, and compliance protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SKILL_CATEGORIES.map((cat) => (
              <div
                key={cat.category}
                className={`rounded-lg border p-4 transition-colors ${
                  isDark
                    ? "bg-zinc-900/50 border-zinc-800 text-zinc-100"
                    : "bg-white border-zinc-300 text-zinc-900 shadow-xs"
                }`}
              >
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-inherit">
                  <Layers className="w-4 h-4 text-blue-500" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">
                    {cat.category}
                  </h3>
                </div>

                <ul className="space-y-1.5 text-xs">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span className={isDark ? "text-zinc-300" : "text-zinc-700"}>
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-blue-500" />
              <h3
                className={`text-lg font-bold tracking-tight ${
                  isDark ? "text-zinc-100" : "text-zinc-900"
                }`}
              >
                Formal Higher Education
              </h3>
            </div>

            <div className="space-y-3">
              {EDUCATIONS.map((edu, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg border p-4 transition-colors ${
                    isDark
                      ? "bg-zinc-900/40 border-zinc-800 text-zinc-200"
                      : "bg-white border-zinc-300 text-zinc-900 shadow-xs"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h4 className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      {edu.degree}
                    </h4>
                    <span className="text-[11px] opacity-75 font-mono">
                      {edu.period}
                    </span>
                  </div>

                  <div className="text-xs font-semibold mt-1">
                    {edu.institution} · <span className="font-normal opacity-80">{edu.location}</span>
                  </div>

                  <p
                    className={`text-xs mt-2 leading-relaxed ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {edu.focus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-emerald-500" />
              <h3
                className={`text-lg font-bold tracking-tight ${
                  isDark ? "text-zinc-100" : "text-zinc-900"
                }`}
              >
                Professional Certifications
              </h3>
            </div>

            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg border p-4 transition-colors ${
                    isDark
                      ? "bg-zinc-900/40 border-zinc-800 text-zinc-200"
                      : "bg-white border-zinc-300 text-zinc-900 shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {cert.name}
                    </h4>
                    <span className="text-[11px] font-mono opacity-75">
                      {cert.year}
                    </span>
                  </div>

                  <div className="text-xs font-semibold mt-0.5 opacity-90">
                    {cert.issuer}
                  </div>

                  <p
                    className={`text-xs mt-1.5 leading-relaxed ${
                      isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}
                  >
                    {cert.highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
