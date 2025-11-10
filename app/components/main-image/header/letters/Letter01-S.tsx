import React from "react";

interface Letter01SProps {
  className?: string;
}

export default function Letter01S({ className }: Letter01SProps) {
  // Color constants
  const lightBrown = "#C88C6A"; // Fill color
  const darkBrown = "#41120A"; // Outline color

  return (
    <g className={className}>
      {/* TODO: Add letter "S" SVG path here */}
      {/* Large, bold, uppercase letter S */}
      {/* Light brown fill with dark brown outline */}
      {/* Positioned as the first letter in "SOOKITARO" */}
    </g>
  );
}

