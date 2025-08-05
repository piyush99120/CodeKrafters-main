'use client';
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className={`absolute inset-0 transition-opacity duration-4000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Data visualization graphic */}
      <div className="absolute top-1/4 right-1/4 opacity-20">
        <svg width="200" height="150" viewBox="0 0 200 150" className="animate-pulse">
          <rect x="20" y="100" width="30" height="40" fill="#ffffff" className="animate-bounce"/>
          <rect x="60" y="80" width="30" height="60" fill="#ffffff" className="animate-bounce animation-delay-1000"/>
          <rect x="100" y="60" width="30" height="80" fill="#ffffff" className="animate-bounce animation-delay-2000"/>
          <rect x="140" y="40" width="30" height="100" fill="#ffffff" className="animate-bounce animation-delay-3000"/>
        </svg>
      </div>

      <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="mb-8">
          <h1 className="text-[52px] font-bold text-white mb-6 leading-tight animate-fade-in">
            Data Analysis: Unlocking Insights from Information
          </h1>
          <p className="text-[24px] font-normal text-indigo-100 mb-8 leading-relaxed animate-slide-up">
            Transform raw data into actionable insights that drive strategic decisions and business growth
          </p>
        </div>
        
        <Button 
          onClick={() => onScrollToSection('introduction')}
          className="bg-white text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700 px-10 py-4 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105"
        >
          Explore Data Analysis
          <ChevronDown className="ml-3 h-6 w-6 animate-bounce" />
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
