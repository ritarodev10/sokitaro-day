"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { AnimationProvider } from "../contexts/AnimationContext";
import SookitaroWeddingImage from "./main-image/SookitaroWeddingImage";
import BottomControls from "./BottomControls";

interface AppLayoutProps {
  children?: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/sukimin");

  // Skip AppLayout for dashboard routes
  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <AnimationProvider>
      <div className="paper-craft-background">
        <div className="relative z-10 flex min-h-dvh flex-col">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full flex-1 flex items-center justify-center pb-5"
          >
            <SookitaroWeddingImage className="w-full h-full max-h-[85vh] md:max-h-[800px] object-contain multiply-blend" />
          </motion.div>
          {/* <BottomControls /> */}
          {children}
        </div>
      </div>
    </AnimationProvider>
  );
}
