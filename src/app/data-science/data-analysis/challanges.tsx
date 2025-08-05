'use client';
import React from 'react';
import { Card, CardContent } from "./components/card";
import { AlertTriangle, Shield, Wrench, Lock, Database, Zap } from 'lucide-react';

const ChallengesSection = () => {
  const challenges = [
    { text: "Data quality and accuracy issues", icon: Database },
    { text: "Biased analysis and interpretation", icon: AlertTriangle },
    { text: "Complex tool requirements and learning curves", icon: Wrench },
    { text: "Privacy and security concerns", icon: Lock },
    { text: "Integration of multiple data sources", icon: Shield },
    { text: "Keeping up with rapidly evolving technologies", icon: Zap }
  ];

  return (
    <section id="challenges" className="py-20 px-4 bg-gradient-to-r from-orange-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-gray-900 mb-6 animate-fade-in">Challenges in Data Analysis</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-yellow-500 to-red-500 mx-auto mb-8 rounded-full animate-scale-in"></div>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-12">
            <div className="grid md:grid-cols-2 gap-8">
              {challenges.map((challenge, index) => (
                <div 
                  key={challenge.text} 
                  className={`flex items-center space-x-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 transition-all duration-300 hover:scale-105 animate-fade-in group cursor-pointer`} 
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <challenge.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium group-hover:text-red-700 transition-colors duration-300">{challenge.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ChallengesSection;
