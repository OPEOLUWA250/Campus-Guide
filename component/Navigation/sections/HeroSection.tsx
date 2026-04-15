"use client";

import React from "react";
import Image from "next/image";
import { COLORS } from "@/constant/design";
import { GoLiveMapIcon } from "@/utils/svg-icons";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <div className="w-full overflow-hidden flex items-center justify-center px-4 sm:px-6">
      {/* Main Hero Card - Brand Blue Background */}
      <div
        className="w-full max-w-6xl rounded-[40px] lg:rounded-[96px] overflow-hidden border border-gray-200"
        style={{
          backgroundColor: COLORS.dark.bg,
        }}
      >
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center px-6 sm:px-8 lg:px-12 py-12 sm:py-8 lg:py-12">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left pb-6 sm:pb-8 lg:pb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Campus navigation
              <br className="sm:hidden" /> made{" "}
              <span className="text-white">easy!</span>
            </h1>

            <p
              className="text-sm font-light sm:text-base"
              style={{ color: "#E8E6EA" }}
            >
              Up-to-date maps to guide you <br /> through every corner.
            </p>

            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-light text-white transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
              style={{ backgroundColor: COLORS.primary }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.primaryLight;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.primary;
              }}
            >
              <GoLiveMapIcon size={20} color="white" />
              Go to live map
            </button>
          </div>

          {/* Right - Hero Image */}
          <div className="relative order-1 lg:order-2 w-full h-full flex justify-center lg:justify-end pb-4 sm:pb-8 lg:pb-0">
            {/* Hero Image Container */}
            <div className="relative rounded-[30px] lg:rounded-[65.48px] overflow-hidden h-56 sm:h-72 lg:h-96 w-full sm:w-[68rem] max-w-none shadow-lg">
              {/* Hero Image */}
              <Image
                src="/hero-img.png"
                alt="Campus Map"
                fill
                className="object-cover object-left"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
