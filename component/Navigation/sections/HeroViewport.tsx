"use client";

import React, { useState } from "react";
import Header from "@/component/Navigation/Header";
import HeroSection from "@/component/Navigation/sections/HeroSection";

interface HeroWrapperProps {
  onCtaClick?: () => void;
  onMenuClick?: () => void;
  onContributeClick?: () => void;
}

/**
 * Wrapper component that combines navbar and hero section
 * Total height = 100vh with navbar fixed on top
 */
export const HeroViewport: React.FC<HeroWrapperProps> = ({
  onCtaClick,
  onMenuClick,
  onContributeClick,
}) => {
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden bg-white pt-20">
      {/* Navbar - Fixed positioned, won't affect layout */}
      <Header onMenuClick={onMenuClick} onContributeClick={onContributeClick} />

      {/* Hero Section - full height, navbar floats above */}
      <div className="flex-1 flex items-center justify-center">
        <HeroSection onCtaClick={onCtaClick} />
      </div>
    </div>
  );
};

export default HeroViewport;
