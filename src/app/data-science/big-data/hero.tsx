'use client';

import { ChevronDown, Sparkles, Database, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80" 
          alt="Circuit board background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Data Particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-500 opacity-40" />
        <div className="absolute bottom-40 left-16 w-4 h-4 bg-blue-400 rounded-full animate-ping delay-1000 opacity-50" />
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-indigo-400 rounded-full animate-pulse delay-700 opacity-60" />
        
        {/* Geometric Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse delay-1000" />
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse delay-500" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left lg:text-left space-y-8">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-400 leading-tight tracking-tight">
                <span className="block animate-slide-up">Transform</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-slide-up delay-200">
                  Your Data
                </span>
                <span className="block text-4xl md:text-5xl text-gray-400 font-light animate-slide-up delay-400">
                  Into Intelligence
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl animate-fade-in delay-600">
                Harness the power of <span className="text-cyan-400 font-semibold">Big Data</span> to unlock 
                insights, drive innovation, and transform your business operations with cutting-edge analytics.
              </p>
              
              {/* Feature Icons */}
              <div className="flex flex-wrap gap-6 animate-fade-in delay-800">
                <div className="flex items-center gap-2 text-cyan-400">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-white">Real-time Analytics</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Zap className="w-5 h-5" />
                  <span className="text-white">Lightning Fast</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Database className="w-5 h-5" />
                  <span className="text-white">Scalable Solutions</span>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-1000">
                <Button 
                  size="lg" 
                  className="group bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden"
                  onClick={scrollToAbout}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Now
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative animate-fade-in delay-1200">
              <div className="relative">
                {/* Central Data Visualization */}
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
                  <div className="absolute inset-4 bg-gradient-to-br from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-full animate-spin-slow" />
                  <div className="absolute inset-8 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-sm border border-white/20" />
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Database className="w-16 h-16 text-cyan-400 animate-pulse" />
                  </div>
                  
                  {/* Orbiting Elements */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-cyan-400/20 rounded-lg backdrop-blur-sm border border-cyan-400/30 flex items-center justify-center animate-bounce">
                    <TrendingUp className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-400/20 rounded-lg backdrop-blur-sm border border-purple-400/30 flex items-center justify-center animate-bounce delay-500">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" onClick={scrollToAbout}>
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
            <ChevronDown className="w-6 h-6 text-white group-hover:text-cyan-400 transition-colors" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
