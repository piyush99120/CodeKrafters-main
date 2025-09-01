'use client';
import Image from 'next/image';
import { useEffect, useRef } from "react";
import { Card, CardContent } from "./ui/card";

export default function Examples() {
  const examplesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transform = "translateY(0) scale(1)";
            (entry.target as HTMLElement).style.opacity = "1";
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedElements = document.querySelectorAll(".scroll-animate");
    animatedElements.forEach((el) => {
      const element = el as HTMLElement;
      element.style.opacity = "0";
      element.style.transform = "translateY(30px) scale(0.95)";
      element.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)";
      observer.observe(element);
    });

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0]">
      <section ref={examplesRef} className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-[42px] font-medium text-gray-900 mb-6">
            Interactive
            <span className="bg-gradient-to-r from-cyan-600 to-green-600 bg-clip-text text-transparent"> Examples</span>
          </h2>
          <p className="text-[22px] font-normal text-gray-700 max-w-3xl mx-auto">
            See what modern web development can achieve with cutting-edge technologies and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="scroll-animate bg-gray-900 border border-gray-800 shadow-2xl overflow-hidden group hover:shadow-purple-500/20 transition-all duration-500 rounded-2xl">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
                <div className="flex items-center space-x-2 mb-4 relative z-10">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                  <span className="text-gray-300 text-sm ml-4">Dashboard Preview</span>
                </div>
                <div className="relative w-full h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                    alt="Code Development"
                    fill
                    className="object-cover rounded-lg group-hover:scale-110 transition-transform duration-700 relative z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="scroll-animate">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Modern Development Stack</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 transition-all duration-300 group">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="group-hover:text-gray-900 transition-colors">React & Next.js for lightning-fast performance</span>
                </li>
                <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 transition-all duration-300 group">
                  <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="group-hover:text-gray-900 transition-colors">Tailwind CSS for beautiful, responsive design</span>
                </li>
                <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 transition-all duration-300 group">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="group-hover:text-gray-900 transition-colors">TypeScript for robust, maintainable code</span>
                </li>
                <li className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/50 transition-all duration-300 group">
                  <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="group-hover:text-gray-900 transition-colors">Modern animations and micro-interactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}