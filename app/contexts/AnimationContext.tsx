"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface AnimationContextType {
  reanimateKey: number;
  triggerReanimate: () => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export function AnimationProvider({ children }: { children: ReactNode }) {
  const [reanimateKey, setReanimateKey] = useState(0);

  const triggerReanimate = () => {
    setReanimateKey((prev) => prev + 1);
  };

  return (
    <AnimationContext.Provider value={{ reanimateKey, triggerReanimate }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}

