"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import dynamic from 'next/dynamic';
import AnimatedScrollContainer from "@/components/AnimatedScrollContainer";

// Dynamically import heavy components with no SSR
const LazyInfiniteCarousel = dynamic(
  () => import('@/components/mobile'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-64 bg-[#1B2A36]/50 rounded-xl flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }
);

const LazyPortfolioGrid = dynamic(
  () => import('@/app/digital-marketing/portfolio/demo'),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full h-64 bg-[#1B2A36]/50 rounded-xl flex items-center justify-center">
        <div className="animate-pulse">Loading portfolio...</div>
      </div>
    )
  }
);

const serviceCategories = [
  {
    id: 1,
    title: "Mobile App Development",
    description:
      "Dedicated software engineering teams that include technical rising stars customer expectations and accelerate your growth.",
    details: [
      {
        title: "Android Apps",
        description:
          "Custom Android app development for scalable, high-performance mobile solutions. Boost your business with user-friendly, feature-rich Android applications tailored to your needs.",
      },
      {
        title: "IOS Apps",
        description:
          "Professional iOS app development for seamless, secure, and engaging experiences on iPhone and iPad. Enhance your brand with top-rated iOS mobile applications.",
      },
      {
        title: "Hybrid Apps",
        description:
          "Cross-platform hybrid app development using the latest frameworks. Reach both Android and iOS users with cost-effective, high-quality hybrid mobile apps.",
      },
      {
        title: "Progressive Apps",
        description:
          "Progressive Web App (PWA) development for fast, reliable, and engaging mobile experiences. Increase conversions with installable, offline-capable web apps.",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "Streamline your software engineering to drive greater efficiency and create resilience across your products and platforms.",
    details: [
      {
        title: "Corporate Website",
        description:
          "Professional corporate website development to establish a strong online presence, enhance brand credibility, and engage clients with a modern, responsive design optimized for search engines.",
      },
      {
        title: "E-commerce Website",
        description:
          "Custom e-commerce website solutions for seamless online shopping experiences, secure payment integration, and scalable platforms designed to boost sales and improve SEO rankings.",
      },
      {
        title: "Service Website",
        description:
          "Tailored service website development to showcase your offerings, attract new customers, and drive conversions with user-friendly layouts and SEO-focused content.",
      },
      {
        title: "Portal Development",
        description:
          "Robust portal development for businesses and organizations, enabling efficient information management, user collaboration, and secure access with SEO best practices.",
      },
    ],
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Expert advice and strategic planning to help your business navigate complex challenges and achieve sustainable growth.",
    details: [
      {
        title: "Dharma ERP",
        description:
          "Comprehensive ERP software for businesses to streamline operations, manage resources, and drive digital transformation. Boost productivity and efficiency with our scalable Dharma ERP solutions.",
      },
      {
        title: "CRM",
        description:
          "Advanced CRM development for effective customer relationship management, sales automation, and improved client engagement. Enhance your business growth with our custom CRM solutions.",
      },
      {
        title: "Sub Contracting",
        description:
          "Efficient subcontracting management systems to optimize project workflows, track contracts, and ensure compliance. Simplify your business processes with our tailored subcontracting solutions.",
      },
      {
        title: "Sales",
        description:
          "Powerful sales management platforms to automate sales processes, track leads, and increase conversions. Drive revenue growth with our innovative sales solutions for your business.",
      },
      {
        title: "Finance",
        description:
          "Secure finance management systems for real-time tracking, reporting, and analysis. Improve financial decision-making and compliance with our robust finance software solutions.",
      },
    ],
  },
];

const ServicesSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

  // Memoize the scroll handler
  const handleScroll = useCallback(() => {
    const viewportHeight = window.innerHeight;
    const scrollPosition = window.scrollY + (viewportHeight / 2);
    
    sectionRefs.forEach((ref, idx) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const elementBottom = elementTop + rect.height;
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setActiveSection(idx);
        }
      }
    });
  }, [sectionRefs]);

  // Throttle scroll events
  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  // Scroll to section on sidebar click
  const scrollToSection = (idx: number) => {
    sectionRefs[idx].current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-[#0E1B24] via-[#163B5E] to-[#0E1B24]">
      {/* Fixed Header */}
      <div className="z-50 bg-gradient-to-b from-[#0E1B24] to-transparent pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-wider bg-gradient-to-r from-[#C3E8EE] via-[#90caf9] to-[#6a5afc] text-transparent bg-clip-text drop-shadow-lg mb-2 xs:mb-3 sm:mb-4">
            Our Services
          </h1>
          <p className="text-lg xs:text-xl sm:text-2xl text-[#B8DBE1] max-w-full sm:max-w-2xl">
            Empowering your business with cutting-edge technology, creative solutions, and strategic growth.
          </p>
          <hr className="border-t-2 border-[#4A595D]/50 w-1/2 mt-6 mb-4" />
        </div>
      </div>

      {/* Scrollable Content */}
      <motion.div
        className="h-full pb-20 overflow-y-auto scroll-smooth"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
      >
        <div className="min-h-screen flex flex-col">
          <AnimatedScrollContainer durationClass="duration-1000" easingClass="ease-in-out">
            <section className="w-full flex-1 flex flex-col items-start justify-center  px-4 xs:px-6 sm:px-8 text-left bg-transparent relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#90caf9]/20 via-transparent to-transparent pointer-events-none" />
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
              </div>
            </section>
          </AnimatedScrollContainer>
          {/* <hr className="border-t-2 border-[#e0e7ff] w-1/2 mx-auto" /> */}

          {/* Sidebar + Main Content */}
          <div className="max-w-[1520px] mx-auto flex-1 flex flex-col md:flex-row gap-8 md:gap-12 px-4 sm:px-6 mt-4 z-10 pb-16 relative">
            {/* Sidebar */}
            <div className="hidden  w-64 flex-shrink-0">
              <aside className="sticky top-32">
                <nav className="flex flex-col gap-3 bg-[#0E1B24]/80 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-[#4A595D]/30">
                {serviceCategories.map((cat, idx) => (
                  <button
                    key={cat.id}
                    className={`text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ease-in-out text-sm ${
                      activeSection === idx
                        ? "bg-gradient-to-r from-[#6a5afc] to-[#90caf9] text-white shadow-md"
                        : "bg-[#1B2A36] text-[#C3E8EE] hover:bg-[#1B2A36]/80 active:bg-[#1B2A36] border border-[#4A595D]/30"
                    }`}
                    onClick={() => scrollToSection(idx)}
                  >
                    {cat.title}
                  </button>
                ))}
                </nav>
              </aside>
            </div>
            {/* Main Content Sections */}
            <div className="flex-1 flex flex-col gap-12 bg-transparent pb-[200px]">
              {serviceCategories.map((cat, idx) => (
                <React.Fragment key={cat.id}>
                  <div
                    ref={sectionRefs[idx]}
                    className={`scroll-mt-32 snap-start ${idx > 0 ? 'pt-4' : ''}`}
                  >
                    <AnimatedScrollContainer animationClass="animate-fadeInUp">
                      <div 
                        className="group bg-[#1B2A36]/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 flex flex-col items-center transition-all duration-300 ease-out border-2 border-[#4A595D] min-h-[600px] mb-8"
                        style={{
                          willChange: 'transform, opacity',
                          transform: 'translateZ(0)',
                          backfaceVisibility: 'hidden',
                          perspective: 1000,
                          WebkitFontSmoothing: 'subpixel-antialiased'
                        }}
                      >
                        <h2 className="text-3xl font-bold mb-4 bg-[#B8DBE1] text-transparent bg-clip-text">
                          { cat.title}
                        </h2>
                        <p className="text-[#B8DBE1] text-base mb-6 min-h-[60px] text-center">{cat.description}</p>
                        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-4 w-full">
                          {cat.details.map((detail, dIdx) => (
                            <div key={dIdx} className="bg-[#1B2A36] rounded-xl p-4  shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out border-2 border-[#4A595D]">
                              <h3 className="text-base font-semibold mb-2 text-[#C3E8EE]">{detail.title}</h3>
                              <p className="text-[#B8DBE1] text-sm">{detail.description}</p>
                            </div>
                          ))}
                        </div>
                        <AnimatePresence mode="wait">
                          {idx === 0 && (
                            <motion.div 
                              className="w-full mt-8"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              <LazyInfiniteCarousel />
                            </motion.div>
                          )}
                          {idx === 1 && (
                            <motion.div 
                              className="w-full mt-8"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                            >
                              <LazyPortfolioGrid />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </AnimatedScrollContainer>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesSection;
