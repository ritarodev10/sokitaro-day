import React from "react";

interface ManFigureProps {
  className?: string;
}

export default function ManFigure({ className }: ManFigureProps) {
  // Color constants
  const skinTone = "#F4D1AE"; // Light skin tone
  const darkBrown = "#41120A";
  const white = "#FFFFFF";

  return (
    <g className={className}>
      {/* TODO: Add man figure SVG paths here */}
      {/* Light skin, short dark brown hair, gentle smile */}
      {/* Dark brown suit jacket */}
      {/* White collared shirt */}
      {/* Dark tie */}
      {/* Hands visible, holding right side of sign */}
    </g>
  );
}

