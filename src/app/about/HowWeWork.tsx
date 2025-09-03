'use client';
import React from 'react';

const howWeWorkItems = [
    {
      t: "Distributed by default",
      d: "Work from anywhere with async-first communication and trust.",
      color: "text-sky-400",
      glowColor: "rgba(56, 189, 248, 0.5)",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="h-5 w-5"
        >
          <path d="M14.5 10.5l-2.5-1.5-2.5 1.5v3l2.5 1.5 2.5-1.5v-3z" />
          <path d="M12 9l2.5 1.5M12 15v-4.5" />
          <circle cx="12" cy="12" r="5" />
          <path d="M12 7V5" />
          <circle cx="12" cy="4" r="1" />
          <path d="M12 17v2" />
          <circle cx="12" cy="20" r="1" />
          <path d="M7 12H5" />
          <circle cx="4" cy="12" r="1" />
          <path d="M17 12h2" />
          <circle cx="20" cy="12" r="1" />
          <path d="M15.536 8.464l1.414-1.414" />
          <circle cx="17.657" cy="6.343" r="1" />
          <path d="M8.464 15.536l-1.414 1.414" />
          <circle cx="6.343" cy="17.657" r="1" />
          <path d="M15.536 15.536l1.414 1.414" />
          <circle cx="17.657" cy="17.657" r="1" />
          <path d="M8.464 8.464l-1.414-1.414" />
          <circle cx="6.343" cy="6.343" r="1" />
        </svg>
      ),
    },
    {
      t: "Outcome‑oriented",
      d: "We celebrate impact, empower autonomy, and measure what matters.",
      color: "text-orange-400",
      glowColor: "rgba(251, 146, 60, 0.5)",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="h-5 w-5"
        >
          <path d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <path d="M12 3v1m0-2a2 2 0 012 2h-4a2 2 0 012-2z" />
          <circle cx="15" cy="15" r="3" />
          <path d="M17.5 12.5L20 10" />
          <path d="M19 11v-1h1" />
          <path d="M8 11.5l1.5 1.5 3-3" />
        </svg>
      ),
    },
    {
      t: "Security‑conscious",
      d: "We build with privacy in mind and ship with best practices.",
      color: "text-violet-400",
      glowColor: "rgba(167, 139, 250, 0.5)",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="h-5 w-5"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9.5 12.5l2 2 3.5-3.5" />
        </svg>
      ),
    },
    {
      t: "Sustain the community",
      d: "We invest in open source and share knowledge generously.",
      color: "text-emerald-400",
      glowColor: "rgba(52, 211, 153, 0.5)",
      icon: (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          className="h-5 w-5"
        >
          <circle cx="12" cy="6" r="3" />
          <circle cx="19" cy="16" r="3" />
          <circle cx="5" cy="16" r="3" />
          <path d="M12 9v4M17.5 14.5l-4-2.5M6.5 14.5l4-2.5" />
        </svg>
      ),
    },
  ];

const HowWeWork = () => {
    return (
        <section className="relative text-black">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#f6f6f9_0%,#eef1f6_100%)]">
          <div className="pointer-events-none absolute -top-8 left-10 h-40 w-40 rounded-full bg-slate-300/25 blur-2xl" />
          <div className="pointer-events-none absolute top-0 right-10 h-32 w-32 rounded-full bg-cyan-300/25 blur-2xl" />
        </div>
        <div className="section-container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Left copy */}
            <div>
              <h2 className="text-3xl font-semibold">How we work</h2>
              <p className="mt-3 text-gray-600 text-sm">Interested in working with us? View open positions</p>
              <a href="#careers" className="mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-orange-500 hover:text-orange-600">
                Our open positions <span>→</span>
              </a>
            </div>
            {/* Right grid */}
            <div className="lg:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    {howWeWorkItems.map((i) => (
                    <div key={i.t} className="p-0">
                        <div
                        className={`mb-4 inline-grid place-items-center h-10 w-10 rounded-full bg-gray-900 ${i.color}`}
                        style={{
                            boxShadow: `0 0 15px -2px ${i.glowColor}`,
                        }}
                        >
                        {i.icon}
                        </div>
                        <h3 className="font-semibold text-gray-900">{i.t}</h3>
                        <p className="text-gray-600 text-sm mt-2 leading-6">{i.d}</p>
                    </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HowWeWork;