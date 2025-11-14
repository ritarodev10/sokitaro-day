"use client";

import React from "react";
import Image from "next/image";

export default function GroomArticle() {
  return (
    <div
      className="relative h-full"
      style={{
        fontFamily: "var(--font-merriweather)",
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
        backgroundSize:
          "200px 200px, 100% 100%, 100% 100%, 100% 100%, 100% 100%",
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
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <div
          className="text-center border-b border-black"
          style={{
            marginBottom: "clamp(0.75rem, 2vh, 1rem)",
            paddingBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
            borderBottomWidth: "clamp(2px, 0.5vw, 4px)",
          }}
        >
          <h1
            className="font-bold"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(1.75rem, 5vw, 3rem)",
              letterSpacing: "0.1em",
              color: "#1a1a1a",
              textShadow: "2px 2px 0px rgba(0,0,0,0.1)",
              marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
            }}
          >
            THE SOKITARO POST
          </h1>
          <p
            style={{
              fontFamily: "var(--font-merriweather)",
              fontStyle: "italic",
              fontWeight: "700",
              color: "#4a4a4a",
              fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
            }}
          >
            FEATURE EDITION – 17 NOVEMBER 2025
          </p>
        </div>

        {/* Main Headline */}
        <div
          className="border-b border-black"
          style={{
            marginBottom: "clamp(0.75rem, 2vh, 1rem)",
            paddingBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
            borderBottomWidth: "clamp(1px, 0.3vw, 2px)",
          }}
        >
          <h2
            className="font-bold leading-tight"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(1.5rem, 4.5vw, 2.5rem)",
              letterSpacing: "0.05em",
              color: "#1a1a1a",
              lineHeight: "1.1",
              marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
            }}
          >
            THE GROOM
          </h2>
          <p
            style={{
              fontFamily: "var(--font-merriweather)",
              fontStyle: "italic",
              fontWeight: "700",
              color: "#2a2a2a",
              fontSize: "clamp(0.875rem, 2.2vw, 1.25rem)",
            }}
          >
            A Quiet Contender Who Returned to Win the Final Bid
          </p>
        </div>

        {/* Main Content Area - Image on left, text on right */}
        <div
          className="flex-1 grid grid-cols-[1fr_1.5fr] gap-4"
          style={{
            gap: "clamp(0.75rem, 2vw, 1.5rem)",
            marginBottom: "clamp(0.75rem, 2vh, 1rem)",
          }}
        >
          {/* Left Panel - Image */}
          <div className="flex flex-col">
            <div
              className="relative border border-black overflow-hidden bg-white/50"
              style={{
                aspectRatio: "3/4",
                width: "100%",
                borderWidth: "clamp(1px, 0.3vw, 2px)",
              }}
            >
              <Image
                src="/assets/groom-press.webp"
                alt="Riza Taufiqur Rohman"
                fill
                className="object-cover"
                style={{
                  filter: "grayscale(100%) contrast(1.1) brightness(0.95)",
                }}
              />
            </div>
          </div>

          {/* Right Panel - Name and Info */}
          <div className="flex flex-col justify-start">
            <h3
              className="font-bold leading-none mb-2"
              style={{
                fontFamily: "var(--font-bebas-neue)",
                fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                letterSpacing: "0.05em",
                color: "#1a1a1a",
                lineHeight: "1",
                marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
              }}
            >
              RIZA TAUFIQUR ROHMAN
            </h3>
            <p
              style={{
                fontFamily: "var(--font-merriweather)",
                fontWeight: "400",
                color: "#2a2a2a",
                fontSize: "clamp(0.7rem, 1.6vw, 0.95rem)",
                marginBottom: "clamp(0.75rem, 2vh, 1rem)",
                lineHeight: "1.4",
              }}
            >
              Son of Mr. H. Moh. Hamzah, S.Ag. & Mrs. Hj. Astuty Hamzah, M.Ag.
            </p>
            <p
              style={{
                fontFamily: "var(--font-merriweather)",
                fontWeight: "400",
                color: "#2a2a2a",
                fontSize: "clamp(0.7rem, 1.6vw, 0.95rem)",
                marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
                lineHeight: "1.5",
              }}
            >
              A calm, tech-minded gentleman with a gentle presence and a steady
              heart. Known for his soft-spoken charm and thoughtful way of
              seeing the world.
            </p>
          </div>
        </div>

        {/* Article Text */}
        <div
          className="flex-1"
          style={{
            marginTop: "clamp(0.5rem, 1.5vh, 0.75rem)",
          }}
        >
          <div
            className="leading-relaxed"
            style={{
              fontFamily: "var(--font-merriweather)",
              fontWeight: "400",
              color: "#2a2a2a",
              fontSize: "clamp(0.7rem, 1.8vw, 1rem)",
              lineHeight: "1.6",
            }}
          >
            <p
              style={{
                marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
              }}
            >
              After six silent years on the sidelines, nearly losing the bid
              entirely, he re-entered the race at the very last moment,
              surpassed every candidate ahead of him, and secured the acquisition
              that mattered most.
            </p>
            <p
              style={{
                marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
              }}
            >
              The journey was long, the timing unpredictable, and the odds not
              always in his favor. But in the end, his sincerity, persistence,
              and unwavering doa led him exactly where he was meant to arrive:
            </p>
            <p
              style={{
                fontStyle: "italic",
                fontWeight: "500",
              }}
            >
              standing beside the woman he had admired since the beginning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

