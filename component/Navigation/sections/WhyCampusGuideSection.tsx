"use client";

import React from "react";
import { COLORS } from "@/constant/design";
import {
  MusicWaveIcon,
  MapSearchIcon,
  LocationHeartIcon,
} from "@/utils/svg-icons";

const LightBulbCustomIcon = () => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.142 2.61279C10.5982 3.06994 10.1765 3.65512 9.91494 4.31568C9.65338 4.97624 9.56015 5.69147 9.64362 6.39701C9.7271 7.10255 9.98466 7.77627 10.3931 8.35756C10.8016 8.93885 11.3482 9.40947 11.9837 9.72708C13.7134 10.5954 14.3743 9.42536 15.3103 10.0562C15.9189 10.4659 16.0792 11.2905 15.6703 11.8982C15.2409 12.5342 14.5706 12.8574 14.6863 13.9005C14.7523 14.4894 15.1132 14.9959 15.582 15.4288M3.42773 7.95451C4.38852 8.18744 5.23863 8.74671 5.83288 9.53679C6.46866 10.3767 6.7715 11.422 6.68316 12.4717C6.63859 13.0082 6.98831 13.5499 7.43831 13.8456C7.73623 14.0409 7.98527 14.302 8.16617 14.6088C8.34707 14.9156 8.45499 15.2599 8.48159 15.6151C8.50818 15.9703 8.45274 16.3269 8.31955 16.6572C8.18636 16.9875 7.97898 17.2828 7.71345 17.5202"
      stroke="#0F001B"
      strokeWidth="1.28571"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.2851 18C14.5456 18 17.9994 14.5462 17.9994 10.2857C17.9994 6.02521 14.5456 2.57141 10.2851 2.57141C6.0246 2.57141 2.5708 6.02521 2.5708 10.2857C2.5708 14.5462 6.0246 18 10.2851 18Z"
      stroke="#0F001B"
      strokeWidth="1.28571"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface WhyCampusGuideSectionProps {}

const FEATURES = [
  {
    icon: MusicWaveIcon,
    title: "Simplify Navigation",
    description:
      "Easily find your way around specific campuses with our user-friendly platform.",
  },
  {
    icon: MapSearchIcon,
    title: "Contribute to OSM",
    description:
      "Ensure accurate and detailed school maps are uploaded to OpenStreetMap.",
  },
  {
    icon: LocationHeartIcon,
    title: "Support YouthMappers",
    description:
      "Empower YouthMappers chapters to map their campuses for improved navigation.",
  },
];

export const WhyCampusGuideSection: React.FC<
  WhyCampusGuideSectionProps
> = () => {
  return (
    <section className="w-full py-24 sm:py-32 relative overflow-hidden bg-white flex items-center justify-center px-4 sm:px-6">
      {/* Card Container */}
      <div
        className="w-[90vw] sm:w-full sm:max-w-6xl rounded-[40px] lg:rounded-[60px] p-6 sm:p-12 md:p-16 border-2 relative z-10"
        style={{
          backgroundColor: COLORS.dark.bg,
          borderColor: COLORS.accent.yellow,
        }}
      >
        {/* Header */}
        <div className="text-left space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                backgroundColor: COLORS.accent.yellow,
                color: "white",
              }}
            >
              <LightBulbCustomIcon />
            </div>
            <span
              className="text-xs sm:text-sm font-semibold whitespace-nowrap"
              style={{ color: COLORS.accent.yellow }}
            >
              Why CampusGuide
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-light sm:font-semibold leading-tight"
            style={{ color: "white" }}
          >
            Putting Everyone on the map
          </h2>
          <p
            className="text-sm sm:text-lg lg:text-xl opacity-80"
            style={{ color: "white" }}
          >
            One school at a time
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 w-full sm:w-auto">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-5 sm:p-8 pb-3 sm:pb-8 border transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group h-auto sm:h-auto flex flex-col"
                style={{
                  backgroundColor: COLORS.dark.bg,
                  borderColor: "white",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = COLORS.accent.yellow;
                  e.currentTarget.style.boxShadow = `0 20px 40px ${COLORS.primary}20`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "white";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  className="mb-4 sm:mb-6 w-fit inline-flex items-center justify-center p-3 sm:p-4 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "#CD96FA" }}
                >
                  <Icon
                    size={24}
                    className="sm:!w-8 sm:!h-8"
                    color={"#0F001B"}
                  />
                </div>

                {/* Content */}
                <h3
                  className="text-base sm:text-xl font-bold mb-2 sm:mb-4"
                  style={{ color: "white" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-xs sm:text-base leading-relaxed sm:leading-relaxed opacity-70"
                  style={{ color: "white" }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyCampusGuideSection;
