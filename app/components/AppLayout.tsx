"use client";

import { ReactNode, useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AnimationProvider, useAnimation } from "../contexts/AnimationContext";
import {
  InvitationProvider,
  useInvitation,
} from "../contexts/InvitationContext";
import { MusicProvider } from "../contexts/MusicContext";
import SookitaroWeddingImage from "./main-image/SookitaroWeddingImage";
import { dateBannerAnimationConfig } from "./main-image/animationConfig";
import BottomControls from "./BottomControls";

interface AppLayoutProps {
  children?: ReactNode;
}

// Calculate when all entrance animations are complete
// Date banner finishes: initialDelay (5000ms) + duration (3000ms) = 8000ms
const ALL_ANIMATIONS_COMPLETE_DELAY =
  dateBannerAnimationConfig.initialDelay +
  dateBannerAnimationConfig.duration +
  5000;

function AppLayoutContent({ children }: AppLayoutProps) {
  const { reanimateKey } = useAnimation();
  const [showHint, setShowHint] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { fetchInvitation, loading } = useInvitation();
  const [hasProcessedInvite, setHasProcessedInvite] = useState(false);

  // Reset processing state when pathname changes to a known route
  useEffect(() => {
    if (
      pathname === "/" ||
      pathname.startsWith("/article") ||
      pathname.startsWith("/sukimin")
    ) {
      setHasProcessedInvite(false);
    }
  }, [pathname]);

  // Handle invite code from URL path (runs for all routes)
  useEffect(() => {
    if (hasProcessedInvite || loading || !pathname) return;

    // Skip known routes
    if (
      pathname === "/" ||
      pathname.startsWith("/article") ||
      pathname.startsWith("/sukimin")
    ) {
      return;
    }

    // Extract invite code (remove leading slash)
    const inviteCode = pathname.slice(1);

    // Validate it looks like an invite code
    if (!inviteCode || inviteCode.includes("/")) {
      return;
    }

    // Process the invite code
    setHasProcessedInvite(true);

    console.log("AppLayout: Processing invite code:", inviteCode);

    fetchInvitation(inviteCode)
      .then(() => {
        console.log("AppLayout: Invitation fetched, redirecting...");
        setTimeout(() => {
          router.replace("/");
        }, 100);
      })
      .catch((err) => {
        console.error("AppLayout: Failed to fetch invitation:", err);
        setTimeout(() => {
          router.replace("/");
        }, 1000);
      });
  }, [pathname, fetchInvitation, router, hasProcessedInvite, loading]);

  // Show hint text after all entrance animations complete
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, ALL_ANIMATIONS_COMPLETE_DELAY);

    return () => {
      clearTimeout(timer);
      setShowHint(false);
    };
  }, [reanimateKey]);

  // Show loading state if processing invite code
  if (
    hasProcessedInvite &&
    pathname &&
    pathname !== "/" &&
    !pathname.startsWith("/article") &&
    !pathname.startsWith("/sukimin")
  ) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center space-y-4">
          <p className="text-lg font-medium">Loading your invitation...</p>
          {loading && (
            <p className="text-sm text-muted-foreground">Please wait</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="paper-craft-background">
      <div className="relative z-10 flex min-h-dvh flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full flex-1 flex items-center justify-center pb-5"
        >
          <SookitaroWeddingImage className="w-full h-full max-h-[85vh] md:max-h-[800px] object-contain multiply-blend" />
          {/* Hint Text - Blinking */}
          {showHint && (
            <div
              className="absolute top-10 md:top-32 left-1/2 transform -translate-x-1/2 pointer-events-none z-50"
              style={{
                animation: "blink 1.5s infinite",
              }}
            >
              <span
                style={{
                  fontFamily: "Arial, sans-serif",
                  fontSize: "clamp(12px, 1.5vw, 18px)",
                  color: "#8B4513",
                  fontWeight: "bold",
                }}
              >
                hints: Click the newspaper!
              </span>
            </div>
          )}
        </motion.div>
        <BottomControls />
        {children}
      </div>
    </div>
  );
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/sukimin");

  // Skip AppLayout for dashboard routes
  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <InvitationProvider>
      <AnimationProvider>
        <MusicProvider>
          <AppLayoutContent>{children}</AppLayoutContent>
        </MusicProvider>
      </AnimationProvider>
    </InvitationProvider>
  );
}
