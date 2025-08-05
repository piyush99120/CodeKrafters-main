"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BarChart3, Database, Filter, Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Examples() {
  const howWorksRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      icon: <Database className="w-10 h-10" />,
      title: "Collect Data",
      description:
        "Gather information from all your sources and databases to build comprehensive datasets.",
    },
    {
      icon: <Filter className="w-10 h-10" />,
      title: "Clean & Process",
      description:
        "Refine your data with precision to ensure maximum accuracy and reliability.",
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: "Create Visuals",
      description:
        "Transform your processed data into stunning charts, graphs, and interactive visualizations.",
    },
    {
      icon: <Eye className="w-10 h-10" />,
      title: "Deliver Insights",
      description:
        "Extract valuable insights and help you make confident data-driven decisions.",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".work-card",
      { opacity: 0, y: 60, scale: 0.8, rotationY: 45, rotationX: 15 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationY: 0,
        rotationX: 0,
        duration: 1,
        stagger: 0.25,
        ease: "power3.out",
        scrollTrigger: {
          trigger: howWorksRef.current,
          start: "top 75%",
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={howWorksRef}
      className=" min-h-screen bg-gradient-to-tr from-white via-blue-50 to-purple-100 overflow-hidden flex items-center"
    >
      <div className="w-full max-w-7xl mx-auto py-20 px-4 sm:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14 gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight drop-shadow">
              How Magic Works
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed mx-auto md:mx-0">
              Streamlined process transforms your raw data into powerful visual
              insights through four carefully crafted stages.
            </p>
          </div>
        </div>
        {/* Add group wrapper for hover effect */}
        <div className="group flex flex-col lg:flex-row gap-10 items-center justify-center relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="work-card flex-1 max-w-xs bg-white/70 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-gradient-to-br hover:from-white/90 hover:to-cyan-50/80 transition-all duration-700 shadow-lg hover:shadow-2xl group hover:scale-105 border border-blue-100"
            >
              <div className="flex justify-center mb-5">
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-400 to-emerald-400 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-3xl">{step.icon}</span>
                </span>
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full text-white flex items-center justify-center mx-auto mb-4 text-base font-bold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-blue-700 bg-clip-text text-transparent mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
          {/* Hover bar below cards, visible on group hover */}
          <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-8 w-full flex justify-center">
            <span className="hidden md:inline-block group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-emerald-400 group-hover:h-2 group-hover:w-32 group-hover:rounded-full group-hover:opacity-60 transition-all duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
