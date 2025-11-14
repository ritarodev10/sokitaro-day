"use client";

import React, { useMemo } from "react";
import Image from "next/image";

interface EnvelopeProps {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  inviteeName?: string;
}

export default function Envelope({
  className = "",
  width,
  height,
  onClick,
  inviteeName = "Special One",
}: EnvelopeProps) {
  const envelopeWidth = width || 800;
  const envelopeHeight = height || 600;

  // Box dimensions (as adjusted)
  const boxWidth = envelopeWidth * 0.35;
  const boxHeight = envelopeWidth * 0.1;

  // Limit to 30 characters and preserve original case
  const displayName = useMemo(() => {
    const trimmed = inviteeName.trim();
    return trimmed.length > 30 ? trimmed.substring(0, 30) : trimmed;
  }, [inviteeName]);

  // Calculate font size based on character count
  // Scales inversely with character count to fit within box
  const fontSize = useMemo(() => {
    const charCount = displayName.length;
    if (charCount === 0) return boxHeight * 0.5;

    // Define size ranges based on character count
    const maxSize = boxHeight * 0.55; // Maximum size for very short names (1-3 chars)
    const minSize = boxHeight * 0.2; // Minimum size for long names (25-30 chars)

    // Calculate font size based on character count
    // Formula: size decreases as character count increases
    if (charCount <= 3) {
      // Very short names: use max size
      return maxSize;
    } else if (charCount <= 10) {
      // Short to medium names: linear interpolation
      // 3 chars = maxSize, 10 chars = midSize
      const midSize = boxHeight * 0.4;
      const ratio = (charCount - 3) / 7; // 0 to 1 as charCount goes from 3 to 10
      return maxSize - (maxSize - midSize) * ratio;
    } else if (charCount <= 20) {
      // Medium to long names: linear interpolation
      // 10 chars = midSize, 20 chars = smallSize
      const midSize = boxHeight * 0.4;
      const smallSize = boxHeight * 0.28;
      const ratio = (charCount - 10) / 10; // 0 to 1 as charCount goes from 10 to 20
      return midSize - (midSize - smallSize) * ratio;
    } else {
      // Long names (21-30 chars): scale down more aggressively
      // 20 chars = smallSize, 30 chars = minSize
      const smallSize = boxHeight * 0.28;
      const ratio = (charCount - 20) / 10; // 0 to 1 as charCount goes from 20 to 30
      return smallSize - (smallSize - minSize) * ratio;
    }
  }, [displayName.length, boxHeight]);

  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        display: "inline-block",
        width: width ? `${width}px` : "auto",
        height: height ? `${height}px` : "auto",
        position: "relative",
      }}
    >
      <Image
        src="/assets/envelope-clean.svg"
        alt="Envelope"
        width={envelopeWidth}
        height={envelopeHeight}
        className="w-full h-full object-contain"
        style={{
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "auto",
        }}
      />

      {/* Text Box Container */}
      <div
        style={{
          position: "absolute",
          top: "58%",
          left: "48%",
          transform: "translate(-50%, -50%) rotate(6deg)",
          pointerEvents: "none",
          width: `${boxWidth}px`,
          height: `${boxHeight}px`,
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            fontSize: `${fontSize}px`,
            color: "#F7D898",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            letterSpacing: "2px",
            width: "100%",
            textAlign: "center",
            lineHeight: "1.2",
          }}
        >
          {displayName}
        </div>
      </div>
    </div>
  );
}
