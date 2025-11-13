"use client";

import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
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
}: PopupProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      onClick={onClose}
      style={{
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
      }}
    >
      {/* Container for popup and buttons - Portrait newspaper size */}
      <div
        className="flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(90vw, 600px)",
          maxWidth: "min(90vw, 600px)",
        }}
      >
        {/* Popup Container - Portrait newspaper with 3:4 aspect ratio */}
        <div
          className={`relative border-black ${className}`}
          style={{
            backgroundColor: "transparent",
            width: "min(90vw, 600px)",
            aspectRatio: "3 / 4",
            maxHeight: "80vh",
            borderWidth: "clamp(2px, 0.5vw, 4px)",
            boxShadow: "clamp(4px, 1vw, 8px) clamp(4px, 1vw, 8px) 0px 0px rgba(0,0,0,1)",
          }}
        >
          {/* Close button - brutalism style */}
          <button
            onClick={onClose}
            className="absolute bg-white hover:bg-black hover:text-white text-black font-black flex items-center justify-center transition-all duration-150 z-10"
            style={{
              top: "clamp(0.5rem, 1vh, 1rem)",
              right: "clamp(0.5rem, 1vh, 1rem)",
              width: "clamp(2rem, 4vw, 2.5rem)",
              height: "clamp(2rem, 4vw, 2.5rem)",
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              borderWidth: "clamp(1px, 0.3vw, 2px)",
              borderColor: "black",
              borderStyle: "solid",
              boxShadow: "clamp(1px, 0.3vw, 2px) clamp(1px, 0.3vw, 2px) 0px 0px rgba(0,0,0,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = "clamp(0.5px, 0.15vw, 1px) clamp(0.5px, 0.15vw, 1px) 0px 0px rgba(0,0,0,1)";
              e.currentTarget.style.transform = "translate(clamp(0.5px, 0.15vw, 1px), clamp(0.5px, 0.15vw, 1px))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "clamp(1px, 0.3vw, 2px) clamp(1px, 0.3vw, 2px) 0px 0px rgba(0,0,0,1)";
              e.currentTarget.style.transform = "translate(0, 0)";
            }}
            aria-label="Close"
          >
            ×
          </button>
          {/* Scrollable Popup content */}
          <div className="h-full overflow-y-auto overflow-x-hidden">
            {children}
          </div>
        </div>

        {/* Navigation Buttons - Below the popup, separated */}
        <div
          className="flex flex-shrink-0"
          style={{
            marginTop: "clamp(0.5rem, 1.5vh, 1.5rem)",
            gap: "clamp(0.75rem, 2vw, 1rem)",
          }}
        >
          <button
            onClick={onPrevious}
            disabled={!hasPrevious}
            className={`border-black font-black transition-all duration-150 ${
              hasPrevious
                ? "bg-white hover:bg-black hover:text-white text-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
            }`}
            style={{
              padding: "clamp(0.5rem, 1.5vh, 0.75rem) clamp(1rem, 3vw, 2rem)",
              fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
              borderWidth: "clamp(1px, 0.3vw, 2px)",
              borderStyle: "solid",
              boxShadow: "clamp(1px, 0.3vw, 2px) clamp(1px, 0.3vw, 2px) 0px 0px rgba(0,0,0,1)",
            }}
            onMouseEnter={(e) => {
              if (hasPrevious) {
                e.currentTarget.style.boxShadow = "clamp(0.5px, 0.15vw, 1px) clamp(0.5px, 0.15vw, 1px) 0px 0px rgba(0,0,0,1)";
                e.currentTarget.style.transform = "translate(clamp(0.5px, 0.15vw, 1px), clamp(0.5px, 0.15vw, 1px))";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "clamp(1px, 0.3vw, 2px) clamp(1px, 0.3vw, 2px) 0px 0px rgba(0,0,0,1)";
              e.currentTarget.style.transform = "translate(0, 0)";
            }}
            aria-label="Previous"
          >
            ← Previous
          </button>
          <button
            onClick={onNext}
            disabled={!hasNext}
            className={`border-black font-black transition-all duration-150 ${
              hasNext
                ? "bg-white hover:bg-black hover:text-white text-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
            }`}
            style={{
              padding: "clamp(0.5rem, 1.5vh, 0.75rem) clamp(1rem, 3vw, 2rem)",
              fontSize: "clamp(0.875rem, 2vw, 1.125rem)",
              borderWidth: "clamp(1px, 0.3vw, 2px)",
              borderStyle: "solid",
              boxShadow: "clamp(1px, 0.3vw, 2px) clamp(1px, 0.3vw, 2px) 0px 0px rgba(0,0,0,1)",
            }}
            onMouseEnter={(e) => {
              if (hasNext) {
                e.currentTarget.style.boxShadow = "clamp(0.5px, 0.15vw, 1px) clamp(0.5px, 0.15vw, 1px) 0px 0px rgba(0,0,0,1)";
                e.currentTarget.style.transform = "translate(clamp(0.5px, 0.15vw, 1px), clamp(0.5px, 0.15vw, 1px))";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "clamp(1px, 0.3vw, 2px) clamp(1px, 0.3vw, 2px) 0px 0px rgba(0,0,0,1)";
              e.currentTarget.style.transform = "translate(0, 0)";
            }}
            aria-label="Next"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

