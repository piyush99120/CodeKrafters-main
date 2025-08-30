import { RobotSection } from "./HomePage/robot/robot-demo";
import FooterNav from "@/components/Footer/FooterNav";
import { HeroDemo } from "./HomePage/spotlight/demo";
import AboutSectionDemo from "./HomePage/about-section/hero-highlight/demo";
import ServicesSection from "./HomePage/services/services-section";
import { RevealImageListDemo } from "./HomePage/data-science-section/demo";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-screen bg-black">
        <RobotSection />
      </div>
      <AboutSectionDemo/>
      <ServicesSection />
      <RevealImageListDemo />
      <HeroDemo />
      <FooterNav />
    </>
  );
}
