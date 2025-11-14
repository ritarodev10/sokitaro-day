"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useInvitation } from "./contexts/InvitationContext";

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const { invitation, fetchInvitation, loading, error } = useInvitation();
  const [isProcessing, setIsProcessing] = useState(false);

  // Handle invite code from URL path
  useEffect(() => {
    // Skip if already processing or on known routes
    if (isProcessing || !pathname) return;

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

    // Validate it looks like an invite code (not empty, no slashes)
    if (!inviteCode || inviteCode.includes("/")) {
      return;
    }

    // Process the invite code
    setIsProcessing(true);

    console.log("Processing invite code:", inviteCode);

    fetchInvitation(inviteCode)
      .then(() => {
        console.log("Invitation fetched, redirecting...");
        // Small delay to ensure state is updated
        setTimeout(() => {
          router.replace("/");
        }, 100);
      })
      .catch((err) => {
        console.error("Failed to fetch invitation:", err);
        // Still redirect even on error
        setTimeout(() => {
          router.replace("/");
        }, 1000);
      });
  }, [pathname, fetchInvitation, router, isProcessing]);

  // Show loading state if processing invite code
  if (isProcessing && pathname && pathname !== "/") {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center space-y-4">
          <p className="text-lg font-medium">Loading your invitation...</p>
          {loading && (
            <p className="text-sm text-muted-foreground">Please wait</p>
          )}
          {error && <p className="text-sm text-destructive">Error: {error}</p>}
        </div>
      </div>
    );
  }

  // Return null for normal homepage (AppLayout will render the content)
  return null;
}
