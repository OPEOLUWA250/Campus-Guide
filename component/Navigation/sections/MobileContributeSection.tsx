"use client";

import React from "react";
import { COLORS } from "@/constant/design";
import { ContributeBg } from "@/assets/icons";

interface MobileContributeSectionProps {
  onContributeClick?: () => void;
}

export const MobileContributeSection: React.FC<
  MobileContributeSectionProps
> = ({ onContributeClick }) => {
  return (
    <section className="md:hidden w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="w-full max-w-sm mx-auto">
        <div className="w-full aspect-square rounded-[40px] bg-cover bg-center overflow-hidden flex flex-col items-center justify-center gap-6 p-6 bg-contribute-card">
          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-white">
              Ready to contribute
            </h2>
            <p className="text-sm text-gray-100">
              Join the CampusGuide community
              <br />
              and make your campus easier to navigate
              <br />
              for everyone
            </p>
          </div>

          <button
            onClick={onContributeClick}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:scale-105 mt-2 bg-purple-primary hover:opacity-90"
          >
            <span>Contribute</span>
            <ContributeBg size={16} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MobileContributeSection;
