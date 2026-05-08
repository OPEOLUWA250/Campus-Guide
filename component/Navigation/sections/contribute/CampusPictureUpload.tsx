"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface CampusPictureUploadProps {
  value: File | null;
  onChange: (file: File | null) => void;
}

export const CampusPictureUpload: React.FC<CampusPictureUploadProps> = ({
  value,
  onChange,
}) => {
  const ACCEPTED_FORMATS = {
    "image/*": [".jpeg", ".jpg", ".png", ".gif", ".webp"],
  };

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length > 0) {
        onChange(acceptedFiles[0]);
      }
    },
    [onChange],
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: ACCEPTED_FORMATS,
      maxFiles: 1,
      multiple: false,
    });

  return (
    <div className="space-y-0.5 sm:space-y-0.5">
      <label className="block text-sm sm:text-xs font-medium text-gray-900">
        Upload Campus Picture
      </label>

      {/* Drop Zone */}
      <div
        {...getRootProps()}
        className={`w-full p-4 sm:p-3 rounded-lg border-0 transition-all duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer ${
          isDragActive || isDragReject ? "bg-purple-50" : "bg-white"
        }`}
      >
        {/* Icon */}
        <div
          className="p-3 rounded-full"
          style={{ backgroundColor: "#F3E6FE" }}
        >
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
            <defs>
              <clipPath id="clip0_1872_2848">
                <rect
                  width="23.5501"
                  height="23.5501"
                  fill="white"
                  transform="translate(0 9.87711) rotate(-24.7973)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Text */}
        <p className="text-sm sm:text-xs text-gray-600 font-medium">
          Drag and drop campus picture
        </p>

        {/* Upload Button */}
        <button
          type="button"
          className="px-5 sm:px-4 py-2 sm:py-1.5 rounded-full text-sm sm:text-xs font-medium transition-all duration-300"
          style={{
            backgroundColor: "transparent",
            borderWidth: "0.5px",
            borderColor: "#992BF4",
            color: "#992BF4",
          }}
        >
          Upload files
        </button>

        {/* Hidden File Input */}
        <input {...getInputProps()} />

        {/* Selected File Display */}
        {value && (
          <p className="text-xs text-green-600 font-medium">✓ {value.name}</p>
        )}
      </div>

      {/* Help Text */}
      <p className="text-xs sm:text-[11px] text-gray-500 italic">
        Add a clear picture of the entrance of your campus
      </p>
    </div>
  );
};

export default CampusPictureUpload;
