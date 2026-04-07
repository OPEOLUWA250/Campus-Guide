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
import { ContributorNameInput } from "./contribute/ContributorNameInput";
import { EmailInput } from "./contribute/EmailInput";
import { PhoneNumberInput } from "./contribute/PhoneNumberInput";
import { RoleInChapterInput } from "./contribute/RoleInChapterInput";
import { CampusBoundaryUpload } from "./contribute/CampusBoundaryUpload";
import { CampusPictureUpload } from "./contribute/CampusPictureUpload";

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
  contributorName?: string;
  email?: string;
  phoneNumber?: string;
  roleInChapter?: string;
  campusBoundary?: File | null;
  campusPicture?: File | null;
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
    contributorName: "",
    email: "",
    phoneNumber: "",
    roleInChapter: "",
    campusBoundary: null,
    campusPicture: null,
  });

  const [currentStep, setCurrentStep] = useState(0);

  const handleChange = (field: keyof ContributeFormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    // Validate based on current step
    if (currentStep === 0) {
      // Page 1 validation
      if (
        !formData.institution ||
        !formData.country ||
        !formData.address ||
        !formData.chapterName
      ) {
        alert("Please fill in all fields");
        return;
      }
      setCurrentStep(1);
    } else if (currentStep === 1) {
      // Page 2 validation
      if (
        !formData.contributorName ||
        !formData.email ||
        !formData.phoneNumber ||
        !formData.roleInChapter
      ) {
        alert("Please fill in all fields");
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Page 3 validation
      if (!formData.campusBoundary || !formData.campusPicture) {
        alert("Please upload both files");
        return;
      }
      // Final submission
      if (onSubmit) {
        onSubmit(formData);
      }
      console.log("Form submitted:", formData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
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
        <div className="w-full max-w-md px-6 sm:px-5 mt-10 sm:mt-10">
          <ProgressCarousel currentStep={currentStep} />
        </div>

        {/* Form Card - Centered in available space */}
        <div className="w-full max-w-md overflow-hidden flex-grow flex items-center justify-center">
          <div
            className="rounded-[30px] p-8 sm:p-7 w-full"
            style={{ backgroundColor: "#EFEEF3" }}
          >
            {/* Form Fields - Page 1 */}
            {currentStep === 0 && (
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
            )}

            {/* Form Fields - Page 2 */}
            {currentStep === 1 && (
              <div className="space-y-5 sm:space-y-4">
                {/* Contributor Name Input */}
                <ContributorNameInput
                  value={formData.contributorName || ""}
                  onChange={(value) => handleChange("contributorName", value)}
                />

                {/* Email Input */}
                <EmailInput
                  value={formData.email || ""}
                  onChange={(value) => handleChange("email", value)}
                />

                {/* Phone Number Input */}
                <PhoneNumberInput
                  value={formData.phoneNumber || ""}
                  onChange={(value) => handleChange("phoneNumber", value)}
                />

                {/* Role in Chapter Input */}
                <RoleInChapterInput
                  value={formData.roleInChapter || ""}
                  onChange={(value) => handleChange("roleInChapter", value)}
                />
              </div>
            )}

            {/* Form Fields - Page 3 */}
            {currentStep === 2 && (
              <div className="space-y-5 sm:space-y-4">
                {/* Campus Boundary Upload */}
                <CampusBoundaryUpload
                  value={formData.campusBoundary || null}
                  onChange={(file) => handleChange("campusBoundary", file)}
                />

                {/* Campus Picture Upload */}
                <CampusPictureUpload
                  value={formData.campusPicture || null}
                  onChange={(file) => handleChange("campusPicture", file)}
                />
              </div>
            )}
          </div>
        </div>

        {/* Buttons - At bottom */}
        <div className="w-full max-w-md flex gap-3 sm:gap-3 justify-center mb-3 sm:mb-3 px-4 sm:px-3">
          {/* Previous Button - Show from step 1 onwards */}
          {currentStep > 0 && (
            <button
              onClick={handlePrevious}
              className="px-10 sm:px-12 py-2.5 sm:py-2 rounded-full font-light transition-all duration-300 text-sm sm:text-base"
              style={{
                backgroundColor: "transparent",
                borderWidth: "0.5px",
                borderColor: COLORS.primary,
                color: COLORS.primary,
              }}
            >
              Previous
            </button>
          )}

          {/* Next Button (Steps 0-1) / Submit Button (Step 2) */}
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
            {currentStep === 2 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContributeForm;
