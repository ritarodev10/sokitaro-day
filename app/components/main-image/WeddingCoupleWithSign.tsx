import React from "react";
import WomanFigure from "./couple/WomanFigure";
import ManFigure from "./couple/ManFigure";
import WeddingSign from "./couple/WeddingSign";
import WeddingRings from "./couple/WeddingRings";
import CoupleDecorations from "./couple/CoupleDecorations";

interface WeddingCoupleWithSignProps {
  className?: string;
}

export default function WeddingCoupleWithSign({
  className,
}: WeddingCoupleWithSignProps) {
  // Color constants
  const backgroundPink = "#e6b3b3";
  const darkBrown = "#41120A";
  const oliveGreen = "#9EA269";
  const goldenBrown = "#C88C6A";

  return (
    <g className={className}>
      {/* Couple Section Container */}
      <WomanFigure />
      <ManFigure />
      <WeddingSign />
      <WeddingRings />
      <CoupleDecorations />
    </g>
  );
}
