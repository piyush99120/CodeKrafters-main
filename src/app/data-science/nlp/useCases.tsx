"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";

const UseCases = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const [sentiment, setSentiment] = useState("Analyzing...");

  const demos = [
    {
      title: "Text Classifier",
      description: "Categorize text into predefined classes",
      gradient: "from-purple-500 to-pink-500",
      component: (
        <div className="space-y-4">
          <div className="p-3 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-600 font-medium">Input Text:</p>
            <p className="text-gray-800">{'"This movie was absolutely fantastic!"'}</p>
          </div>
          <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 animate-pulse">
            <p className="text-sm text-green-600 font-medium">Classification:</p>
            <p className="font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Entertainment → Positive Review
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Real-time Translation",
      description: "Instant language translation",
      gradient: "from-blue-500 to-cyan-500",
      component: (
        <div className="space-y-4">
          <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-600 font-medium">English:</p>
            <p className="text-blue-800">{'"Hello, how are you today?"'}</p>
          </div>
          <div className="p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 ">
            <p className="text-sm text-purple-600 font-medium">Spanish:</p>
            <p className="text-purple-800">{'"Hola, ¿cómo estás hoy?"'}</p>
          </div>
        </div>
      )
    },
    {
      title: "Sentiment Meter",
      description: "Measure emotional tone in text",
      gradient: "from-orange-500 to-red-500",
      component: (
        <div className="space-y-4">
          <Button 
            onClick={() => setSentiment(sentiment === "Analyzing..." ? "😊 Positive (85%)" : "Analyzing...")}
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-300 hover:scale-105"
          >
            Analyze Sentiment
          </Button>
          <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-yellow-600 font-medium">Result:</p>
            <p className="font-semibold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              {sentiment}
            </p>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current;
    
    gsap.fromTo(titleRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );
    
    gsap.fromTo(cards,
      { 
        rotationY: 15, 
        scale: 0.8, 
        opacity: 0,
        y: 50
      },
      {
        rotationY: 0,
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "back.out(1.7)",
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
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-gray-900 mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Live Use Cases
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-[22px] font-normal text-gray-700 max-w-3xl mx-auto px-4">
            Interactive demonstrations of 
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
              NLP capabilities in action
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {demos.map((demo, index) => (
            <div
              key={index}
              ref={el => { cardsRef.current[index] = el; }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] group border border-gray-100/50"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${demo.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-white text-xl">✨</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 bg-gradient-to-r ${demo.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                {demo.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {demo.description}
              </p>
              <div className="group-hover:scale-105 transition-transform duration-300">
                {demo.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
