import { ExperienceItem, EducationItem, CertificationItem, ProjectItem, ImageAnalysisPreset } from "../types";

export const PROFILE_INFO = {
  name: "Bharatkumar Chandvani",
  shortName: "Bharat Chandvani",
  title: "Full-Stack Developer & AI Systems Builder: Python, FastAPI, Next.js and tested AI-agent demos",
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
    id: "ai-newsletter-automation",
    title: "AI Newsletter Automation Pipeline",
    tagline: "End-to-end automated pipeline synthesizing arXiv research, tech trends, and dispatching formatted email digests",
    category: "AI Automation",
    featured: true,
    description:
      "An automated content intelligence engine that ingests technical research feeds (arXiv, GitHub Trending, engineering blogs), deduplicates articles, summarizes key points with an LLM, formats responsive HTML templates, and dispatches scheduled newsletters.",
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
    architectureHighlights: "Demo: runs with a mock LLM by default for the walkthrough. Multi-stage pipeline: Scheduled feed polling -> semantic relevance filtering -> Gemini summarization -> HTML template rendering -> batch email dispatch.",
  },
  {
    id: "krishnapriya-shopify-store",
    title: "KrishnaPriya Shopify Store",
    tagline: "Shopify store built with Claude and run day to day with a team of AI agents",
    category: "AI Automation",
    featured: false,
    description:
      "Shopify store built with Claude and operated by a team of AI agents for product research, SEO, orders and customer care.",
    achievements: [
      "Set up the store with Claude: catalogue of 33 products (20 active, 13 in draft) priced in INR.",
      "Runs day to day with a team of Grok Bot AI agents covering product finding, SEO, orders, customer care and admin.",
    ],
    technologies: ["Shopify", "Claude", "Grok Bot", "AI Agents"],
    githubUrl: "",
    architectureHighlights: "Shopify store managed by separate AI agents per task (products, SEO, orders, customer care, admin) through the Shopify connector.",
  },
  {
    id: "modernize-ai-legacy-code",
    title: "Modernize AI - Legacy Code Modernization Agent",
    tagline: "Agent that refactors legacy Python with allowlisted transforms and keeps a change only if tests still pass",
    category: "AI Automation",
    featured: false,
    description:
      "Rule-based smell detection plus LLM-ranked, allowlisted Python refactors, applied in a sandbox and kept only when the existing test suite stays green. Runs offline with a mock LLM provider by default.",
    achievements: [
      "Token and AST detectors for 18 smell kinds, including ones that work on unparseable Python 2 sources.",
      "Keep/revert loop: detect, rank, transform, run tests, then keep or revert each step.",
      "Released v1.0.0 on GitHub with CI.",
    ],
    technologies: ["Python", "FastAPI", "LLM", "Static Analysis", "Docker"],
    githubUrl: "https://github.com/bharatkumar00797/modernize-ai-legacy-code",
    architectureHighlights: "Deterministic analyzers produce candidates, an LLM (or fixed offline policy) ranks them, and the test suite decides what stays. Supports OpenAI-compatible APIs (OpenAI, Groq, Ollama).",
  },
  {
    id: "agentguard-ai-governance",
    title: "AgentGuard - AI Agent Security & Governance",
    tagline: "Guard proxy that checks LLM agent prompts and tool calls against policies and logs every decision",
    category: "AI & Governance",
    featured: false,
    description:
      "Security and governance layer for LLM agents: a policy engine, prompt-injection, PII and jailbreak detectors, and a guard proxy that audits every agent tool call with a tamper-evident log.",
    achievements: [
      "Declarative YAML/JSON policy engine with default deny, argument constraints, rate limits and approval gates.",
      "Audit log as JSON Lines with a SHA-256 hash chain; a verify command detects edited, deleted or reordered records.",
      "Released v1.0.0 on GitHub with CI; CLI, REST API and dashboard.",
    ],
    technologies: ["Python", "FastAPI", "LLM Security", "Policy Engine", "Docker"],
    githubUrl: "https://github.com/bharatkumar00797/agentguard-ai-governance",
    architectureHighlights: "Every prompt, tool result, proposed tool call and final answer passes one check point. Runs offline with a mock model or against an OpenAI-compatible LLM.",
  },
  {
    id: "fraudsentinel-ai-risk-agent",
    title: "FraudSentinel AI - Risk & Fraud Agent",
    tagline: "Fraud screening agent: explainable rules, anomaly scoring and an LLM investigator that drafts case files",
    category: "AI Automation",
    featured: false,
    description:
      "Screens payment transactions for fraud and money laundering. A rule and anomaly-based risk engine scores each transaction; risky cases go to an LLM investigator with read-only tools that drafts a case file. Runs offline with a mock LLM.",
    achievements: [
      "19 named rules with reason codes, weights and evidence strings, combined into a 0-100 score.",
      "Behavioural features computed only from history before each transaction.",
      "Released v1.0.0 on GitHub with CI.",
    ],
    technologies: ["Python", "FastAPI", "LLM", "Anomaly Detection", "Docker"],
    githubUrl: "https://github.com/bharatkumar00797/fraudsentinel-ai-risk-agent",
    architectureHighlights: "Deterministic scoring first, an investigator with least-privilege tools, and a policy gate that makes the final decision.",
  },
  {
    id: "open-source-contributions",
    title: "Open-Source Contributions",
    tagline: "Merged pull requests to other projects on GitHub",
    category: "Full-Stack",
    featured: false,
    description:
      "Merged pull requests to AyiPM (people and project management app) and folio.",
    achievements: [
      "mahfoos/AyiPM #71 (merged): added a copy button next to the employee ID on member profiles; closes #37.",
      "Sall25/folio #70 (merged): removed leftover console.log calls, sent real failures to console.error/warn, and added a no-console lint rule; closes #34.",
    ],
    technologies: ["TypeScript", "Next.js", "ESLint", "Git"],
    githubUrl: "",
    links: [
      { label: "AyiPM PR #71", url: "https://github.com/mahfoos/AyiPM/pull/71" },
      { label: "folio PR #70", url: "https://github.com/Sall25/folio/pull/70" },
    ],
    architectureHighlights: "Small, focused pull requests merged by the maintainers.",
  },
  {
    id: "boardroom-ai-multi-agent",
    title: "BoardRoom AI - Multi-Agent Decision Engine",
    tagline: "Five executive agents debate a business decision, then a moderator produces an auditable memo",
    category: "AI Automation",
    featured: false,
    description:
      "LLM multi-agent demo where five executive roles debate options in moderated rounds, critique each other, revise scores and vote. A deterministic moderator turns the transcript into a decision memo. Runs offline with a mock LLM by default.",
    achievements: [
      "Five role agents with mandates, critique rounds, weighted voting and a legal veto path.",
      "Scenario text is scanned and fenced as untrusted data before it reaches the model.",
      "Released v1.0.0 on GitHub with CI; CLI, REST API and dashboard.",
    ],
    technologies: ["Python", "FastAPI", "LLM", "Multi-Agent", "Docker"],
    githubUrl: "https://github.com/bharatkumar00797/boardroom-ai-multi-agent",
    architectureHighlights: "Moderated debate loop with injection guards, reply validation and vote arithmetic that does not depend on model confidence.",
  },
  {
    id: "devpilot-ai-swe-agent",
    title: "DevPilot - AI Software Engineering Agent",
    tagline: "Agent that plans, edits code in a sandbox, runs tests and returns a reviewable diff",
    category: "AI Automation",
    featured: false,
    description:
      "Given an issue and a repository, an LLM agent explores the code, writes a patch, runs tests in a throwaway sandbox, iterates on failures and returns a unified diff with a PR summary. Runs offline with a mock LLM by default.",
    achievements: [
      "Plan-act-observe loop with validated tools: list, read, search, replace, write and run tests.",
      "Sandbox guardrails: copy-on-run workspace, command allowlist, no shell, scrubbed environment.",
      "Released v1.0.0 on GitHub with CI; CLI, REST API and dashboard.",
    ],
    technologies: ["Python", "FastAPI", "LLM", "Sandboxing", "Docker"],
    githubUrl: "https://github.com/bharatkumar00797/devpilot-ai-swe-agent",
    architectureHighlights: "Every run happens in a throwaway copy of the repo with path guards and allowlisted commands; success is reported only when tests pass.",
  },
  {
    id: "datasage-ai-analyst",
    title: "DataSage - AI Data Analyst Agent",
    tagline: "Text-to-SQL agent that guards model SQL as read-only before running it on SQLite",
    category: "AI Automation",
    featured: false,
    description:
      "Ask a business question in plain English; an LLM proposes SQL, a layered read-only guard decides whether it runs, then insights and a chart are computed from the returned rows. Runs offline with a mock LLM by default.",
    achievements: [
      "Lexical validator plus SQLite authorizer allow only SELECT on allowlisted tables, with row cap and timeout.",
      "Insights and chart type are derived from query rows, not invented by the model.",
      "Released v1.0.0 on GitHub with CI; CLI, REST API and dashboard.",
    ],
    technologies: ["Python", "FastAPI", "SQLite", "LLM", "Docker"],
    githubUrl: "https://github.com/bharatkumar00797/datasage-ai-analyst",
    architectureHighlights: "Model proposes SQL; guard and executor enforce read-only access; numbers in the explanation come from returned rows.",
  },
  {
    id: "selfheal-ai-microservices",
    title: "SelfHeal - AI Self-Healing Microservices Demo",
    tagline: "Agent that detects faults in a simulated cluster, proposes allowlisted fixes and verifies them",
    category: "AI Automation",
    featured: false,
    description:
      "Closed-loop demo over a simulated microservice cluster: detect anomalies, rank evidence-backed root-cause hypotheses, propose an allowlisted remediation, act, verify against metrics, and revert or escalate when the fix did not help. Runs offline with a mock LLM by default.",
    achievements: [
      "Rule diagnosis plus LLM ranking by hypothesis index only; the model never invents an action.",
      "Safety policy with action allowlist, cooldowns, budgets and human approval for protected services.",
      "Released v1.0.0 on GitHub with CI; CLI, REST API and dashboard.",
    ],
    technologies: ["Python", "FastAPI", "LLM", "Simulated Cluster", "Docker"],
    githubUrl: "https://github.com/bharatkumar00797/selfheal-ai-microservices",
    architectureHighlights: "Detect, diagnose, plan, safety-check, act, verify; ineffective actions are undone. Safety does not depend on the model.",
  },
  {
    id: "careerpilot-ai-agent",
    title: "CareerPilot - Personal AI Career Agent",
    tagline: "Fit score, skill gaps, interview pack and application drafts from a profile and a job description",
    category: "AI Automation",
    featured: false,
    description:
      "Turns a structured career profile and a job description into an evidence-backed fit score, a skill-gap practice plan, interview prep and a tailored application package. Scoring is rules-first; the model may only restate allowlisted skills. Runs offline with a mock LLM by default.",
    achievements: [
      "Deterministic fit score from skill overlap, must-haves, title match and experience years before any model call.",
      "Profile and JD text are scanned and fenced as untrusted data; the model cannot invent employers or metrics.",
      "Released v1.0.0 on GitHub with CI; CLI, REST API and dashboard.",
    ],
    technologies: ["Python", "FastAPI", "LLM", "Career Tools", "Docker"],
    githubUrl: "https://github.com/bharatkumar00797/careerpilot-ai-agent",
    architectureHighlights: "Rules produce the score floor; narration stays inside allowlisted skills already present in the profile or job.",
  },
  {
    id: "omniknow-ai-multimodal-rag",
    title: "OmniKnow - Multimodal RAG with ACLs",
    tagline: "Permission-aware RAG over Markdown, CSV, PDF and images with injection quarantine",
    category: "AI Automation",
    featured: false,
    description:
      "Demo RAG agent over four modalities with document-level ACLs enforced before retrieval, hybrid search, prompt-injection quarantine and citation verification. Answers abstain when evidence is weak. Runs offline with a mock LLM by default.",
    achievements: [
      "Per-caller index built only from chunks the principal can read, so hidden docs never influence scores.",
      "Flagged chunks are quarantined as security flags and never used as evidence; citations must match retrieved chunks.",
      "Released v1.0.0 on GitHub with CI; CLI, REST API and dashboard.",
    ],
    technologies: ["Python", "FastAPI", "RAG", "ACL", "Docker"],
    githubUrl: "https://github.com/bharatkumar00797/omniknow-ai-multimodal-rag",
    architectureHighlights: "Permissions first, injected text quarantined, and grounded-or-silent answers with verified citations.",
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
    architectureHighlights: "Demo walkthrough uses sample documents. Multi-stage pipeline: PDF rasterization, optical character recognition filtering, structured tabular data parsing, and automated Excel export.",
  },
  {
    id: "web-application-aws-serverless",
    title: "Serverless Web Application on AWS",
    tagline: "Event-driven cloud application utilizing AWS Lambda, API Gateway, DynamoDB & S3",
    category: "Cloud & AWS",
    earlier: true,
    featured: true,
    description:
      "A learning project: a serverless web application on Amazon Web Services, using AWS Lambda functions for compute, API Gateway for secure REST endpoints, DynamoDB for NoSQL persistence, and S3 for static assets.",
    achievements: [
      "Built a serverless backend with no dedicated servers to manage, using managed AWS services.",
      "Implemented secure API Gateway routing with AWS Lambda functions handling backend request execution.",
      "Configured S3 bucket policies and DynamoDB tables for fast key-value data retrieval.",
    ],
    technologies: ["AWS Lambda", "API Gateway", "DynamoDB", "Amazon S3", "JavaScript", "Cloud Architecture"],
    githubUrl: "https://github.com/bharatkumar00797/-Web-Application-on-AWS--Serverless",
    demoUrl: "#demo-aws-serverless",
    demoLabel: "Cloud Architecture View",
    mockupType: "aws-cloud",
    architectureHighlights: "Demo walkthrough of a learning project: serverless architecture using AWS Lambda, API Gateway, DynamoDB and S3 with IAM execution roles.",
  },
  {
    id: "amazon-cloud-development",
    title: "Amazon Cloud Development & Infrastructure",
    tagline: "AWS cloud architecture, IAM security governance, VPC configuration, and EC2 provisioning",
    category: "Cloud & AWS",
    earlier: true,
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
    architectureHighlights: "Learning project covering VPC networking, IAM policies, and EC2 setup.",
  },
  {
    id: "python-automation-scripts",
    title: "Python Engineering & Automation Suite",
    tagline: "Backend scripts, automation routines, and data structure implementations",
    category: "Python & Data",
    earlier: true,
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
    id: "personal-portfolio-scratch",
    title: "Hand-Crafted Developer Portfolio (v1)",
    tagline: "First-ever portfolio built from scratch with HTML5, CSS3, JavaScript & Bootstrap",
    category: "Full-Stack",
    earlier: true,
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
    liveUrl: "https://bharatkumar00797.github.io",
    demoUrl: "https://bharatkumar00797.github.io",
    demoLabel: "GitHub Pages Site",
    mockupType: "portfolio-browser",
    architectureHighlights: "Semantic HTML5 markup with zero-dependency vanilla JavaScript event handling and responsive styling.",
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
      "Released v1.0.0 of ten AI-agent demo projects on GitHub, each with automated tests and CI, using offline mock LLMs by default.",
      "Built AgentGuard, a security and governance layer for LLM agents with policy checks, detectors, and audit logging.",
      "Built an AI newsletter automation workflow that gathers sources, summarizes them with an LLM, and sends a formatted email digest.",
    ],
    technologies: ["Python", "AI Agents", "LLM Tool Calling", "Pydantic", "FastAPI", "Vercel"],
  },
  {
    id: "tanmay-travels",
    role: "Relationship Manager",
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
    id: "craig-spodak",
    role: "Freelance Graphic Designer",
    company: "Craig Spodak",
    period: "June 2024",
    duration: "1 month",
    location: "Delray Beach, Florida, United States",
    type: "Business Card Design",
    bullets: [
      "Designed business cards for a freelance client using Adobe Illustrator, Photoshop and InDesign.",
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "InDesign"],
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
    location: "Fredericton, NB, Canada",
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
    skills: ["MySQL", "SQL Query Optimization", "Window Functions & Indexing", "Database Normalization", "Google Data Analytics", "Dynamic Excel Dashboards"],
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
    text: "For 3+ years at Pi Network, I worked as a freelance KYC Validator, reviewing identity documents against KYC requirements. This experience gave me a deep understanding of document integrity, visual tampering, and security edge cases — insights I now bring into multimodal AI vision pipelines and identity automation.",
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
