"use client";

import React, { useState } from "react";
import Image from "next/image";
import { COLORS } from "@/constant/design";
import { useToast } from "@/lib/context/use-toast";
import { TextField } from "@/component/shared/ui/input";
import { SelectField } from "@/component/shared/ui/select-field";
import { FileUploadField } from "@/component/shared/ui/file-upload-field";
import { MappingSlider } from "./contribute/MappingSlider";
import { ProgressCarousel } from "./contribute/ProgressCarousel";
import { COUNTRIES } from "./contribute/countriesData";

// Icons for file uploads
const BoundaryIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.1039 12.8542L12.4401 12.2369L13.6747 14.9092L12.3385 15.5265L11.1039 12.8542ZM17.5817 16.3469L20.254 15.1123L20.8714 16.4485L18.199 17.6831L17.5817 16.3469ZM14.9094 17.5816L14.292 16.2454L12.9559 16.8627L14.1905 19.5351L16.8628 18.3004L16.2455 16.9642L14.9094 17.5816ZM11.9243 7.61106L19.9413 3.90715L23.6452 11.9242L15.6282 15.6281L11.9243 7.61106Z"
      fill="#8400F2"
    />
    <path
      d="M21.2078 24.3974L15.9653 23.6943L11.3117 27.3416L3.90723 11.3149L10.5881 8.22835L11.8227 10.9007L10.4865 11.518L9.86922 10.1818L5.86071 12.0338L11.8675 25.0354L15.5463 22.1522L20.675 22.8406L23.2698 20.2044L25.3956 19.2223L23.5436 15.2138L22.2075 15.8311L21.5902 14.4949L24.2625 13.2603L27.3491 19.9411L24.1303 21.4283L21.2078 24.3974Z"
      fill="#8400F2"
    />
  </svg>
);

const PictureIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1872_2848)">
      <path
        d="M10.709 11.9998L16.5756 24.6979M14.6709 6.53752L20.5375 19.2356M6.20883 16.297C5.5804 14.9368 5.26639 14.2571 5.43333 13.699C5.49171 13.5001 5.5904 13.3183 5.72295 13.163C6.71556 11.9986 9.07629 12.766 10.3889 12.1023C10.5615 12.015 10.7254 11.909 10.878 11.7877C12.6033 10.4123 12.7745 7.5823 14.6476 6.38182C15.72 5.69182 17.2988 5.80334 18.5425 5.6784C19.5651 5.57561 20.0764 5.52422 20.496 5.7703C20.9156 6.01638 21.1387 6.49918 21.5832 7.46122L25.0492 14.9634C25.6772 16.3227 25.9916 17.0033 25.8247 17.5614C25.7665 17.7581 25.6677 17.9403 25.5347 18.0964C24.5421 19.2608 22.1817 18.4943 20.8692 19.158C20.6957 19.2456 20.5317 19.3507 20.3796 19.4717C18.6543 20.8471 18.4831 23.6772 16.6104 24.8785C15.5426 25.5643 11.9842 26.2052 10.7616 25.4892C10.342 25.2431 10.1198 24.7621 9.67446 23.7982L6.20883 16.297Z"
        stroke="#8400F2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

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
  const { toast } = useToast();
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
        toast({
          title: "Field required",
          description: "Please fill in all fields before proceeding.",
          variant: "destructive",
        });
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
        toast({
          title: "Field required",
          description: "Please fill in all fields before proceeding.",
          variant: "destructive",
        });
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Page 3 validation
      if (!formData.campusBoundary || !formData.campusPicture) {
        toast({
          title: "Files required",
          description: "Please upload both campus boundary and picture files.",
          variant: "destructive",
        });
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

  // Validation functions for each step
  const isStep0Valid = () => {
    return (
      formData.institution.trim() !== "" &&
      formData.country.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.chapterName.trim() !== "" &&
      formData.mappingPercentage > 0
    );
  };

  const isStep1Valid = () => {
    return (
      formData.contributorName?.trim() !== "" &&
      formData.email?.trim() !== "" &&
      formData.phoneNumber?.trim() !== "" &&
      formData.roleInChapter?.trim() !== ""
    );
  };

  const isStep2Valid = () => {
    return formData.campusBoundary !== null && formData.campusPicture !== null;
  };

  const isCurrentStepValid = () => {
    if (currentStep === 0) return isStep0Valid();
    if (currentStep === 1) return isStep1Valid();
    if (currentStep === 2) return isStep2Valid();
    return false;
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center px-4 py-0 overflow-hidden"
      style={{ backgroundImage: "url('/contribute-bg.png')" }}
    >
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
            className="rounded-3xl p-8 sm:p-7 w-full"
            style={{ backgroundColor: "#EFEEF3" }}
          >
            {/* Form Fields - Page 1 */}
            {currentStep === 0 && (
              <div className="space-y-5 sm:space-y-4">
                {/* Institution Input */}
                <TextField
                  label="Institution"
                  value={formData.institution}
                  onChange={(e) => handleChange("institution", e.target.value)}
                  placeholder="Enter institution name"
                  type="text"
                  required
                />

                {/* Country Select */}
                <SelectField
                  label="Country"
                  value={formData.country}
                  onChange={(value) => handleChange("country", value)}
                  options={COUNTRIES}
                  searchable={true}
                  placeholder="Select a country"
                />

                {/* Address Input */}
                <TextField
                  label="Address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  placeholder="Enter campus address"
                  type="text"
                  required
                />

                {/* Chapter Name Input */}
                <TextField
                  label="Chapter Name"
                  value={formData.chapterName}
                  onChange={(e) => handleChange("chapterName", e.target.value)}
                  placeholder="Enter chapter name"
                  type="text"
                  required
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
                <TextField
                  label="Full Name"
                  value={formData.contributorName || ""}
                  onChange={(e) =>
                    handleChange("contributorName", e.target.value)
                  }
                  placeholder="Firstname Lastname"
                  type="text"
                  required
                />

                {/* Email Input */}
                <TextField
                  label="Email"
                  value={formData.email || ""}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="your.email@example.com"
                  type="email"
                  required
                />

                {/* Phone Number Input */}
                <TextField
                  label="Phone Number"
                  value={formData.phoneNumber || ""}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  placeholder="+234 701 234 5678"
                  type="tel"
                  required
                />

                {/* Role in Chapter Input */}
                <TextField
                  label="Role in Chapter"
                  value={formData.roleInChapter || ""}
                  onChange={(e) =>
                    handleChange("roleInChapter", e.target.value)
                  }
                  placeholder="Member"
                  type="text"
                  required
                />
              </div>
            )}

            {/* Form Fields - Page 3 */}
            {currentStep === 2 && (
              <div className="space-y-5 sm:space-y-4">
                {/* Campus Boundary Upload */}
                <FileUploadField
                  label="Upload Campus Boundary"
                  value={formData.campusBoundary || null}
                  onChange={(file) => handleChange("campusBoundary", file)}
                  acceptedFormats={{
                    "application/json": [".geojson", ".json"],
                    "application/vnd.google-earth.kml+xml": [".kml"],
                  }}
                  icon={<BoundaryIcon />}
                  dragPrompt="Drag and drop campus boundary"
                  helpText="Upload your campus boundary layer in (GeoJSON or KML)"
                />

                {/* Campus Picture Upload */}
                <FileUploadField
                  label="Upload Campus Picture"
                  value={formData.campusPicture || null}
                  onChange={(file) => handleChange("campusPicture", file)}
                  acceptedFormats={{
                    "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
                  }}
                  icon={<PictureIcon />}
                  dragPrompt="Drag and drop campus picture"
                  helpText="Add a clear picture of the entrance of your campus"
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
            disabled={!isCurrentStepValid()}
            className="px-10 sm:px-14 py-2.5 sm:py-2 rounded-full font-light text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:scale-100"
            style={{
              backgroundColor: isCurrentStepValid() ? COLORS.primary : "#ccc",
            }}
            onMouseEnter={(e) => {
              if (isCurrentStepValid()) {
                e.currentTarget.style.backgroundColor = COLORS.primaryLight;
              }
            }}
            onMouseLeave={(e) => {
              if (isCurrentStepValid()) {
                e.currentTarget.style.backgroundColor = COLORS.primary;
              }
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
