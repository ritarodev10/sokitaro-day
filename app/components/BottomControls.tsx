"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { playWebButtonSound } from "../utils/sounds";

export default function BottomControls() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMenuClick = () => {
    playWebButtonSound();
    setIsMenuOpen(!isMenuOpen);
  };

  const handlePlayPauseClick = () => {
    playWebButtonSound();
    setIsPlaying(!isPlaying);
  };

  const handleHomeClick = () => {
    playWebButtonSound();
    setIsMenuOpen(false);
    router.push("/");
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-3 items-center">
      {/* Menu Button */}
      <button
        onClick={handleMenuClick}
        className="bg-white border-2 border-black font-black text-xs px-3 py-2 transition-all duration-150 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        style={{
          fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
          padding: "clamp(0.375rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)",
        }}
        aria-label="Menu"
      >
        ☰ MENU
      </button>

      {/* Media Player Button */}
      <button
        onClick={handlePlayPauseClick}
        className="bg-white border-2 border-black font-black text-xs px-3 py-2 transition-all duration-150 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        style={{
          fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
          padding: "clamp(0.375rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)",
        }}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? "⏸ PAUSE" : "▶ PLAY"}
      </button>

      {/* Menu Dropdown */}
      {isMenuOpen && (
        <div
          className="absolute bottom-full left-0 mb-2 bg-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          style={{
            minWidth: "clamp(8rem, 20vw, 12rem)",
            padding: "clamp(0.5rem, 1.5vw, 0.75rem)",
          }}
        >
          <div className="flex flex-col gap-1">
            <button
              onClick={handleHomeClick}
              className="text-left font-black text-xs px-2 py-1 hover:bg-black hover:text-white transition-colors"
              style={{
                fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
              }}
            >
              HOME
            </button>
            <button
              className="text-left font-black text-xs px-2 py-1 hover:bg-black hover:text-white transition-colors"
              style={{
                fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
              }}
            >
              ARTICLES
            </button>
            <button
              className="text-left font-black text-xs px-2 py-1 hover:bg-black hover:text-white transition-colors"
              style={{
                fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
              }}
            >
              ABOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
