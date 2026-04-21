"use client";

import React, { useState, useEffect } from "react";
import HeroViewport from "@/component/Navigation/sections/HeroViewport";
import Footer from "@/component/Navigation/Footer";
import QuickSearchSection from "@/component/Navigation/sections/QuickSearchSection";
import UniversitiesSection from "@/component/Navigation/sections/UniversitiesSection";
import WhyCampusGuideSection from "@/component/Navigation/sections/WhyCampusGuideSection";
import HowToGetStartedSection from "@/component/Navigation/sections/HowToGetStartedSection";
import FAQSection from "@/component/Navigation/sections/FAQSection";
import MobileContributeSection from "@/component/Navigation/sections/MobileContributeSection";
import BackToTop from "@/component/Navigation/BackToTop";
import AfterFooterSection from "@/component/Navigation/sections/AfterFooterSection";
import ContributeForm, {
  ContributeFormData,
} from "@/component/Navigation/sections/ContributeForm";
import ContributeSuccess from "@/component/Navigation/sections/contribute/ContributeSuccess";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContributeForm, setShowContributeForm] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [submittedFormData, setSubmittedFormData] =
    useState<ContributeFormData | null>(null);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isMenuOpen]);

  const handleCtaClick = () => {
    // Navigate to live map
    window.location.href = "/map";
  };

  const handleWatchDemo = () => {
    // Open demo video modal or navigate
    window.open("https://youtube.com", "_blank");
  };

  const handleContributeClick = () => {
    setShowContributeForm(true);
  };

  const handleContributeSubmit = (formData: ContributeFormData) => {
    console.log("Contribute form submitted:", formData);
    setSubmittedFormData(formData);
    setShowContributeForm(false);
    setShowSuccessPage(true);
  };

  if (showContributeForm) {
    return (
      <ContributeForm
        onClose={() => setShowContributeForm(false)}
        onSubmit={handleContributeSubmit}
      />
    );
  }

  if (showSuccessPage && submittedFormData) {
    return (
      <ContributeSuccess
        userName={submittedFormData.contributorName || "youthmapperX"}
        userEmail={submittedFormData.email || "youthmapperX@gmail.com"}
      />
    );
  }

  return (
    <>
      <main className="w-full overflow-x-hidden">
        {/* Hero Section with Navbar - 100vh */}
        <section id="hero">
          <HeroViewport
            onCtaClick={handleCtaClick}
            onMenuClick={() => setIsMenuOpen(!isMenuOpen)}
            onContributeClick={handleContributeClick}
            isMenuOpen={isMenuOpen}
            onMenuChange={setIsMenuOpen}
          />
        </section>

        {/* Quick Search Section */}
        <section id="quick-search">
          <QuickSearchSection onExplore={handleCtaClick} />
        </section>

        {/* Universities Section */}
        <section id="universities">
          <UniversitiesSection />
        </section>

        {/* Why CampusGuide Section */}
        <section id="why-campusguide">
          <WhyCampusGuideSection />
        </section>

        {/* How to Get Started Section */}
        <section id="get-started">
          <HowToGetStartedSection onWatchDemo={handleWatchDemo} />
        </section>

        {/* Mobile Contribute Section */}
        <MobileContributeSection onContributeClick={handleContributeClick} />

        {/* FAQ Section */}
        <section id="FAQ">
          <FAQSection />
        </section>
      </main>

      <Footer />

      <AfterFooterSection />

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
}
