"use client";

import React, { useState } from "react";

interface EmailInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const EmailInput: React.FC<EmailInputProps> = ({ value, onChange }) => {
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue.length === 0) {
      setError(null);
    } else if (!validateEmail(inputValue)) {
      setError("Please enter a valid email address");
    } else {
      setError(null);
    }

    onChange(inputValue);
  };

  return (
    <div className="space-y-0.5 sm:space-y-0.5">
      <label className="block text-sm sm:text-xs font-medium text-gray-900">
        Email
      </label>
      <input
        type="email"
        value={value}
        onChange={handleChange}
        placeholder="campusguide@gmail.com"
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

export default EmailInput;
