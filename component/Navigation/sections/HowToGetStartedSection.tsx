"use client";

import React from "react";
import { COLORS } from "@/constant/design";
import { GetStartedIcon } from "@/assets/icons";
import { HowToGetStartedCard } from "@/components/Navigation/HowToGetStartedCard";

interface HowToGetStartedSectionProps {
  onWatchDemo?: () => void;
}

const STEPS = [
  {
    number: 1,
    title: "Map your University",
    description:
      "Collaboratively map every campus feature and its attributes. Create comprehensive, detailed maps to enhance campus navigation for everyone.",
    imagePath: "/started-1.png",
    hasButton: true,
    buttonText: "Upload Boundary",
    imagePosition: "right" as const,
  },
  {
    number: 2,
    title: "Upload Campus\nBoundary",
    description:
      "Collaboratively map every campus feature and its attributes. Create comprehensive, detailed maps to enhance campus navigation for everyone.",
    imagePath: "/started-2.png",
    hasButton: true,
    buttonText: "Upload Boundary",
    hasDemoButton: true,
    imagePosition: "left" as const,
  },
  {
    number: 3,
    title: "Boundary\nVerification",
    description:
      "We manually verified if the area has be well mapped or requires update. Once verified, your campus boundary and details will be published on CampusGuide.",
    imagePath: "/started-3.png",
    hasButton: false,
    imagePosition: "right" as const,
  },
];

export const HowToGetStartedSection: React.FC<HowToGetStartedSectionProps> = ({
  onWatchDemo,
}) => {
  return (
    <section className="w-full bg-white flex items-center justify-center px-4 sm:px-6 py-12 sm:py-16 pb-16 sm:pb-24">
      <div className="w-full max-w-6xl flex flex-col items-center justify-center">
        {/* CRITICAL: max-w-6xl matches HeroSection and CTA card width */}
        {/* Header - Like QuickSearch */}
        <div className="w-full text-center space-y-2 sm:space-y-4 mb-8 sm:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            <GetStartedIcon size={48} />
            <h2
              className="text-lg sm:text-2xl font-light"
              style={{ color: COLORS.primary }}
            >
              How to get started
            </h2>
          </div>
          <h3 className="text-lg sm:text-2xl font-light text-gray-900">
            <span className="block sm:inline">
              Ready to upload your campus map,
            </span>
            <span className="block sm:inline"> get started in 3 steps</span>
          </h3>
        </div>

        {/* Cards Container */}
        <div className="w-full space-y-6 lg:space-y-8">
          {STEPS.map((step) => (
            <HowToGetStartedCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              imagePath={step.imagePath}
              hasButton={step.hasButton}
              buttonText={step.buttonText}
              hasDemoButton={step.hasDemoButton}
              onDemoClick={onWatchDemo}
              imagePosition={step.imagePosition}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToGetStartedSection;
