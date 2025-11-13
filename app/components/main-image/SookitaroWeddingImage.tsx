"use client";

import React, { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import SookitaroHeader from "./SookitaroHeader";
import WeddingCoupleWithSign from "./WeddingCoupleWithSign";
import DateBanner from "./DateBanner";
import {
  dateBannerAnimationConfig,
  newspaperGlowAnimationConfig,
} from "./animationConfig";
import Newspaper from "./Newspaper";
import Ornaments from "./Ornaments";
import SookitaroText from "./SookitaroText";
import Popup from "../Popup";
import NewspaperContent from "../NewspaperContent";

interface SookitaroWeddingImageProps {
  className?: string;
}

// Map article slugs to indices
const articleSlugs = ["headline", "article-2"];
const getArticleIndex = (slug?: string): number => {
  if (!slug) return -1;
  const index = articleSlugs.indexOf(slug);
  return index >= 0 ? index : -1;
};

const getArticleSlug = (index: number): string => {
  return articleSlugs[index] || "headline";
};

export default function SookitaroWeddingImage({
  className,
}: SookitaroWeddingImageProps) {
  const router = useRouter();
  const pathname = usePathname();

  // Animation state for DateBanner reveal
  const [revealProgress, setRevealProgress] = useState(0);
  const animationFrameRef = useRef<number | null>(null);

  // Local state to override route-based popup state when closing
  const [isPopupForceClosed, setIsPopupForceClosed] = useState(false);

  // Derive popup state from route
  const getArticleIndexFromPath = () => {
    if (pathname.startsWith("/article/")) {
      const slug = pathname.split("/article/")[1];
      return getArticleIndex(slug);
    }
    return -1;
  };

  const articleIndexFromPath = getArticleIndexFromPath();
  
  // Popup is open if route indicates it AND not force closed
  const isPopupOpen = articleIndexFromPath >= 0 && !isPopupForceClosed;
  const currentPopupIndex =
    articleIndexFromPath >= 0 ? articleIndexFromPath : 0;

  // Glow visibility state - starts hidden, appears after all animations
  const [showGlow, setShowGlow] = useState(false);

  // Example: You can have multiple popup contents
  const popupContents = [
    <NewspaperContent key={0} layout="default" />,
    <NewspaperContent key={1} layout="alternative" />,
    // Add more popup contents here as needed
  ];

  const handleOpenPopup = () => {
    router.push("/article/headline");
  };

  const handleClose = () => {
    // Don't change route, just close the popup by setting force close state
    setIsPopupForceClosed(true);
  };

  const handleNext = () => {
    if (currentPopupIndex < popupContents.length - 1) {
      const nextIndex = currentPopupIndex + 1;
      setIsPopupForceClosed(false); // Reset force close when navigating
      router.push(`/article/${getArticleSlug(nextIndex)}`);
    }
  };

  const handlePrevious = () => {
    if (currentPopupIndex > 0) {
      const prevIndex = currentPopupIndex - 1;
      setIsPopupForceClosed(false); // Reset force close when navigating
      router.push(`/article/${getArticleSlug(prevIndex)}`);
    }
  };

  useEffect(() => {
    // Trigger the animation after component mounts
    const { duration, initialDelay } = dateBannerAnimationConfig;
    const SVG_WIDTH = 1449;

    const animate = (animationStartTime: number) => {
      const elapsed = Date.now() - animationStartTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out function
      const eased = 1 - Math.pow(1 - progress, 3);

      setRevealProgress(eased * SVG_WIDTH);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(() =>
          animate(animationStartTime)
        );
      } else {
        // Ensure we end at exactly the full width
        setRevealProgress(SVG_WIDTH);
      }
    };

    const timer = setTimeout(() => {
      const animationStartTime = Date.now();
      animationFrameRef.current = requestAnimationFrame(() =>
        animate(animationStartTime)
      );
    }, initialDelay);

    return () => {
      clearTimeout(timer);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Trigger glow animation after all other animations complete
  useEffect(() => {
    const glowTimer = setTimeout(() => {
      setShowGlow(true);
    }, newspaperGlowAnimationConfig.initialDelay);

    return () => {
      clearTimeout(glowTimer);
    };
  }, []);

  return (
    <>
      <svg
        width="1449"
        height="2270"
        viewBox="0 0 1449 2270"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <g clipPath="url(#clip0_1_12940)">
          {/* Ornaments Section */}
          <Ornaments />
          {/* Header Section */}
          <SookitaroHeader />
          {/* Couple with Sign Section */}
          <WeddingCoupleWithSign className="z-40" />
          {/* Newspaper Section */}
          <Newspaper
            className="z-50"
            filter={showGlow ? "url(#newspaperGlow)" : undefined}
            onClick={handleOpenPopup}
          />
          {/* Date Banner Section */}
          <g clipPath="url(#dateBannerRevealClip)">
            <DateBanner />
          </g>
          <SookitaroText />
          {/* Ornaments Section - rendered last to appear on top */}
        </g>
        <defs>
          <clipPath id="clip0_1_12940">
            <rect width="1449" height="2270" fill="white" />
          </clipPath>
          <clipPath id="dateBannerRevealClip">
            <rect x="0" y="0" width={revealProgress} height="2270" />
          </clipPath>
          {/* Glow filter for newspaper with pulsing animation */}
          <filter
            id="newspaperGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            {/* First glow layer - larger, colored */}
            <feGaussianBlur stdDeviation="0" result="glow1">
              <animate
                attributeName="stdDeviation"
                values="5;25;5"
                dur="2s"
                repeatCount="indefinite"
              />
            </feGaussianBlur>
            <feColorMatrix
              in="glow1"
              type="matrix"
              values="1 0 0 0 0.8
                      0.8 0 0 0 0.6
                      0 0 0 0 0.2
                      0 0 0 1 0"
              result="coloredGlow1"
            />
            {/* Second glow layer - even larger */}
            <feGaussianBlur stdDeviation="0" result="glow2">
              <animate
                attributeName="stdDeviation"
                values="8;35;8"
                dur="2s"
                repeatCount="indefinite"
              />
            </feGaussianBlur>
            <feColorMatrix
              in="glow2"
              type="matrix"
              values="1 0 0 0 0.6
                      0.8 0 0 0 0.4
                      0 0 0 0 0.1
                      0 0 0 0.8 0"
              result="coloredGlow2"
            />
            {/* Merge all layers */}
            <feMerge>
              <feMergeNode in="coloredGlow2" />
              <feMergeNode in="coloredGlow1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>

      {/* Popup Modal */}
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClose}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={currentPopupIndex < popupContents.length - 1}
        hasPrevious={currentPopupIndex > 0}
      >
        {popupContents[currentPopupIndex]}
      </Popup>
    </>
  );
}
