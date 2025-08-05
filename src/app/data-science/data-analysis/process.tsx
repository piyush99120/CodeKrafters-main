'use client';
import React from 'react';
import { Card, CardContent } from "./components/card";
import { CheckCircle } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    { title: "Data Collection", description: "Gathering relevant data from various sources", color: "from-blue-500 to-cyan-500" },
    { title: "Data Cleaning", description: "Removing inconsistencies and preparing data for analysis", color: "from-green-500 to-emerald-500" },
    { title: "Exploratory Data Analysis", description: "Understanding data patterns and relationships", color: "from-purple-500 to-violet-500" },
    { title: "Visualization & Interpretation", description: "Creating visual representations and deriving insights", color: "from-orange-500 to-red-500" },
    { title: "Reporting Insights", description: "Communicating findings to stakeholders", color: "from-pink-500 to-rose-500" }
  ];

  return (
    <section id="process" className="py-20 px-4 bg-gradient-to-r from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-gray-900 mb-6 animate-fade-in">Data Analysis Process</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 rounded-full animate-scale-in"></div>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
          <CardContent className="p-12">
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <div 
                  key={step.title} 
                  className="flex items-center space-x-6 group hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 p-6 rounded-2xl transition-all duration-500 hover:scale-105 animate-slide-up"
                  style={{animationDelay: `${index * 150}ms`}}
                >
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-all duration-300`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">{step.title}</h3>
                    <p className="text-gray-700 text-lg">{step.description}</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProcessSection;
