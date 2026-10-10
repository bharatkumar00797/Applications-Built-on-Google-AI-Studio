import React, { useState, useRef, useEffect } from "react";
import { ThemeMode, ChatMessage, GeminiModelOption } from "../types";
import { CHATBOT_STARTERS } from "../data/portfolioData";
import {
  Bot,
  User,
  Send,
  X,
  RotateCcw,
  Copy,
  Check,
  Loader2,
  Sparkles,
  Zap,
  Cpu,
} from "lucide-react";

interface ChatbotDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const ChatbotDrawer: React.FC<ChatbotDrawerProps> = ({
  isOpen,
  onClose,
  theme,
}) => {
  const isDark = theme === "dark";
  const [modelOption, setModelOption] = useState<GeminiModelOption>("gemini-3.5-flash");
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "initial-agent-msg",
      role: "model",
      content:
        "Hello! I am Bharatkumar Chandvani's Career Assistant. I have full context on Bharat's technical background — including his featured projects (Agent Governance Dashboard, AI Newsletter Pipeline, OCR Extraction, AWS Serverless), his 3.7+ years in KYC verification at Pi Network, and project management credentials from Canada. How can I help evaluate his fit for your team?",
      modelUsed: "gemini-3.5-flash",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Auto scroll to bottom of thread
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendMessage = async (textToSend?: string, taskType?: "complex" | "general" | "fast") => {
    const text = textToSend || inputMessage;
    if (!text.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    // Update conversation state
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage("");
    setIsLoading(true);

    // Auto set model based on taskType if triggered from preset
    let targetModel = modelOption;
    if (taskType === "complex") {
      targetModel = "gemini-3.1-pro-preview";
      setModelOption("gemini-3.1-pro-preview");
    } else if (taskType === "fast") {
      targetModel = "gemini-3.1-flash-lite";
      setModelOption("gemini-3.1-flash-lite");
    }

    try {
      // Send entire conversation history for true multi-turn chat
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          modelPreference: targetModel,
          taskType,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${response.status}`);
      }

      const data = await response.json();
      const modelMessage: ChatMessage = {
        id: `model-${Date.now()}`,
        role: "model",
        content: data.content,
        modelUsed: data.modelUsed || targetModel,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, modelMessage]);
    } catch (err: any) {
      console.error("Chat error:", err);
      const errorMessage: ChatMessage = {
        id: `error-${Date.now()}`,
        role: "model",
        content: `Error generating response: ${err.message || "Failed to reach AI service"}. Please check server connection.`,
        modelUsed: "System Fallback",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: `reset-${Date.now()}`,
        role: "model",
        content: "Conversation history cleared. Ask me anything about Bharat's technical capabilities, projects, or background!",
        modelUsed: modelOption,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  const copyMessageContent = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="chat-heading"
    >
      <div
        className={`w-full max-w-lg h-full flex flex-col shadow-2xl transition-colors border-l ${
          isDark
            ? "bg-zinc-950 border-zinc-800 text-zinc-100"
            : "bg-white border-zinc-300 text-zinc-900"
        }`}
      >
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between border-inherit">
          <div className="flex items-center gap-2.5">
            <div
              className={`p-2 rounded-md ${
                isDark ? "bg-blue-950 text-blue-400 border border-blue-800" : "bg-blue-50 text-blue-700 border border-blue-200"
              }`}
            >
              <Bot className="w-5 h-5" aria-hidden="true" />
            </div>
            <div>
              <h2 id="chat-heading" className="text-sm font-bold tracking-tight">
                Career Assistant
              </h2>
              <div className="flex items-center gap-1.5 text-[11px] opacity-75">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Grounded in resume data</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={handleClearHistory}
              title="Clear conversation history"
              className={`p-1.5 rounded-md border text-xs transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                isDark
                  ? "border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                  : "border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              }`}
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              title="Close chat panel"
              className={`p-1.5 rounded-md border text-xs transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                isDark
                  ? "border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                  : "border-zinc-200 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Model Selector Tabs (Specified by User Feature Requirement) */}
        <div
          className={`px-4 py-2 border-b flex flex-wrap items-center justify-between gap-2 text-xs ${
            isDark ? "bg-zinc-900/60 border-zinc-800" : "bg-zinc-50 border-zinc-200"
          }`}
        >
          <span className="font-medium text-[11px] opacity-75">Active Model:</span>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => setModelOption("gemini-3.1-pro-preview")}
              className={`px-2 py-1 text-[11px] font-medium rounded transition-colors ${
                modelOption === "gemini-3.1-pro-preview"
                  ? isDark
                    ? "bg-purple-950 border border-purple-600 text-purple-300 font-semibold"
                    : "bg-purple-100 border border-purple-500 text-purple-900 font-semibold"
                  : "opacity-60 hover:opacity-100"
              }`}
              title="Complex Tasks: Deep Technical & Architecture Evaluation"
            >
              <span className="flex items-center gap-1">
                <Cpu className="w-3 h-3" />
                <span>Pro Preview (Complex)</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setModelOption("gemini-3.5-flash")}
              className={`px-2 py-1 text-[11px] font-medium rounded transition-colors ${
                modelOption === "gemini-3.5-flash"
                  ? isDark
                    ? "bg-blue-950 border border-blue-600 text-blue-300 font-semibold"
                    : "bg-blue-100 border border-blue-500 text-blue-900 font-semibold"
                  : "opacity-60 hover:opacity-100"
              }`}
              title="General Tasks: Standard Career & Interview Inquiries"
            >
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>Flash 3.5 (General)</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setModelOption("gemini-3.1-flash-lite")}
              className={`px-2 py-1 text-[11px] font-medium rounded transition-colors ${
                modelOption === "gemini-3.1-flash-lite"
                  ? isDark
                    ? "bg-emerald-950 border border-emerald-600 text-emerald-300 font-semibold"
                    : "bg-emerald-100 border border-emerald-500 text-emerald-900 font-semibold"
                  : "opacity-60 hover:opacity-100"
              }`}
              title="Fast Tasks: Ultra-Low Latency Screening"
            >
              <span className="flex items-center gap-1">
                <Zap className="w-3 h-3" />
                <span>Flash-Lite (Fast)</span>
              </span>
            </button>
          </div>
        </div>

        {/* Scrollable Message Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => {
            const isUser = msg.role === "user";
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}
              >
                {!isUser && (
                  <div
                    className={`w-7 h-7 rounded-md shrink-0 flex items-center justify-center text-xs font-bold border mt-0.5 ${
                      isDark
                        ? "bg-zinc-900 border-zinc-800 text-blue-400"
                        : "bg-blue-100 border-blue-200 text-blue-800"
                    }`}
                  >
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-lg p-3 text-xs leading-relaxed border space-y-1.5 ${
                    isUser
                      ? isDark
                        ? "bg-blue-600 border-blue-500 text-white"
                        : "bg-zinc-950 border-zinc-950 text-white"
                      : isDark
                      ? "bg-zinc-900/80 border-zinc-800 text-zinc-200"
                      : "bg-zinc-50 border-zinc-300 text-zinc-900"
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.content}</div>

                  <div
                    className={`flex items-center justify-between pt-1 text-[10px] ${
                      isUser
                        ? "text-blue-200"
                        : isDark
                        ? "text-zinc-500"
                        : "text-zinc-500"
                    }`}
                  >
                    <span>{msg.timestamp}</span>
                    {!isUser && (
                      <div className="flex items-center gap-2">
                        {msg.modelUsed && (
                          <span className="font-mono text-[9px] opacity-75">
                            {msg.modelUsed}
                          </span>
                        )}
                        <button
                          type="button"
                          onClick={() => copyMessageContent(msg.id, msg.content)}
                          title="Copy message"
                          className="opacity-75 hover:opacity-100"
                        >
                          {copiedId === msg.id ? (
                            <Check className="w-3 h-3 text-emerald-400" />
                          ) : (
                            <Copy className="w-3 h-3" />
                          )}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {isUser && (
                  <div
                    className={`w-7 h-7 rounded-md shrink-0 flex items-center justify-center text-xs font-bold border mt-0.5 ${
                      isDark
                        ? "bg-zinc-800 border-zinc-700 text-zinc-200"
                        : "bg-zinc-200 border-zinc-300 text-zinc-800"
                    }`}
                  >
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div
                className={`w-7 h-7 rounded-md shrink-0 flex items-center justify-center text-xs font-bold border mt-0.5 ${
                  isDark
                    ? "bg-zinc-900 border-zinc-800 text-blue-400"
                    : "bg-blue-100 border-blue-200 text-blue-800"
                }`}
              >
                <Bot className="w-4 h-4" />
              </div>
              <div
                className={`rounded-lg p-3 text-xs border flex items-center gap-2 ${
                  isDark
                    ? "bg-zinc-900 border-zinc-800 text-zinc-400"
                    : "bg-zinc-50 border-zinc-300 text-zinc-600"
                }`}
              >
                <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-500" />
                <span>Consulting resume & engineering principles...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Questions */}
        <div
          className={`p-3 border-t space-y-1.5 ${
            isDark ? "bg-zinc-900/40 border-zinc-800" : "bg-zinc-50 border-zinc-200"
          }`}
        >
          <span className="text-[10px] font-bold uppercase tracking-wider opacity-60">
            Suggested Starter Prompts:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {CHATBOT_STARTERS.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSendMessage(s.prompt, s.taskType)}
                disabled={isLoading}
                className={`text-[11px] px-2.5 py-1 rounded-md border text-left transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none disabled:opacity-50 ${
                  isDark
                    ? "bg-zinc-950 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900"
                    : "bg-white border-zinc-300 text-zinc-800 hover:text-zinc-950 hover:bg-zinc-100"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="p-3 border-t flex items-center gap-2 border-inherit"
        >
          <label htmlFor="chat-input-field" className="sr-only">
            Ask Bharat's AI Co-Pilot
          </label>
          <input
            id="chat-input-field"
            ref={inputRef}
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Ask about Bharat's technical skills, experience, projects..."
            disabled={isLoading}
            className={`flex-1 px-3 py-2 text-xs rounded-md border focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none disabled:opacity-50 ${
              isDark
                ? "bg-zinc-950 border-zinc-800 text-zinc-100 placeholder:text-zinc-600"
                : "bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-500"
            }`}
          />

          <button
            type="submit"
            disabled={isLoading || !inputMessage.trim()}
            className={`p-2 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none disabled:opacity-40 ${
              isDark
                ? "bg-blue-600 hover:bg-blue-500 text-white"
                : "bg-zinc-950 hover:bg-zinc-800 text-white"
            }`}
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
