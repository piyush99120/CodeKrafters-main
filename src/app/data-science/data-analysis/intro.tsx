'use client';
import React from 'react';
import { Card, CardContent } from "./components/card";
import { BarChart3, TrendingUp, Database } from 'lucide-react';

const IntroductionSection = () => {
  return (
    <section id="introduction" className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-gray-900 mb-6 animate-fade-in">What is Data Analysis?</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 rounded-full animate-scale-in"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105">
            <CardContent className="p-12">
              <p className="text-[22px] font-normal text-gray-700 leading-relaxed">
                {"Data analysis is the systematic process of examining, cleaning, transforming, and modeling data "}
                {"to discover useful information, inform conclusions, and support decision-making. In today's "}
                {"data-driven world, it serves as the backbone of strategic planning, operational efficiency, "}
                {"and competitive advantage across all industries."}
              </p>
            </CardContent>
          </Card>
          
          <div className="relative">
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-6 rounded-2xl text-white transform hover:scale-110 transition-all duration-300 animate-float">
                <BarChart3 className="h-12 w-12 mb-4" />
                <p className="font-semibold">Analyze</p>
              </div>
              <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-6 rounded-2xl text-white transform hover:scale-110 transition-all duration-300 animate-float animation-delay-1000">
                <TrendingUp className="h-12 w-12 mb-4" />
                <p className="font-semibold">Predict</p>
              </div>
              <div className="bg-gradient-to-br from-pink-400 to-pink-600 p-6 rounded-2xl text-white transform hover:scale-110 transition-all duration-300 animate-float animation-delay-2000">
                <Database className="h-12 w-12 mb-4" />
                <p className="font-semibold">Organize</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
