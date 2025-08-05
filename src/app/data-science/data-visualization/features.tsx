'use client'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BarChart3, TrendingUp, Eye, Target, Database, Filter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whyMattersRef = useRef<HTMLDivElement>(null);
  const howWorksRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

  const benefits = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Lightning-Fast Insights",
      description: "Transform your complex data into crystal-clear, actionable insights within seconds"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Compelling Data Stories",
      description: "Craft narratives with your data that captivate and resonate with any audience"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Hidden Pattern Discovery",
      description: "Reveal trends and patterns in your data that would be impossible to spot otherwise"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Interactive Dashboards",
      description: "Build interactive dashboards so you can explore your data and insights in real time"
    },
    {
      icon: <Filter className="w-8 h-8" />,
      title: "Custom Visual Solutions",
      description: "Design tailored visualizations to fit your unique business needs and goals"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Seamless Data Integration",
      description: "Connect and unify data from multiple sources for a complete analytical picture"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 overflow-hidden">
        <section className="py-10 px-4 sm:px-4 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div ref={whyMattersRef} className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight drop-shadow">
                Why Data Visualization Matters
              </h2>
              <p className="text-lg sm:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {"In today's data-driven world, don't just create charts — transform raw information into meaningful visual insights"}
                {"that drive business success and spark innovation. Here's how we can make a difference."}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="relative group bg-white/80 rounded-3xl shadow-2xl p-10 flex flex-col items-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-100"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-emerald-400 to-blue-500 rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="mt-10 text-center">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2 bg-gradient-to-r from-gray-900 to-purple-700 bg-clip-text text-transparent">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}