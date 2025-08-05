'use client';
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WhyNLP = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<Array<HTMLDivElement | null>>([]);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const benefits = [
    {
      icon: "🎤",
      title: "Voice Assistants",
      description: "Enable natural conversations with AI-powered voice interfaces",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "💭",
      title: "Sentiment Analysis",
      description: "Understand emotions and opinions in text data at scale",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📄",
      title: "Document Summarization",
      description: "Extract key insights from lengthy documents automatically",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "🌍",
      title: "Machine Translation",
      description: "Break language barriers with real-time translation",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: "📧",
      title: "Email Classification",
      description: "Organize and prioritize communications intelligently",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  useEffect(() => {
    const items = itemsRef.current;
    
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
    
    gsap.fromTo(items,
      { y: 60, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
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
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Why NLP Matters
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-[22px] font-normal text-gray-700 max-w-3xl mx-auto px-4">
            Natural Language Processing transforms how we interact with technology, 
            making human-computer communication more 
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
              intuitive and powerful
            </span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              ref={el => {
                itemsRef.current[index] = el;
              }}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.05] group border border-gray-100/50"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${benefit.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <h3 className={`text-xl font-semibold mb-3 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent`}>
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNLP;
