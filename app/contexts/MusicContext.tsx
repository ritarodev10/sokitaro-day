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

  // Initialize audio on mount, load in background, and autoplay when ready
  useEffect(() => {
    const audio = new Audio("/assets/sounds/bermimpi lagi-demo-ver.mp3");
    audio.volume = 0.6; // Set volume to 60% for background music
    audio.loop = true; // Loop continuously
    audio.preload = "auto"; // Preload the audio in the background
    audioRef.current = audio;

    // Handle audio events
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    // Play automatically when audio is fully loaded
    const playWhenReady = async () => {
      if (hasAttemptedAutoplay.current) return;
      
      try {
        // Wait a tiny bit to ensure audio is ready
        if (audio.readyState >= 3) {
          await audio.play();
          hasAttemptedAutoplay.current = true;
        }
      } catch (error) {
        // If autoplay fails, try again on next ready state
        console.log("Autoplay attempt failed, will retry when fully loaded:", error);
      }
    };

    // Listen for when audio is fully loaded and ready to play
    const handleCanPlayThrough = () => {
      playWhenReady();
    };

    const handleLoadedData = () => {
      playWhenReady();
    };

    audio.addEventListener("canplaythrough", handleCanPlayThrough, { once: true });
    audio.addEventListener("loadeddata", handleLoadedData, { once: true });

    // If audio is already loaded (cached), play immediately
    if (audio.readyState >= 3) {
      playWhenReady();
    }

    // Cleanup
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("loadeddata", handleLoadedData);
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

