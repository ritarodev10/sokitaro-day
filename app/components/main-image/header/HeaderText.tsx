"use client";

import React, { useEffect, useState } from "react";
import HeaderTextGreeting from "./HeaderTextGreeting";
import HeaderTextMain from "./HeaderTextMain";
import HeaderTextDay from "./HeaderTextDay";
import { headerTextAnimationConfig } from "../animationConfig";

interface HeaderTextProps {
  className?: string;
}

export default function HeaderText({ className }: HeaderTextProps) {
  // Animation states for reveal animations
  const [greetingProgress, setGreetingProgress] = useState(0);
  const [mainProgress, setMainProgress] = useState(0);
  const [dayProgress, setDayProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const {
      greetingDuration,
      mainDuration,
      dayDuration,
      greetingDelay,
      mainDelay,
      dayDelay,
      initialDelay,
    } = headerTextAnimationConfig;

    const animate = () => {
      const elapsed = Date.now() - startTime;

      // Animate greeting
      if (elapsed >= greetingDelay) {
        const greetingElapsed = elapsed - greetingDelay;
        const greetingProgress = Math.min(
          greetingElapsed / greetingDuration,
          1
        );
        const greetingEased = 1 - Math.pow(1 - greetingProgress, 3);
        setGreetingProgress(greetingEased * 1449);
      }

      // Animate main
      if (elapsed >= mainDelay) {
        const mainElapsed = elapsed - mainDelay;
        const mainProgress = Math.min(mainElapsed / mainDuration, 1);
        const mainEased = 1 - Math.pow(1 - mainProgress, 3);
        setMainProgress(mainEased * 1449);
      }

      // Animate day
      if (elapsed >= dayDelay) {
        const dayElapsed = elapsed - dayDelay;
        const dayProgress = Math.min(dayElapsed / dayDuration, 1);
        const dayEased = 1 - Math.pow(1 - dayProgress, 3);
        setDayProgress(dayEased * 1449);
      }

      // Continue animating until all are complete
      const maxDuration = Math.max(
        greetingDelay + greetingDuration,
        mainDelay + mainDuration,
        dayDelay + dayDuration
      );
      if (elapsed < maxDuration) {
        requestAnimationFrame(animate);
      }
    };

    // Start animation after initial delay
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <g className={className}>
      {/* HeaderTextGreeting with reveal animation */}
      <g clipPath={`url(#greetingRevealClip)`}>
        <HeaderTextGreeting />
      </g>
      {/* HeaderTextMain with reveal animation */}
      <g clipPath={`url(#mainRevealClip)`}>
        <HeaderTextMain />
      </g>
      {/* HeaderTextDay with reveal animation */}
      <g clipPath={`url(#dayRevealClip)`}>
        <HeaderTextDay />
      </g>
      <defs>
        <clipPath id="greetingRevealClip">
          <rect x="0" y="0" width={greetingProgress} height="2270" />
        </clipPath>
        <clipPath id="mainRevealClip">
          <rect x="0" y="0" width={mainProgress} height="2270" />
        </clipPath>
        <clipPath id="dayRevealClip">
          <rect x="0" y="0" width={dayProgress} height="2270" />
        </clipPath>
      </defs>
    </g>
  );
}
