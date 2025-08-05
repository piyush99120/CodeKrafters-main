'use client';
import React from 'react';
import { Card, CardContent } from "./components/card";
import { BarChart3, TrendingUp, Target, Brain } from 'lucide-react';

const AnalysisTypesSection = () => {
  const analysisTypes = [
    {
      title: "Descriptive Analysis",
      description: "Summarizes historical data to understand what has happened in the past.",
      icon: BarChart3,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50"
    },
    {
      title: "Diagnostic Analysis", 
      description: "Examines data to understand why something happened by identifying patterns and relationships.",
      icon: Target,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "Predictive Analysis",
      description: "Uses statistical models and machine learning to forecast future trends and outcomes.",
      icon: TrendingUp,
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Prescriptive Analysis",
      description: "Recommends actions to achieve desired outcomes based on predictive insights.",
      icon: Brain,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50"
    }
  ];

  return (
    <section id="types" className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-gray-900 mb-6 animate-fade-in">Types of Data Analysis</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full animate-scale-in"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {analysisTypes.map((type, index) => (
            <Card 
              key={type.title} 
              className={`${type.bgColor} backdrop-blur-sm shadow-xl border-0 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 animate-fade-in cursor-pointer group`} 
              style={{animationDelay: `${index * 200}ms`}}
            >
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                  <type.icon className="w-full h-full" />
                </div>
                
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <type.icon className="h-10 w-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">{type.title}</h3>
                <p className="text-gray-700 leading-relaxed">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalysisTypesSection;
