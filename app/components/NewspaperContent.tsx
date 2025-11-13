"use client";

import React from "react";

interface NewspaperContentProps {
  layout?: "default" | "alternative";
}

export default function NewspaperContent({
  layout = "default",
}: NewspaperContentProps) {
  return (
    <div
      className="relative p-8 pt-12"
      style={{
        fontFamily: "var(--font-playfair-display)",
        backgroundColor: "#f5f1e8",
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E"),
          radial-gradient(circle at 20% 50%, rgba(139, 69, 19, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(101, 67, 33, 0.1) 0%, transparent 50%),
          linear-gradient(135deg, rgba(139, 69, 19, 0.1) 0%, rgba(101, 67, 33, 0.05) 100%),
          linear-gradient(0deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0) 100%)
        `,
        backgroundSize: "200px 200px, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
        backgroundRepeat: "repeat, no-repeat, no-repeat, no-repeat, no-repeat",
        filter: "sepia(25%) contrast(1.15) brightness(0.92) saturate(0.9)",
        position: "relative",
      }}
    >
      {/* Rusty overlay effects - aged paper texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(139, 69, 19, 0.04) 2px,
              rgba(139, 69, 19, 0.04) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(101, 67, 33, 0.03) 2px,
              rgba(101, 67, 33, 0.03) 4px
            ),
            radial-gradient(circle at 30% 40%, rgba(160, 82, 45, 0.08) 0%, transparent 40%),
            radial-gradient(circle at 70% 60%, rgba(139, 69, 19, 0.06) 0%, transparent 40%)
          `,
          mixBlendMode: "multiply",
        }}
      />
      
      {/* Additional aged spots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: `
            radial-gradient(circle at 15% 25%, rgba(101, 67, 33, 0.1) 0%, transparent 3%),
            radial-gradient(circle at 85% 75%, rgba(139, 69, 19, 0.08) 0%, transparent 3%),
            radial-gradient(circle at 50% 10%, rgba(160, 82, 45, 0.06) 0%, transparent 2%),
            radial-gradient(circle at 25% 90%, rgba(101, 67, 33, 0.07) 0%, transparent 2.5%)
          `,
          mixBlendMode: "overlay",
        }}
      />

      {/* Newspaper Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-6 border-b-4 border-black pb-4">
          <h1
            className="text-5xl md:text-6xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              letterSpacing: "0.1em",
              color: "#1a1a1a",
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
            }}
          >
            THE SOOKITARO POST
          </h1>
          <p
            className="text-lg md:text-xl"
            style={{
              fontFamily: "var(--font-playfair-display)",
              fontStyle: "italic",
              color: "#4a4a4a",
            }}
          >
            Special Edition – 17 November 2025
          </p>
        </div>

        {/* Main Headline */}
        <div className="mb-6 border-b-2 border-black pb-4">
          <h2
            className="text-3xl md:text-4xl font-bold mb-2 leading-tight"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              letterSpacing: "0.05em",
              color: "#1a1a1a",
              lineHeight: "1.1",
            }}
          >
            The Biggest Heart in Wagir Will Be &apos;Acquired&apos; Soon
          </h2>
          <p
            className="text-xl md:text-2xl mb-4"
            style={{
              fontFamily: "var(--font-playfair-display)",
              fontStyle: "italic",
              color: "#2a2a2a",
            }}
          >
            From Blitar to Wagir: Soon to Be One
          </p>
        </div>

        {/* Two Column Layout for Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Left Panel - Riza */}
          <div className="border-2 border-black p-4 bg-white/50">
            <div className="mb-4 relative h-64 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Riza Image Placeholder</span>
            </div>
            <p
              className="text-sm md:text-base italic text-center"
              style={{
                fontFamily: "var(--font-playfair-display)",
                color: "#1a1a1a",
              }}
            >
              <strong>Riza</strong>— &apos;You can ask Sukma for that question.&apos;
            </p>
          </div>

          {/* Right Panel - Sukma */}
          <div className="border-2 border-black p-4 bg-white/50">
            <div className="mb-4 relative h-64 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Sukma Image Placeholder</span>
            </div>
            <p
              className="text-sm md:text-base italic text-center"
              style={{
                fontFamily: "var(--font-playfair-display)",
                color: "#1a1a1a",
              }}
            >
              <strong>Sukma</strong>— &apos;Bismillah. Please come with doa.&apos;
            </p>
          </div>
        </div>

        {/* Article Text */}
        <div className="mt-6">
          <p
            className="text-sm md:text-base mb-2 font-semibold"
            style={{
              fontFamily: "var(--font-playfair-display)",
              color: "#1a1a1a",
            }}
          >
            WAGIR CITY – Malang
          </p>
          <div
            className="text-base md:text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-playfair-display)",
              color: "#2a2a2a",
              columnCount: layout === "default" ? 2 : 1,
              columnGap: "2rem",
            }}
          >
            <p className="mb-4">
              WAGIR – The talk of the town: Riza and Sukma. People joke it&apos;s love, signed, sealed, Riza dodged anmily it&apos;s love, signed smile, Sokma answered warm, smile. The &apos;sign&apos; day reportedly will be called Sookitaro Day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

