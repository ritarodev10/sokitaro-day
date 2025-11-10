import React from "react";

interface DotProps {
  className?: string;
  x?: number;
  y?: number;
  size?: number;
}

export default function Dot({ className, x = 0, y = 0, size = 3 }: DotProps) {
  // Color constants
  const goldenBrown = "#C88C6A";

  return (
    <circle
      className={className}
      cx={x}
      cy={y}
      r={size}
      fill={goldenBrown}
    />
  );
}

