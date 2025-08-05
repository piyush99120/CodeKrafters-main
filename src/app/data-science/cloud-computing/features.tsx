"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Award,
  TrendingUp,
  Star,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate feature cards
    gsap.fromTo(
      ".feature-card",
      { opacity: 0, y: 40, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.18,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
    // Animate icons with a pop
    gsap.fromTo(
      ".feature-icon",
      { scale: 0.7, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        stagger: 0.18,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const stats = [
    {
      icon: <Users className="w-7 h-7" />,
      number: "10,000+",
      label: "Happy Clients",
    },
    { icon: <Award className="w-7 h-7" />, number: "99.9%", label: "Uptime" },
    {
      icon: <TrendingUp className="w-7 h-7" />,
      number: "60%",
      label: "Cost Reduction",
    },
    {
      icon: <Star className="w-7 h-7" />,
      number: "5.0",
      label: "Client Rating",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-7 h-7 text-white" />,
      title: "Lightning Fast Performance",
      description:
        "Applications run at peak performance with my optimized cloud infrastructure that delivers results in milliseconds.",
      bg: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="w-7 h-7 text-white" />,
      title: "Uncompromising Security",
      description:
        "I protect your data with military-grade encryption and advanced security protocols to keep your business safe.",
      bg: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-7 h-7 text-white" />,
      title: "Global Reach",
      description:
        "Deploy solutions worldwide with blazing-fast performance, ensuring access from anywhere on the planet.",
      bg: "from-indigo-500 to-blue-600",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#f0f0f0] py-24 px-6 lg:px-12"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="animated-card backdrop-blur-md bg-white/60 border border-white/30 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center mb-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Features Section */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Why Choose My Cloud Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-14">
            Discover how I revolutionize businesses with unprecedented
            scalability, security, and global reach through innovative cloud
            computing.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-[#181c24]/90 border border-[#23272f] rounded-2xl p-8 shadow-2xl flex flex-col items-start text-left relative overflow-hidden backdrop-blur-md"
                style={{
                  boxShadow: "0 2px 16px 0 rgba(0,0,0,0.45)",
                }}
              >
                <div
                  className={`feature-icon w-12 h-12 mb-5 flex items-center justify-center rounded-full bg-gradient-to-br ${feature.bg} shadow-lg`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
