"use client";

import React, { useEffect, useState, useRef } from "react";
import SookitaroHeader from "./SookitaroHeader";
import WeddingCoupleWithSign from "./WeddingCoupleWithSign";
import DateBanner from "./DateBanner";
import {
  dateBannerAnimationConfig,
  newspaperGlowAnimationConfig,
} from "./animationConfig";
import Newspaper from "./Newspaper";

interface SookitaroWeddingImageProps {
  className?: string;
}

export default function SookitaroWeddingImage({
  className,
}: SookitaroWeddingImageProps) {
  // Animation state for DateBanner reveal
  const [revealProgress, setRevealProgress] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  // Popup state
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Glow visibility state - starts hidden, appears after all animations
  const [showGlow, setShowGlow] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mounts
    const { duration, initialDelay } = dateBannerAnimationConfig;
    const SVG_WIDTH = 1449;

    const animate = (animationStartTime: number) => {
      const elapsed = Date.now() - animationStartTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out function
      const eased = 1 - Math.pow(1 - progress, 3);

      setRevealProgress(eased * SVG_WIDTH);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(() =>
          animate(animationStartTime)
        );
      } else {
        // Ensure we end at exactly the full width
        setRevealProgress(SVG_WIDTH);
      }
    };

    const timer = setTimeout(() => {
      const animationStartTime = Date.now();
      animationFrameRef.current = requestAnimationFrame(() =>
        animate(animationStartTime)
      );
    }, initialDelay);

    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Trigger glow animation after all other animations complete
  useEffect(() => {
    const glowTimer = setTimeout(() => {
      setShowGlow(true);
    }, newspaperGlowAnimationConfig.initialDelay);

    return () => {
      clearTimeout(glowTimer);
    };
  }, []);

  return (
    <>
      <svg
        width="1449"
        height="2270"
        viewBox="0 0 1449 2270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clipPath="url(#clip0_1_12940)">
          {/* Header Section */}
          <SookitaroHeader />
          {/* Couple with Sign Section */}
          <WeddingCoupleWithSign className="z-40" />
          {/* Newspaper Section */}
          <Newspaper
            className="z-50"
            filter={showGlow ? "url(#newspaperGlow)" : undefined}
            onClick={() => setIsPopupOpen(true)}
          />
          {/* Date Banner Section */}
          <g clipPath="url(#dateBannerRevealClip)">
            <DateBanner />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_12940">
            <rect width="1449" height="2270" fill="white" />
          </clipPath>
          <clipPath id="dateBannerRevealClip">
            <rect x="0" y="0" width={revealProgress} height="2270" />
          </clipPath>
          {/* Glow filter for newspaper with pulsing animation */}
          <filter
            id="newspaperGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            {/* First glow layer - larger, colored */}
            <feGaussianBlur stdDeviation="0" result="glow1">
              <animate
                attributeName="stdDeviation"
                values="5;25;5"
                dur="2s"
                repeatCount="indefinite"
              />
            </feGaussianBlur>
            <feColorMatrix
              in="glow1"
              type="matrix"
              values="1 0 0 0 0.8
                      0.8 0 0 0 0.6
                      0 0 0 0 0.2
                      0 0 0 1 0"
              result="coloredGlow1"
            />
            {/* Second glow layer - even larger */}
            <feGaussianBlur stdDeviation="0" result="glow2">
              <animate
                attributeName="stdDeviation"
                values="8;35;8"
                dur="2s"
                repeatCount="indefinite"
              />
            </feGaussianBlur>
            <feColorMatrix
              in="glow2"
              type="matrix"
              values="1 0 0 0 0.6
                      0.8 0 0 0 0.4
                      0 0 0 0 0.1
                      0 0 0 0.8 0"
              result="coloredGlow2"
            />
            {/* Merge all layers */}
            <feMerge>
              <feMergeNode in="coloredGlow2" />
              <feMergeNode in="coloredGlow1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          onClick={() => setIsPopupOpen(false)}
          style={{
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          }}
        >
          <div
            className="relative max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              backdropFilter: "blur(20px) saturate(180%)",
              WebkitBackdropFilter: "blur(20px) saturate(180%)",
              boxShadow: "8px 8px 0px 0px rgba(0,0,0,1), 0 8px 32px 0 rgba(31, 38, 135, 0.15)",
            }}
          >
            {/* Close button - brutalism style */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 border-4 border-black bg-white hover:bg-black hover:text-white text-black font-black text-2xl flex items-center justify-center transition-all duration-150 z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
              aria-label="Close"
            >
              ×
            </button>
            {/* Popup content */}
            <div className="p-8 pt-12">
              <h2 className="text-4xl font-black mb-6 text-center uppercase tracking-tight border-b-4 border-black pb-4">
                Newspaper Article
              </h2>
              <div className="prose max-w-none">
                <p className="text-xl mb-4 font-bold leading-relaxed">
                  This is where your newspaper content will appear. You can add
                  any content here - text, images, or other components.
                </p>
                <p className="text-lg text-black font-semibold">
                  Click outside the popup or use the × button to close.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
