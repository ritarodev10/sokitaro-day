"use client";

import React, { useEffect, useRef } from "react";
import { playNewspaperSound } from "../utils/sounds";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
  nextPageName?: string;
  previousPageName?: string;
  isThankYouPage?: boolean;
}

export default function Popup({
  isOpen,
  onClose,
  children,
  className = "",
  onNext,
  onPrevious,
  hasNext = false,
  hasPrevious = false,
  nextPageName,
  previousPageName,
  isThankYouPage = false,
}: PopupProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Reset scroll position when children change (article changes)
  useEffect(() => {
    if (scrollContainerRef.current && isOpen) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [children, isOpen]);

  if (!isOpen) return null;

  // Thank you page - render like Envelope (without popup card, just over blur bg)
  if (isThankYouPage) {
    return (
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center"
        onClick={onClose}
        style={{
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          height: "100dvh",
          minHeight: "100dvh",
        }}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col items-center justify-center"
        >
          {/* Content */}
          <div className="flex items-center justify-center">{children}</div>

          {/* Close button - Below the content */}
          <button
            onClick={onClose}
            className="border-2 border-black font-black text-xs transition-all duration-150 bg-white hover:bg-black hover:text-white text-black cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            style={{
              fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
              padding: "clamp(0.375rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)",
              marginTop: "clamp(1rem, 2dvh, 1.5rem)",
            }}
            aria-label="Back to home"
          >
            back to home
          </button>
        </div>
      </div>
    );
  }

  // Regular popup with card
  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      onClick={onClose}
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        height: "100dvh",
        minHeight: "100dvh",
      }}
    >
      {/* Container for popup and buttons - Landscape newspaper size */}
      <div
        className="flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(90vw, 800px)",
          maxWidth: "min(90vw, 800px)",
          maxHeight: "90dvh",
          padding: "clamp(0.5rem, 2dvh, 1rem)",
        }}
      >
        {/* Popup Container - Landscape newspaper with 5:4 aspect ratio */}
        <div
          className={`relative border-black ${className}`}
          style={{
            backgroundColor: "transparent",
            width: "min(90vw, 800px)",
            aspectRatio: "5 / 4",
            maxHeight: "calc(90dvh - 80px)",
            borderWidth: "clamp(2px, 0.5vw, 4px)",
            boxShadow:
              "clamp(4px, 1vw, 8px) clamp(4px, 1vw, 8px) 0px 0px rgba(0,0,0,1)",
          }}
        >
          {/* Close button - brutalism style */}
          <button
            onClick={onClose}
            className="absolute bg-white hover:bg-black hover:text-white text-black font-black flex items-center justify-center transition-all duration-150 z-10 border-2 border-black cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
            style={{
              top: "clamp(0.5rem, 1dvh, 1rem)",
              right: "clamp(0.5rem, 1dvh, 1rem)",
              width: "clamp(2rem, 4vw, 2.5rem)",
              height: "clamp(2rem, 4vw, 2.5rem)",
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
            }}
            aria-label="Close"
          >
            ×
          </button>
          {/* Scrollable Popup content */}
          <div
            ref={scrollContainerRef}
            className="h-full overflow-y-auto overflow-x-hidden"
          >
            {children}
          </div>
        </div>

        {/* Navigation Buttons - Below the popup, separated */}
        <div
          className="flex flex-shrink-0 gap-3"
          style={{
            marginTop: "clamp(0.5rem, 1.5dvh, 1.5rem)",
          }}
        >
          <button
            onClick={() => {
              if (hasPrevious && onPrevious) {
                playNewspaperSound();
                onPrevious();
              }
            }}
            disabled={!hasPrevious}
            className={`border-2 border-black font-black text-xs transition-all duration-150 ${
              hasPrevious
                ? "bg-white hover:bg-black hover:text-white text-black cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
            }`}
            style={{
              fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
              padding: "clamp(0.375rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)",
            }}
            aria-label="Previous"
          >
            ← {previousPageName || "PREV"}
          </button>
          <button
            onClick={() => {
              if (hasNext && onNext) {
                playNewspaperSound();
                onNext();
              }
            }}
            disabled={!hasNext}
            className={`border-2 border-black font-black text-xs transition-all duration-150 ${
              hasNext
                ? "bg-white hover:bg-black hover:text-white text-black cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
                : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
            }`}
            style={{
              fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
              padding: "clamp(0.375rem, 1vw, 0.5rem) clamp(0.75rem, 2vw, 1rem)",
            }}
            aria-label="Next"
          >
            {nextPageName || "NEXT"} →
          </button>
        </div>
      </div>
    </div>
  );
}
