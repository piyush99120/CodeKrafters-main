
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(contentRef.current,
      { 
        scale: 0.8, 
        opacity: 0,
        y: 50
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(buttonsRef.current,
      { y: 30, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-[#ff3a22] via-[#bccbde] to-[#c2dde6] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={contentRef} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-gray-900">
            Bring Meaning to Language with 
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-pulse"> 
              NLP
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-[22px] font-normal text-gray-700 max-w-2xl mx-auto leading-relaxed px-4">
            Transform how you understand and process human language. 
            Start building 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              intelligent applications
            </span> that truly comprehend context, sentiment, and meaning.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 sm:pt-8">
            <Button 
              ref={el => { buttonsRef.current[0] = el; }}
              size="lg" 
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.05] bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg  hover:animate-none border-0 w-full sm:w-auto"
            >
              Start Exploring NLP
            </Button>
            <Button 
              ref={el => { buttonsRef.current[1] = el; }}
              size="lg" 
              variant="outline"
              className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.05] border-2 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
            >
              Build with Language Intelligence
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
