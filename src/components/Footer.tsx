import React from "react";
import { ThemeMode } from "../types";
import { PROFILE_INFO } from "../data/portfolioData";
import { generateResumePdf } from "../utils/generateResumePdf";
import { Github, Linkedin, Mail, ArrowUp, FileDown } from "lucide-react";

interface FooterProps {
  theme: ThemeMode;
}

export const Footer: React.FC<FooterProps> = ({ theme }) => {
  const isDark = theme === "dark";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`pt-12 pb-28 sm:pb-20 border-t transition-colors text-xs ${
        isDark
          ? "bg-zinc-950 border-zinc-800 text-zinc-400"
          : "bg-white border-zinc-300 text-zinc-600"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* All content shifted and structured strictly on the Left side */}
        <div className="max-w-2xl space-y-4 text-left">
          {/* Row 1: Interactive Contact & Social Links */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={PROFILE_INFO.contact.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 font-semibold text-zinc-800 dark:text-zinc-200"
              aria-label="Bharatkumar Chandvani GitHub Profile"
            >
              <Github className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" />
              <span>GitHub</span>
            </a>

            <a
              href={PROFILE_INFO.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 font-semibold text-zinc-800 dark:text-zinc-200"
              aria-label="Bharatkumar Chandvani LinkedIn Profile"
            >
              <Linkedin className="w-3.5 h-3.5 text-sky-600" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${PROFILE_INFO.contact.email}`}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 font-semibold text-zinc-800 dark:text-zinc-200"
              aria-label="Send email to Bharatkumar Chandvani"
            >
              <Mail className="w-3.5 h-3.5 text-rose-500" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={generateResumePdf}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-1.5 font-semibold text-blue-600 dark:text-blue-400 cursor-pointer"
              aria-label="Download Resume PDF"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume (PDF)</span>
            </button>

            <span className="opacity-30" aria-hidden="true">
              |
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className={`p-1.5 px-2.5 rounded border transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none inline-flex items-center gap-1.5 ${
                isDark
                  ? "border-zinc-800 hover:border-zinc-700 text-zinc-300 bg-zinc-900/60"
                  : "border-zinc-300 hover:border-zinc-400 text-zinc-800 bg-zinc-50"
              }`}
              title="Scroll back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-medium">Back to top</span>
            </button>
          </div>

          {/* Row 2: Identity, Title & Base Location */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs">
            <span className="font-bold text-zinc-900 dark:text-zinc-100">
              Bharatkumar Chandvani
            </span>
            <span className="opacity-40">·</span>
            <span>AI Engineer & Full Stack Developer</span>
            <span className="opacity-40">·</span>
            <span>Nadiad, Gujarat, India</span>
          </div>

          {/* Row 3: Availability & Open Source Note */}
          <p className="text-[11px] opacity-70 leading-relaxed max-w-xl">
            Open for junior AI/ML and full-stack software engineering opportunities.
            Available for remote, hybrid, or on-site roles worldwide.
          </p>
        </div>
        {/* Right side is intentionally left completely empty so the floating Co-Pilot pill hovers cleanly in open space */}
      </div>
    </footer>
  );
};
