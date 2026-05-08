"use client";

import { useState, useEffect, useRef } from "react";

interface UseHideOnScrollOptions {
  threshold?: number;
}

/**
 * Custom hook to hide/show element based on scroll direction
 * Hides when scrolling down, shows when scrolling up
 * 
 * CRITICAL IMPLEMENTATION NOTES:
 * - Uses useRef for lastScrollY (NOT state) to avoid re-render loops
 * - Uses requestAnimationFrame for performance optimization
 * - Dependency array is [threshold] only - closure captures lastScrollYRef
 * DO NOT simplify or remove these optimizations
 */
export const useHideOnScroll = (options: UseHideOnScrollOptions = {}) => {
  const { threshold = 10 } = options;
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          // Show navbar when scrolling up or at the top
          if (
            currentScrollY < lastScrollYRef.current - threshold ||
            currentScrollY < 50
          ) {
            setIsVisible(true);
          }
          // Hide navbar when scrolling down
          else if (currentScrollY > lastScrollYRef.current + threshold) {
            setIsVisible(false);
          }

          lastScrollYRef.current = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isVisible;
};

export default useHideOnScroll;
