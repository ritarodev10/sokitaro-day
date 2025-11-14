"use client";

import React from "react";

export default function MapsArticle() {
  return (
    <div
      className="relative"
      style={{
        fontFamily: "var(--font-merriweather)",
        backgroundColor: "#f5f1e8",
        padding: "clamp(1rem, 3vw, 2rem)",
        paddingTop: "clamp(1.5rem, 4vw, 3rem)",
        opacity: 1,
        visibility: "visible",
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
      <div className="relative z-10">
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
            NAVIGATION GUIDE
          </h2>
          <p
            style={{
              fontFamily: "var(--font-merriweather)",
              fontStyle: "italic",
              fontWeight: "400",
              color: "#2a2a2a",
              fontSize: "clamp(0.875rem, 2.2vw, 1.25rem)",
            }}
          >
            Finding your way to the most important moments
          </p>
        </div>

        {/* Location 1: Wagir */}
        <div
          style={{
            marginBottom: "clamp(1.5rem, 3vh, 2rem)",
          }}
        >
          <div
            className="border border-black"
            style={{
              padding: "clamp(1rem, 2.5vw, 1.5rem)",
              borderWidth: "clamp(1px, 0.3vw, 2px)",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              marginBottom: "clamp(0.75rem, 2vh, 1rem)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                marginBottom: "clamp(0.75rem, 2vh, 1rem)",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  lineHeight: "1",
                }}
              >
                📍
              </span>
              <div style={{ flex: 1 }}>
                <h3
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                    letterSpacing: "0.05em",
                    color: "#1a1a1a",
                    lineHeight: "1.2",
                    marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
                    textTransform: "uppercase",
                  }}
                >
                  WAGIR — MALANG
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-merriweather)",
                    fontWeight: "700",
                    color: "#2a2a2a",
                    fontSize: "clamp(0.875rem, 2.2vw, 1.125rem)",
                    marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
                    fontStyle: "italic",
                  }}
                >
                  Where the story begins
                </p>
              </div>
            </div>

            <div
              style={{
                fontFamily: "var(--font-merriweather)",
                fontWeight: "400",
                color: "#2a2a2a",
                fontSize: "clamp(0.7rem, 1.8vw, 1rem)",
                lineHeight: "1.6",
                marginBottom: "clamp(0.75rem, 2vh, 1rem)",
              }}
            >
              <p
                style={{
                  marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
                }}
              >
                Nestled in the quiet corners of Wagir, this is where two hearts
                will officially begin their journey together. A sacred morning
                awaits, filled with warmth, family, and the gentle promise of
                forever.
              </p>
              <p
                style={{
                  marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
                }}
              >
                <strong>Events:</strong> Akad Nikah (10.00 WIB) & Tasyakuran
                (11.00–14.00 WIB)
              </p>
            </div>

            {/* Map Link Button */}
            <a
              href="https://maps.app.goo.gl/hj6kSLppWuabDzbK7"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black font-black text-xs transition-all duration-150 bg-white hover:bg-black hover:text-white text-black cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none inline-block text-center"
              style={{
                fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
                padding: "clamp(0.5rem, 1.2vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem)",
                width: "100%",
                textDecoration: "none",
                display: "block",
              }}
            >
              🗺️ OPEN MAP
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-b border-black"
          style={{
            marginBottom: "clamp(1.5rem, 3vh, 2rem)",
            borderBottomWidth: "clamp(1px, 0.3vw, 2px)",
          }}
        />

        {/* Location 2: Blitar */}
        <div
          style={{
            marginBottom: "clamp(1.5rem, 3vh, 2rem)",
          }}
        >
          <div
            className="border border-black"
            style={{
              padding: "clamp(1rem, 2.5vw, 1.5rem)",
              borderWidth: "clamp(1px, 0.3vw, 2px)",
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              marginBottom: "clamp(0.75rem, 2vh, 1rem)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
                marginBottom: "clamp(0.75rem, 2vh, 1rem)",
              }}
            >
              <span
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 2rem)",
                  lineHeight: "1",
                }}
              >
                📍
              </span>
              <div style={{ flex: 1 }}>
                <h3
                  className="font-bold"
                  style={{
                    fontFamily: "var(--font-bebas-neue)",
                    fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                    letterSpacing: "0.05em",
                    color: "#1a1a1a",
                    lineHeight: "1.2",
                    marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
                    textTransform: "uppercase",
                  }}
                >
                  WONODADI — BLITAR
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-merriweather)",
                    fontWeight: "700",
                    color: "#2a2a2a",
                    fontSize: "clamp(0.875rem, 2.2vw, 1.125rem)",
                    marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
                    fontStyle: "italic",
                  }}
                >
                  Where families unite
                </p>
              </div>
            </div>

            <div
              style={{
                fontFamily: "var(--font-merriweather)",
                fontWeight: "400",
                color: "#2a2a2a",
                fontSize: "clamp(0.7rem, 1.8vw, 1rem)",
                lineHeight: "1.6",
                marginBottom: "clamp(0.75rem, 2vh, 1rem)",
              }}
            >
              <p
                style={{
                  marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
                }}
              >
                In the heart of Wonodadi, families will gather to celebrate this
                beautiful union. A modern take on an age-old tradition—where
                love meets legacy, and two families become one.
              </p>
              <p
                style={{
                  marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
                }}
              >
                <strong>Event:</strong> &quot;Download Mantu&quot; (10.00–14.00
                WIB)
              </p>
              <p
                style={{
                  fontStyle: "italic",
                  color: "#4a4a4a",
                }}
              >
                Formerly known as Ngunduh Mantu — now updated for the tech era.
              </p>
            </div>

            {/* Map Link Button */}
            <a
              href="https://maps.app.goo.gl/3BG3JAYW5WY4Z7LM9"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-black font-black text-xs transition-all duration-150 bg-white hover:bg-black hover:text-white text-black cursor-pointer shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none inline-block text-center"
              style={{
                fontSize: "clamp(0.625rem, 1.5vw, 0.75rem)",
                padding: "clamp(0.5rem, 1.2vw, 0.75rem) clamp(1rem, 2.5vw, 1.5rem)",
                width: "100%",
                textDecoration: "none",
                display: "block",
              }}
            >
              🗺️ OPEN MAP
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-b border-black"
          style={{
            marginBottom: "clamp(1rem, 2.5vh, 1.5rem)",
            borderBottomWidth: "clamp(1px, 0.3vw, 2px)",
          }}
        />

        {/* Footer Note */}
        <div
          style={{
            marginTop: "clamp(1rem, 2.5vh, 1.5rem)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-merriweather)",
              fontWeight: "400",
              color: "#2a2a2a",
              fontSize: "clamp(0.7rem, 1.8vw, 1rem)",
              lineHeight: "1.6",
              fontStyle: "italic",
              textAlign: "center",
            }}
          >
            Safe travels, and we look forward to celebrating with you.
          </p>
          <p
            style={{
              fontFamily: "var(--font-merriweather)",
              fontWeight: "700",
              color: "#1a1a1a",
              fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
              textAlign: "center",
              marginTop: "clamp(0.5rem, 1.5vh, 0.75rem)",
            }}
          >
            — The Sokitaro Post Navigation Desk —
          </p>
        </div>
      </div>
    </div>
  );
}

