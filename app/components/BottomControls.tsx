"use client";

import React from "react";
import { playWebButtonSound } from "../utils/sounds";
import { useMusic } from "../contexts/MusicContext";

export default function BottomControls() {
  const { isPlaying, toggle } = useMusic();

  const handlePlayPauseClick = () => {
    playWebButtonSound();
    toggle();
  };

  const handleOpenLink = () => {
    playWebButtonSound();
    window.open(
      "https://suno.com/s/12FlQrpzV9T15ywF",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
      {/* Neo Brutalism Music Player Box */}
      <div className="bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-2">
        <div className="flex flex-col md:flex-row items-center gap-2">
          {/* Song Title with Music Icon */}
          <div className="text-center md:text-left flex-1 min-w-0 flex items-center gap-1.5">
            <span className="text-sm md:text-base">🎵</span>
            <p
              className="font-black text-black truncate"
              style={{ fontSize: "clamp(0.5rem, 1.2vw, 0.7rem)" }}
            >
              Bermimpi Lagi - A Song For Sukma (demo ver)
            </p>
          </div>

          {/* Controls */}
          <div className="flex gap-1.5 items-center">
            {/* Play/Pause Button */}
            <button
              onClick={handlePlayPauseClick}
              className="bg-white border-2 border-black font-black transition-all duration-150 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              style={{
                fontSize: "clamp(0.5rem, 1.2vw, 0.65rem)",
                padding:
                  "clamp(0.25rem, 0.8vw, 0.4rem) clamp(0.5rem, 1.5vw, 0.75rem)",
              }}
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>

            {/* Open Link Button */}
            <button
              onClick={handleOpenLink}
              className="bg-white border-2 border-black font-black transition-all duration-150 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              style={{
                fontSize: "clamp(0.5rem, 1.2vw, 0.65rem)",
                padding:
                  "clamp(0.25rem, 0.8vw, 0.4rem) clamp(0.5rem, 1.5vw, 0.75rem)",
              }}
              aria-label="Open song on Suno"
            >
              🔗
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
