import React from "react";
import Star from "../decorative/Star";
import Heart from "../decorative/Heart";
import Leaf from "../decorative/Leaf";

interface HeaderDecorationsProps {
  className?: string;
}

export default function HeaderDecorations({
  className,
}: HeaderDecorationsProps) {
  return (
    <g className={className}>
      {/* TODO: Add decorative elements around header */}
      {/* Small golden stars */}
      {/* Small dark brown hearts */}
      {/* Small green leaves */}
      {/* Scattered sparsely around the header section */}
    </g>
  );
}

