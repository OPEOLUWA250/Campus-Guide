"use client";

import React, { useState } from "react";
import Header from "@/component/Navigation/Header";
import MobileMenu from "@/component/Navigation/MobileMenu";
import HeroSection from "@/component/Navigation/sections/HeroSection";

interface HeroWrapperProps {
  onCtaClick?: () => void;
  onMenuClick?: () => void;
  onContributeClick?: () => void;
  isMenuOpen?: boolean;
  onMenuChange?: (isOpen: boolean) => void;
}

/**
 * Wrapper component that combines navbar and hero section
 * Total height = 100vh with navbar fixed on top
 */
export const HeroViewport: React.FC<HeroWrapperProps> = ({
  onCtaClick,
  onMenuClick,
  onContributeClick,
  isMenuOpen = false,
  onMenuChange,
}) => {
  return (
    <div className="relative w-full h-screen flex flex-col overflow-hidden bg-white pt-4 sm:pt-20">
      {/* Navbar - Fixed positioned, won't affect layout */}
      <Header
        onMenuClick={onMenuClick}
        onContributeClick={onContributeClick}
        isMenuOpen={isMenuOpen}
      />

      {/* Backdrop overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={() => onMenuChange?.(false)}
        />
      )}

      {/* Mobile Menu - Make sure to position it properly */}
      <div className="relative z-50">
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => onMenuChange?.(false)}
          onContributeClick={onContributeClick || (() => {})}
        />
      </div>

      {/* Hero Section - full height, navbar floats above */}
      <div className="flex-1 flex items-center justify-center">
        <HeroSection onCtaClick={onCtaClick} />
      </div>
    </div>
  );
};

export default HeroViewport;
