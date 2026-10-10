export type ThemeMode = "dark" | "light";

export interface ContactInfo {
  phone: string;
  rawPhone: string;
  email: string;
  linkedin: string;
  github: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  duration?: string;
  location: string;
  type: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  focus: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year: string;
  highlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  category: "AI & Governance" | "AI Automation" | "Python & Data" | "Cloud & AWS" | "Full-Stack" | "AI Roadmap" | string;
  description: string;
  achievements: string[];
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  architectureHighlights: string;
  mockupType?: "governance-dashboard" | "newsletter-pipeline" | "ocr-scanner" | "aws-cloud" | "portfolio-browser" | "python-cli" | "agent-orchestrator";
  demoUrl?: string;
  demoLabel?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  modelUsed?: string;
  timestamp: string;
}

export type GeminiModelOption = "gemini-3.1-pro-preview" | "gemini-3.5-flash" | "gemini-3.1-flash-lite";

export interface ImageAnalysisPreset {
  id: string;
  title: string;
  description: string;
  svgDataUrl: string;
  prompt: string;
}
