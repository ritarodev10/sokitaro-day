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
      className="relative"
      style={{
        fontFamily: "var(--font-playfair-display)",
        backgroundColor: "#f5f1e8",
        padding: "clamp(1rem, 3vw, 2rem)",
        paddingTop: "clamp(1.5rem, 4vw, 3rem)",
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
        <div
          className="text-center border-b border-black"
          style={{
            marginBottom: "clamp(1rem, 2.5vh, 1.5rem)",
            paddingBottom: "clamp(0.75rem, 2vh, 1rem)",
            borderBottomWidth: "clamp(2px, 0.5vw, 4px)",
          }}
        >
          <h1
            className="font-bold"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(2rem, 6vw, 3.75rem)",
              letterSpacing: "0.1em",
              color: "#1a1a1a",
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
              marginBottom: "clamp(0.5rem, 1vh, 0.75rem)",
            }}
          >
            THE SOOKITARO POST
          </h1>
          <p
            style={{
              fontFamily: "var(--font-playfair-display)",
              fontStyle: "italic",
              color: "#4a4a4a",
              fontSize: "clamp(0.875rem, 2vw, 1.25rem)",
            }}
          >
            Special Edition – 17 November 2025
          </p>
        </div>

        {/* Main Headline */}
        <div
          className="border-b border-black"
          style={{
            marginBottom: "clamp(1rem, 2.5vh, 1.5rem)",
            paddingBottom: "clamp(0.75rem, 2vh, 1rem)",
            borderBottomWidth: "clamp(1px, 0.3vw, 2px)",
          }}
        >
          <h2
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(1.25rem, 4vw, 2.25rem)",
              letterSpacing: "0.05em",
              color: "#1a1a1a",
              lineHeight: "1.1",
              marginBottom: "clamp(0.5rem, 1vh, 0.75rem)",
            }}
          >
            The Biggest Heart in Wagir Will Be &apos;Acquired&apos; Soon
          </h2>
          <p
            style={{
              fontFamily: "var(--font-playfair-display)",
              fontStyle: "italic",
              color: "#2a2a2a",
              fontSize: "clamp(0.875rem, 2.5vw, 1.5rem)",
              marginBottom: "clamp(0.75rem, 2vh, 1rem)",
            }}
          >
            From Blitar to Wagir: Soon to Be One
          </p>
        </div>

        {/* Two Column Layout for Images */}
        <div
          className="grid grid-cols-2"
          style={{
            gap: "clamp(0.75rem, 2vw, 1.5rem)",
            marginBottom: "clamp(1rem, 2.5vh, 1.5rem)",
          }}
        >
          {/* Left Panel - Riza */}
          <div
            className="border border-black bg-white/50"
            style={{
              padding: "clamp(0.5rem, 1.5vw, 1rem)",
              borderWidth: "clamp(1px, 0.3vw, 2px)",
            }}
          >
            <div
              className="relative bg-gray-200 border border-dashed border-gray-400 flex items-center justify-center"
              style={{
                marginBottom: "clamp(0.75rem, 2vh, 1rem)",
                height: "clamp(8rem, 20vh, 16rem)",
                borderWidth: "clamp(1px, 0.3vw, 2px)",
              }}
            >
              <span
                className="text-gray-500"
                style={{
                  fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)",
                }}
              >
                Riza Image Placeholder
              </span>
            </div>
            <p
              className="italic text-center"
              style={{
                fontFamily: "var(--font-playfair-display)",
                color: "#1a1a1a",
                fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
              }}
            >
              <strong>Riza</strong>— &apos;You can ask Sukma for that question.&apos;
            </p>
          </div>

          {/* Right Panel - Sukma */}
          <div
            className="border border-black bg-white/50"
            style={{
              padding: "clamp(0.5rem, 1.5vw, 1rem)",
              borderWidth: "clamp(1px, 0.3vw, 2px)",
            }}
          >
            <div
              className="relative bg-gray-200 border border-dashed border-gray-400 flex items-center justify-center"
              style={{
                marginBottom: "clamp(0.75rem, 2vh, 1rem)",
                height: "clamp(8rem, 20vh, 16rem)",
                borderWidth: "clamp(1px, 0.3vw, 2px)",
              }}
            >
              <span
                className="text-gray-500"
                style={{
                  fontSize: "clamp(0.625rem, 1.5vw, 0.875rem)",
                }}
              >
                Sukma Image Placeholder
              </span>
            </div>
            <p
              className="italic text-center"
              style={{
                fontFamily: "var(--font-playfair-display)",
                color: "#1a1a1a",
                fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
              }}
            >
              <strong>Sukma</strong>— &apos;Bismillah. Please come with doa.&apos;
            </p>
          </div>
        </div>

        {/* Article Text */}
        <div
          style={{
            marginTop: "clamp(1rem, 2.5vh, 1.5rem)",
          }}
        >
          <p
            className="font-semibold"
            style={{
              fontFamily: "var(--font-playfair-display)",
              color: "#1a1a1a",
              fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
              marginBottom: "clamp(0.5rem, 1vh, 0.75rem)",
            }}
          >
            WAGIR CITY – Malang
          </p>
          <div
            className="leading-relaxed"
            style={{
              fontFamily: "var(--font-playfair-display)",
              color: "#2a2a2a",
              fontSize: "clamp(0.625rem, 2vw, 1.125rem)",
              columnCount: layout === "default" ? 2 : 1,
              columnGap: "clamp(1rem, 2.5vw, 2rem)",
            }}
          >
            <p
              style={{
                marginBottom: "clamp(0.75rem, 2vh, 1rem)",
              }}
            >
              WAGIR – The talk of the town: Riza and Sukma. People joke it&apos;s love, signed, sealed, Riza dodged anmily it&apos;s love, signed smile, Sokma answered warm, smile. The &apos;sign&apos; day reportedly will be called Sookitaro Day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

