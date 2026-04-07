"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COLORS } from "@/constant/design";
import { InstitutionInput } from "./contribute/InstitutionInput";
import { CountrySelect } from "./contribute/CountrySelect";
import { AddressInput } from "./contribute/AddressInput";
import { ChapterNameInput } from "./contribute/ChapterNameInput";
import { MappingSlider } from "./contribute/MappingSlider";
import { ProgressCarousel } from "./contribute/ProgressCarousel";

interface ContributeFormProps {
  onClose?: () => void;
  onSubmit?: (formData: ContributeFormData) => void;
}

export interface ContributeFormData {
  institution: string;
  country: string;
  address: string;
  chapterName: string;
  mappingPercentage: number;
}

export const ContributeForm: React.FC<ContributeFormProps> = ({
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<ContributeFormData>({
    institution: "",
    country: "",
    address: "",
    chapterName: "",
    mappingPercentage: 0,
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (field: keyof ContributeFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    // Validate form
    if (
      !formData.institution ||
      !formData.country ||
      !formData.address ||
      !formData.chapterName
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Move to next step
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
      // Optionally reset form for next step or keep data
    } else {
      // Call submit handler on final step
      if (onSubmit) {
        onSubmit(formData);
      }
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4 py-0 overflow-hidden">
      <div className="w-full max-w-xl h-full flex flex-col items-center justify-start pt-3 sm:pt-3">
        {/* Header - Logo + Text - Positioned at top */}
        <div className="flex-shrink-0 pb-0 sm:pb-0.5 flex items-center justify-center gap-2">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
            <Image
              src="/cg.svg"
              alt="CampusGuide Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            CampusGuide
          </h1>
        </div>

        {/* Progress Carousel - Before form card */}
        <div className="w-full max-w-md px-6 sm:px-5 mt-20 sm:mt-10">
          <ProgressCarousel currentStep={currentStep} />
        </div>

        {/* Form Card - Centered in available space */}
        <div className="w-full max-w-md overflow-hidden flex-grow flex items-center justify-center">
          <div
            className="rounded-[30px] p-8 sm:p-7 w-full"
            style={{ backgroundColor: "#EFEEF3" }}
          >
            {/* Form Fields */}
            <div className="space-y-5 sm:space-y-4">
              {/* Institution Input */}
              <InstitutionInput
                value={formData.institution}
                onChange={(value) => handleChange("institution", value)}
              />

              {/* Country Select */}
              <CountrySelect
                value={formData.country}
                onChange={(value) => handleChange("country", value)}
              />

              {/* Address Input */}
              <AddressInput
                value={formData.address}
                onChange={(value) => handleChange("address", value)}
              />

              {/* Chapter Name Input */}
              <ChapterNameInput
                value={formData.chapterName}
                onChange={(value) => handleChange("chapterName", value)}
              />

              {/* Mapping Slider */}
              <MappingSlider
                value={formData.mappingPercentage}
                onChange={(value) => handleChange("mappingPercentage", value)}
              />
            </div>
          </div>
        </div>

        {/* Next Button - Positioned at bottom with spacing */}
        <div className="w-full max-w-md flex justify-center mb-3 sm:mb-3 px-4 sm:px-3">
          <button
            onClick={handleNext}
            className="px-10 sm:px-14 py-2.5 sm:py-2 rounded-full font-light text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-sm sm:text-base"
            style={{ backgroundColor: COLORS.primary }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primaryLight;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primary;
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContributeForm;
