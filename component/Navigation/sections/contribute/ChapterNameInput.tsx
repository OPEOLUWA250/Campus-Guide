"use client";

import React from "react";

interface ChapterNameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const ChapterNameInput: React.FC<ChapterNameInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="space-y-0.5 sm:space-y-0.5">
      <label className="block text-sm sm:text-xs font-medium text-gray-900">
        Chapter Name
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Chapter Name"
        className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm sm:text-xs text-gray-900 placeholder-gray-400"
        style={{ backgroundColor: "white" }}
      />
    </div>
  );
};

export default ChapterNameInput;
