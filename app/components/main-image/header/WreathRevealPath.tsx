"use client";

import React, { useEffect, useState } from "react";
import { wreathAnimationConfig, getReversedAnimationDelay } from "../animationConfig";

interface WreathRevealPathProps {
  d: string;
  fill: string;
  elementIndex: number;
  totalElements: number;
  clipPathId: string;
  viewBoxHeight?: number;
  durationMultiplier?: number;
}

export default function WreathRevealPath({
  d,
  fill,
  elementIndex,
  totalElements,
  clipPathId,
  viewBoxHeight = 2270,
  durationMultiplier = 1,
}: WreathRevealPathProps) {
  const [revealProgress, setRevealProgress] = useState(0);
  const { duration } = wreathAnimationConfig;
  const delay = getReversedAnimationDelay(totalElements, elementIndex);

  useEffect(() => {
    const delayMs = delay * 1000; // Convert seconds to milliseconds
    const durationMs = duration * 1000 * durationMultiplier; // Convert seconds to milliseconds and apply multiplier

    const animate = (animationStartTime: number) => {
      const elapsed = Date.now() - animationStartTime;
      const progress = Math.min(elapsed / durationMs, 1);

      // Ease-out function for smooth animation
      const eased = 1 - Math.pow(1 - progress, 3);

      setRevealProgress(eased);

      if (progress < 1) {
        requestAnimationFrame(() => animate(animationStartTime));
      }
    };

    const timer = setTimeout(() => {
      const animationStartTime = Date.now();
      requestAnimationFrame(() => animate(animationStartTime));
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delay, duration, durationMultiplier]);

  // Calculate clipPath for bottom-up reveal
  const clipY = viewBoxHeight - revealProgress * viewBoxHeight;
  const clipHeight = revealProgress * viewBoxHeight;

  return (
    <>
      <g clipPath={`url(#${clipPathId})`}>
        <path d={d} fill={fill} />
      </g>
      <defs>
        <clipPath id={clipPathId}>
          <rect x="0" y={clipY} width="1449" height={clipHeight} />
        </clipPath>
      </defs>
    </>
  );
}

