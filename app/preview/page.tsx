"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Preview() {
  return (
    <div className="paper-craft-background">
      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-screen flex items-center justify-center"
        >
          <Image
            src="/assets/sokitaro-main.svg"
            alt="Sokitaro Day"
            width={700}
            height={700}
            className="w-full h-full md:h-[900px] object-contain multiply-blend"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
}

