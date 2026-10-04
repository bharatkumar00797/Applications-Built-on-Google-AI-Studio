import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { ThemeMode } from "../types";
import { useAuth } from "../context/AuthContext";
import { Bot, LogIn, LogOut, Menu, X, ArrowUpRight, UserCheck, Film, Compass } from "lucide-react";

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
  const { user, guestUser, signInWithGoogle, logout } = useAuth();
  const activeUser = user || guestUser;

  const navLinks = [
    { label: "Overview", href: "#overview" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "AI Lab", href: "#ai-lab" },
    { label: "Veo Studio", href: "#veo-section" },
    { label: "Maps Grounding", href: "#maps-section" },
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
              isDark ? "text-zinc-400" : "text-zinc-700"
            }`}
          >
            AI Engineer & Full Stack Developer
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-5"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-xs font-semibold transition-colors hover:text-blue-500 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none rounded py-1 ${
                isDark ? "text-zinc-300" : "text-zinc-800"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2.5">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          {/* Firebase user pill or sign in */}
          {activeUser ? (
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-md border text-xs border-inherit bg-inherit">
              {user?.photoURL ? (
                <img
                  src={user.photoURL}
                  alt={activeUser.displayName || "User"}
                  className="w-5 h-5 rounded-full"
                />
              ) : (
                <UserCheck className="w-3.5 h-3.5 text-emerald-500" />
              )}
              <span className="font-semibold truncate max-w-[90px] text-[11px]">
                {activeUser.displayName?.split(" ")[0] || "Guest"}
              </span>
              <button
                type="button"
                onClick={logout}
                title="Sign out / reset"
                className="opacity-60 hover:opacity-100 hover:text-rose-500"
              >
                <LogOut className="w-3 h-3" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={signInWithGoogle}
              className={`inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md border transition-colors ${
                isDark
                  ? "border-zinc-800 bg-zinc-900 text-zinc-300 hover:bg-zinc-800"
                  : "border-zinc-300 bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
              }`}
            >
              <LogIn className="w-3 h-3 text-blue-500" />
              <span>Sign In</span>
            </button>
          )}

          <button
            type="button"
            onClick={onOpenChat}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md border transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
              isDark
                ? "bg-blue-600 hover:bg-blue-500 text-white border-blue-500 shadow-sm"
                : "bg-zinc-950 hover:bg-zinc-800 text-white border-zinc-950 shadow-sm"
            }`}
          >
            <Bot className="w-3.5 h-3.5" aria-hidden="true" />
            <span>AI Co-Pilot</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className={`p-2 rounded-md border focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
              isDark
                ? "border-zinc-800 text-zinc-200 bg-zinc-900"
                : "border-zinc-300 text-zinc-900 bg-zinc-100"
            }`}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden px-4 pt-2 pb-6 border-b space-y-3 ${
            isDark ? "bg-zinc-950 border-zinc-800" : "bg-white border-zinc-300"
          }`}
        >
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-2 text-xs font-medium rounded border ${
                  isDark
                    ? "text-zinc-200 border-zinc-900 hover:bg-zinc-900"
                    : "text-zinc-900 border-zinc-200 hover:bg-zinc-100"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold rounded-md bg-blue-600 text-white hover:bg-blue-500"
            >
              <Bot className="w-4 h-4" />
              <span>Ask Bharat's AI Co-Pilot</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
