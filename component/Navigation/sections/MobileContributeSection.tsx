"use client";

import React from "react";
import Link from "next/link";
import { COLORS } from "@/constant/design";
import { ContributeBg } from "@/assets/icons";

interface ContributeSectionProps {}

export const ContributeSection: React.FC<ContributeSectionProps> = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-12 sm:py-16">
      <div className="w-full max-w-6xl mx-auto">
        <div className="w-full rounded-[40px] lg:rounded-[50px] bg-cover bg-center overflow-hidden flex flex-col items-center justify-center gap-4 lg:gap-6 py-14 sm:py-16 lg:py-20 px-6 sm:px-8 lg:px-12 bg-contribute-card">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-white">
              Ready to contribute
            </h2>
            <p className="text-sm sm:text-base lg:text-base text-gray-100 leading-relaxed">
              Join the CampusGuide community
              <br />
              and make your campus easier to navigate
              <br />
              for everyone
            </p>
          </div>

          {/* Contribute button removed -- commented out per request */}
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;
