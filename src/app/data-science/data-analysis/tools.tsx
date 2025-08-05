'use client';
import React from 'react';
import { Card, CardContent } from "./components/card";
import { Code, Database, BarChart3, Brain, TrendingUp } from 'lucide-react';

const ToolsSection = () => {
  const toolCategories = [
    { name: "Excel", icon: BarChart3, color: "from-green-500 to-emerald-600" },
    { name: "SQL", icon: Database, color: "from-blue-500 to-cyan-600" },
    { name: "Python", icon: Code, color: "from-yellow-500 to-orange-600" },
    { name: "R", icon: TrendingUp, color: "from-purple-500 to-violet-600" },
    { name: "Power BI", icon: BarChart3, color: "from-red-500 to-pink-600" },
    { name: "Tableau", icon: Brain, color: "from-indigo-500 to-blue-600" },
    { name: "Analytics", icon: TrendingUp, color: "from-teal-500 to-green-600" },
    { name: "Apache Spark", icon: Database, color: "from-orange-500 to-red-600" },
    { name: "SAS", icon: Code, color: "from-pink-500 to-rose-600" },
    { name: "SPSS", icon: BarChart3, color: "from-cyan-500 to-blue-600" }
  ];

  return (
    <section id="tools" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-bold text-gray-900 mb-6 animate-fade-in">Tools & Technologies</h2>
          <div className="w-32 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mb-8 rounded-full animate-scale-in"></div>
        </div>
        
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardContent className="p-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {toolCategories.map((tool, index) => (
                <div 
                  key={tool.name} 
                  className={`bg-gradient-to-br ${tool.color} p-6 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-110 animate-fade-in cursor-pointer group`} 
                  style={{animationDelay: `${index * 100}ms`}}
                >
                  <tool.icon className="h-8 w-8 mx-auto mb-3 text-white group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-sm font-bold text-white">{tool.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ToolsSection;
