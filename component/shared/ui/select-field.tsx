"use client";

import React, { useState, ReactNode } from "react";

export interface SelectFieldOption {
  label: string;
  value: string;
}

export interface SelectFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectFieldOption[] | string[];
  placeholder?: string;
  icon?: ReactNode;
  searchable?: boolean;
  helpText?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  icon,
  searchable = false,
  helpText,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Normalize options to SelectFieldOption format
  const normalizedOptions: SelectFieldOption[] = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt,
  );

  const filteredOptions = searchable
    ? normalizedOptions.filter((opt) =>
        opt.label.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    : normalizedOptions;

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  return (
    <div className="space-y-0.5 sm:space-y-0.5 relative">
      <label className="block text-sm sm:text-xs font-medium text-gray-900">
        {label}
      </label>

      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm sm:text-xs text-gray-900 text-left flex items-center justify-between cursor-pointer hover:border-gray-300"
        style={{ backgroundColor: "white" }}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {selectedOption?.label || placeholder}
        </span>
        <div className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          {icon ? (
            icon
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {/* Search input */}
          {searchable && (
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-full px-4 py-2 border-b border-gray-200 focus:outline-none text-sm placeholder-gray-400"
              style={{ backgroundColor: "white" }}
            />
          )}

          {/* Options list */}
          <div className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition hover:bg-gray-50 ${
                    value === option.value
                      ? "bg-purple-50 text-purple-700 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {option.label}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500 text-center">
                No options found
              </div>
            )}
          </div>
        </div>
      )}

      {/* Help Text */}
      {helpText && (
        <p className="text-xs sm:text-[11px] text-gray-500 italic">
          {helpText}
        </p>
      )}
    </div>
  );
};

export default SelectField;
