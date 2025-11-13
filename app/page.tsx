"use client";

import { motion } from "framer-motion";
import SookitaroWeddingImage from "./components/main-image/SookitaroWeddingImage";

export default function Home() {
  return (
    <div className="paper-craft-background">
      <div className="relative z-10 flex min-h-screen min-h-[100dvh] items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-screen h-[100dvh] flex items-center justify-center"
        >
          <SookitaroWeddingImage className="w-full h-full md:h-[900px] object-contain multiply-blend" />
        </motion.div>
      </div>
    </div>
  );
}
