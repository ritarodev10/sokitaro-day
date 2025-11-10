import React from "react";
import Star from "../decorative/Star";
import Heart from "../decorative/Heart";
import Leaf from "../decorative/Leaf";

interface BannerDecorationsProps {
  className?: string;
}

export default function BannerDecorations({
  className,
}: BannerDecorationsProps) {
  return (
    <g className={className}>
      {/* TODO: Add decorative elements around banner */}
      {/* Small golden stars */}
      {/* Small dark brown hearts */}
      {/* Small green leaves */}
      {/* Scattered around the banner */}
    </g>
  );
}

