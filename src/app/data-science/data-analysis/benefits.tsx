'use client';
import React from 'react';
import { Card, CardContent } from "./components/card";
import { CheckCircle, TrendingUp, Users, Shield, Target, DollarSign } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    { text: "Improved decision-making based on factual insights", icon: TrendingUp },
    { text: "Enhanced operational efficiency and cost reduction", icon: Target },
    { text: "Better understanding of customer needs and behavior", icon: Users },
    { text: "Competitive advantage through data-driven strategies", icon: Shield },
    { text: "Risk mitigation and opportunity identification", icon: CheckCircle },
    { text: "Increased revenue and profitability", icon: DollarSign }
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-gray-900 mb-6 animate-fade-in">Benefits of Data Analysis</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-green-500 to-teal-500 mx-auto mb-8 rounded-full animate-scale-in"></div>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.text} 
                  className={`flex items-center space-x-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer`} 
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium group-hover:text-green-700 transition-colors duration-300">{benefit.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BenefitsSection;
