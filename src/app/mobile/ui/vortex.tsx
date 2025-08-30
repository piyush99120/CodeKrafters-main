
import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "motion/react";

const TAU = Math.PI * 2;

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef(null);
  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";
  const noise3D = createNoise3D();
  const particlePropsRef = useRef(new Float32Array(particlePropsLength * particlePropCount));
  const centerRef = useRef<[number, number]>([0, 0]);
  const tickRef = useRef(0);

  // TAU is already defined at the top of the file
  const rand = (n: number): number => n * Math.random();
  const randRange = (n: number): number => n;
  const fadeInOut = useCallback((t: number) => {
    return t < 0.5 ? t * 2 : 1 - (t - 0.5) * 2;
  }, []);
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  const initParticle = useCallback((i: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const x = rand(canvas.width) - canvas.width / 2;
    const y = centerRef.current[1] + randRange(rangeY);
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + rand(rangeHue);

    const index = i * particlePropCount;
    const props = particlePropsRef.current;
    props[index] = x;
    props[index + 1] = y;
    props[index + 2] = vx;
    props[index + 3] = vy;
    props[index + 4] = life;
    props[index + 5] = ttl;
    props[index + 6] = speed;
    props[index + 7] = radius;
    props[index + 8] = hue;
  }, [baseHue, baseRadius, baseSpeed, baseTTL, rangeHue, rangeRadius, rangeSpeed, rangeTTL, rangeY]);

  const initParticles = useCallback(() => {
    tickRef.current = 0;
    particlePropsRef.current = new Float32Array(particlePropsLength * particlePropCount);
    
    for (let i = 0; i < particlePropsLength; i++) {
      initParticle(i * particlePropCount);
    }
  }, [particlePropsLength, particlePropCount, initParticle]);


  const updateParticle = useCallback((i: number, currentTick: number, ctx: CanvasRenderingContext2D) => {
    const i2 = i + 1;
    const i3 = i + 2;
    const i4 = i + 3;
    const i5 = i + 4;
    const i6 = i + 5;
    const i7 = i + 6;
    const i8 = i + 7;
    const i9 = i + 8;

    const particleProps = particlePropsRef.current;
    let x = particleProps[i];
    let y = particleProps[i2];
    let vx = particleProps[i3];
    let vy = particleProps[i4];
    let life = particleProps[i5];
    const ttl = particleProps[i6];
    const speed = particleProps[i7];
    const radius = particleProps[i8];
    const hue = particleProps[i9];
    const n = noise3D(x * xOff, y * yOff, currentTick * zOff) * TAU * noiseSteps;

    // Reset particle if it's dead
    if (life >= ttl) {
      initParticle(i);
      return;
    }

      // Particle position is updated using noise value
    vx = lerp(vx, Math.cos(n) * speed, 0.5);
    vy = lerp(vy, Math.sin(n) * speed, 0.5);

    x += vx;
    y += vy;
    life++;

    // Update particle properties
    particleProps[i] = x;
    particleProps[i2] = y;
    particleProps[i3] = vx;
    particleProps[i4] = vy;
    particleProps[i5] = life;

    // Draw particle
    const alpha = fadeInOut(life / ttl);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, TAU);
    ctx.fillStyle = `hsla(${hue}, 100%, 80%, ${alpha})`;
    ctx.fill();
  }, [fadeInOut, initParticle, noise3D, noiseSteps, xOff, yOff, zOff]);


  const resize = useCallback((canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
    const { innerWidth, innerHeight } = window;
    const dpr = window.devicePixelRatio || 1;
    
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    canvas.style.width = `${innerWidth}px`;
    canvas.style.height = `${innerHeight}px`;
    
    ctx.scale(dpr, dpr);
    ctx.translate(innerWidth / 2, innerHeight / 2);
    
    centerRef.current = [0, 0];
  }, []);

  const animationFrameId = useRef<number | null>(null);
  const currentTick = useRef(0);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.save();
    ctx.fillStyle = backgroundColor;
    const { width, height } = canvas;
    ctx.fillRect(-width / 2, -height / 2, width, height);
    ctx.restore();
    
    // Update and draw particles
    for (let i = 0; i < particlePropsLength; i++) {
      updateParticle(i * particlePropCount, currentTick.current, ctx);
    }
    
    currentTick.current++;
    
    // Continue animation loop
    animationFrameId.current = requestAnimationFrame(animate);
  }, [backgroundColor, particlePropsLength, particlePropCount, updateParticle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Initialize particles
    initParticles();
    
    // Handle resize
    const handleResizeWithCanvas = () => {
      resize(canvas, ctx);
    };
    
    // Initial setup
    handleResizeWithCanvas();
    
    // Start animation
    animate();
    
    // Add resize event listener
    window.addEventListener('resize', handleResizeWithCanvas);
    
    // Cleanup
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      window.removeEventListener('resize', handleResizeWithCanvas);
    };
  }, [initParticles, animate, resize]);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cn("relative z-10", props.className)}>
        {props.children}
      </div>
    </div>
  );
};
