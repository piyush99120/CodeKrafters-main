'use client';
import React from 'react';
import { Card, CardContent } from "./components/card";
import { Users, Shield, Target, TrendingUp, BarChart3 } from 'lucide-react';

const ApplicationsSection = () => {
  const applications = [
    {
      industry: "Retail",
      description: "Customer behavior analysis, inventory optimization, and sales forecasting",
      icon: Users,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      industry: "Healthcare",
      description: "Patient outcome prediction, drug discovery, and treatment optimization",
      icon: Shield,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50"
    },
    {
      industry: "Marketing",
      description: "Campaign effectiveness, customer segmentation, and ROI analysis",
      icon: Target,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50"
    },
    {
      industry: "Finance",
      description: "Risk assessment, fraud detection, and investment strategy optimization",
      icon: TrendingUp,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50"
    },
    {
      industry: "Sports Analytics",
      description: "Player performance analysis, strategy optimization, and injury prevention",
      icon: BarChart3,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section id="applications" className="py-20 px-4 bg-gradient-to-r from-indigo-50 to-purple-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-gray-900 mb-6 animate-fade-in">Real-World Applications</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8 rounded-full animate-scale-in"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <Card 
              key={app.industry} 
              className={`${app.bgColor} backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 animate-fade-in cursor-pointer group overflow-hidden`} 
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardContent className="p-8 text-center relative">
                <div className="absolute top-0 right-0 w-24 h-24 opacity-10 transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                  <app.icon className="w-full h-full" />
                </div>
                
                <div className={`w-20 h-20 bg-gradient-to-r ${app.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <app.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">{app.industry}</h3>
                <p className="text-gray-700 leading-relaxed">{app.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
