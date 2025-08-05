"use client";
import React from "react";
import HeroSection from "./hero";
import IntroductionSection from "./intro";
import AnalysisTypesSection from "./datatype";
import ProcessSection from "./process";
import ToolsSection from "./tools";
import ApplicationsSection from "./application";
import BenefitsSection from "./benefits";
import ChallengesSection from "./challanges";

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <HeroSection onScrollToSection={scrollToSection} />
      <IntroductionSection />
      <AnalysisTypesSection />
      <ProcessSection />
      <ToolsSection />
      <ApplicationsSection />
      <BenefitsSection />
      <ChallengesSection />
    </div>
  );
};

export default Index;
