"use client";
import React, { useState, useEffect } from "react";
import { Brain } from "lucide-react";

export default function FeaturesSection() {
  const [isVisible, setIsVisible] = useState({ intro: false });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({ intro: true });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] relative overflow-hidden">
      <div className="flex justify-center items-center min-h-screen px-2 sm:px-4">
        <div
          className={`max-w-6xl w-full bg-gradient-to-r from-white/80 via-purple-50/80 to-cyan-50/80 backdrop-blur-lg rounded-3xl p-3 xs:p-4 sm:p-8 md:p-16 lg:p-20 shadow-2xl mb-4 xs:mb-8 sm:mb-16 lg:mb-24 border border-white/50 transform transition-all duration-1000 ${
            isVisible.intro
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
          data-section="intro"
        >
          <div className="flex flex-col md:flex-row items-start gap-4 xs:gap-6 md:gap-12">
            <div className="flex-shrink-0 flex justify-center md:block mb-2 xs:mb-4 md:mb-0">
              <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl animate-pulse">
                <Brain className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 text-white animate-bounce" />
              </div>
            </div>
            <div className="w-full px-4 sm:px-0">
              <h2 className="text-center md:text-left text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent mb-3 xs:mb-4 sm:mb-6 md:mb-8">
                Why Data Mining Matters Today
              </h2>
              <p className="text-center md:text-left text-base xs:text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed mb-3 xs:mb-4 sm:mb-6 animate-fade-in">
                {
                  "Data mining matters today because it enables organizations to extract valuable insights from vast amounts of data, helping them make informed decisions, improve efficiency, understand customer behavior, and gain a competitive advantage. It is widely used across industries such as healthcare, finance, retail, and marketing to detect patterns, forecast trends, reduce costs, and identify risks or fraudulent activities. In an era where data is constantly generated, data mining plays a critical role in turning raw information into strategic knowledge."
                }
              </p>
              <p className="text-center md:text-left text-base xs:text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed animate-fade-in">
                {
                  "The importance of data mining today cannot be overstated. We're living in an era where data is generated at an unprecedented scale—every click, transaction, and interaction creates valuable information that, when properly analyzed, can reveal patterns that drive innovation and competitive advantage."
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
