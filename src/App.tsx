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
import { AudioSummary } from "./components/AudioSummary";
import { VeoVideoGenerator } from "./components/VeoVideoGenerator";
import { MapsGrounding } from "./components/MapsGrounding";
import { ChatbotDrawer } from "./components/ChatbotDrawer";
import { ContactModal } from "./components/ContactModal";
import { Footer } from "./components/Footer";
import { Bot, Sparkles, Volume2, Film, Compass, ShieldCheck } from "lucide-react";

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

  const scrollToAudio = () => {
    document.getElementById("ai-tts-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToVeo = () => {
    document.getElementById("veo-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMaps = () => {
    document.getElementById("maps-section")?.scrollIntoView({ behavior: "smooth" });
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
        {/* Accessible Navigation Bar */}
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenChat={() => setIsChatOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Editorial Infinite Marquee Ribbon */}
        <MarqueeTicker theme={theme} />

        <main>
          {/* Hero Section */}
          <Hero
            theme={theme}
            onOpenChat={() => setIsChatOpen(true)}
            onScrollToAudio={scrollToAudio}
            onScrollToVeo={scrollToVeo}
            onScrollToMaps={scrollToMaps}
          />

          {/* Featured Projects with Category Filter */}
          <ProjectsSection
            theme={theme}
            onOpenChatWithTopic={(topic) => {
              setIsChatOpen(true);
            }}
          />

          {/* Work Experience Timeline */}
          <ExperienceTimeline theme={theme} />

          {/* Skills, Higher Education & Professional Certifications */}
          <SkillsEducation theme={theme} />

          {/* AI Voice Synthesis & Audio Overview (TTS) */}
          <section
            id="ai-lab"
            className="py-14 border-b transition-colors border-inherit"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
              <div className="max-w-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                  Generative Voice Engineering
                </div>
                <h2
                  className={`text-2xl sm:text-3xl font-black tracking-tight ${
                    theme === "dark" ? "text-zinc-50" : "text-zinc-950"
                  }`}
                >
                  AI Voice Synthesis & Audio Executive Summary
                </h2>
                <p
                  className={`text-xs sm:text-sm mt-1 ${
                    theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  Listen to an AI-generated audio narration of Bharatkumar's technical profile, engineering transition, and background powered by <code className="font-mono text-emerald-600 dark:text-emerald-400">gemini-3.8-flash-tts</code>.
                </p>
              </div>

              {/* TTS Speech Synthesis */}
              <div id="ai-tts-section">
                <AudioSummary theme={theme} />
              </div>
            </div>
          </section>

          {/* Veo 3.1 Fast Video Generation Studio */}
          <section
            id="veo-section"
            className="py-14 border-b transition-colors border-inherit"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
              <div className="max-w-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-1">
                  Generative Video Synthesis
                </div>
                <h2
                  className={`text-2xl sm:text-3xl font-black tracking-tight ${
                    theme === "dark" ? "text-zinc-50" : "text-zinc-950"
                  }`}
                >
                  Veo 3.1 Motion & Video Studio
                </h2>
                <p
                  className={`text-xs sm:text-sm mt-1 ${
                    theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  Animate architecture schematics, project mockups, or custom photos into fluid high-definition video using <code className="font-mono text-purple-600 dark:text-purple-400">veo-3.1-fast-generate-preview</code> in 16:9 landscape or 9:16 portrait formats.
                </p>
              </div>

              <VeoVideoGenerator theme={theme} />
            </div>
          </section>

          {/* Google Maps Grounding & Geographic Intelligence */}
          <section
            id="maps-section"
            className="py-14 border-b transition-colors border-inherit"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
              <div className="max-w-2xl">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                  Real-World Grounding
                </div>
                <h2
                  className={`text-2xl sm:text-3xl font-black tracking-tight ${
                    theme === "dark" ? "text-zinc-50" : "text-zinc-950"
                  }`}
                >
                  Google Maps Tech Ecosystem Grounding
                </h2>
                <p
                  className={`text-xs sm:text-sm mt-1 ${
                    theme === "dark" ? "text-zinc-400" : "text-zinc-600"
                  }`}
                >
                  Query live geographic data with <code className="font-mono text-amber-600 dark:text-amber-400">gemini-3.5-flash</code> grounded via the <code className="font-mono text-amber-600 dark:text-amber-400">googleMaps</code> tool to assess commuting corridors, software parks, and relocation readiness.
                </p>
              </div>

              <MapsGrounding theme={theme} />
            </div>
          </section>
        </main>

        {/* Minimal Quiet Footer with Links on the Left */}
        <Footer theme={theme} />

        {/* Floating AI Co-Pilot Action Button */}
        <div className="fixed bottom-6 right-6 z-30">
          <button
            type="button"
            onClick={() => setIsChatOpen(true)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-xl border transition-all transform hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
              theme === "dark"
                ? "bg-blue-600 hover:bg-blue-500 text-white border-blue-400"
                : "bg-zinc-950 hover:bg-zinc-800 text-white border-zinc-900 shadow-md"
            }`}
            aria-label="Open AI Career Co-Pilot Chat"
          >
            <Bot className="w-4 h-4 animate-pulse" aria-hidden="true" />
            <span className="text-xs font-bold tracking-wide">
              Chat with Bharat's Co-Pilot
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
