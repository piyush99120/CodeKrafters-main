'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HowNLP = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stepsRef = useRef<Array<HTMLDivElement | null>>([]);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const steps = [
    {
      title: "Text Preprocessing",
      description: "Clean and normalize raw text data, removing noise and standardizing format",
      icon: "🔤",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Tokenization & Embedding",
      description: "Break text into meaningful units and convert to numerical representations",
      icon: "🧩",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Model Inference",
      description: "Process embeddings through advanced models like Transformers and BERT",
      icon: "🧠",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Output Interpretation",
      description: "Transform model outputs into actionable insights and human-readable results",
      icon: "📊",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const stepElements = stepsRef.current;
    
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
    
    stepElements.forEach((step, index) => {
      gsap.fromTo(step,
        { 
          x: index % 2 === 0 ? -80 : 80, 
          opacity: 0,
          scale: 0.8
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 ">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-medium text-gray-900 mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              How NLP Works
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-[22px] font-normal text-gray-700 max-w-3xl mx-auto px-4">
            Understanding the journey from raw text to intelligent insights through 
            a <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent font-semibold">
              systematic processing pipeline
            </span>.
          </p>
        </div>
        
        <div className="space-y-8 sm:space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={el => { stepsRef.current[index] = el; }}
              className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className="flex-1 space-y-4 text-center lg:text-left">
                <div className="flex items-center gap-4 justify-center lg:justify-start">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <div>
                    <span className={`font-semibold text-lg bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      Step {index + 1}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                  {step.description}
                </p>
              </div>
              
              <div className="flex-1 flex justify-center">
                <div className="w-72 sm:w-80 h-40 sm:h-48 bg-gradient-to-br from-white/80 to-gray-50/80 backdrop-blur-sm rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] flex items-center justify-center border border-gray-100/50">
                  <div className="text-center">
                    <div className={`text-5xl sm:text-6xl mb-2 inline-block p-4 rounded-full bg-gradient-to-br ${step.gradient} shadow-lg`}>
                      <span className="text-white">{step.icon}</span>
                    </div>
                    <p className={`font-medium bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                      {step.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowNLP;
