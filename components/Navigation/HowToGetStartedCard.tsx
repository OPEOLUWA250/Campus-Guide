"use client";

import React from "react";
import Image from "next/image";
import { COLORS } from "@/constant/design";

interface HowToGetStartedCardProps {
  number: number;
  title: string;
  description: string;
  imagePath: string;
  hasButton?: boolean;
  buttonText?: string;
  hasDemoButton?: boolean;
  onDemoClick?: () => void;
  imagePosition?: "left" | "right";
}

export const HowToGetStartedCard: React.FC<HowToGetStartedCardProps> = ({
  number,
  title,
  description,
  imagePath,
  hasButton,
  buttonText,
  hasDemoButton,
  onDemoClick,
  imagePosition = "right",
}) => {
  const isLeftImage = imagePosition === "left";

  return (
    <div
      className="rounded-[40px] lg:rounded-[60px] overflow-hidden border border-gray-200 w-full"
      style={{ backgroundColor: "#EFEEF3" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center p-6 sm:p-8 lg:p-12">
        {/* Left Content or Image */}
        {isLeftImage && (
          <div className="relative order-1 lg:order-1 w-full h-full justify-start hidden sm:flex">
            <div className="relative h-64 sm:h-72 lg:h-80 w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <Image
                src={imagePath}
                alt={`Step ${number}`}
                fill
                className="object-contain rounded-[24px] lg:rounded-[44px]"
                priority
              />
            </div>
          </div>
        )}

        {/* Text Content */}
        <div
          className={`order-${isLeftImage ? 2 : 1} lg:order-${isLeftImage ? 2 : 1} w-full max-w-xs sm:max-w-sm lg:max-w-md ${
            isLeftImage ? "ml-0 sm:ml-6 md:ml-8 lg:ml-12" : ""
          }`}
        >
          {/* Step Number */}
          <div className="flex items-center gap-6 mb-6">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-lg sm:text-xl font-normal flex-shrink-0 font-sora"
              style={{
                backgroundColor: COLORS.accent.yellow,
                color: "#18002C",
              }}
            >
              {number}
            </div>
          </div>

          {/* Title, Description, Button with equal spacing */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {title}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              {hasButton && (
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
                    e.currentTarget.style.backgroundColor = "transparent";
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
                  {buttonText}
                </button>
              )}
              {hasDemoButton && (
                <button
                  onClick={onDemoClick}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-light text-sm transition-all"
                  style={{
                    color: "black",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f0f0";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
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

        {/* Right Image */}
        {!isLeftImage && (
          <div className="relative order-2 lg:order-2 w-full h-full justify-end hidden sm:flex">
            <div className="relative h-64 sm:h-72 lg:h-80 w-full max-w-xs sm:max-w-sm lg:max-w-md">
              <Image
                src={imagePath}
                alt={`Step ${number}`}
                fill
                className="object-contain rounded-[24px] lg:rounded-[44px]"
                priority
              />
            </div>
          </div>
        )}

        {/* Mobile Image */}
        <div className="relative order-3 lg:hidden w-full h-auto mt-6 sm:hidden">
          <div className="relative h-48 w-full">
            <Image
              src={imagePath}
              alt={`Step ${number}`}
              fill
              className="object-contain rounded-[24px]"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToGetStartedCard;
