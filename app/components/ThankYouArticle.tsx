"use client";

import React from "react";
import Image from "next/image";

export default function ThankYouArticle() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        className="relative"
        style={{
          border: "clamp(4px, 1vw, 8px) solid black",
          boxShadow:
            "clamp(6px, 1.5vw, 12px) clamp(6px, 1.5vw, 12px) 0px 0px rgba(0,0,0,1)",
          maxWidth: "90vw",
          maxHeight: "80vh",
        }}
      >
        <Image
          src="/assets/sookitaroday-poster.webp"
          alt="Thank You"
          width={800}
          height={600}
          className="w-full h-full object-contain"
          style={{
            display: "block",
            maxWidth: "90vw",
            maxHeight: "80vh",
          }}
        />
      </div>
    </div>
  );
}

