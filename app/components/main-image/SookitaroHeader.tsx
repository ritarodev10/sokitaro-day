import React from "react";
import LeafyWreathLeft from "./header/LeafyWreathLeft";
import HeaderText from "./header/HeaderText";
import HeaderDecorations from "./header/HeaderDecorations";
import LeafyWreathRight from "./header/LeafyWreathRight";

interface SookitaroHeaderProps {
  className?: string;
}

export default function SookitaroHeader({ className }: SookitaroHeaderProps) {
  return (
    <g className={className}>
      {/* Header Section Container */}
      <LeafyWreathLeft />
      <LeafyWreathRight />
      <HeaderText />
      <HeaderDecorations />
    </g>
  );
}
