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
    audioRef.current = audio;

    // Handle audio events
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    // Set up fallback for user interaction (only if autoplay fails)
    let interactionListenersSet = false;
    const setupUserInteractionFallback = () => {
      if (interactionListenersSet) return;
      interactionListenersSet = true;

      const handleFirstInteraction = async () => {
        if (hasAttemptedAutoplay.current) return;
        try {
          await audio.play();
          hasAttemptedAutoplay.current = true;
          // Remove listeners after successful play
          document.removeEventListener("click", handleFirstInteraction);
          document.removeEventListener("touchstart", handleFirstInteraction);
          document.removeEventListener("keydown", handleFirstInteraction);
        } catch (err) {
          console.log("Play failed on user interaction:", err);
        }
      };

      document.addEventListener("click", handleFirstInteraction, { once: true });
      document.addEventListener("touchstart", handleFirstInteraction, { once: true });
      document.addEventListener("keydown", handleFirstInteraction, { once: true });
    };

    // Attempt autoplay when audio is ready
    const attemptAutoplay = async () => {
      if (hasAttemptedAutoplay.current) return;
      
      try {
        await audio.play();
        hasAttemptedAutoplay.current = true;
      } catch (error) {
        // Autoplay was prevented by browser, set up fallback for user interaction
        console.log("Autoplay prevented, will try on user interaction");
        setupUserInteractionFallback();
      }
    };

    // Try to play when audio can play through (loaded enough)
    audio.addEventListener("canplaythrough", attemptAutoplay, { once: true });
    
    // Also try immediately (in case audio is already cached/ready)
    attemptAutoplay();

    // Cleanup
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("canplaythrough", attemptAutoplay);
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

