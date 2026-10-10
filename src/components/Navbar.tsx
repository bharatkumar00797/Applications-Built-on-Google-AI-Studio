import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeMode } from "../types";
import { generateResumePdf } from "../utils/generateResumePdf";
import { Bot, FileDown, Menu, X } from "lucide-react";

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
  onOpenChat: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  onOpenChat,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDark = theme === "dark";

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "AI Lab", href: "#ai-lab" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full backdrop-blur-md transition-colors border-b ${
        isDark
          ? "bg-zinc-950/90 border-zinc-800 text-zinc-100"
          : "bg-white/95 border-zinc-300 text-zinc-950 shadow-xs"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#overview"
          className="group flex flex-col focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded"
        >
          <span className="text-base font-extrabold tracking-tight group-hover:text-blue-500 transition-colors">
            Bharatkumar Chandvani
          </span>
          <span
            className={`text-xs ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            Full Stack Developer & AI Systems
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-semibold transition-colors hover:text-blue-500 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded py-1 ${
                isDark ? "text-zinc-300" : "text-zinc-700"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2.5">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Download Resume PDF Button */}
          <button
            type="button"
            onClick={generateResumePdf}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-md border transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none cursor-pointer ${
              isDark
                ? "bg-zinc-900 border-zinc-700 hover:bg-zinc-800 text-zinc-200"
                : "bg-zinc-100 border-zinc-300 hover:bg-zinc-200 text-zinc-800"
            }`}
            title="Download Bharatkumar's Resume in PDF"
          >
            <FileDown className="w-3.5 h-3.5 text-blue-500" />
            <span>Resume (PDF)</span>
          </button>

          {/* Unified Career Assistant Chat Button */}
          <button
            type="button"
            onClick={onOpenChat}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md border transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none cursor-pointer ${
              isDark
                ? "bg-blue-600 hover:bg-blue-500 text-white border-blue-500 shadow-xs"
                : "bg-zinc-950 hover:bg-zinc-800 text-white border-zinc-950 shadow-xs"
            }`}
          >
            <Bot className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Career Assistant</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md border transition-colors ${
              isDark
                ? "border-zinc-800 hover:bg-zinc-900 text-zinc-300"
                : "border-zinc-300 hover:bg-zinc-100 text-zinc-800"
            }`}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`md:hidden border-b px-4 py-4 space-y-3 ${
            isDark ? "bg-zinc-950 border-zinc-800" : "bg-white border-zinc-300"
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs font-semibold px-2 py-1.5 rounded transition-colors ${
                  isDark
                    ? "text-zinc-300 hover:bg-zinc-900"
                    : "text-zinc-800 hover:bg-zinc-100"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-inherit flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                generateResumePdf();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold rounded-md bg-zinc-100 dark:bg-zinc-900 border border-inherit text-blue-600 dark:text-blue-400"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume (PDF)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-md bg-blue-600 text-white"
            >
              <Bot className="w-4 h-4" />
              <span>Career Assistant</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
