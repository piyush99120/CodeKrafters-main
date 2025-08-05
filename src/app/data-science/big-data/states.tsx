'use client';

import { Database, Cloud, BarChart3, Zap } from "lucide-react";

const Stats = () => {
  const stats = [
    {
      icon: Database,
      number: "2.5",
      unit: "Quintillion",
      label: "Bytes of data created daily",
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      shadowColor: "blue"
    },
    {
      icon: BarChart3,
      number: "90%",
      unit: "",
      label: "Of world's data created in last 2 years",
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      shadowColor: "purple"
    },
    {
      icon: Cloud,
      number: "163",
      unit: "Zettabytes",
      label: "Expected global data by 2025",
      gradient: "from-indigo-500 via-indigo-600 to-purple-500",
      shadowColor: "indigo"
    },
    {
      icon: Zap,
      number: "23%",
      unit: "",
      label: "Increase in business productivity",
      gradient: "from-emerald-500 via-green-600 to-teal-500",
      shadowColor: "emerald"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-medium text-gray-900 mb-8 tracking-tight">
            Big Data by the Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            The exponential growth of data presents unprecedented opportunities 
            for businesses to innovate and gain competitive advantages.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 group border border-white/20 transform-gpu"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl group-hover:shadow-${stat.shadowColor}-500/50`}>
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900 tracking-tight">{stat.number}</span>
                {stat.unit && <span className="text-lg text-gray-600 ml-2 font-light">{stat.unit}</span>}
              </div>
              <p className="text-gray-600 leading-relaxed font-light">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Enhanced call to action */}
        <div className="bg-gradient-to-tr from-[#ff3a22] via-[#bccbde] to-[#c2dde6] rounded-3xl p-10 md:p-16 text-center shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-medium  mb-8 tracking-tight" style={{ color: "#6153F0" }}>
              Ready to Harness the Power of Big Data?
            </h3>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed font-light"  style={{ color: "#364153" }}>
              {"Transform your business with intelligent data solutions that drive growth, "}
              {"optimize operations, and create lasting competitive advantages in today's data-driven world."}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-white  px-10 py-5 rounded-2xl font-medium hover:bg-gray-50 transition-all duration-500 hover:scale-110 shadow-xl hover:shadow-2xl transform-gpu"style={{ color: "#6153F0" }}>
                Get Started Today
              </button>
              <button className="border-2 border-white px-10 py-5 rounded-2xl font-medium hover:bg-white hover:text-blue-600 transition-all duration-500 hover:scale-110 transform-gpu"style={{ color: "#6153F0" }}>
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
