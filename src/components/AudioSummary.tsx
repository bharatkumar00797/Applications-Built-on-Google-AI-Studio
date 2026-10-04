import React, { useState, useRef, useEffect } from "react";
import { ThemeMode } from "../types";
import { AUDIO_SCRIPTS } from "../data/portfolioData";
import {
  Volume2,
  Play,
  Pause,
  RotateCcw,
  Download,
  Loader2,
  Sparkles,
  Headphones,
  Check,
  AlertCircle,
} from "lucide-react";

interface AudioSummaryProps {
  theme: ThemeMode;
}

export const AudioSummary: React.FC<AudioSummaryProps> = ({ theme }) => {
  const isDark = theme === "dark";
  const [selectedScriptId, setSelectedScriptId] = useState(AUDIO_SCRIPTS[0].id);
  const [customText, setCustomText] = useState("");
  const [isCustomMode, setIsCustomMode] = useState(false);
  const [voiceName, setVoiceName] = useState("Puck");
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [modelUsed, setModelUsed] = useState("gemini-3.8-flash-tts");

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const activeScript = AUDIO_SCRIPTS.find((s) => s.id === selectedScriptId) || AUDIO_SCRIPTS[0];
  const activeText = isCustomMode ? customText : activeScript.text;

  // Cleanup audio object URLs on unmount
  useEffect(() => {
    return () => {
      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }
    };
  }, [audioUrl]);

  // Generate Speech from Server-Side Gemini 3.8 Flash TTS
  const handleGenerateTTS = async (textToSynthesize?: string) => {
    const text = textToSynthesize || activeText;
    if (!text || text.trim().length === 0) {
      setErrorMessage("Please select or enter text to generate speech.");
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    // Stop current playback if active
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }

    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text,
          voiceName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `TTS synthesis failed (${response.status})`);
      }

      const data = await response.json();
      if (!data.audioBase64) {
        throw new Error("No audio payload returned from Gemini TTS engine.");
      }

      // Convert base64 to Blob URL
      const byteCharacters = atob(data.audioBase64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type: data.mimeType || "audio/wav" });
      const newUrl = URL.createObjectURL(blob);

      if (audioUrl) {
        URL.revokeObjectURL(audioUrl);
      }

      setAudioUrl(newUrl);
      setModelUsed(data.modelUsed || "gemini-3.8-flash-tts");

      // Auto play when ready
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch((e) => console.log("Auto-play blocked, user can click play", e));
        }
      }, 100);
    } catch (err: any) {
      console.error("TTS error:", err);
      setErrorMessage(
        err.message || "Failed to generate audio via gemini-3.8-flash-tts. Check API credentials."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.error("Playback error:", e));
    }
  };

  const handleRestart = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    audioRef.current.play().then(() => setIsPlaying(true));
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div
      className={`rounded-lg border p-6 transition-colors ${
        isDark ? "bg-zinc-900/60 border-zinc-800 text-zinc-100" : "bg-white border-zinc-300 text-zinc-900 shadow-xs"
      }`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 mb-5 border-inherit">
        <div className="flex items-center gap-3">
          <div
            className={`p-2.5 rounded-md border ${
              isDark ? "bg-zinc-800 border-zinc-700 text-emerald-400" : "bg-zinc-100 border-zinc-300 text-emerald-600"
            }`}
          >
            <Headphones className="w-5 h-5" aria-hidden="true" />
          </div>
          <div>
            <h2 className="text-base font-bold flex items-center gap-2">
              <span>AI Audio Voice Synthesis</span>
              <span
                className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded border ${
                  isDark ? "bg-zinc-950 border-zinc-800 text-zinc-400" : "bg-zinc-100 border-zinc-300 text-zinc-700"
                }`}
              >
                gemini-3.8-flash-tts
              </span>
            </h2>
            <p className={`text-xs ${isDark ? "text-zinc-400" : "text-zinc-600"}`}>
              Listen to Bharatkumar's executive intro, career transition, or enter custom text to synthesize.
            </p>
          </div>
        </div>

        {/* Voice Selector */}
        <div className="flex items-center gap-2 text-xs">
          <label htmlFor="voice-select" className={isDark ? "text-zinc-400" : "text-zinc-600"}>
            Voice Persona:
          </label>
          <select
            id="voice-select"
            value={voiceName}
            onChange={(e) => setVoiceName(e.target.value)}
            className={`px-2.5 py-1 text-xs font-medium rounded-md border focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
              isDark
                ? "bg-zinc-950 border-zinc-700 text-zinc-200"
                : "bg-white border-zinc-300 text-zinc-900"
            }`}
          >
            <option value="Puck">Puck (Confident & Articulate)</option>
            <option value="Charon">Charon (Deep & Professional)</option>
            <option value="Kore">Kore (Clear & Warm)</option>
            <option value="Fenrir">Fenrir (Authoritative & Focused)</option>
            <option value="Zephyr">Zephyr (Modern & Energetic)</option>
          </select>
        </div>
      </div>

      {/* Script Selection Tabs */}
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 text-xs">
          {AUDIO_SCRIPTS.map((script) => {
            const isSelected = !isCustomMode && selectedScriptId === script.id;
            return (
              <button
                key={script.id}
                type="button"
                onClick={() => {
                  setIsCustomMode(false);
                  setSelectedScriptId(script.id);
                }}
                className={`px-3 py-1.5 font-medium rounded-md border transition-colors ${
                  isSelected
                    ? isDark
                      ? "bg-emerald-950/80 border-emerald-600 text-emerald-300 font-semibold"
                      : "bg-emerald-50 border-emerald-600 text-emerald-900 font-semibold"
                    : isDark
                    ? "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                    : "bg-zinc-100 border-zinc-300 text-zinc-700 hover:text-zinc-950"
                }`}
              >
                <span>{script.title}</span>
                <span className="opacity-60 ml-1.5">({script.duration})</span>
              </button>
            );
          })}

          <button
            type="button"
            onClick={() => setIsCustomMode(true)}
            className={`px-3 py-1.5 font-medium rounded-md border transition-colors ${
              isCustomMode
                ? isDark
                  ? "bg-blue-950/80 border-blue-600 text-blue-300 font-semibold"
                  : "bg-blue-50 border-blue-600 text-blue-900 font-semibold"
                : isDark
                ? "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                : "bg-zinc-100 border-zinc-300 text-zinc-700 hover:text-zinc-950"
            }`}
          >
            Custom Narrative Text
          </button>
        </div>

        {/* Text Area or Transcript View */}
        {isCustomMode ? (
          <div>
            <label htmlFor="custom-tts" className="sr-only">
              Custom text to synthesize
            </label>
            <textarea
              id="custom-tts"
              rows={3}
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              placeholder="Type any interview question, bio excerpt, or technical topic to narrate with Gemini 3.8 Flash TTS..."
              className={`w-full p-3 text-xs rounded-md border focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                isDark
                  ? "bg-zinc-950 border-zinc-800 text-zinc-200 placeholder:text-zinc-600"
                  : "bg-zinc-50 border-zinc-300 text-zinc-900 placeholder:text-zinc-400"
              }`}
            />
          </div>
        ) : (
          <div
            className={`p-3.5 rounded-md border text-xs leading-relaxed ${
              isDark ? "bg-zinc-950/70 border-zinc-800 text-zinc-300" : "bg-zinc-50 border-zinc-200 text-zinc-800"
            }`}
          >
            <span className="font-semibold block mb-1 text-emerald-600 dark:text-emerald-400">
              Narrative Script:
            </span>
            <p>{activeScript.text}</p>
          </div>
        )}

        {/* Synthesize Button & Audio Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
          <div className="flex items-center gap-3">
            <button
              type="button"
              disabled={isLoading}
              onClick={() => handleGenerateTTS()}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-md shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none disabled:opacity-50 ${
                isDark
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                  : "bg-emerald-700 hover:bg-emerald-600 text-white"
              }`}
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Synthesizing Audio...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{audioUrl ? "Regenerate Audio" : "Generate & Play Audio"}</span>
                </>
              )}
            </button>

            {audioUrl && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? "Pause audio" : "Play audio"}
                  className={`p-2 rounded-md border transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                    isDark
                      ? "bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                      : "bg-zinc-900 border-zinc-900 text-white hover:bg-zinc-800"
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 translate-x-0.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleRestart}
                  aria-label="Restart audio from beginning"
                  className={`p-2 rounded-md border transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                    isDark
                      ? "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                      : "bg-zinc-100 border-zinc-300 text-zinc-700 hover:text-zinc-950"
                  }`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                <a
                  href={audioUrl}
                  download={`bharatkumar-${selectedScriptId}.wav`}
                  className={`p-2 rounded-md border transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:outline-none ${
                    isDark
                      ? "bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200"
                      : "bg-zinc-100 border-zinc-300 text-zinc-700 hover:text-zinc-950"
                  }`}
                  title="Download WAV file"
                >
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>

          {/* Seek progress bar when audio exists */}
          {audioUrl && (
            <div className="flex-1 max-w-xs flex items-center gap-2 text-xs font-mono">
              <span className="text-[11px] opacity-75">{formatTime(currentTime)}</span>
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-zinc-300 dark:bg-zinc-700 accent-emerald-500"
              />
              <span className="text-[11px] opacity-75">{formatTime(duration)}</span>
            </div>
          )}
        </div>

        {/* Hidden HTML5 Audio Element */}
        <audio
          ref={audioRef}
          src={audioUrl || undefined}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
        />

        {/* Error message */}
        {errorMessage && (
          <div
            className={`mt-3 p-3 rounded-md border text-xs flex items-start gap-2 ${
              isDark
                ? "bg-rose-950/40 border-rose-800 text-rose-300"
                : "bg-rose-50 border-rose-300 text-rose-800"
            }`}
          >
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </div>
  );
};
