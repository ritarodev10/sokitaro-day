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
      {/* Popup Container - Fixed Size */}
      <div
        className={`relative w-[95vw] md:w-[800px] h-[70vh] md:h-[600px] mx-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${className}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: "transparent",
        }}
      >
        {/* Close button - brutalism style */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 border-4 border-black bg-white hover:bg-black hover:text-white text-black font-black text-2xl flex items-center justify-center transition-all duration-150 z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
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
        className="flex gap-4 mt-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className={`px-8 py-3 border-4 border-black font-black text-lg transition-all duration-150 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
            hasPrevious
              ? "bg-white hover:bg-black hover:text-white text-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
          }`}
          aria-label="Previous"
        >
          ← Previous
        </button>
        <button
          onClick={onNext}
          disabled={!hasNext}
          className={`px-8 py-3 border-4 border-black font-black text-lg transition-all duration-150 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
            hasNext
              ? "bg-white hover:bg-black hover:text-white text-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] cursor-pointer"
              : "bg-gray-200 text-gray-400 cursor-not-allowed opacity-50"
          }`}
          aria-label="Next"
        >
          Next →
        </button>
      </div>
    </div>
  );
}

