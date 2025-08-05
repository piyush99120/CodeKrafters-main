'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const buttonRef = useRef(null);
  const gradientRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo(textRef.current, 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    )
    .fromTo(imageRef.current,
      { x: 100, opacity: 0, scale: 0.8 },
      { x: 0, opacity: 1, scale: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.3"
    );

    // Floating animation for the gradient text
    gsap.to(gradientRef.current, {
      y: -10,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div ref={textRef} className="space-y-6 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-medium leading-tight text-gray-400">
            Understanding Language Through Machines: 
            <span 
              ref={gradientRef}
              className="inline-block bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse"
            > 
              The Power of NLP
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-[22px] font-normal text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Natural Language Processing bridges the gap between human communication and machine understanding, 
            enabling computers to read, analyze, and generate human language with 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              remarkable precision
            </span>.
          </p>
          <div ref={buttonRef}>
            <Button 
              size="lg" 
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05] transform px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-0  hover:animate-none"
            >
              Explore NLP Technology
            </Button>
          </div>
        </div>
        
        <div ref={imageRef} className="flex justify-center">
          <div className="w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-br from-cyan-100 via-purple-100 to-pink-100 rounded-2xl shadow-2xl flex items-center justify-center hover:shadow-purple-300/50 transition-all duration-500 hover:scale-105 border border-purple-200">
            <div className="text-center space-y-4">
              <div className="w-28 sm:w-32 h-28 sm:h-32 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full mx-auto flex items-center justify-center shadow-lg animate-pulse">
                <svg className="w-12 sm:w-16 h-12 sm:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <p className="text-gray-700 font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI Language Processing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;