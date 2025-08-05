'use client';

import Hero from "./hero";
import About from "./about";
import UseCases from "./useCase";
import HowItWorks from "./howItWorks";
import Stats from "./states";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] relative overflow-hidden">
      {/* Enhanced background particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
      
      <div className="relative z-10">
        <Hero />
        <About />
        <UseCases />
        <HowItWorks />
        <Stats />
      </div>
    </div>
  );
};

export default page;