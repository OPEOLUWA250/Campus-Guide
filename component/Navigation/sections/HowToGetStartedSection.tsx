"use client";

import React from "react";
import { COLORS } from "@/constant/design";
import {
  BoundaryUploadIcon,
  VerificationIcon,
  PlayIcon,
} from "@/utils/svg-icons";
import { HowToGetStartedIcon } from "@/assets/icons/HowToGetStarted";

interface HowToGetStartedSectionProps {
  onWatchDemo?: () => void;
}

const STEPS = [
  {
    number: 1,
    title: "Map your University",
    description:
      "Collaboratively map every campus feature and its attributes. Create comprehensive, detailed maps to enhance campus navigation for everyone.",
    icon: BoundaryUploadIcon,
    hasButton: true,
    buttonText: "Upload Boundary",
    bgColor: "#F3F0FF",
  },
  {
    number: 2,
    title: "Upload Campus Boundary",
    description:
      "Collaboratively map every campus feature and its attributes. Create comprehensive, detailed maps to enhance campus navigation for everyone.",
    icon: BoundaryUploadIcon,
    hasButton: true,
    buttonText: "Upload Boundary",
    hasDemoButton: true,
    bgColor: "#F3F0FF",
  },
  {
    number: 3,
    title: "Boundary Verification",
    description:
      "We manually verified if the area has be well mapped or requires update. Once verified, your campus boundary and details will be published on CampusGuide.",
    icon: VerificationIcon,
    bgColor: "#D4A5FF",
  },
];

export const HowToGetStartedSection: React.FC<HowToGetStartedSectionProps> = ({
  onWatchDemo,
}) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-white">
      <div className="flex flex-col items-center justify-center px-4 sm:px-6">
        {/* CRITICAL: max-w-6xl matches HeroSection width */}
        <div className="w-full max-w-6xl">
          {/* Header - Like QuickSearch */}
          <div className="text-center space-y-2 sm:space-y-4 mb-8 sm:mb-16">
            <div className="flex items-center justify-center gap-2 sm:gap-4">
              <HowToGetStartedIcon size={32} />
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
            {/* First Card - Hero Section Layout */}
            <div
              className="rounded-[40px] lg:rounded-[60px] overflow-hidden border border-gray-200 w-full"
              style={{ backgroundColor: "#EFEEF3" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center p-6 sm:p-8 lg:p-12">
                {/* Left Content */}
                <div className="order-1 lg:order-1 w-full max-w-xs sm:max-w-sm lg:max-w-md">
                  {/* Step Number */}
                  <div className="flex items-center gap-6 mb-6">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-normal flex-shrink-0 font-sora"
                      style={{
                        backgroundColor: COLORS.accent.yellow,
                        color: "#18002C",
                      }}
                    >
                      1
                    </div>
                  </div>

                  {/* Title, Description, Button with equal spacing */}
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {STEPS[0].title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {STEPS[0].description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {STEPS[0].hasButton && (
                        <button
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-light border text-sm transition-all"
                          style={{
                            borderColor: "black",
                            color: "black",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f0f0f0";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.75 6.75H15.75M15.75 6.75L10.125 0.75M15.75 6.75L10.125 12.75"
                              stroke="#18002C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {STEPS[0].buttonText}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right - Illustration Card */}
                <div className="relative order-2 lg:order-2 w-full h-full justify-end hidden sm:flex">
                  {/* Purple Border Container */}
                  <div
                    className="rounded-[30px] lg:rounded-[50px] p-2 sm:p-3 h-64 sm:h-72 lg:h-80 w-full max-w-xs sm:max-w-sm lg:max-w-md shadow-lg"
                    style={{ backgroundColor: "#B86BF7" }}
                  >
                    {/* Brand Blue Inner Card */}
                    <div
                      className="rounded-[24px] lg:rounded-[44px] overflow-hidden w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: COLORS.dark.bg }}
                    >
                      <div className="text-center px-4">
                        {(() => {
                          const Icon = STEPS[0].icon;
                          return Icon ? (
                            <Icon size={100} color="white" />
                          ) : null;
                        })()}
                        <p className="mt-4 text-sm font-medium text-white">
                          Step 1 Illustration
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile - Illustration Card After Text */}
                <div className="relative order-3 lg:hidden w-full h-auto mt-6 sm:hidden">
                  {/* Purple Border Container */}
                  <div
                    className="rounded-[30px] p-2 h-48 w-full shadow-lg"
                    style={{ backgroundColor: "#B86BF7" }}
                  >
                    {/* Brand Blue Inner Card */}
                    <div
                      className="rounded-[24px] overflow-hidden w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: COLORS.dark.bg }}
                    >
                      <div className="text-center px-4">
                        {(() => {
                          const Icon = STEPS[0].icon;
                          return Icon ? <Icon size={60} color="white" /> : null;
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Cards - Same Hero Layout */}
            {/* Second Card */}
            <div
              className="rounded-[40px] lg:rounded-[60px] overflow-hidden border border-gray-200 w-full"
              style={{ backgroundColor: "#EFEEF3" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center p-6 sm:p-8 lg:p-12">
                {/* Left - Illustration Card */}
                <div className="relative order-1 lg:order-1 w-full h-full justify-start hidden sm:flex">
                  {/* Smaller Card without border container */}
                  <div
                    className="rounded-[24px] lg:rounded-[44px] overflow-hidden h-64 sm:h-72 lg:h-80 w-full max-w-xs sm:max-w-sm lg:max-w-md shadow-lg flex items-center justify-center"
                    style={{ backgroundColor: "#18002C" }}
                  >
                    <div className="text-center px-4">
                      {(() => {
                        const Icon = STEPS[1].icon;
                        return Icon ? <Icon size={100} color="white" /> : null;
                      })()}
                      <p className="mt-4 text-sm font-medium text-white">
                        Step 2 Illustration
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile - Illustration Card After Text */}
                <div className="relative order-4 lg:hidden w-full h-auto mt-6 sm:hidden">
                  <div
                    className="rounded-[24px] overflow-hidden h-48 w-full shadow-lg flex items-center justify-center"
                    style={{ backgroundColor: "#18002C" }}
                  >
                    <div className="text-center px-4">
                      {(() => {
                        const Icon = STEPS[1].icon;
                        return Icon ? <Icon size={60} color="white" /> : null;
                      })()}
                    </div>
                  </div>
                </div>

                {/* Right Content */}
                <div className="order-2 lg:order-2 w-full max-w-xs sm:max-w-sm lg:max-w-md ml-0 sm:ml-6 md:ml-8 lg:ml-12">
                  {/* Step Number */}
                  <div className="flex items-center gap-6 mb-8">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-normal flex-shrink-0 font-sora"
                      style={{
                        backgroundColor: COLORS.accent.yellow,
                        color: "#18002C",
                      }}
                    >
                      2
                    </div>
                  </div>

                  {/* Title, Description, Button with equal spacing */}
                  <div className="space-y-8">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {STEPS[1].title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {STEPS[1].description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {STEPS[1].hasButton && (
                        <button
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-light border text-sm transition-all"
                          style={{
                            borderColor: "black",
                            color: "black",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f0f0f0";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.75 6.75H15.75M15.75 6.75L10.125 0.75M15.75 6.75L10.125 12.75"
                              stroke="#18002C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {STEPS[1].buttonText}
                        </button>
                      )}
                      {STEPS[1].hasDemoButton && (
                        <button
                          onClick={onWatchDemo}
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-light text-sm transition-all"
                          style={{
                            color: "black",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f0f0f0";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          <svg
                            width="16"
                            height="17"
                            viewBox="0 0 16 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.64 9.09597C14.287 10.439 12.617 11.388 9.276 13.286C6.046 15.121 4.431 16.038 3.13 15.67C2.59076 15.5171 2.10021 15.2274 1.706 14.829C0.75 13.864 0.75 11.993 0.75 8.24997C0.75 4.50697 0.75 2.63597 1.706 1.67097C2.10032 1.2729 2.59086 0.983541 3.13 0.830974C4.431 0.460974 6.046 1.37897 9.276 3.21397C12.616 5.11197 14.287 6.06097 14.641 7.40397C14.788 7.95839 14.788 8.54156 14.641 9.09597"
                              stroke="#18002C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          Watch Demo
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third Card */}
            <div
              className="rounded-[40px] lg:rounded-[60px] overflow-hidden border border-gray-200 w-full"
              style={{ backgroundColor: "#EFEEF3" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center p-6 sm:p-8 lg:p-12">
                {/* Left Content */}
                <div className="order-2 lg:order-1 w-full max-w-xs sm:max-w-sm lg:max-w-md">
                  {/* Step Number */}
                  <div className="flex items-center gap-6 mb-6">
                    <div
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-normal flex-shrink-0 font-sora"
                      style={{
                        backgroundColor: COLORS.accent.yellow,
                        color: "#18002C",
                      }}
                    >
                      3
                    </div>
                  </div>

                  {/* Title, Description, Button with equal spacing */}
                  <div className="space-y-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {STEPS[2].title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {STEPS[2].description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-3">
                      {STEPS[2].hasButton && (
                        <button
                          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-light border text-sm transition-all"
                          style={{
                            borderColor: "black",
                            color: "black",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#f0f0f0";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }}
                        >
                          <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0.75 6.75H15.75M15.75 6.75L10.125 0.75M15.75 6.75L10.125 12.75"
                              stroke="#18002C"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          {STEPS[2].buttonText}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right - Illustration Card */}
                <div className="relative order-2 lg:order-2 w-full h-full justify-end hidden sm:flex">
                  {/* Smaller Card without border container */}
                  <div
                    className="rounded-[24px] lg:rounded-[44px] overflow-hidden h-64 sm:h-72 lg:h-80 w-full max-w-xs sm:max-w-sm lg:max-w-md shadow-lg flex items-center justify-center"
                    style={{ backgroundColor: "#B86BF7" }}
                  >
                    <div className="text-center px-4">
                      {(() => {
                        const Icon = STEPS[2].icon;
                        return Icon ? <Icon size={100} color="white" /> : null;
                      })()}
                      <p className="mt-4 text-sm font-medium text-white">
                        Step 3 Illustration
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile - Illustration Card After Text */}
                <div className="relative order-4 lg:hidden w-full h-auto mt-6 sm:hidden">
                  <div
                    className="rounded-[24px] overflow-hidden h-48 w-full shadow-lg flex items-center justify-center"
                    style={{ backgroundColor: "#B86BF7" }}
                  >
                    <div className="text-center px-4">
                      {(() => {
                        const Icon = STEPS[2].icon;
                        return Icon ? <Icon size={60} color="white" /> : null;
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToGetStartedSection;
