"use client";

import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface CampusBoundaryUploadProps {
  value: File | null;
  onChange: (file: File | null) => void;
}

export const CampusBoundaryUpload: React.FC<CampusBoundaryUploadProps> = ({
  value,
  onChange,
}) => {
  const ACCEPTED_FORMATS = {
    "application/json": [".geojson", ".json"],
    "application/vnd.google-earth.kml+xml": [".kml"],
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
        Upload Campus Boundary
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
            <path
              d="M11.1039 12.8542L12.4401 12.2369L13.6747 14.9092L12.3385 15.5265L11.1039 12.8542ZM17.5817 16.3469L20.254 15.1123L20.8714 16.4485L18.199 17.6831L17.5817 16.3469ZM14.9094 17.5816L14.292 16.2454L12.9559 16.8627L14.1905 19.5351L16.8628 18.3004L16.2455 16.9642L14.9094 17.5816ZM11.9243 7.61106L19.9413 3.90715L23.6452 11.9242L15.6282 15.6281L11.9243 7.61106Z"
              fill="#8400F2"
            />
            <path
              d="M21.2078 24.3974L15.9653 23.6943L11.3117 27.3416L3.90723 11.3149L10.5881 8.22835L11.8227 10.9007L10.4865 11.518L9.86922 10.1818L5.86071 12.0338L11.8675 25.0354L15.5463 22.1522L20.675 22.8406L23.2698 20.2044L25.3956 19.2223L23.5436 15.2138L22.2075 15.8311L21.5902 14.4949L24.2625 13.2603L27.3491 19.9411L24.1303 21.4283L21.2078 24.3974Z"
              fill="#8400F2"
            />
          </svg>
        </div>

        {/* Text */}
        <p className="text-sm sm:text-xs text-gray-600 font-medium">
          Drag and drop campus boundary
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
        Upload your campus boundary layer in (GeoJSON or KML)
      </p>
    </div>
  );
};

export default CampusBoundaryUpload;
