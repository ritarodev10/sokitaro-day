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
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        cursor: onClick ? "pointer" : "default",
        display: "inline-block",
        width: width ? `${width}px` : "auto",
        height: height ? `${height}px` : "auto",
      }}
    >
      <Image
        src="/assets/envelope clean.svg"
        alt="Envelope"
        width={width || 800}
        height={height || 600}
        className="w-full h-full object-contain"
        style={{
          width: width ? `${width}px` : "100%",
          height: height ? `${height}px` : "auto",
        }}
      />
    </div>
  );
}

