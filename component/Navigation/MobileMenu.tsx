"use client";

import React from "react";
import Link from "next/link";
import { COLORS } from "@/constant/design";
import { WebMapIcon, ContributeIconArrow } from "@/utils/svg-icons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onContributeClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onContributeClick,
}) => {
  if (!isOpen) return null;

  const handleContribute = () => {
    onContributeClick();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div className="fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-xl z-50 md:hidden">
        <div className="flex flex-col py-4 px-4 space-y-3">
          {/* Web Map Link */}
          <Link
            href="/map"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            onClick={onClose}
          >
            <WebMapIcon size={18} color="#3F2B50" />
            <span className="text-sm font-medium">Web map</span>
          </Link>

          {/* Contribute Button */}
          <button
            onClick={handleContribute}
            className="flex items-center gap-2 px-4 py-3 rounded-full font-light text-white transition-all duration-300 hover:shadow-lg w-full justify-center"
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
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
