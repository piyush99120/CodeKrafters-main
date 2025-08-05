'use client';
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

const Cta = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ctaRef.current) {
      ctaRef.current.style.opacity = "0";
      ctaRef.current.style.transform = "translateY(40px)";
      ctaRef.current.style.transition = "all 1s cubic-bezier(0.4, 0, 0.2, 1)";
      setTimeout(() => {
        if (ctaRef.current) {
          ctaRef.current.style.opacity = "1";
          ctaRef.current.style.transform = "translateY(0)";
        }
      }, 100);
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[60vh] bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0]">
      <section ref={ctaRef} className="w-full flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl backdrop-blur-xl rounded-3xl p-8 sm:p-12 shadow-2xl mx-auto relative overflow-hidden border border-purple-100">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 animate-pulse"></div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-[42px] font-medium text-gray-900 mb-6">
              Ready to Launch Your
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Website?</span>
            </h2>
            <p className="text-lg sm:text-[22px] font-normal text-gray-700 mb-8 max-w-2xl mx-auto">
              Transform your vision into a stunning digital experience that captivates users and drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group"
              >
                Explore Web Services
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-300 text-purple-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:scale-105 hover:border-purple-500"
              >
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;