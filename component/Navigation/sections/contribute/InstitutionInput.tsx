"use client";

import React, { useState } from "react";

interface InstitutionInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const InstitutionInput: React.FC<InstitutionInputProps> = ({
  value,
  onChange,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Allow letters, spaces, and common institution characters like &, -
    const filteredValue = inputValue.replace(/[0-9]/g, "");

    if (filteredValue !== inputValue) {
      setError("Institution name cannot contain numbers");
    } else if (filteredValue.trim().length > 0) {
      setError(null);
    }

    onChange(filteredValue);
  };

  return (
    <div className="space-y-0.5 sm:space-y-0.5">
      <label className="block text-sm sm:text-xs font-medium text-gray-900">
        Institution
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Name of Institution"
        className={`w-full px-4 py-3 sm:py-2.5 rounded-lg border focus:ring-2 outline-none transition text-sm sm:text-xs text-gray-900 placeholder-gray-400 ${
          error
            ? "border-[#FF4A4A] focus:border-[#FF4A4A] focus:ring-red-100"
            : "border-gray-200 focus:border-purple-500 focus:ring-purple-100"
        }`}
        style={{ backgroundColor: "white" }}
      />
      {error && <p className="text-xs text-[#FF4A4A] font-medium">{error}</p>}
    </div>
  );
};

export default InstitutionInput;
