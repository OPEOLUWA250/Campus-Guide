"use client";

import React, { useCallback, ReactNode } from "react";
import { useDropzone } from "react-dropzone";

export interface FileUploadFieldProps {
  label: string;
  value: File | null;
  onChange: (file: File | null) => void;
  acceptedFormats: Record<string, string[]>;
  icon: ReactNode;
  dragPrompt: string;
  helpText: string;
  maxFiles?: number;
}

export const FileUploadField: React.FC<FileUploadFieldProps> = ({
  label,
  value,
  onChange,
  acceptedFormats,
  icon,
  dragPrompt,
  helpText,
  maxFiles = 1,
}) => {
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
      accept: acceptedFormats,
      maxFiles,
      multiple: false,
    });

  return (
    <div className="space-y-0.5 sm:space-y-0.5">
      <label className="block text-sm sm:text-xs font-medium text-gray-900">
        {label}
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
          {icon}
        </div>

        {/* Text */}
        <p className="text-sm sm:text-xs text-gray-600 font-medium">
          {dragPrompt}
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
      <p className="text-xs sm:text-[11px] text-gray-500 italic">{helpText}</p>
    </div>
  );
};

export default FileUploadField;
