"use client";

import { motion } from "framer-motion";
import {
  wreathAnimationConfig,
  getReversedAnimationDelay,
} from "../animationConfig";

interface LeafyWreathRightSimpleProps {
  className?: string;
}

export default function LeafyWreathRightSimple({
  className,
}: LeafyWreathRightSimpleProps) {
  // Color constants
  const darkBrown = "#41120A";
  const oliveGreen = "#9EA269";
  const goldenBrown = "#C88C6A";

  // Animation configuration
  const { duration } = wreathAnimationConfig;
  const totalElements = 25; // 10 circles (first) + 1 stem (second) + 14 leaves (last)

  // Animation order: Sparkles (circles) first (indices 15-24), then stem (index 14), then leaves (indices 0-13)

  return (
    <g className={className}>
      {/* RIGHT BRANCH LEAVES 1 - Last to animate */}
      <motion.path
        d="M1299 150 Q1249 100 1199 150 T1099 150"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 0),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 2 */}
      <motion.path
        d="M1269 180 L1229 200 L1249 240 Z"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 1),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 3 */}
      <motion.path
        d="M1329 200 Q1299 180 1269 200 T1209 200"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 2),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 4 */}
      <motion.path
        d="M1289 160 L1249 180 L1269 220 Z"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 3),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 5 */}
      <motion.path
        d="M1309 140 Q1279 120 1249 140 T1189 140"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 4),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 6 */}
      <motion.path
        d="M1339 190 L1299 210 L1319 250 Z"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 5),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 7 */}
      <motion.path
        d="M1319 250 Q1289 230 1259 250 T1199 250"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 6),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 8 */}
      <motion.path
        d="M1349 300 L1309 320 L1329 360 Z"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 7),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 9 */}
      <motion.path
        d="M1299 350 Q1269 330 1239 350 T1179 350"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 8),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 10 */}
      <motion.path
        d="M1279 380 L1239 400 L1259 440 Z"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 9),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 11 */}
      <motion.path
        d="M1249 400 Q1219 380 1189 400 T1129 400"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 10),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 12 */}
      <motion.path
        d="M1229 450 L1189 470 L1209 510 Z"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 11),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 13 */}
      <motion.path
        d="M1199 500 Q1169 480 1139 500 T1079 500"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 12),
          ease: "easeOut",
        }}
      />
      {/* RIGHT BRANCH LEAVES 14 */}
      <motion.path
        d="M1179 550 L1139 570 L1159 610 Z"
        fill={oliveGreen}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 13),
          ease: "easeOut",
        }}
      />

      {/* RIGHT BRANCH STEM - Second to animate */}
      <motion.path
        d="M1349 100 L1249 300 Q1199 400 1149 500"
        fill={darkBrown}
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{
          duration,
          delay: getReversedAnimationDelay(totalElements, 14),
          ease: "easeOut",
        }}
      />

      {/* Sparkles (Decorative circles) - First to animate */}
      <motion.circle
        cx="1249"
        cy="150"
        r="8"
        fill={goldenBrown}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: duration * 0.8,
          delay: getReversedAnimationDelay(totalElements, 15),
          ease: "easeOut",
        }}
      />
      <motion.circle
        cx="1269"
        cy="200"
        r="6"
        fill={goldenBrown}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: duration * 0.8,
          delay: getReversedAnimationDelay(totalElements, 16),
          ease: "easeOut",
        }}
      />
      <motion.circle
        cx="1229"
        cy="250"
        r="7"
        fill={goldenBrown}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: duration * 0.8,
          delay: getReversedAnimationDelay(totalElements, 17),
          ease: "easeOut",
        }}
      />
      <motion.circle
        cx="1289"
        cy="300"
        r="5"
        fill={goldenBrown}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: duration * 0.8,
          delay: getReversedAnimationDelay(totalElements, 18),
          ease: "easeOut",
        }}
      />
      <motion.circle
        cx="1209"
        cy="350"
        r="6"
        fill={goldenBrown}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: duration * 0.8,
          delay: getReversedAnimationDelay(totalElements, 19),
          ease: "easeOut",
        }}
      />
      <motion.circle
        cx="1249"
        cy="400"
        r="8"
        fill={goldenBrown}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: duration * 0.8,
          delay: getReversedAnimationDelay(totalElements, 20),
          ease: "easeOut",
        }}
      />
      <motion.circle
        cx="1189"
        cy="450"
        r="7"
        fill={goldenBrown}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: duration * 0.8,
          delay: getReversedAnimationDelay(totalElements, 21),
          ease: "easeOut",
        }}
      />
      <motion.circle
        cx="1219"
        cy="500"
        r="6"
        fill={goldenBrown}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: duration * 0.8,
          delay: getReversedAnimationDelay(totalElements, 22),
          ease: "easeOut",
        }}
      />
      <motion.circle
        cx="1169"
        cy="550"
        r="5"
        fill={goldenBrown}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: duration * 0.8,
          delay: getReversedAnimationDelay(totalElements, 23),
          ease: "easeOut",
        }}
      />
      <motion.circle
        cx="1149"
        cy="600"
        r="6"
        fill={goldenBrown}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: duration * 0.8,
          delay: getReversedAnimationDelay(totalElements, 24),
          ease: "easeOut",
        }}
      />
    </g>
  );
}

