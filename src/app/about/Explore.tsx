'use client';
import React from 'react';

const exploreCards = [
    {
        title: "SDK development",
        description: "Drive Product Adoption with Developer-focused SDKs",
        cta: "Learn more",
        baseColor: "bg-[#1A202C]",
        glowColor: "rgba(56, 189, 248, 0.12)",
        iconColor: "bg-sky-500/15"
    },
    {
        title: "Cross-platform development",
        description: "Migrate apps to Flutter or React Native",
        cta: "Learn more",
        baseColor: "bg-[#241E1E]",
        glowColor: "rgba(249, 115, 22, 0.12)",
        iconColor: "bg-orange-500/15"
    },
    {
        title: "Developer resources",
        description: "Explore open-source libraries and tools",
        cta: "Explore resources",
        baseColor: "bg-[#211E2A]",
        glowColor: "rgba(168, 85, 247, 0.12)",
        iconColor: "bg-purple-500/15"
    },
    {
        title: "Developer insights",
        description: "Get inspired with the latest developer insights",
        cta: "Read blog",
        baseColor: "bg-[#1A2522]",
        glowColor: "rgba(16, 185, 129, 0.12)",
        iconColor: "bg-emerald-500/15"
    }
];

const Explore = () => {
  return (
    <section id="explore" className="relative bg-[#0a0a0a]">
      <div className="section-container py-20">
        <h2 className="text-3xl font-semibold text-center text-white">Explore Invertase</h2>
        <p className="text-center text-white/70 text-sm mt-2">Discover more about what we do, and access helpful resources.</p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreCards.map((card) => (
            <a
              key={card.title}
              href="#"
              className={`rounded-2xl p-6 ${card.baseColor} ring-1 ring-white/10 shadow-xl transition-all duration-300 ease-out hover:ring-white/20 block relative overflow-hidden group`}
            >
              {/* Background pattern and glow */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    radial-gradient(150% 150% at 100% 0%, ${card.glowColor} 0%, rgba(0,0,0,0) 50%),
                    radial-gradient(circle at center, rgba(255, 255, 255, 0.03) 1px, transparent 1.5px)
                  `,
                  backgroundSize: '100% 100%, 12px 12px',
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Translucent Icon */}
                <div className={`w-10 h-10 rounded-full ${card.iconColor} ring-1 ring-white/15 backdrop-blur-sm mb-6`} />

                <h3 className="text-white text-lg font-semibold">{card.title}</h3>

                <p className="text-white/70 text-sm mt-2 leading-relaxed">{card.description}</p>

                <div className="mt-6 inline-flex items-center text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200">
                  {card.cta}
                  <svg
                    className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Explore;