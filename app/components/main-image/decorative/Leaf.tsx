import React from "react";

interface LeafProps {
  className?: string;
  x?: number;
  y?: number;
  size?: number;
}

export default function Leaf({ className, x = 0, y = 0, size = 6 }: LeafProps) {
  // Color constants
  const oliveGreen = "#9EA269";
  const darkBrown = "#41120A";

  return (
    <g className={className} transform={`translate(${x}, ${y})`}>
      {/* TODO: Add small green leaf SVG path here */}
      {/* Simple oval-shaped leaf */}
      {/* Light olive-green fill */}
      {/* Dark brown outline */}
      {/* Size can be adjusted via props */}
    </g>
  );
}
