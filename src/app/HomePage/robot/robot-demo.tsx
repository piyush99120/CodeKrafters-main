"use client";

import { memo, useMemo, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Card } from './card';

// Import SplineScene directly instead of dynamic import to fix type issues
import { SplineScene } from './splite';

const SPLINE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

// Memoize the content to prevent unnecessary re-renders
const RobotContent = memo(() => (
  <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
    <h1 className="text-2xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
      AI is not future. <br/> AI is present.
    </h1>
    <p className="mt-2 text-sm md:mt-4  md:text-xl text-neutral-300 max-w-lg">
      Either you are an individual or Organisation, develop an AI agent
      to match the pace of world.
    </p>
  </div>
));

RobotContent.displayName = 'RobotContent';

export function RobotSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Memoize the motion.div props to prevent unnecessary re-renders
  const motionProps = useMemo(() => {
    // Default transition
    const transition = { 
      duration: 0.4, 
      ease: "easeInOut" as const
    };

    // Check for reduced motion preference only on client side
    if (isMounted && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 }
      };
    }

    return {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition
    };
  }, [isMounted]);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <Card 
        className="w-full h-full bg-gradient-to-b from-black via-neutral-800 to-gray-700"
        style={{
          transform: 'translate3d(0,0,0)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          willChange: 'transform, opacity',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="h-full w-full relative">
          {/* Mobile View */}
          <div className="absolute inset-0 block md:hidden z-0 w-full h-full">
            <div 
              className="w-full h-full flex items-center justify-center p-4"
              style={{
                pointerEvents: 'auto',
                touchAction: 'none',
                zIndex: 10,
                minHeight: '400px' // Ensure minimum height on mobile
              }}
            >
              <div className="relative w-full h-full max-w-md">
                <SplineScene
                  scene={SPLINE_URL}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <motion.div
            {...motionProps}
            className="relative z-10 container mx-auto px-4 h-full flex items-center"
          >
            <div className="max-w-2xl">
              <RobotContent />
            </div>
          </motion.div>

          {/* Desktop View */}
          <div className="absolute inset-0 hidden md:flex items-center justify-end w-full h-full">
            <div 
              className="relative w-full h-full flex items-center justify-center"
              style={{
                pointerEvents: 'auto',
                touchAction: 'none',
                zIndex: 10,
                minHeight: '600px' // Ensure minimum height to prevent layout shift
              }}
            >
              <div className="relative w-full h-full ">
                <SplineScene
                  scene={SPLINE_URL}
                  className="w-1/2 h-1/2 "
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
