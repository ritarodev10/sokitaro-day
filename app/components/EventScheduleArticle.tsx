"use client";

import React from "react";

export default function EventScheduleArticle() {
  return (
    <div
      className="relative"
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
            SOOKITARO DAY — OFFICIAL EVENT SCHEDULE
          </h2>
        </div>

        {/* Ceremony Timeline Header */}
        <div
          className="text-center border-b border-black"
          style={{
            marginBottom: "clamp(0.75rem, 2vh, 1rem)",
            paddingBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
            borderBottomWidth: "clamp(1px, 0.3vw, 2px)",
          }}
        >
          <h3
            className="font-bold"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
              letterSpacing: "0.05em",
              color: "#1a1a1a",
              lineHeight: "1.1",
              marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
            }}
          >
            THE CEREMONY TIMELINE
          </h3>
          <p
            style={{
              fontFamily: "var(--font-merriweather)",
              fontStyle: "italic",
              fontWeight: "400",
              color: "#2a2a2a",
              fontSize: "clamp(0.75rem, 1.8vw, 1rem)",
            }}
          >
            A quick look at today&apos;s most anticipated moments.
          </p>
        </div>

        {/* Event 1: Akad Nikah */}
        <div
          style={{
            marginBottom: "clamp(1rem, 2.5vh, 1.5rem)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
              marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
            }}
          >
            <span
              style={{
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                lineHeight: "1",
              }}
            >
              🗓️
            </span>
            <div style={{ flex: 1 }}>
              <h3
                className="font-bold"
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
                  letterSpacing: "0.05em",
                  color: "#1a1a1a",
                  lineHeight: "1.2",
                  marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
                  textTransform: "uppercase",
                }}
              >
                17 NOV — AKAD NIKAH (10.00 WIB)
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-merriweather)",
                  fontWeight: "700",
                  color: "#2a2a2a",
                  fontSize: "clamp(0.875rem, 2.2vw, 1.125rem)",
                  marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
                }}
              >
                Wagir — Malang
              </p>
              <p
                style={{
                  fontFamily: "var(--font-merriweather)",
                  fontWeight: "400",
                  color: "#2a2a2a",
                  fontSize: "clamp(0.7rem, 1.8vw, 1rem)",
                  lineHeight: "1.6",
                  marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
                }}
              >
                A quiet, sacred morning where two hearts officially sign their
                chapter.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-merriweather)",
                  fontWeight: "400",
                  color: "#4a4a4a",
                  fontSize: "clamp(0.65rem, 1.6vw, 0.9rem)",
                  fontStyle: "italic",
                }}
              >
                Map link available for invitees.
              </p>
            </div>
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

        {/* Event 2: Tasyakuran */}
        <div
          style={{
            marginBottom: "clamp(1rem, 2.5vh, 1.5rem)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
              marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
            }}
          >
            <span
              style={{
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                lineHeight: "1",
              }}
            >
              🗓️
            </span>
            <div style={{ flex: 1 }}>
              <h3
                className="font-bold"
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
                  letterSpacing: "0.05em",
                  color: "#1a1a1a",
                  lineHeight: "1.2",
                  marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
                  textTransform: "uppercase",
                }}
              >
                17 NOV — TASYAKURAN (11.00–14.00 WIB)
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-merriweather)",
                  fontWeight: "700",
                  color: "#2a2a2a",
                  fontSize: "clamp(0.875rem, 2.2vw, 1.125rem)",
                  marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
                }}
              >
                Same Location
              </p>
              <p
                style={{
                  fontFamily: "var(--font-merriweather)",
                  fontWeight: "400",
                  color: "#2a2a2a",
                  fontSize: "clamp(0.7rem, 1.8vw, 1rem)",
                  lineHeight: "1.6",
                  marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
                }}
              >
                A simple, homey reception celebrating the very first hours of
                Sookitaro Day — warm, close-knit, and filled with family
                presence.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-merriweather)",
                  fontWeight: "400",
                  color: "#4a4a4a",
                  fontSize: "clamp(0.65rem, 1.6vw, 0.9rem)",
                  fontStyle: "italic",
                }}
              >
                Map link available for invitees.
              </p>
            </div>
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

        {/* Event 3: Download Mantu */}
        <div
          style={{
            marginBottom: "clamp(1rem, 2.5vh, 1.5rem)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
              marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
            }}
          >
            <span
              style={{
                fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
                lineHeight: "1",
              }}
            >
              🗓️
            </span>
            <div style={{ flex: 1 }}>
              <h3
                className="font-bold"
                style={{
                  fontFamily: "var(--font-bebas-neue)",
                  fontSize: "clamp(1.25rem, 3.5vw, 2rem)",
                  letterSpacing: "0.05em",
                  color: "#1a1a1a",
                  lineHeight: "1.2",
                  marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
                  textTransform: "uppercase",
                }}
              >
                30 NOV — &quot;DOWNLOAD MANTU&quot; (10.00–14.00 WIB)
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-merriweather)",
                  fontWeight: "700",
                  color: "#2a2a2a",
                  fontSize: "clamp(0.875rem, 2.2vw, 1.125rem)",
                  marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
                }}
              >
                Wonodadi — Blitar
              </p>
              <p
                style={{
                  fontFamily: "var(--font-merriweather)",
                  fontWeight: "400",
                  color: "#2a2a2a",
                  fontSize: "clamp(0.7rem, 1.8vw, 1rem)",
                  lineHeight: "1.6",
                  marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
                }}
              >
                Formerly known as Ngunduh Mantu — now updated for the tech era.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-merriweather)",
                  fontWeight: "400",
                  color: "#2a2a2a",
                  fontSize: "clamp(0.7rem, 1.8vw, 1rem)",
                  lineHeight: "1.6",
                  marginBottom: "clamp(0.25rem, 0.75vh, 0.5rem)",
                }}
              >
                A heartfelt family gathering, version 2.0.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-merriweather)",
                  fontWeight: "400",
                  color: "#4a4a4a",
                  fontSize: "clamp(0.65rem, 1.6vw, 0.9rem)",
                  fontStyle: "italic",
                }}
              >
                Map link available for invitees.
              </p>
            </div>
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

        {/* Editorial Note */}
        <div
          style={{
            marginTop: "clamp(1rem, 2.5vh, 1.5rem)",
          }}
        >
          <h3
            className="font-bold"
            style={{
              fontFamily: "var(--font-bebas-neue)",
              fontSize: "clamp(1rem, 3vw, 1.5rem)",
              letterSpacing: "0.05em",
              color: "#1a1a1a",
              marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
              textTransform: "uppercase",
            }}
          >
            Editorial Note
          </h3>
          <div
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
              Filed under the Events Desk of The Sokitaro Post.
            </p>
            <p
              style={{
                marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
              }}
            >
              Times confirmed. Typesetting verified.
            </p>
            <p>Please refer to the provided links for navigation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
