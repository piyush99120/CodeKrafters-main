"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    gsap.from(".hero-text > *", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Glow Shapes */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-purple-300 opacity-20 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-72 h-72 bg-blue-300 opacity-30 blur-2xl rounded-full z-0" />

      <section className="relative z-10 px-6 lg:px-8 py-60">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-20">
          {/* Left: Text Content */}
          <div className="hero-text space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-600 leading-tight">
              Supercharge Your Workflow with
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Cloud-Based Tools
              </span>
            </h1>

            <p className="text-lg text-gray-400 max-w-xl">
              Launch scalable cloud systems that empower your business to work
              smarter, grow faster, and stay secure — all with modern
              infrastructure.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md font-medium hover:scale-105 transition duration-300 shadow-md">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-md bg-white/50 backdrop-blur hover:border-blue-500 hover:text-blue-600 transition duration-300">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Right: Image Content */}
          <div className="relative group">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-xl border border-gray-200 bg-white/70 backdrop-blur-lg">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                alt="Cloud dashboard preview"
                className="w-full h-80 object-cover rounded-3xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Glowing blob behind image */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 opacity-30 rounded-full blur-2xl z-0 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-pink-300 to-purple-500 opacity-30 rounded-full blur-2xl z-0 animate-bounce" />
          </div>
        </div>
      </section>
    </div>
  );
}
