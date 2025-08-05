import React from "react";
import { LandingHero } from "./hero/demo";
import CTASection from "./cta";
import Features from "./features";
import WebsiteType from "./websiteType";
import Examples from "./examples";
import HowItWorks from "./howItWorks";
export default function PurchasePage() {
  return (
    <>
      <LandingHero />
      <div className="min-h-screen bg-white">
        <Features />
        <HowItWorks />
        <WebsiteType />
        <Examples />
        <CTASection />
      </div>
    </>
  );
}
