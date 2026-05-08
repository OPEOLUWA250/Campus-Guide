"use client";

import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@/assets/icons";
import { COLORS } from "@/constant/design";

/**
 * BackToTop component - Beautiful scroll-to-top button
 * Uses the same ChevronUpIcon as FAQ for consistency
 * Positioned at bottom-right with smooth animations
 */
export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Show button when scrolled down more than 300px
          setIsVisible(window.scrollY > 300);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 transition-all duration-300 ease-out
        ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        }
        hover:scale-110 active:scale-95
      `}
      aria-label="Scroll to top"
      title="Back to top"
    >
      {/* Outer glow background */}
      <div
        className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          backgroundColor: COLORS.primary,
          opacity: isVisible ? "0.15" : "0",
        }}
      />

      {/* Main button circle */}
      <div
        className="relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
        style={{
          backgroundColor: COLORS.primary,
          boxShadow: isVisible
            ? `0 10px 30px rgba(${COLORS.primary}, 0.3), 0 0 0 3px rgba(${COLORS.primary}, 0.1)`
            : "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = COLORS.primaryLight;
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = COLORS.primary;
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* Icon */}
        <div className="flex items-center justify-center animate-pulse-slow">
          <ChevronUpIcon size={20} color="white" />
        </div>
      </div>

      {/* Optional: Pulse animation ring */}
      {isVisible && (
        <div
          className="absolute inset-0 rounded-full animate-ping"
          style={{
            backgroundColor: COLORS.primary,
            opacity: 0.15,
            animationDuration: "2s",
          }}
        />
      )}
    </button>
  );
};

export default BackToTop;
