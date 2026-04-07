"use client";

import React from "react";

interface ProgressCarouselProps {
  currentStep: number; // 0: first, 1: second, 2: third
}

export const ProgressCarousel: React.FC<ProgressCarouselProps> = ({
  currentStep,
}) => {
  return (
    <div className="flex items-center justify-center gap-2 py-1.5 sm:py-2">
      {/* Line 1 */}
      <div
        className="h-1.5 w-10 sm:w-12 rounded-full transition-colors duration-300"
        style={{
          backgroundColor: currentStep >= 0 ? "#992BF4" : "#E8E6EA",
        }}
      />

      {/* Line 2 */}
      <div
        className="h-1.5 w-10 sm:w-12 rounded-full transition-colors duration-300"
        style={{
          backgroundColor: currentStep >= 1 ? "#992BF4" : "#E8E6EA",
        }}
      />

      {/* Line 3 */}
      <div
        className="h-1.5 w-10 sm:w-12 rounded-full transition-colors duration-300"
        style={{
          backgroundColor: currentStep >= 2 ? "#992BF4" : "#E8E6EA",
        }}
      />
    </div>
  );
};

export default ProgressCarousel;
