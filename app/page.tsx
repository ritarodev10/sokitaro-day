"use client";

import { motion } from "framer-motion";
import SookitaroWeddingImage from "./components/main-image/SookitaroWeddingImage";
import BottomControls from "./components/BottomControls";

export default function Home() {
  return (
    <div className="paper-craft-background">
      <div className="relative z-10 flex min-h-dvh flex-col">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full flex-1 flex items-center justify-center pb-20"
        >
          <SookitaroWeddingImage className="w-full h-full max-h-[85vh] md:max-h-[800px] object-contain multiply-blend" />
        </motion.div>
        <BottomControls />
      </div>
    </div>
  );
}
