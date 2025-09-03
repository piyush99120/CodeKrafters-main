"use client";

import { Suspense, lazy, useState, useEffect, useRef } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Preload the Spline component
  useEffect(() => {
    const preloadSpline = async () => {
      try {
        await import("@splinetool/react-spline");
      } catch (error) {
        console.error("Failed to preload Spline component:", error);
      } finally {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    };
    
    // Set a small delay before showing the component
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    preloadSpline();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      clearTimeout(timer);
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative w-full h-full">
     

      <Suspense fallback={
        <div className="w-[150%] h-full flex items-center justify-center bg-black/80">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white" />
        </div>
      }>
        <div 
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            height: '100%',
            width: '150%',
            position: 'relative',
            pointerEvents: 'auto',
            visibility: isLoaded ? 'visible' : 'hidden'
          }}
        >
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
            pointerEvents: 'auto',
            touchAction: 'auto',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            WebkitTouchCallout: 'none',
            WebkitTapHighlightColor: 'transparent'
          }}>
            <Spline
              scene={scene}
              className={className}
              onLoad={handleLoad}
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'block',
                pointerEvents: 'auto',
                touchAction: 'auto'
              }}
            />
          </div>
        </div>
      </Suspense>
    </div>
  );
}