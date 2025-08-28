import React from 'react';

// Define types for Hero component props
interface ActionItem {
  label: string;
  href: string;
  variant: string;
}

interface HeroProps {
  title: string;
  subtitle: string;
  actions: ActionItem[];
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
}

// Hero Component
function Hero({ 
  title, 
  subtitle, 
  actions = [] as ActionItem[], 
  titleClassName = "", 
  subtitleClassName = "", 
  actionsClassName = "" 
}: HeroProps) {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-slate-900/20 to-transparent rounded-full"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      
      {/* Subtle stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Title */}
            <h1 className={`font-bold text-white leading-tight tracking-tight ${titleClassName}`}>
              <span className="bg-gradient-to-r from-blue-100 via-white to-purple-100 bg-clip-text text-transparent">
                {title}
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-gray-400 mt-6 leading-relaxed ${subtitleClassName}`}>
              {subtitle}
            </p>

            {/* Actions */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center ${actionsClassName}`}>
              {actions.map((action, index) => (
                <a
                  key={index}
                  href={action.href}
                  className="group relative w-full sm:w-48 px-8 py-4 bg-black/50 hover:bg-black/70 border border-gray-800 hover:border-blue-900/50 rounded-xl text-white font-medium transition-all duration-300 backdrop-blur-sm hover:backdrop-blur-md hover:scale-105 hover:shadow-xl hover:shadow-blue-900/20"
                >
                  <span className="relative z-10">{action.label}</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="mt-16 flex justify-center">
              <div className="w-px h-16 bg-gradient-to-b from-white/20 to-transparent"></div>
            </div>
          </div>
          
          {/* Right side - GIF display */}
          <div className="order-1 lg:order-2 hidden lg:flex self-start justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl blur-xl"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl"></div>
              <div className="relative overflow-hidden rounded-xl border border-gray-800 bg-black/70 backdrop-blur-md">
                <img 
                  src="/images/home/man.gif" 
                  alt="Animated GIF" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
    );
}

// Updated HeroDemo Component
function HeroDemo() {
  return (
    <Hero
      title="Join Our Team: Explore Exciting Careers at CodeKrafters"
      subtitle="Discover job opportunities, grow your career, and work with industry leaders. Apply now to be part of our innovative team."
      actions={[
        {
          label: "Apply",
          href: "#",
          variant: "default"
        },
        {
          label: "Explore Jobs",
          href: "/careers",
          variant: "default"
        },
        {
          label: "Join Telegram",
          href: "/careers",
          variant: "default"
        }
      ]}
      titleClassName="text-2xl md:text-7xl"
      subtitleClassName="text-lg md:text-xl max-w-3xl mx-auto"
      actionsClassName="mt-12"
    />
  );
}

export { HeroDemo };