import { ExperienceItem, EducationItem, CertificationItem, ProjectItem, ImageAnalysisPreset } from "../types";

export const PROFILE_INFO = {
  name: "Bharatkumar Chandvani",
  shortName: "Bharat Chandvani",
  title: "AI Engineer | Full Stack Developer | Technical Support Engineer",
  location: "Nadiad, Gujarat, India",
  headline: "Building Autonomous AI Agents, Full-Stack Applications & Portfolio Projects",
  summary:
    "Full-stack developer (Python, .NET, SQL, WordPress) transitioning into AI engineering. Building AI agents and LLM-powered applications hands-on — from prompt design, tool-calling, and structured output to state persistence, evaluation harnesses, and deployment on Railway/Vercel. I care about the unglamorous parts most demos skip: stop conditions, failure logs, and eval scores. Shipping portfolio projects in public on GitHub and looking for a junior AI/ML engineering role where I can build real products and grow fast.",
  contact: {
    phone: "+91 72839 61105",
    rawPhone: "7283961105",
    email: "Chandvanibharat@gmail.com",
    linkedin: "https://www.linkedin.com/in/bharat-chandvani/",
    github: "https://github.com/bharatkumar00797",
    leetcode: "https://leetcode.com",
  },
  availability: "Available for Full-time Roles (Remote / Hybrid / On-site)",
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "incident-commander-ai",
    title: "Incident Commander AI (Simulated Environment Demo)",
    tagline: "LLM agent that triages alerts and proposes approval-gated remediation, run against a simulated environment",
    category: "AI Agents",
    featured: true,
    description:
      "An LLM agent that triages alerts, correlates logs, metrics, and deploys, tests root-cause hypotheses with read-only diagnostics, proposes approval-gated runbook remediation, and drafts postmortems. It runs against a simulated environment for demonstration.",
    achievements: [
      "Triage and correlation of alerts, logs, metrics, and deploy history in a simulated environment.",
      "Root-cause hypotheses tested only with read-only diagnostic tools.",
      "Remediation steps require human approval; postmortem drafts are generated at the end of each run.",
    ],
    technologies: ["Python", "LLM Agents", "Tool Calling", "Testing", "CI"],
    githubUrl: "https://github.com/bharatkumar00797/incident-commander-ai",
    demoUrl: "#demo-agent-orchestrator",
    demoLabel: "Demo Walkthrough",
    mockupType: "agent-orchestrator",
    architectureHighlights: "Bounded agent loop with read-only diagnostics, approval gates before any remediation, and a simulated environment in place of real infrastructure.",
  },
  {
    id: "agent-governance-dashboard",
    title: "Agent Inventory & Governance Dashboard",
    tagline: "Demo dashboard for cataloguing AI agents, with risk scoring, policies, and audit trails",
    category: "AI & Governance",
    featured: true,
    description:
      "A demo platform for discovering, monitoring, and governing AI agents: an agent inventory, risk scoring, policies, and audit trails, with sample data.",
    achievements: [
      "Next.js frontend showing the agent inventory, risk scores, and audit history, deployed on Vercel.",
      "FastAPI backend with SQLAlchemy models for the agent registry and audit records, deployed on Railway.",
      "Policy checks that flag agents breaking configured rules.",
    ],
    technologies: ["Next.js", "FastAPI", "SQLAlchemy", "Tailwind CSS", "Python", "Vercel", "Railway"],
    githubUrl: "https://github.com/bharatkumar00797/agent-governance-dashboard",
    demoUrl: "#demo-agent-governance",
    demoLabel: "Dashboard Demo",
    mockupType: "governance-dashboard",
    architectureHighlights: "Next.js client on Vercel calling a FastAPI and SQLAlchemy backend on Railway.",
  },
  {
    id: "ai-newsletter-automation",
    title: "AI Newsletter Automation Pipeline",
    tagline: "End-to-end automated pipeline synthesizing arXiv research, tech trends, and dispatching formatted email digests",
    category: "AI Automation",
    featured: true,
    description:
      "An automated content intelligence engine that ingests technical research feeds (arXiv, GitHub Trending, engineering blogs), deduplicates articles, extracts semantic breakthroughs with Gemini, formats responsive HTML templates, and dispatches scheduled newsletters.",
    achievements: [
      "Gathers articles from technical feeds and pages as the workflow's input.",
      "Multi-step LLM prompts produce short summaries and takeaways.",
      "Formats the results as an HTML email and sends the digest.",
    ],
    technologies: ["Python", "LLM APIs", "Email", "Automation"],
    githubUrl: "https://github.com/bharatkumar00797/newsletter-automation",
    demoUrl: "#demo-newsletter-pipeline",
    demoLabel: "Pipeline Demo",
    mockupType: "newsletter-pipeline",
    architectureHighlights: "Multi-stage pipeline: Scheduled feed polling -> semantic relevance filtering -> Gemini summarization -> HTML template rendering -> batch email dispatch.",
  },
  {
    id: "pdf-data-extraction-ocr",
    title: "PDF Text & Data Extraction OCR",
    tagline: "Python automation extracting text from scanned PDFs using OCR, report formatting, and data validation",
    category: "Python & Data",
    featured: true,
    description:
      "Python scripts that extract text and tables from scanned and native PDFs using OCR, and convert reports to Excel and Word.",
    achievements: [
      "Engineered automated OCR text processing pipelines converting unstructured scanned documents into clean structured data.",
      "Integrated report formatting modules generating standardized Word and Excel workbooks from extracted payloads.",
      "Scripts to compare extracted values across reports.",
    ],
    technologies: ["Python", "OCR", "PyPDF2", "Pandas", "OpenPyXL", "Data Processing"],
    githubUrl: "https://github.com/bharatkumar00797/pdf-data-extraction-ocr",
    demoUrl: "#demo-ocr-scanner",
    demoLabel: "OCR Processing Demo",
    mockupType: "ocr-scanner",
    architectureHighlights: "Multi-stage pipeline: PDF rasterization, optical character recognition filtering, structured tabular data parsing, and automated Excel export.",
  },
  {
    id: "web-application-aws-serverless",
    title: "Serverless Web Application on AWS",
    tagline: "Event-driven cloud application utilizing AWS Lambda, API Gateway, DynamoDB & S3",
    category: "Cloud & AWS",
    featured: true,
    description:
      "A scalable serverless cloud application architecture hosted on Amazon Web Services. Employs AWS Lambda microservices for compute, API Gateway for secure REST endpoints, DynamoDB for NoSQL persistence, and S3 for static assets.",
    achievements: [
      "Designed decoupled serverless cloud architecture eliminating dedicated server idle costs and auto-scaling on demand.",
      "Implemented secure API Gateway routing with AWS Lambda functions handling backend request execution.",
      "Configured S3 bucket policies and DynamoDB tables for fast key-value data retrieval.",
    ],
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Amazon S3", "JavaScript", "Cloud Architecture"],
    githubUrl: "https://github.com/bharatkumar00797/-Web-Application-on-AWS--Serverless",
    demoUrl: "#demo-aws-serverless",
    demoLabel: "Cloud Architecture View",
    mockupType: "aws-cloud",
    architectureHighlights: "Zero-server footprint architecture with fine-grained IAM execution policies and managed AWS cloud scaling.",
  },
  {
    id: "amazon-cloud-development",
    title: "Amazon Cloud Development & Infrastructure",
    tagline: "AWS cloud architecture, IAM security governance, VPC configuration, and EC2 provisioning",
    category: "Cloud & AWS",
    featured: false,
    description:
      "Practical cloud engineering repository implementing AWS core services, secure VPC networking, IAM security policies, EC2 compute configurations, and cloud deployment foundations.",
    achievements: [
      "Configured AWS Virtual Private Clouds (VPC), public/private subnets, and internet gateways for secure cloud networking.",
      "Applied least-privilege IAM roles and access control policies across cloud compute services.",
      "Authored architectural deployment guidelines for reproducible cloud resource setups.",
    ],
    technologies: ["AWS", "VPC Networking", "IAM Security", "Amazon EC2", "CloudWatch", "Cloud Infrastructure"],
    githubUrl: "https://github.com/bharatkumar00797/Amazon-Cloud-Development",
    demoUrl: "#demo-amazon-cloud",
    demoLabel: "VPC Topology Diagram",
    mockupType: "aws-cloud",
    architectureHighlights: "Well-Architected AWS framework emphasizing security isolation, network routing, and scalable compute.",
  },
  {
    id: "personal-portfolio-scratch",
    title: "Hand-Crafted Developer Portfolio (v1)",
    tagline: "First-ever portfolio built from scratch with HTML5, CSS3, JavaScript & Bootstrap",
    category: "Full-Stack",
    featured: false,
    description:
      "The foundational personal portfolio built entirely from scratch. Demonstrates core front-end engineering fundamentals including responsive grid layouts, custom CSS animations, DOM interactions, and mobile viewport optimization.",
    achievements: [
      "Built responsive front-end from the ground up without heavy front-end frameworks, ensuring instant load times.",
      "Implemented clean mobile-first navigation and custom styling using modern CSS and Bootstrap components.",
      "Served live via GitHub Pages as an early open-source project showcase.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "GitHub Pages"],
    githubUrl: "https://github.com/bharatkumar00797/bharatkumar00797.github.io",
    demoUrl: "https://bharatkumar00797.github.io",
    demoLabel: "GitHub Pages Site",
    mockupType: "portfolio-browser",
    architectureHighlights: "Semantic HTML5 markup with zero-dependency vanilla JavaScript event handling and responsive styling.",
  },
  {
    id: "python-automation-scripts",
    title: "Python Engineering & Automation Suite",
    tagline: "Backend scripts, automation routines, and data structure implementations",
    category: "Python & Data",
    featured: false,
    description:
      "Collection of practical Python scripts and algorithmic utilities for automated file management, data transformations, and backend CLI task workflows.",
    achievements: [
      "Implemented modular Python utilities for repetitive file handling and data transformation tasks.",
      "Practiced clean coding conventions with type hinting and defensive exception handling.",
      "Built CLI scripts facilitating rapid local development workflows.",
    ],
    technologies: ["Python 3", "Automation Scripts", "File I/O", "Data Structures"],
    githubUrl: "https://github.com/bharatkumar00797/Python",
    demoUrl: "#demo-python-cli",
    demoLabel: "CLI Terminal Output",
    mockupType: "python-cli",
    architectureHighlights: "Modular utility functions with standard library focus for lightweight, dependency-free execution.",
  },
  {
    id: "agentic-workflow-engine",
    title: "Agent Tool-Calling Prototype (In Progress)",
    tagline: "Experimental prototype exploring multi-turn reasoning and dynamic tool execution",
    category: "AI Roadmap",
    featured: false,
    description:
      "An active research and development prototype exploring multi-turn LLM reasoning, dynamic tool execution, stateful memory management, and structured JSON schema validation for automated developer workflows.",
    achievements: [
      "Prototyping dynamic tool dispatch and schema validation using Pydantic and TypeScript contracts.",
      "Designing state persistence models across multi-turn developer interactions.",
      "Active development repository tracking progress on GitHub.",
    ],
    technologies: ["Gemini 3 SDK", "Python", "TypeScript", "Node.js", "Express", "Agentic Workflows"],
    githubUrl: "https://github.com/bharatkumar00797?tab=repositories",
    demoUrl: "#demo-agent-orchestrator",
    demoLabel: "Interactive Tool Calling Trace",
    mockupType: "agent-orchestrator",
    architectureHighlights: "Server-side proxy pattern isolating AI credentials, structured schema enforcement, and tool-calling execution loop.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ai-engineer-self-directed",
    role: "AI Engineer (Self-directed)",
    company: "Personal Projects – AI Agents",
    period: "September 2026 – Present",
    location: "Nadiad, Gujarat, India",
    type: "AI & Full-Stack Engineering",
    bullets: [
      "Released four AI agent projects at v1.0.0 on GitHub, each with automated tests and CI.",
      "Built an agent inventory and governance dashboard with Next.js, FastAPI, and SQLAlchemy, deployed on Vercel (frontend) and Railway (backend).",
      "Built an AI newsletter automation workflow that gathers sources, summarizes them with an LLM, and sends a formatted email digest.",
    ],
    technologies: ["Python", "AI Agents", "LLM Tool Calling", "Pydantic", "Railway.app", "Vercel", "RAG"],
  },
  {
    id: "tanmay-travels",
    role: "Relationship Manager (Technical Operations & Reporting)",
    company: "Tanmay Travels",
    period: "November 2024 – August 2026",
    duration: "1 year 10 months",
    location: "Nadiad, Gujarat, India",
    type: "Technical Operations & Reporting",
    bullets: [
      "Installed, configured, and updated reporting systems; resolved user complaints and provided solutions to internally raised tickets.",
      "Ensured smooth day-to-day technical operations with timely and accurate reporting.",
    ],
    technologies: ["Reporting Systems", "Technical Operations", "Ticket Management", "System Configuration"],
  },
  {
    id: "claire-beauty",
    role: "WordPress Developer",
    company: "Claire Beauty Parlor and Salon",
    period: "May 2024 – November 2024",
    duration: "7 months",
    location: "Barrie, ON, Canada (Remote)",
    type: "Web Development & SEO",
    bullets: [
      "Customized and modified WordPress themes and plugins to enhance site functionality, performance, and user experience.",
      "Implemented responsive, mobile-first design; conducted security, backup, and performance maintenance.",
      "Improved search visibility through SEO (Yoast) and content optimization; delivered Google Analytics performance reports to the client.",
    ],
    technologies: ["WordPress", "PHP", "SEO (Yoast)", "Google Analytics", "Mobile-First Design"],
  },
  {
    id: "ression",
    role: "Junior Web Developer",
    company: "Ression",
    period: "May 2022 – December 2022",
    duration: "8 months",
    location: "Fredericton, NL, Canada",
    type: "Software Engineering",
    bullets: [
      "Developed and maintained software applications in C#, .NET, and Xamarin alongside senior developers — clean, documented, standards-compliant code.",
      "Debugged and resolved defects through comprehensive testing; used Git for version control and maintained technical documentation.",
    ],
    technologies: ["C#", ".NET", "Xamarin", "Git", "REST APIs", "Testing"],
  },
  {
    id: "pi-network",
    role: "KYC Validator",
    company: "Pi Network",
    period: "July 2020 – March 2024",
    duration: "3 years 9 months",
    location: "Toronto, ON, Canada (Remote)",
    type: "Freelance · Identity Verification",
    bullets: [
      "Reviewed and verified user-submitted identity documents against KYC requirements; flagged applications that needed further review.",
      "Maintained accurate verification records and guided users through the KYC process; reported recurring issues to the review team.",
    ],
    technologies: ["KYC Compliance", "Identity Verification", "Document Review", "Record Keeping"],
  },
  {
    id: "loyalist-coord",
    role: "Project Coordinator",
    company: "Loyalist College",
    period: "January 2022 – April 2022",
    duration: "4 months",
    location: "Belleville, ON, Canada",
    type: "Project Coordination & Analytics",
    bullets: [
      "Built dynamic Excel dashboards for project tracking and coordinated cross-functional teams to ensure on-time delivery.",
      "Led an ArcGIS vs. QGIS comparative evaluation (functionality and cost), presented recommendations, and trained teams on the selected tool.",
    ],
    technologies: ["Dynamic Excel Dashboards", "ArcGIS", "QGIS", "Cross-Functional Coordination"],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    degree: "Graduate Certificate in Project Management",
    institution: "Loyalist College, Canada",
    location: "Belleville, ON, Canada",
    period: "2021 – 2022",
    focus: "Project governance, agile methodologies, risk mitigation, and cross-functional team delivery.",
  },
  {
    degree: "Graduate Certificate in Software & Database Development",
    institution: "Lambton College, Canada",
    location: "Toronto / Sarnia, ON, Canada",
    period: "2018 – 2020",
    focus: "Relational database design, software development, web applications, and data modeling.",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Charotar University of Science and Technology (CHARUSAT), India",
    location: "Changa, Gujarat, India",
    period: "2014 – 2017",
    focus: "Core computer science, data structures, algorithms, object-oriented programming, and SQL.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "Google Data Analytics",
    issuer: "Coursera",
    year: "May 2023",
    highlight: "Data analysis workflows, SQL data exploration, spreadsheets, and data visualization.",
  },
  {
    name: "CyberSecurity Foundations",
    issuer: "LinkedIn",
    year: "Nov 2023",
    highlight: "Network security fundamentals, identity access governance, and threat mitigation.",
  },
  {
    name: "SQL (Advanced)",
    issuer: "HackerRank",
    year: "Oct 2023",
    highlight: "Complex joins, window functions, CTEs, indexing, and query performance optimization.",
  },
];

export const SKILL_CATEGORIES = [
  {
    category: "AI & Prompt Engineering",
    skills: ["AI Agents & Tool Calling", "Gemini 3 SDK (@google/genai)", "Prompt Engineering & Few-Shot", "Multimodal Vision Analysis", "Deterministic JSON Output", "Pydantic & Schema Validation"],
  },
  {
    category: "Backend & Systems",
    skills: ["Python", "C# / .NET 8 Web APIs", "Node.js & Express", "TypeScript & JavaScript", "REST API Architecture", "Unit & Integration Testing"],
  },
  {
    category: "Databases & Data Analytics",
    skills: ["PostgreSQL & MySQL", "SQL Query Optimization", "Window Functions & Indexing", "Database Normalization", "Google Data Analytics", "Dynamic Excel Dashboards"],
  },
  {
    category: "Deployment & Operations",
    skills: ["Railway.app", "v0", "Git / GitHub Version Control", "Technical Support & Troubleshooting", "Ticket Lifecycle Management", "WordPress Custom Dev & SEO"],
  },
  {
    category: "Compliance & Governance",
    skills: ["KYC / AML Document Verification", "Identity Document Review", "Agile & Project Management (Loyalist)", "Cross-Functional Collaboration", "Technical Documentation"],
  },
];

export const AUDIO_SCRIPTS = [
  {
    id: "elevator-pitch",
    title: "Executive Introduction & Bio",
    duration: "45 sec",
    text: "Hello! I am Bharatkumar Chandvani, an AI Engineer and Full Stack Developer based in Nadiad, Gujarat. With a solid foundation in Python, .NET, SQL, and project management, I have transitioned into hands-on AI engineering. I build autonomous agents, structured tool-calling pipelines, and web applications deployed on Railway and Vercel. I am currently seeking junior AI/ML or full-stack engineering roles where I can ship real products and make an immediate impact.",
  },
  {
    id: "ai-transition",
    title: "Transition to AI Engineering",
    duration: "55 sec",
    text: "My path into AI engineering is grounded in real-world systems. Having built applications in C# and supported reporting systems in operations roles, I understand that generative AI is most powerful when combined with rigorous software engineering. I focus on deterministic schema enforcement, multi-turn state persistence, and grounding LLMs with real APIs and database tools rather than treating AI like a novelty. I am shipping all my work openly on GitHub.",
  },
  {
    id: "kyc-compliance",
    title: "KYC Validation Experience",
    duration: "40 sec",
    text: "For nearly four years at Pi Network, I worked as a freelance KYC Validator, reviewing identity documents against KYC requirements. This experience gave me a deep understanding of document integrity, visual tampering, and security edge cases — insights I now bring into multimodal AI vision pipelines and identity automation.",
  },
];

export const CHATBOT_STARTERS = [
  {
    label: "AI Engineering Approach",
    prompt: "How does Bharatkumar approach building AI agents and tool-calling pipelines?",
    taskType: "complex" as const,
  },
  {
    label: "Work Experience Summary",
    prompt: "Can you provide a walkthrough of Bharat's career journey from .NET & KYC to AI?",
    taskType: "general" as const,
  },
  {
    label: "Availability & Roles",
    prompt: "What roles is Bharat looking for, and what are his preferred work locations?",
    taskType: "fast" as const,
  },
  {
    label: "Technical Deep Dive",
    prompt: "How does his background in SQL, C#, and Project Management benefit an engineering team?",
    taskType: "complex" as const,
  },
];

// Sample presets for Image Understanding with Gemini 3.1 Pro Preview
// Creating clean base64 data URLs for immediate testing
const createSampleSvg = (title: string, subtitle: string, color: string) => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="480" viewBox="0 0 800 480">
    <rect width="800" height="480" fill="#09090b" rx="16"/>
    <rect x="40" y="40" width="720" height="400" fill="#18181b" rx="12" stroke="${color}" stroke-width="2"/>
    <text x="80" y="100" fill="#ffffff" font-family="system-ui, sans-serif" font-size="24" font-weight="bold">${title}</text>
    <text x="80" y="135" fill="#a1a1aa" font-family="system-ui, sans-serif" font-size="16">${subtitle}</text>
    <rect x="80" y="170" width="180" height="100" fill="#27272a" rx="8" stroke="#3f3f46"/>
    <text x="100" y="210" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">Client Request</text>
    <text x="100" y="235" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Vite React SPA</text>
    <path d="M 260 220 L 320 220" stroke="#38bdf8" stroke-width="2"/>
    <rect x="320" y="170" width="180" height="100" fill="#27272a" rx="8" stroke="#38bdf8"/>
    <text x="340" y="210" fill="#4ade80" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">Express Server</text>
    <text x="340" y="235" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Node.js Proxy</text>
    <path d="M 500 220 L 560 220" stroke="#4ade80" stroke-width="2"/>
    <rect x="560" y="170" width="160" height="100" fill="#27272a" rx="8" stroke="#f43f5e"/>
    <text x="580" y="210" fill="#fb7185" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">Gemini API</text>
    <text x="580" y="235" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Pro / Flash / TTS</text>
    <rect x="80" y="300" width="640" height="100" fill="#18181b" rx="8" stroke="#3f3f46"/>
    <text x="100" y="335" fill="#e2e8f0" font-family="monospace" font-size="13">// Architectural Principle: Never expose Gemini secrets to client</text>
    <text x="100" y="360" fill="#e2e8f0" font-family="monospace" font-size="13">POST /api/chat, server validation, ai.models.generateContent</text>
  </svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

export const IMAGE_PRESETS: ImageAnalysisPreset[] = [
  {
    id: "agent-architecture",
    title: "AI Agent Server Proxy Architecture",
    description: "Multi-tier decoupled architecture isolating LLM API credentials with streaming responses.",
    svgDataUrl: createSampleSvg("AI Agent Full-Stack Architecture", "Client -> Server Proxy -> Gemini Models with Secret Guarding", "#38bdf8"),
    prompt: "Analyze this system architecture. What are the key security and scalability advantages of using an Express server proxy instead of client-side LLM calls, and how can we add caching or queueing for heavy loads?",
  },
  {
    id: "kyc-flow",
    title: "KYC Document Verification Flow",
    description: "Two-stage heuristic and multimodal pipeline for ID document compliance.",
    svgDataUrl: createSampleSvg("Document Verification & Compliance Pipeline", "Biometric and credential verification against regulatory standards", "#10b981"),
    prompt: "Review this document verification workflow from a security, latency, and compliance standpoint. How does multimodal AI complement deterministic validation rules?",
  },
];
