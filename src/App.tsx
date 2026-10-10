/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ThemeMode } from "./types";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { MarqueeTicker } from "./components/MarqueeTicker";
import { Hero } from "./components/Hero";
import { ProjectsSection } from "./components/ProjectsSection";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { SkillsEducation } from "./components/SkillsEducation";
import { UnifiedAILab } from "./components/UnifiedAILab";
import { ChatbotDrawer } from "./components/ChatbotDrawer";
import { ContactModal } from "./components/ContactModal";
import { Footer } from "./components/Footer";
import { Bot } from "lucide-react";

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("bharat_portfolio_theme");
    return (saved as ThemeMode) || "dark";
  });

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Sync theme with document element classes and storage
  useEffect(() => {
    localStorage.setItem("bharat_portfolio_theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAILab = () => {
    document.getElementById("ai-lab")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AuthProvider>
      <div
        className={`min-h-screen transition-colors duration-200 selection:bg-blue-600 selection:text-white ${
          theme === "dark"
            ? "bg-zinc-950 text-zinc-100"
            : "bg-white text-zinc-950"
        }`}
      >
        {/* Streamlined Navigation Bar */}
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenChat={() => setIsChatOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Editorial Infinite Marquee Ribbon */}
        <MarqueeTicker theme={theme} />

        <main>
          {/* Hero Section with Immediate Resume Download & Clickable Email */}
          <Hero
            theme={theme}
            onOpenChat={() => setIsChatOpen(true)}
            onScrollToProjects={scrollToProjects}
            onScrollToAILab={scrollToAILab}
          />

          {/* Featured Projects with Live Demos and LinkedIn Highlights at Top */}
          <ProjectsSection
            theme={theme}
            onOpenChatWithTopic={() => {
              setIsChatOpen(true);
            }}
          />

          {/* Work Experience Timeline */}
          <ExperienceTimeline theme={theme} />

          {/* Skills, Higher Education & Professional Certifications */}
          <SkillsEducation theme={theme} />

          {/* Unified AI Lab & Prototypes (Audio Bio, Veo Studio & Maps Grounding) */}
          <UnifiedAILab theme={theme} />
        </main>

        {/* Minimal Quiet Footer with Links on the Left */}
        <Footer theme={theme} />

        {/* Floating Career Assistant Action Button (Uniform Name) */}
        <div className="fixed bottom-6 right-6 z-30">
          <button
            type="button"
            onClick={() => setIsChatOpen(true)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-xl border transition-all transform hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none cursor-pointer ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-500 text-white border-blue-400"
                : "bg-zinc-950 hover:bg-zinc-800 text-white border-zinc-900 shadow-md"
            }`}
            aria-label="Open Career Assistant Chat"
          >
            <Bot className="w-4 h-4 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wide">
              Career Assistant
            </span>
          </button>
        </div>

        {/* Multi-turn Chatbot Drawer */}
        <ChatbotDrawer
          isOpen={isChatOpen}
          onClose={() => setIsChatOpen(false)}
          theme={theme}
        />

        {/* Contact & Inquiry Modal */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
          theme={theme}
        />
      </div>
    </AuthProvider>
  );
}
