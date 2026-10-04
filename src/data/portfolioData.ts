import { ExperienceItem, EducationItem, CertificationItem, ProjectItem, ImageAnalysisPreset } from "../types";

export const PROFILE_INFO = {
  name: "Bharatkumar Chandvani",
  shortName: "Bharat Chandvani",
  title: "AI Engineer | Full Stack Developer | Technical Support Engineer",
  location: "Nadiad, Gujarat, India",
  headline: "Building Autonomous AI Agents, Robust Full-Stack Systems & Production Architectures",
  summary:
    "Full-stack and cloud developer (Python, AWS Serverless, .NET, SQL, WordPress) transitioning into AI engineering. Experienced in building automated OCR document extraction pipelines, AWS Lambda architectures, and enterprise reporting systems, backed by 3.7+ years of KYC identity verification at Pi Network. Currently shipping open-source repositories on GitHub and seeking junior AI/ML or full-stack engineering roles where I can build real products and create value.",
  contact: {
    phone: "+91 7283961105",
    rawPhone: "7283961105",
    email: "Chandvanibharat@gmail.com",
    linkedin: "https://www.linkedin.com/in/bharat-chandvani/",
    github: "https://github.com/bharatkumar00797",
  },
  availability: "Available for Full-time Roles (Remote / Hybrid / On-site)",
};

export const PROJECTS: ProjectItem[] = [
  {
    id: "pdf-data-extraction-ocr",
    title: "PDF Text & Data Extraction OCR",
    tagline: "Python automation extracting text from scanned PDFs using OCR, report formatting, and data validation",
    category: "Python & Data",
    featured: true,
    description:
      "Python scripts engineered to extract text and tabular data from scanned and native PDFs using OCR, convert financial and operational reports to Excel and Word, and compare data accuracy across multiple annual reports.",
    achievements: [
      "Engineered automated OCR text processing pipelines converting unstructured scanned documents into clean structured data.",
      "Integrated report formatting modules generating standardized Word and Excel workbooks from extracted payloads.",
      "Automated multi-year reconciliation checks to detect variances and data discrepancies across annual records.",
    ],
    technologies: ["Python", "OCR", "PyPDF2", "Pandas", "OpenPyXL", "Data Processing"],
    githubUrl: "https://github.com/bharatkumar00797/pdf-data-extraction-ocr",
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
    architectureHighlights: "Zero-server footprint architecture with fine-grained IAM execution policies and managed AWS cloud scaling.",
  },
  {
    id: "amazon-cloud-development",
    title: "Amazon Cloud Development & Infrastructure",
    tagline: "AWS cloud architecture, IAM security governance, VPC configuration, and EC2 provisioning",
    category: "Cloud & AWS",
    featured: true,
    description:
      "Practical cloud engineering repository implementing AWS core services, secure VPC networking, IAM security policies, EC2 compute configurations, and cloud deployment foundations.",
    achievements: [
      "Configured AWS Virtual Private Clouds (VPC), public/private subnets, and internet gateways for secure cloud networking.",
      "Applied least-privilege IAM roles and access control policies across cloud compute services.",
      "Authored architectural deployment guidelines for reproducible cloud resource setups.",
    ],
    technologies: ["AWS", "VPC Networking", "IAM Security", "Amazon EC2", "CloudWatch", "Cloud Infrastructure"],
    githubUrl: "https://github.com/bharatkumar00797/Amazon-Cloud-Development",
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
    architectureHighlights: "Modular utility functions with standard library focus for lightweight, dependency-free execution.",
  },
  {
    id: "agentic-workflow-engine",
    title: "Autonomous Agent Tool-Calling Orchestrator (In Progress)",
    tagline: "Experimental prototype exploring multi-turn reasoning and dynamic tool execution",
    category: "AI Roadmap",
    featured: true,
    description:
      "An active research and development prototype exploring multi-turn LLM reasoning, dynamic tool execution, stateful memory management, and structured JSON schema validation for automated developer workflows.",
    achievements: [
      "Prototyping dynamic tool dispatch and schema validation using Pydantic and TypeScript contracts.",
      "Designing state persistence models across multi-turn developer interactions.",
      "Active development repository tracking progress on GitHub.",
    ],
    technologies: ["Gemini 3 SDK", "Python", "TypeScript", "Node.js", "Express", "Agentic Workflows"],
    githubUrl: "https://github.com/bharatkumar00797",
    architectureHighlights: "Server-side proxy pattern isolating AI credentials, structured schema enforcement, and tool-calling execution loop.",
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ai-engineer",
    role: "AI Engineer (Self-directed learning & portfolio projects)",
    company: "Personal Projects – AI Agents",
    period: "September 2026 - Present",
    location: "Nadiad, Gujarat, India",
    type: "AI & Full-Stack Engineering",
    bullets: [
      "Architecting production-ready AI agents featuring multi-turn conversation state, tool calling, and multimodal perception.",
      "Developing structured prompt pipelines with deterministic JSON schema enforcement and dynamic context injection.",
      "Deploying web apps and serverless backend proxies seamlessly via Railway.app and Vercel V0.",
      "Open-sourcing reproducible AI agent patterns and developer utilities on GitHub (github.com/bharatkumar00797).",
    ],
    technologies: ["Gemini 3 SDK", "Python", "TypeScript", "Node.js", "Express", "Vercel", "Railway"],
  },
  {
    id: "tanmay-travels",
    role: "Relationship Manager & Technical Operations",
    company: "Tanmay Travels",
    period: "November 2024 - August 2026",
    duration: "1 year 10 months",
    location: "Nadiad, Gujarat, India",
    type: "Technical Support & Operations",
    bullets: [
      "Installed, configured, and updated critical operational reporting systems to streamline passenger logistics and dispatch.",
      "Resolved complex user complaints and provided permanent root-cause solutions to internally raised technical tickets.",
      "Ensured smooth day-to-day operations with high system availability and punctually generated performance analytics.",
    ],
    technologies: ["Reporting Systems", "Ticket Management", "Workflow Automation", "Data Reconciliation"],
  },
  {
    id: "claire-beauty",
    role: "WordPress Developer",
    company: "Claire Beauty Parlor and Salon",
    period: "May 2024 - November 2024",
    duration: "7 months",
    location: "Barrie, ON, Canada",
    type: "Web Development & SEO",
    bullets: [
      "Customized and modified bespoke WordPress themes, PHP templates, and plugins to enhance online booking conversions.",
      "Conducted regular maintenance, security hardening, automated backups, and page speed performance optimizations.",
      "Managed content publishing, streamlined Yoast SEO for local organic search rankings, and monitored Google Analytics KPIs.",
      "Troubleshot and resolved technical issues promptly, minimizing downtime and maintaining 99.9% site reliability.",
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "Yoast SEO", "Google Analytics", "MySQL"],
  },
  {
    id: "craig-spodak",
    role: "Freelance Graphic Designer",
    company: "CRAIG SPODAK",
    period: "June 2024 - June 2024",
    duration: "1 month",
    location: "Delray Beach, Florida, United States",
    type: "Digital Design & Visual Layout",
    bullets: [
      "Conducted client consultations to translate brand vision and requirements into modern vector identities.",
      "Developed initial design concepts, mockups, and typography treatments across multiple review cycles.",
      "Delivered final production-ready assets in vector and raster formats (PDF, PNG, AI) for print and digital deployments.",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign", "Trello", "Slack"],
  },
  {
    id: "pi-network",
    role: "KYC Validator",
    company: "Pi Network",
    period: "July 2020 - March 2024",
    duration: "3 years 9 months",
    location: "Toronto, ON, Canada",
    type: "Compliance & Identity Verification",
    bullets: [
      "Reviewed and rigorously verified identity documents and biometrics to ensure regulatory KYC and AML compliance.",
      "Maintained high precision in distinguishing forged documents, image tampering, and mismatched credentials.",
      "Monitored and analyzed verification trends, suggesting process improvements to enhance validator throughput.",
    ],
    technologies: ["KYC/AML Protocols", "Document Analysis", "Data Verification", "Fraud Detection"],
  },
  {
    id: "ression",
    role: "Junior Web Developer",
    company: "Ression",
    period: "May 2022 - December 2022",
    duration: "8 months",
    location: "Fredericton, NB, Canada",
    type: "Software Engineering",
    bullets: [
      "Collaborated with senior engineers to design, build, and maintain software applications using C#, .NET, and Xamarin.",
      "Authored clean, maintainable, well-documented code adhering to enterprise object-oriented standards.",
      "Identified, reproduced, and patched software bugs through rigorous debugging and unit testing.",
      "Utilized Git for branching and version control; drafted architecture documentation and API specifications.",
    ],
    technologies: ["C#", ".NET", "Xamarin", "SQL", "Git", "REST APIs"],
  },
  {
    id: "loyalist-coord",
    role: "Project Coordinator",
    company: "Loyalist College",
    period: "January 2022 - April 2022",
    duration: "4 months",
    location: "Belleville, ON, Canada",
    type: "Project Coordination & Analytics",
    bullets: [
      "Built dynamic Excel analytical dashboards for tracking cross-functional milestones and resource allocations.",
      "Conducted a comprehensive functionality and cost-effectiveness comparison between ArcGIS and QGIS.",
      "Presented findings to stakeholders recommending the optimal GIS tool, followed by hands-on team training sessions.",
    ],
    technologies: ["Project Management", "Dynamic Excel Dashboards", "ArcGIS", "QGIS", "Cross-Functional Leadership"],
  },
];

export const EDUCATIONS: EducationItem[] = [
  {
    degree: "Ontario College Graduate Certificate, Project Management",
    institution: "Loyalist College",
    location: "Belleville, ON, Canada",
    period: "September 2021 - June 2022",
    focus: "Agile methodologies, sprint planning, project governance, risk mitigation, and stakeholder management.",
  },
  {
    degree: "Ontario College Graduate Certificate, Computer Software & Database Development",
    institution: "Lambton College",
    location: "Toronto / Sarnia, ON, Canada",
    period: "January 2018 - December 2020",
    focus: "Relational database architecture, enterprise software engineering (.NET, Java), web applications, and data warehousing.",
  },
  {
    degree: "Bachelor's in Computer Application (BCA)",
    institution: "CHAROTAR UNIVERSITY OF SCIENCE AND TECHNOLOGY (CHARUSAT)",
    location: "Changa, Gujarat, India",
    period: "July 2014 - June 2017",
    focus: "Core computer science fundamentals, data structures, algorithms, object-oriented programming, and relational database systems.",
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "CyberSecurity Foundations",
    issuer: "Industry Accredited Security Institute",
    year: "2024",
    highlight: "Core security principles, identity & access management, vulnerability assessment, defense in depth.",
  },
  {
    name: "SQL Advanced Certificate",
    issuer: "Database Professional Institute",
    year: "2023",
    highlight: "Complex window functions, indexing strategies, recursive queries, and query performance tuning.",
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google Career Certificates",
    year: "2023",
    highlight: "End-to-end data pipelines, data cleaning, statistical modeling, R programming, and executive Tableau dashboards.",
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
    skills: ["Railway.app", "Vercel V0", "Git / GitHub Version Control", "Technical Support & Troubleshooting", "Ticket Lifecycle Management", "WordPress Custom Dev & SEO"],
  },
  {
    category: "Compliance & Governance",
    skills: ["KYC / AML Document Verification", "Fraud Pattern Identification", "Agile & Project Management (Loyalist)", "Cross-Functional Collaboration", "Technical Documentation"],
  },
];

export const AUDIO_SCRIPTS = [
  {
    id: "elevator-pitch",
    title: "Executive Introduction & Bio",
    duration: "45 sec",
    text: "Hello! I am Bharatkumar Chandvani, an AI Engineer and Full Stack Developer based in Nadiad, Gujarat. With a solid foundation in Python, .NET, SQL, and project management, I have transitioned into hands-on AI engineering. I build autonomous agents, structured tool-calling pipelines, and production web applications deployed on Railway and Vercel. I am currently seeking junior AI/ML or full-stack engineering roles where I can ship real products and make an immediate impact.",
  },
  {
    id: "ai-transition",
    title: "Transition to AI Engineering",
    duration: "55 sec",
    text: "My path into AI engineering is grounded in real-world systems. Having built enterprise applications in C# and managed technical reporting platforms at scale, I understand that generative AI is most powerful when combined with rigorous software engineering. I focus on deterministic schema enforcement, multi-turn state persistence, and grounding LLMs with real APIs and database tools rather than treating AI like a novelty. I am shipping all my work openly on GitHub.",
  },
  {
    id: "kyc-compliance",
    title: "KYC & Fraud Prevention Experience",
    duration: "40 sec",
    text: "For nearly four years at Pi Network, I worked as a KYC Validator verifying user credentials against strict regulatory compliance standards. This experience gave me a deep understanding of document integrity, visual tampering, and security edge cases — insights I now bring into multimodal AI vision pipelines and identity automation.",
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
    <path d="M 260 220 L 320 220" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>
    <rect x="320" y="170" width="180" height="100" fill="#27272a" rx="8" stroke="#38bdf8"/>
    <text x="340" y="210" fill="#4ade80" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">Express Server</text>
    <text x="340" y="235" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Node.js Proxy</text>
    <path d="M 500 220 L 560 220" stroke="#4ade80" stroke-width="2"/>
    <rect x="560" y="170" width="160" height="100" fill="#27272a" rx="8" stroke="#f43f5e"/>
    <text x="580" y="210" fill="#fb7185" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">Gemini API</text>
    <text x="580" y="235" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">Pro / Flash / TTS</text>
    <rect x="80" y="300" width="640" height="100" fill="#18181b" rx="8" stroke="#3f3f46"/>
    <text x="100" y="335" fill="#e2e8f0" font-family="monospace" font-size="13">// Architectural Principle: Never expose Gemini secrets to client</text>
    <text x="100" y="360" fill="#e2e8f0" font-family="monospace" font-size="13">POST /api/chat -&gt; server validation -&gt; ai.models.generateContent</text>
  </svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
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
    title: "KYC Verification & Fraud Detection Flow",
    description: "Two-stage heuristic and multimodal pipeline for ID document compliance.",
    svgDataUrl: createSampleSvg("Document Verification & Compliance Pipeline", "Biometric and credential verification against regulatory standards", "#10b981"),
    prompt: "Review this document verification workflow from a security, latency, and compliance standpoint. How does multimodal AI complement deterministic validation rules?",
  },
];
