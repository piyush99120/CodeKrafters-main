import Hero from "./hero";
import FeaturesSection from "./features";
import Examples from "./examples";
import CTASection from "./cta";
export default function PurchasePage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0]">
        <Hero />
        <FeaturesSection />
        <Examples />
        <CTASection />
      </div>
    </>
  );
}
