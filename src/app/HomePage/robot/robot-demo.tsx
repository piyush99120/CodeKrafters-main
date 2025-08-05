"use client";

import { SplineScene } from "./splite";
import { Card } from "./card";
// import { Spotlight } from "./spotlight";
import { motion } from "framer-motion";

const SPLINE_URL = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export function RobotSection() {
  return (
    <Card className="w-full h-[100vh] bg-gradient-to-b from-black via-neutral-800 to-gray-700 transition-colors duration-1000 ease-in-out overflow-hidden">
      {/* <Spotlight size={400} springOptions={{ bounce: 0.5, damping: 10 }} /> */}

      <div className="flex h-full relative">
        {/* SplineScene as background on mobile */}
        <div className="absolute inset-0 block md:hidden z-0">
          <SplineScene
            scene={SPLINE_URL}
            className="w-full h-full will-change-transform"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex-1 p-8 relative z-10 flex flex-col justify-center"
        >
          <h1 className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            AI is not future AI is present
          </h1>
          <p className="mt-2 text-sm md:mt-4 md:text-base text-neutral-300 max-w-lg">
            Either you are an individual or Organisation, develop an AI agent
            to match the pace of world.
          </p>
        </motion.div>

        {/* SplineScene on the right for desktop */}
        <div className="flex-1 relative hidden md:block">
          <SplineScene
            scene={SPLINE_URL}
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  );
}
