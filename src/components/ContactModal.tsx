import React, { useState } from "react";
import { ThemeMode } from "../types";
import { PROFILE_INFO } from "../data/portfolioData";
import { useAuth } from "../context/AuthContext";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Copy,
  Check,
  X,
  Send,
  ExternalLink,
  CheckCircle,
} from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  theme,
}) => {
  const isDark = theme === "dark";
  const { submitInquiry } = useAuth();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState("Engineering Opportunity / Portfolio Inquiry");
  const [message, setMessage] = useState("");
  const [isSavedToFirestore, setIsSavedToFirestore] = useState(false);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSendMail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Persist to Firestore
    try {
      await submitInquiry({
        name: senderName,
        email: senderEmail,
        company,
        subject,
        message,
      });
      setIsSavedToFirestore(true);
    } catch (err) {
      console.warn("Firestore inquiry persistence skipped/failed:", err);
    }

    const mailtoBody = encodeURIComponent(
      `Hello Bharatkumar,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})${
        company ? `\nCompany: ${company}` : ""
      }`
    );
    const mailtoUrl = `mailto:${PROFILE_INFO.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${mailtoBody}`;
    window.location.href = mailtoUrl;

    setTimeout(() => {
      onClose();
      setIsSavedToFirestore(false);
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-heading"
    >
      <div
        className={`w-full max-w-lg rounded-lg border shadow-2xl transition-colors overflow-hidden ${
          isDark
            ? "bg-zinc-950 border-zinc-800 text-zinc-100"
            : "bg-white border-zinc-300 text-zinc-900"
        }`}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b flex items-center justify-between border-inherit">
          <div>
            <h2 id="contact-heading" className="text-base font-bold tracking-tight">
              Get in Touch with Bharatkumar
            </h2>
            <p className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
              Direct channels for recruiters, hiring managers, and collaborators.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className={`p-1.5 rounded-md border text-xs transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
              isDark
                ? "border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900"
                : "border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-4 sm:p-5 space-y-5">
          {/* Quick Copy Chips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => copyToClipboard(PROFILE_INFO.contact.email, "email")}
              className={`p-2.5 rounded-md border flex items-center justify-between transition-colors text-left ${
                isDark
                  ? "bg-zinc-900/60 border-zinc-800 hover:bg-zinc-800 text-zinc-200"
                  : "bg-zinc-50 border-zinc-300 hover:bg-zinc-100 text-zinc-900"
              }`}
            >
              <div className="flex items-center gap-2 truncate pr-2">
                <Mail className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span className="truncate">{PROFILE_INFO.contact.email}</span>
              </div>
              {copiedKey === "email" ? (
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-60 shrink-0" />
              )}
            </button>

            <button
              type="button"
              onClick={() => copyToClipboard(PROFILE_INFO.contact.phone, "phone")}
              className={`p-2.5 rounded-md border flex items-center justify-between transition-colors text-left ${
                isDark
                  ? "bg-zinc-900/60 border-zinc-800 hover:bg-zinc-800 text-zinc-200"
                  : "bg-zinc-50 border-zinc-300 hover:bg-zinc-100 text-zinc-900"
              }`}
            >
              <div className="flex items-center gap-2 truncate pr-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{PROFILE_INFO.contact.phone}</span>
              </div>
              {copiedKey === "phone" ? (
                <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              ) : (
                <Copy className="w-3.5 h-3.5 opacity-60 shrink-0" />
              )}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center justify-between text-xs pt-1">
            <a
              href={PROFILE_INFO.contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <a
              href={PROFILE_INFO.contact.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-medium hover:text-blue-600 transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub Portfolio</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>
          </div>

          {/* Direct Email Compose Form */}
          <form onSubmit={handleSendMail} className="space-y-3 pt-2 border-t border-inherit">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="contact-name" className="text-[11px] font-semibold block mb-1">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="e.g. Sarah Jenkins"
                  className={`w-full px-2.5 py-1.5 text-xs rounded-md border focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                    isDark
                      ? "bg-zinc-900 border-zinc-800 text-zinc-100"
                      : "bg-white border-zinc-300 text-zinc-900"
                  }`}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="text-[11px] font-semibold block mb-1">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="name@company.com"
                  className={`w-full px-2.5 py-1.5 text-xs rounded-md border focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                    isDark
                      ? "bg-zinc-900 border-zinc-800 text-zinc-100"
                      : "bg-white border-zinc-300 text-zinc-900"
                  }`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="text-[11px] font-semibold block mb-1">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className={`w-full px-2.5 py-1.5 text-xs rounded-md border focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                  isDark
                    ? "bg-zinc-900 border-zinc-800 text-zinc-100"
                    : "bg-white border-zinc-300 text-zinc-900"
                }`}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="text-[11px] font-semibold block mb-1">
                Message / Opportunity Overview
              </label>
              <textarea
                id="contact-message"
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="We came across your portfolio and would like to invite you for an interview regarding a junior AI / full-stack engineering role..."
                className={`w-full p-2.5 text-xs rounded-md border focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                  isDark
                    ? "bg-zinc-900 border-zinc-800 text-zinc-100"
                    : "bg-white border-zinc-300 text-zinc-900"
                }`}
              />
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md border ${
                  isDark
                    ? "bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800"
                    : "bg-zinc-100 border-zinc-300 text-zinc-700 hover:bg-zinc-200"
                }`}
              >
                Cancel
              </button>

              <button
                type="submit"
                className={`inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold rounded-md shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                  isDark
                    ? "bg-blue-600 hover:bg-blue-500 text-white"
                    : "bg-zinc-950 hover:bg-zinc-800 text-white"
                }`}
              >
                <Send className="w-3 h-3" />
                <span>Open Mail Client</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
