"use client";

import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";

interface MusicContextType {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  toggle: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasAttemptedAutoplay = useRef(false);

  // Initialize audio on mount and attempt autoplay
  useEffect(() => {
    const audio = new Audio("/assets/sounds/bermimpi lagi-demo-ver.mp3");
    audio.volume = 0.6; // Set volume to 60% for background music
    audio.loop = true; // Loop continuously
    audio.preload = "auto"; // Preload the audio
    audioRef.current = audio;

    // Handle audio events
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    // Attempt to play audio - will try multiple times
    const attemptAutoplay = async () => {
      if (hasAttemptedAutoplay.current && audio.readyState >= 2) return;
      
      try {
        await audio.play();
        hasAttemptedAutoplay.current = true;
      } catch (error) {
        // Autoplay was prevented by browser
        console.log("Autoplay prevented, will try on user interaction");
      }
    };

    // Set up user interaction listener to start playback
    const handleUserInteraction = async () => {
      if (hasAttemptedAutoplay.current) return;
      
      try {
        await audio.play();
        hasAttemptedAutoplay.current = true;
        // Remove listeners after successful play
        document.removeEventListener("click", handleUserInteraction, true);
        document.removeEventListener("touchstart", handleUserInteraction, true);
        document.removeEventListener("keydown", handleUserInteraction, true);
        document.removeEventListener("mousedown", handleUserInteraction, true);
      } catch (err) {
        console.log("Play failed on user interaction:", err);
      }
    };

    // Listen for ANY user interaction on the page (capture phase to catch early)
    document.addEventListener("click", handleUserInteraction, true);
    document.addEventListener("touchstart", handleUserInteraction, true);
    document.addEventListener("keydown", handleUserInteraction, true);
    document.addEventListener("mousedown", handleUserInteraction, true);

    // Try to play when audio can play through (loaded enough)
    const handleCanPlay = () => {
      attemptAutoplay();
    };
    audio.addEventListener("canplaythrough", handleCanPlay, { once: true });
    audio.addEventListener("loadeddata", handleCanPlay, { once: true });
    
    // Also try immediately (in case audio is already cached/ready)
    if (audio.readyState >= 2) {
      attemptAutoplay();
    }

    // Cleanup
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("canplaythrough", handleCanPlay);
      audio.removeEventListener("loadeddata", handleCanPlay);
      document.removeEventListener("click", handleUserInteraction, true);
      document.removeEventListener("touchstart", handleUserInteraction, true);
      document.removeEventListener("keydown", handleUserInteraction, true);
      document.removeEventListener("mousedown", handleUserInteraction, true);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const play = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        console.log("Error playing music:", error);
      }
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const toggle = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, play, pause, toggle }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error("useMusic must be used within a MusicProvider");
  }
  return context;
}

