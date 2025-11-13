"use client";

import React from "react";
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
          top: "58%",
          left: "48%",
          transform: "translate(-50%, -50%) rotate(6deg)",
          pointerEvents: "none",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: `${envelopeWidth * 0.04}px`,
            color: "#F7D898",
            fontWeight: "bold",
            fontFamily: "sans-serif",
            letterSpacing: "2px",
          }}
        >
          {inviteeName.toUpperCase()}
        </div>
      </div>
    </div>
  );
}
