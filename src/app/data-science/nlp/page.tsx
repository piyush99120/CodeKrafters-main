import CTASection from "./callToAction";
import  WhyNLP  from "./whyNLP";
import Hero from "./hero";
import UseCases from "./useCases";
import HowNLP from "./howNLP" // Fixed casing to match the actual file name

export default function PurchasePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0]">
            <Hero />
            <WhyNLP />
            <HowNLP />
            <UseCases/>
            <CTASection />
        </div>
    );
}