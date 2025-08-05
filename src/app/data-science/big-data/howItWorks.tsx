'use client';

import { Database, Cloud, BarChart3, Zap } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Database,
      title: "Data Collection",
      description: "Gather data from multiple sources including databases, APIs, sensors, social media, and user interactions.",
      color: "bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500",
      shadowColor: "blue"
    },
    {
      icon: Cloud,
      title: "Data Storage",
      description: "Store massive datasets in scalable cloud infrastructure with distributed storage systems and data lakes.",
      color: "bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-500",
      shadowColor: "purple"
    },
    {
      icon: BarChart3,
      title: "Data Processing",
      description: "Process and analyze data using advanced algorithms, machine learning, and statistical methods.",
      color: "bg-gradient-to-br from-indigo-500 via-indigo-600 to-purple-500",
      shadowColor: "indigo"
    },
    {
      icon: Zap,
      title: "Insights & Action",
      description: "Generate actionable insights through visualization, reporting, and automated decision-making systems.",
      color: "bg-gradient-to-br from-emerald-500 via-green-600 to-teal-500",
      shadowColor: "emerald"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-medium text-gray-900 mb-8 tracking-tight">
            How Big Data Works
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Understanding the Big Data pipeline from collection to actionable insights 
            that drive business transformation and innovation.
          </p>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center justify-between mb-20">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative group">
              <div className={`w-24 h-24 ${step.color} rounded-3xl flex items-center justify-center mb-6 shadow-xl hover:scale-110 hover:rotate-6 transition-all duration-500 hover:shadow-${step.shadowColor}-500/50`}>
                <step.icon className="w-12 h-12 text-white" />
              </div>
              <div className="text-center max-w-xs">
                <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-tight">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed font-light">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-full w-32 h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 hidden lg:block rounded-full"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile view */}
        <div className="md:hidden space-y-10 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6 group">
              <div className={`w-20 h-20 ${step.color} rounded-3xl flex items-center justify-center flex-shrink-0 shadow-xl group-hover:scale-110 transition-all duration-500`}>
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4 tracking-tight">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced technology showcase */}
        <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/20">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1000&q=80" 
                alt="Data Visualization Dashboard" 
                className="relative rounded-3xl shadow-2xl w-full h-80 object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div>
              <h3 className="text-3xl font-medium text-gray-900 mb-8 tracking-tight">
                Advanced Technologies
              </h3>
              <div className="space-y-8">
                <div className="group">
                  <h4 className="text-xl font-medium text-gray-800 mb-3 tracking-tight">Machine Learning & AI</h4>
                  <p className="text-gray-600 font-light leading-relaxed">Leverage artificial intelligence to uncover patterns and make predictions from complex datasets.</p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-medium text-gray-800 mb-3 tracking-tight">Real-time Analytics</h4>
                  <p className="text-gray-600 font-light leading-relaxed">Process and analyze data streams in real-time for immediate insights and rapid decision-making.</p>
                </div>
                <div className="group">
                  <h4 className="text-xl font-medium text-gray-800 mb-3 tracking-tight">Cloud Computing</h4>
                  <p className="text-gray-600 font-light leading-relaxed">Scalable cloud infrastructure that grows with your data needs and processing requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
