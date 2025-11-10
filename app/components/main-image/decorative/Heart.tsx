import React from "react";

interface HeartProps {
  className?: string;
  x?: number;
  y?: number;
  size?: number;
}

export default function Heart({ className, x = 0, y = 0, size = 8 }: HeartProps) {
  // Color constants
  const darkBrown = "#41120A";

  return (
    <g className={className} transform={`translate(${x}, ${y})`}>
      {/* TODO: Add small dark brown heart SVG path here */}
      {/* Small heart shape */}
      {/* Dark brown color */}
      {/* Size can be adjusted via props */}
    </g>
  );
}

