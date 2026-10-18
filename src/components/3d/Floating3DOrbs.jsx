import React from 'react';
import { motion } from 'framer-motion';

export default function Floating3DOrbs({ position = 'right' }) {
  const isRight = position === 'right';

  return (
    <div
      className={`pointer-events-none absolute ${
        isRight ? 'right-0 top-1/4' : 'left-0 bottom-1/4'
      } w-72 h-72 sm:w-96 sm:h-96 overflow-hidden z-0 select-none opacity-40 dark:opacity-60`}
      aria-hidden="true"
    >
      {/* 3D Glass Floating Cube Accent */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotateX: [15, 35, 15],
          rotateY: [25, 55, 25],
          rotateZ: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ perspective: 800, transformStyle: 'preserve-3d' }}
        className="relative w-28 h-28 sm:w-36 sm:h-36 mx-auto mt-16"
      >
        {/* Glowing backdrop halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-2xl -z-10" />

        {/* 3D Cube faces with translucent glass */}
        <div className="w-full h-full rounded-3xl border border-white/20 dark:border-blue-400/30 bg-gradient-to-br from-white/10 dark:from-blue-600/10 to-transparent backdrop-blur-md shadow-2xl shadow-blue-500/10 flex items-center justify-center">
          <div className="w-1/2 h-1/2 rounded-2xl border border-cyan-400/40 bg-cyan-500/10 shadow-inner" />
        </div>
      </motion.div>
    </div>
  );
}
