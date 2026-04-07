"use client";

import React from "react";
import Image from "next/image";
import { COLORS } from "@/constant/design";
import {
  MapLocationIcon,
  ArrowRightIcon,
  LocationMarkerIcon,
  GoLiveMapIcon,
} from "@/utils/svg-icons";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <div className="w-full overflow-hidden flex items-center justify-center px-4 sm:px-6">
      {/* Main Hero Card - Brand Blue Background */}
      <div
        className="w-full max-w-6xl rounded-[40px] lg:rounded-[96px] overflow-hidden shadow-2xl border border-gray-200"
        style={{
          backgroundColor: COLORS.dark.bg,
        }}
      >
        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center px-6 sm:px-8 lg:px-12 py-8 sm:py-12 lg:py-24">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-5 order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left pb-4 sm:pb-8 lg:pb-0">
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
              <ArrowRightIcon size={16} color="white" />
            </button>
          </div>

          {/* Right - Map Preview Card */}
          <div className="relative order-1 lg:order-2 w-full h-full flex justify-end pb-4 sm:pb-8 lg:pb-0">
            {/* Map Container */}
            <div className="relative rounded-[30px] lg:rounded-[65.48px] overflow-hidden h-56 sm:h-72 w-[80%] sm:w-[28rem] shadow-lg">
              {/* MapMaker Image */}
              <Image
                src="/MapMaker.png"
                alt="Campus Map"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlaid Card - Center Left, 30% outside */}
            <div className="absolute left-0 sm:left-[-2%] top-1/2 transform -translate-y-1/2 bg-white rounded-2xl p-3 sm:p-4 shadow-lg flex items-center gap-4">
              <div className="bg-gray-100 rounded-full p-2 flex-shrink-0">
                <LocationMarkerIcon size={22} color="#992BF4" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs sm:text-sm text-gray-500 font-light">
                  Where are you going to?
                </p>
                <p className="text-xs sm:text-sm font-semibold text-gray-900">
                  Senate Building
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
