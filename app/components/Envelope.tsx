"use client";

import React from "react";
import Image from "next/image";

interface EnvelopeProps {
  className?: string;
  width?: number;
  height?: number;
  onClick?: () => void;
}

export default function Envelope({
  className = "",
  width,
  height,
  onClick,
}: EnvelopeProps) {
  const envelopeWidth = width || 800;
  const envelopeHeight = height || 600;

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

      {/* Text Overlay */}
      <div
        style={{
          position: "absolute",
          top: "59%",
          left: "49%",
          transform: "translate(-50%, -50%) rotate(6deg)",
          pointerEvents: "none",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: `${envelopeWidth * 0.06}px`,
            color: "#F7D898",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            letterSpacing: "2px",
          }}
        >
          SUKMA
        </div>
      </div>
    </div>
  );
}
