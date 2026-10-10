import { jsPDF } from "jspdf";

export const generateResumePdf = () => {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "letter", // 612 x 792 pt
  });

  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 48;
  const contentWidth = pageWidth - margin * 2;

  // --- PAGE 1 ---
  let y = 46;

  // Header - Name (Centered, Bold, Serif / Clean)
  doc.setFont("times", "bold");
  doc.setFontSize(21);
  doc.setTextColor(30, 41, 59); // slate-800
  doc.text("BHARATKUMAR CHANDVANI", pageWidth / 2, y, { align: "center" });
  y += 18;

  // Subtitle / Roles
  doc.setFont("times", "italic");
  doc.setFontSize(10.5);
  doc.setTextColor(51, 65, 85);
  doc.text("AI Engineer  |  Full Stack Developer  |  Technical Support Engineer", pageWidth / 2, y, { align: "center" });
  y += 15;

  // Contact line
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  doc.text("Nadiad, Gujarat, India  |  +91 72839 61105  |  Chandvanibharat@gmail.com", pageWidth / 2, y, { align: "center" });
  y += 14;

  // Links line (LeetCode | GitHub | LinkedIn)
  doc.setFont("times", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(37, 99, 235); // blue-600
  const linksText = "LeetCode  |  GitHub  |  LinkedIn";
  doc.text(linksText, pageWidth / 2, y, { align: "center" });

  // Add clickable links over the text
  const linksWidth = doc.getTextWidth(linksText);
  const startLinksX = (pageWidth - linksWidth) / 2;
  const leetWidth = doc.getTextWidth("LeetCode");
  const sepWidth = doc.getTextWidth("  |  ");
  const gitWidth = doc.getTextWidth("GitHub");

  doc.link(startLinksX, y - 9, leetWidth, 12, { url: "https://leetcode.com" });
  doc.link(startLinksX + leetWidth + sepWidth, y - 9, gitWidth, 12, { url: "https://github.com/bharatkumar00797" });
  doc.link(startLinksX + leetWidth + sepWidth + gitWidth + sepWidth, y - 9, doc.getTextWidth("LinkedIn"), 12, { url: "https://www.linkedin.com/in/bharat-chandvani/" });

  y += 16;

  // Helper: Section Title with underline
  const addSectionTitle = (title: string) => {
    doc.setFont("times", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(15, 23, 42); // slate-900
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(51, 65, 85);
    doc.setLineWidth(0.75);
    doc.line(margin, y, margin + contentWidth, y);
    y += 12;
  };

  // Helper: Bullet point
  const addBullet = (bullet: string) => {
    doc.setFont("times", "normal");
    doc.setFontSize(9);
    doc.setTextColor(30, 41, 59);
    doc.text("•", margin + 6, y);
    const split = doc.splitTextToSize(bullet, contentWidth - 18);
    doc.text(split, margin + 16, y);
    y += split.length * 11 + 2;
  };

  // 1. PROFESSIONAL SUMMARY
  addSectionTitle("Professional Summary");
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  const summary =
    "Full-stack developer (Python, .NET, SQL, WordPress) transitioning into AI engineering. Building AI agents and LLM-powered applications hands-on — from prompt design, tool-calling, and structured output to state persistence, evaluation harnesses, and deployment on Railway/Vercel. I care about the unglamorous parts most demos skip: stop conditions, failure logs, and eval scores. Shipping portfolio projects in public on GitHub and looking for a junior AI/ML engineering role where I can build real products and grow fast.";
  const splitSummary = doc.splitTextToSize(summary, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 11 + 10;

  // 2. TECHNICAL SKILLS
  addSectionTitle("Technical Skills");
  const skillsList = [
    { label: "AI & LLMs", text: "Prompt Engineering, AI Agents, LLM tool/function calling, structured output (Pydantic), agent evaluation (LLM-as-judge), OpenAI/Anthropic APIs, RAG fundamentals" },
    { label: "Languages", text: "Python, C#, JavaScript, PHP, SQL" },
    { label: "Frameworks & Tools", text: "Vercel v0, Railway.app, .NET, Xamarin, WordPress, Git, REST APIs" },
    { label: "Databases", text: "SQL (Advanced), MySQL, database design and optimization" },
    { label: "Cloud", text: "AWS EC2, Lambda, MySQL on RDS-style setups, snapshots" },
    { label: "Certifications", text: "Google Data Analytics, Cyber Security Foundations, SQL Advanced" },
  ];

  skillsList.forEach((sk) => {
    doc.setFont("times", "bold");
    doc.setFontSize(9);
    doc.setTextColor(15, 23, 42);
    doc.text(`${sk.label}: `, margin, y);
    const labelW = doc.getTextWidth(`${sk.label}: `);

    doc.setFont("times", "normal");
    doc.setTextColor(30, 41, 59);
    const split = doc.splitTextToSize(sk.text, contentWidth - labelW);
    doc.text(split, margin + labelW, y);
    y += split.length * 11 + 1;
  });
  y += 8;

  // 3. PROFESSIONAL EXPERIENCE (Page 1 Entries)
  addSectionTitle("Professional Experience");

  // Experience 1: AI Engineer
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("AI Engineer — Self-directed Learning & Portfolio Projects", margin, y);
  y += 11;

  doc.setFont("times", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("Personal Projects – AI Agents  |  Nadiad, Gujarat, India", margin, y);
  doc.setFont("times", "normal");
  const date1 = "Sep 2026 – Present";
  doc.text(date1, margin + contentWidth - doc.getTextWidth(date1), y);
  y += 11;

  addBullet("Building AI agents with LLM tool-calling, structured prompting, and state persistence — designing stop conditions, failure logging, and crash-recovery patterns for reliable autonomous runs.");
  addBullet("Shipping projects in public on GitHub with proper READMEs: problem statement, architecture, demo GIFs, and reproducible setup.");
  y += 4;

  // Experience 2: Relationship Manager
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Relationship Manager (Technical Operations & Reporting)", margin, y);
  y += 11;

  doc.setFont("times", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("Tanmay Travels  |  Nadiad, Gujarat, India", margin, y);
  doc.setFont("times", "normal");
  const date2 = "Nov 2024 – Aug 2026";
  doc.text(date2, margin + contentWidth - doc.getTextWidth(date2), y);
  y += 11;

  addBullet("Installed, configured, and updated reporting systems; resolved user complaints and provided solutions to internally raised tickets.");
  addBullet("Ensured smooth day-to-day technical operations with timely and accurate reporting.");
  y += 4;

  // Experience 3: WordPress Developer
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("WordPress Developer", margin, y);
  y += 11;

  doc.setFont("times", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("Claire Beauty Parlor and Salon  |  Barrie, ON, Canada (Remote)", margin, y);
  doc.setFont("times", "normal");
  const date3 = "May 2024 – Nov 2024";
  doc.text(date3, margin + contentWidth - doc.getTextWidth(date3), y);
  y += 11;

  addBullet("Customized and modified WordPress themes and plugins to enhance site functionality, performance, and user experience.");
  addBullet("Implemented responsive, mobile-first design; conducted security, backup, and performance maintenance.");
  addBullet("Improved search visibility through SEO (Yoast) and content optimization; delivered Google Analytics performance reports to the client.");
  y += 4;

  // Experience 4: Junior Web Developer
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Junior Web Developer", margin, y);
  y += 11;

  doc.setFont("times", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("Ression  |  Fredericton, NL, Canada", margin, y);
  doc.setFont("times", "normal");
  const date4 = "May 2022 – Dec 2022";
  doc.text(date4, margin + contentWidth - doc.getTextWidth(date4), y);
  y += 11;

  addBullet("Developed and maintained software applications in C#, .NET, and Xamarin alongside senior developers — clean, documented, standards-compliant code.");
  addBullet("Debugged and resolved defects through comprehensive testing; used Git for version control and maintained technical documentation.");

  // --- PAGE 2 ---
  doc.addPage();
  y = 48;

  // Experience 5: KYC Validator
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("KYC Validator", margin, y);
  y += 11;

  doc.setFont("times", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("Pi Network  |  Toronto, ON, Canada (Remote)", margin, y);
  doc.setFont("times", "normal");
  const date5 = "Jul 2020 – Mar 2024";
  doc.text(date5, margin + contentWidth - doc.getTextWidth(date5), y);
  y += 11;

  addBullet("Reviewed and verified user-submitted identity documents against KYC requirements; flagged suspicious applications to prevent fraud.");
  addBullet("Maintained accurate verification records and guided users through the KYC process; reported recurring issues to the review team.");
  y += 5;

  // Experience 6: Project Coordinator
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Project Coordinator", margin, y);
  y += 11;

  doc.setFont("times", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("Loyalist College  |  Belleville, ON, Canada", margin, y);
  doc.setFont("times", "normal");
  const date6 = "Jan 2022 – Apr 2022";
  doc.text(date6, margin + contentWidth - doc.getTextWidth(date6), y);
  y += 11;

  addBullet("Built dynamic Excel dashboards for project tracking and coordinated cross-functional teams to ensure on-time delivery.");
  addBullet("Led an ArcGIS vs. QGIS comparative evaluation (functionality and cost), presented recommendations, and trained teams on the selected tool.");
  y += 10;

  // 4. PROJECTS
  addSectionTitle("Projects");

  // Project 1: AI Agents
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("AI Agents — Agent Engineering Portfolio (GitHub)", margin, y);
  y += 11;
  addBullet("Designing agents with production patterns: tool/function calling, structured output (Pydantic), iterative prompt evaluation, and bounded agent loops with explicit stop conditions.");
  addBullet("Implemented LLM-as-judge evaluation harness (golden test set + automated scoring) and state checkpointing so agents resume correctly after process crashes.");
  y += 4;

  // Project 2: Amazon Cloud Development
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Amazon Cloud Development (GitHub)", margin, y);
  y += 11;
  addBullet("Hands-on AWS work: EC2 instances, Lambda functions, MySQL server setup, snapshots, and instance management.");
  y += 4;

  // Project 3: DSA & SQL Problem Solving
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("DSA & SQL Problem Solving — LeetCode / HackerRank", margin, y);
  y += 11;
  addBullet("Solved data-structures and algorithms problems (LeetCode) and advanced SQL challenges (HackerRank SQL Advanced) — joins, window functions, CTEs, query optimization.");
  y += 10;

  // 5. EDUCATION
  addSectionTitle("Education");

  // Education 1
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Ontario College Graduate Certificate — Project Management", margin, y);
  y += 11;
  doc.setFont("times", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("Loyalist College, Canada", margin, y);
  doc.setFont("times", "normal");
  const edu1 = "Sep 2021 – Jun 2022";
  doc.text(edu1, margin + contentWidth - doc.getTextWidth(edu1), y);
  y += 14;

  // Education 2
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Ontario College Graduate Certificate — Computer Software & Database Development", margin, y);
  y += 11;
  doc.setFont("times", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("Lambton College, Canada", margin, y);
  doc.setFont("times", "normal");
  const edu2 = "Jan 2018 – Dec 2020";
  doc.text(edu2, margin + contentWidth - doc.getTextWidth(edu2), y);
  y += 14;

  // Education 3
  doc.setFont("times", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text("Bachelor of Computer Applications (BCA)", margin, y);
  y += 11;
  doc.setFont("times", "italic");
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text("Charotar University of Science and Technology (CHARUSAT), India", margin, y);
  doc.setFont("times", "normal");
  const edu3 = "Jul 2014 – Jun 2017";
  doc.text(edu3, margin + contentWidth - doc.getTextWidth(edu3), y);
  y += 18;

  // 6. CERTIFICATIONS
  addSectionTitle("Certifications");
  doc.setFont("times", "normal");
  doc.setFontSize(9);
  doc.setTextColor(30, 41, 59);
  doc.text("Google Data Analytics   |   Cyber Security Foundations   |   SQL Advanced Certificate", margin, y);

  // Trigger Download
  doc.save("Bharatkumar_Chandvani_Resume.pdf");
};
