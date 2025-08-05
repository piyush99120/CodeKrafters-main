'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whyMattersRef = useRef<HTMLDivElement>(null);
  const howWorksRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enhanced hero animation with bounce and scale
    gsap.fromTo(
      heroRef.current?.children || [],
      { opacity: 0, y: 80, scale: 0.8, rotation: -5 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        rotation: 0,
        duration: 1.5, 
        stagger: 0.3,
        ease: "back.out(1.7)"
      }
    );

    // Enhanced why matters section with wave effect
    gsap.fromTo(
      whyMattersRef.current?.children || [],
      { opacity: 0, y: 50, x: -30, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: whyMattersRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    // Enhanced how it works cards with 3D rotation
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
        }
      }
    );

    // Enhanced examples section with magnetic effect
    gsap.fromTo(
      ".example-chart",
      { opacity: 0, scale: 0.6, rotation: 15, y: 40 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: examplesRef.current,
          start: "top 70%",
        }
      }
    );

    // Enhanced CTA section with pulsing effect
    gsap.fromTo(
      ctaRef.current?.children || [],
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        }
      }
    );

    // Add floating animation to decorative elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      <section className="relative min-h-screen flex items-center px-6 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div ref={heroRef} className="space-y-8">
              <h1 className="text-[42px] lg:text-[52px] font-medium leading-tight text-gray-400">
                Unleash the Power of{' '}
                <span className="bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                  Data Visualization
                </span>
                <br />
                With{' '}
                <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-pulse">
                  codeKrafter
                </span>
              </h1>
              <p className="text-[25px] font-normal text-gray-500 leading-relaxed">
                Transform your complex datasets into compelling visual stories that drive decision-making and unlock hidden insights within your organization. Understand what your data is really telling you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-emerald-500 via-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:shadow-2xl transform hover:scale-110 hover:rotate-1 transition-all duration-500 animate-pulse">
                  See My Work
                </button>
                <button className="border-2 border-gradient-to-r from-pink-500 to-violet-500 text-gray-700 px-8 py-4 rounded-lg font-medium hover:border-purple-500 hover:bg-gradient-to-r hover:from-pink-50 hover:to-violet-50 hover:scale-105 transition-all duration-500">
                  Learn My Process
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" 
                  alt="My data visualization dashboard" 
                  className="w-full h-80 object-cover rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-500"
                />
              </div>
              <div className="floating-element absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-30 animate-bounce"></div>
              <div className="floating-element absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}