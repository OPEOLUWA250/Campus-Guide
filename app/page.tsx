"use client";

import React, { useState } from "react";
import HeroViewport from "@/component/Navigation/sections/HeroViewport";
import Footer from "@/component/Navigation/Footer";
import QuickSearchSection from "@/component/Navigation/sections/QuickSearchSection";
import UniversitiesSection from "@/component/Navigation/sections/UniversitiesSection";
import WhyCampusGuideSection from "@/component/Navigation/sections/WhyCampusGuideSection";
import HowToGetStartedSection from "@/component/Navigation/sections/HowToGetStartedSection";
import FAQSection from "@/component/Navigation/sections/FAQSection";
import BackToTop from "@/component/Navigation/BackToTop";
import CoverLogoSection from "@/component/Navigation/sections/CoverLogoSection";
import ContributeForm, {
  ContributeFormData,
} from "@/component/Navigation/sections/ContributeForm";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContributeForm, setShowContributeForm] = useState(false);

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
    // Navigate to next page or show success message
    // You can add your logic here
    setShowContributeForm(false);
  };

  if (showContributeForm) {
    return (
      <ContributeForm
        onClose={() => setShowContributeForm(false)}
        onSubmit={handleContributeSubmit}
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

        {/* FAQ Section */}
        <section id="FAQ">
          <FAQSection />
        </section>
      </main>

      <Footer />

      {/* Cover Logo Section */}
      <CoverLogoSection />

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
}
