import React from "react";

interface BannerTextProps {
  className?: string;
}

export default function BannerText({ className }: BannerTextProps) {
  // Color constants
  const darkBrown = "#41120A";

  return (
    <g className={className}>
      {/* TODO: Add "NOVEMBER 17, 2025" text SVG here */}
      {/* Clear, dark brown, sans-serif font */}
      {/* Centered on the banner */}
      {/* Use <text> element with appropriate font and positioning */}
    </g>
  );
}

