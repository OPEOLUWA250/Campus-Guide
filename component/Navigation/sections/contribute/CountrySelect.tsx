"use client";

import React, { useState } from "react";
import { COUNTRIES } from "./countriesData";
import { CountryDropdownChevron } from "@/assets/icons/CountryDropdownChevron";

interface CountrySelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const CountrySelect: React.FC<CountrySelectProps> = ({
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = COUNTRIES.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-0.5 sm:space-y-0.5 relative">
      <label className="block text-sm sm:text-xs font-medium text-gray-900">
        Country
      </label>

      {/* Dropdown button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 sm:py-2.5 rounded-lg border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-100 outline-none transition text-sm sm:text-xs text-gray-900 text-left flex items-center justify-between cursor-pointer hover:border-gray-300"
        style={{ backgroundColor: "white" }}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || "Select a country"}
        </span>
        <div className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <CountryDropdownChevron />
        </div>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {/* Search input */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search countries..."
            className="w-full px-4 py-2 border-b border-gray-200 focus:outline-none text-sm placeholder-gray-400"
            style={{ backgroundColor: "white" }}
          />

          {/* Countries list */}
          <div className="max-h-48 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country}
                  onClick={() => {
                    onChange(country);
                    setIsOpen(false);
                    setSearchTerm("");
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm transition hover:bg-gray-50 ${
                    value === country
                      ? "bg-purple-50 text-purple-700 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {country}
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500 text-center">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
