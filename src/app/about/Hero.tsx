'use client';

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0f] via-[#111122] to-[#1a1a2e]">
      {/* Animated gradient orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-600/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-40 -right-32 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px] animate-pulse" />

      {/* Hero content */}
      <div className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Crafting Premium Digital Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:px-10 text-gray-300 leading-relaxed"
        >
          At Codekraft, we engineer cutting-edge digital experiences using advanced technologies.
          From Next.js to AI-powered solutions, we transform visionary concepts into
          exceptional digital products that drive business success.
        </motion.p>

        <motion.a
          href="#explore"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 inline-block rounded-lg px-5 py-2 text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition shadow-md"
        >
          Explore our work →
        </motion.a>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {[{n:"90M+",l:"Monthly downloads"},
            {n:"33.6k",l:"GitHub stars"},
            {n:"4.7k",l:"Discord members"},
            {n:"2.5k",l:"Code contributors"}].map((m) => (
            <div key={m.l} className="px-6 py-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition">
              <div className="text-lg sm:text-xl font-extrabold text-white">{m.n}</div>
              <div className="mt-1 text-[11px] sm:text-xs tracking-wide uppercase text-gray-400">{m.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
