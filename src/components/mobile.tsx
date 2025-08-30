'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const carouselItems = [
  '/images/home/frame1.png',
  '/images/home/mobile1.png',
  '/images/home/frame3.png',
  '/images/home/frame4.png',
  '/images/home/frame5.png',
  '/images/home/frame6.png',
];

export default function InfiniteCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  const frameWidth = 320; // phone width + spacing

  // Duplicate slides on both sides to create infinite illusion
  const extendedItems = [
    ...carouselItems.slice(-3), // last 3 at start
    ...carouselItems,
    ...carouselItems.slice(0, 3) // first 3 at end
  ];

  const startIndex = 3; // center starting point

  useEffect(() => {
    const pauseDuration = 2000;
    const moveDuration = 500;
    let currentIndex = startIndex;
    let timeoutId: NodeJS.Timeout;

    const nextSlide = async () => {
      currentIndex++;
      await controls.start({
        x: -currentIndex * frameWidth,
        transition: { duration: moveDuration / 1000, ease: 'easeInOut' },
      });

      // If we reach end duplicates, jump back to original position
      if (currentIndex >= extendedItems.length - 3) {
        currentIndex = startIndex;
        controls.set({ x: -currentIndex * frameWidth });
      }

      timeoutId = setTimeout(nextSlide, pauseDuration);
    };

    // Initial offset so first real slide group is visible
    controls.set({ x: -startIndex * frameWidth });
    timeoutId = setTimeout(nextSlide, pauseDuration);

    return () => clearTimeout(timeoutId);
  }, [controls, extendedItems.length, frameWidth]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-full bg-[#e1e2e3]">
      {/* Heading */}
      <div className="text-center m-6 px-4">
        <h2 className="text-3xl font-bold mb-4 text-black">
          Mobile Application
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your World. Their Fingertips. We are masters in developing Robust & High performant Mobile Applications.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative w-[960px] h-[600px] mx-auto">
        <div className="absolute inset-0 overflow-hidden z-10">
          <motion.div
            ref={containerRef}
            className="h-full flex"
            animate={controls}
            style={{
              width: `${extendedItems.length * frameWidth}px`,
              willChange: 'transform',
            }}
          >
            {extendedItems.map((src, index) => (
              <div
                key={index}
                className="h-full flex-shrink-0 flex items-center justify-center px-[10px]" // gap
                style={{ width: `${frameWidth}px` }}
              >
                {/* Outer phone frame */}
                <div className="relative w-[300px] h-full border-[12px] border-black/50 rounded-[30px] shadow-2xl bg-white overflow-hidden">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
