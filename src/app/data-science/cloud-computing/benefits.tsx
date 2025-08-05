"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Benefits() {
  const benefitsRef = useRef<HTMLDivElement>(null);

  const benefits = [
    "Reduced operational costs by up to 60%",
    "99.9% uptime guarantee with auto-scaling",
    "24/7 monitoring and instant alerts",
    "Seamless integration with existing systems",
    "Advanced backup and disaster recovery",
    "Real-time collaboration tools",
  ];

  useEffect(() => {
    gsap.fromTo(
      ".benefit-card",
      { opacity: 0, y: 60, scale: 0.9, rotate: -6 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1,
        stagger: 0.18,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
      }
    );
    gsap.fromTo(
      ".benefit-icon",
      { scale: 0.7, opacity: 0, rotate: -20 },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 0.8,
        stagger: 0.18,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 80%",
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0]">
      <section ref={benefitsRef} className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {"The Results You'll See"}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {"My cloud computing solutions deliver measurable business"}
              {"transformation. Here's what organizations typically experience"}
              {"with my expertise:"}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card bg-[#181c24]/90 border border-[#23272f] rounded-2xl p-8 shadow-2xl flex flex-col items-start text-left relative overflow-hidden backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-blue-500/30 group"
                style={{
                  boxShadow: "0 2px 16px 0 rgba(0,0,0,0.45)",
                }}
              >
                <div className="benefit-icon w-10 h-10 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-green-500 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-white text-lg font-semibold transition-colors duration-300 group-hover:text-blue-300">
                  {benefit}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-16">
            <div className="relative group">
              <div className="bg-white/90 rounded-3xl p-6 shadow-2xl border border-gray-200/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-200/40">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                  alt="Cloud computing analytics and performance metrics"
                  className="w-full h-72 object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-200/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-blue-200/40">
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <div className="text-sm text-gray-600 font-medium">
                  Uptime Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
