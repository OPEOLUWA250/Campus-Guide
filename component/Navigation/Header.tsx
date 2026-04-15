"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { COLORS } from "@/constant/design";
import { useHideOnScroll } from "@/lib/hooks/useHideOnScroll";
import { WebMapIcon, ContributeIconArrow } from "@/utils/svg-icons";

interface HeaderProps {
  onMenuClick?: () => void;
  onContributeClick?: () => void;
  isMenuOpen?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuClick,
  onContributeClick,
  isMenuOpen = false,
}) => {
  const isVisible = useHideOnScroll();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 sm:px-0 bg-transparent transition-all duration-300 pt-3 sm:pt-4"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-120px)",
      }}
    >
      <nav
        className="flex items-center justify-between bg-white rounded-full shadow-lg w-full sm:w-[50%] px-3 sm:px-4 py-3 sm:py-4 transition-all duration-300 border border-gray-300 md:border-gray-100 md:shadow-lg"
        style={{
          backgroundColor: COLORS.light.bg,
        }}
      >
        {/* Left Section - Logo + Brand */}
        <Link href="/" className="flex items-center gap-2 group flex-1">
          <div className="w-8 h-8 flex-shrink-0">
            <Image
              src="/cg.svg"
              alt="CampusGuide Logo"
              width={32}
              height={32}
              priority
              className="w-full h-full"
            />
          </div>
          <span className="text-sm sm:text-lg font-normal sm:font-normal text-gray-900">
            CampusGuide
          </span>
        </Link>

        {/* Right Section - Web map + Contribute */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Web map link */}
          <Link
            href="/map"
            className="hidden md:flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition px-3 py-2 rounded-lg hover:bg-gray-50"
          >
            <WebMapIcon size={18} color="#3F2B50" />
            <span className="text-sm font-medium">Web map</span>
          </Link>

          {/* Contribute Button */}
          <button
            onClick={onContributeClick}
            className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full font-light text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{
              backgroundColor: COLORS.primary,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primaryLight;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.primary;
            }}
          >
            <ContributeIconArrow size={13} color="white" />
            <span className="text-sm">Contribute</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 hover:bg-gray-50 transition"
          >
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="#3F2B50"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 6.5H19.5H4.5ZM4.5 12H19.5H4.5ZM4.5 17.5H19.5H4.5Z"
                  fill="#3F2B50"
                />
                <path
                  d="M4.5 6.5H19.5M4.5 12H19.5M4.5 17.5H19.5"
                  stroke="#3F2B50"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
