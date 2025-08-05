'use client';

import { Building2, ShoppingCart, Wrench, Globe } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: Building2,
      title: "Corporate Websites",
      description: "Enterprise-level data analytics for large organizations to track performance, customer behavior, and operational metrics.",
      features: [
        "Real-time analytics dashboards",
        "Employee performance tracking",
        "Resource optimization",
        "Predictive maintenance"
      ],
      gradient: "from-blue-500 via-blue-600 to-cyan-500",
      shadowColor: "blue"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Advanced data solutions for online retailers to enhance customer experience and boost sales through intelligent insights.",
      features: [
        "Customer behavior analysis",
        "Inventory management",
        "Recommendation engines",
        "Fraud detection"
      ],
      gradient: "from-purple-500 via-purple-600 to-pink-500",
      shadowColor: "purple"
    },
    {
      icon: Wrench,
      title: "Service-Based Websites",
      description: "Data-driven solutions for service providers to optimize operations, improve customer satisfaction, and streamline processes.",
      features: [
        "Service quality metrics",
        "Customer feedback analysis",
        "Resource allocation",
        "Performance optimization"
      ],
      gradient: "from-green-500 via-emerald-600 to-teal-500",
      shadowColor: "emerald"
    },
    {
      icon: Globe,
      title: "Portal Development",
      description: "Comprehensive data integration for web portals that serve multiple user types with personalized experiences and insights.",
      features: [
        "User segmentation",
        "Content personalization",
        "Access pattern analysis",
        "System performance monitoring"
      ],
      gradient: "from-orange-500 via-red-600 to-rose-500",
      shadowColor: "orange"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-medium text-gray-900 mb-8 tracking-tight">
            Big Data Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover how Big Data transforms different industries and business domains, 
            providing actionable insights and driving innovation across various sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group bg-white/70 backdrop-blur-xl rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border border-white/20 transform-gpu"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${useCase.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-${useCase.shadowColor}-500/50`}>
                <useCase.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl font-medium text-gray-900 mb-6 tracking-tight">
                {useCase.title}
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed font-light">
                {useCase.description}
              </p>
              
              <div className="space-y-4">
                {useCase.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-4 group/feature">
                    <div className={`w-3 h-3 bg-gradient-to-r ${useCase.gradient} rounded-full group-hover/feature:scale-150 transition-transform duration-300`}></div>
                    <span className="text-gray-700 font-light">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
