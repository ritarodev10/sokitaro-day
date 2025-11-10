import React from "react";

interface StarProps {
  className?: string;
  x?: number;
  y?: number;
  size?: number;
}

export default function Star({ className, x = 0, y = 0, size = 10 }: StarProps) {
  // Color constants
  const goldenBrown = "#C88C6A";

  return (
    <g className={className} transform={`translate(${x}, ${y})`}>
      {/* TODO: Add four-pointed golden star SVG path here */}
      {/* Four-pointed star shape */}
      {/* Golden-brown color */}
      {/* Size can be adjusted via props */}
    </g>
  );
}

