"use client";

import React from "react";
import { COLORS } from "@/constant/design";
import {
  MapIcon,
  ContributeToOSMIcon,
  SupportYouthMappersIcon,
  WhyCampusGuideIcon,
} from "@/assets/icons";

const LightBulbCustomIcon = () => <WhyCampusGuideIcon size={32} />;

interface WhyCampusGuideSectionProps {}

const FEATURES = [
  {
    icon: MapIcon,
    title: "Simplify Navigation",
    description:
      "Easily find your way around specific campuses with our user-friendly platform.",
  },
  {
    icon: ContributeToOSMIcon,
    title: "Contribute to OSM",
    description:
      "Ensure accurate and detailed school maps are uploaded to OpenStreetMap.",
  },
  {
    icon: SupportYouthMappersIcon,
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
      <div className="w-[90vw] sm:w-full sm:max-w-6xl rounded-[40px] lg:rounded-[60px] p-6 sm:p-12 md:p-16 border-2 relative z-10 why-campusguide-section-container">
        {/* Header */}
        <div className="text-left space-y-4 sm:space-y-6 mb-12 sm:mb-16">
          <div className="flex items-center gap-2">
            <LightBulbCustomIcon />
            <span
              className="text-xs sm:text-sm font-semibold whitespace-nowrap"
              style={{ color: COLORS.accent.yellow }}
            >
              Why CampusGuide
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light sm:font-semibold leading-tight text-white">
            Putting Everyone on the map
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl opacity-80 text-white">
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
                className="why-campusguide-card rounded-2xl p-5 sm:p-8 pb-3 sm:pb-8 border hover:shadow-xl hover:scale-105 cursor-pointer group h-auto sm:h-auto flex flex-col why-campusguide-card-item"
              >
                {/* Icon */}
                <div className="mb-4 sm:mb-6 w-fit inline-flex items-center justify-center p-2 sm:p-3 rounded-xl flex-shrink-0 icon-badge">
                  <Icon size={24} className="sm:!w-8 sm:!h-8 text-dark" />
                </div>

                {/* Content */}
                <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-base leading-relaxed sm:leading-relaxed opacity-70 text-white">
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
