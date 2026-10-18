import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Smartphone, Code2, Sparkles, Cpu } from 'lucide-react';

export default function HeroPhoto3D() {
  const containerRef = useRef(null);

  // Smooth Framer Motion spring physics for mouse tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Derive 3D rotation angles (-12deg to 12deg)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  // Parallax offsets for floating badges
  const badge1X = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const badge1Y = useTransform(smoothY, [-0.5, 0.5], [-24, 24]);
  const badge2X = useTransform(smoothX, [-0.5, 0.5], [24, -24]);
  const badge2Y = useTransform(smoothY, [-0.5, 0.5], [24, -24]);
  const badge3X = useTransform(smoothX, [-0.5, 0.5], [-16, 16]);
  const badge3Y = useTransform(smoothY, [-0.5, 0.5], [16, -16]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[340px] sm:max-w-[420px] lg:max-w-[460px] mx-auto select-none py-2"
      style={{ perspective: 1200 }}
    >
      {/* 3D Frameless Tilt Wrapper */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className="relative w-full h-[520px] sm:h-[600px] lg:h-[640px] flex items-center justify-center cursor-pointer"
      >
        {/* Layer 1: Volumetric Neon Light Glow Behind Upper Body */}
        <div
          className="absolute top-16 left-1/2 -translate-x-1/2 w-72 sm:w-88 h-72 sm:h-88 rounded-full bg-gradient-to-tr from-blue-600/40 via-cyan-400/35 to-indigo-600/30 blur-3xl pointer-events-none animate-halo-pulse"
          style={{ transform: 'translateZ(-50px)' }}
        />

        {/* Layer 2: Subtle Orbiting Rings in Background */}
        <div
          className="absolute top-12 left-1/2 -translate-x-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full border border-blue-500/20 animate-spin-slow pointer-events-none"
          style={{ transform: 'translateZ(-40px)' }}
        >
          <span className="absolute top-3 left-1/4 w-3 h-3 rounded-full bg-cyan-400/80 shadow-lg shadow-cyan-400/80"></span>
          <span className="absolute bottom-8 right-1/4 w-2 h-2 rounded-full bg-blue-500 shadow-md"></span>
        </div>

        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-64 sm:h-80 rounded-full border-2 border-dashed border-cyan-400/20 animate-spin-slow-reverse pointer-events-none"
          style={{ transform: 'translateZ(-25px)' }}
        />

        {/* Layer 3: Ambient Tech Matrix Pattern */}
        <div
          className="absolute top-16 inset-x-0 h-80 flex items-center justify-center pointer-events-none opacity-30"
          style={{ transform: 'translateZ(-20px)' }}
        >
          <div className="w-[85%] h-full bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px] rounded-full [mask-image:radial-gradient(circle,black_50%,transparent_80%)]" />
        </div>

        {/* Layer 4: Ground Contact Shadow under Shoes */}
        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 w-56 h-6 rounded-full bg-black/80 blur-md pointer-events-none"
          style={{ transform: 'translateZ(10px)' }}
        />
        <div
          className="absolute bottom-3 left-1/2 -translate-x-1/2 w-36 h-3 rounded-full bg-blue-600/30 blur-sm pointer-events-none"
          style={{ transform: 'translateZ(12px)' }}
        />

        {/* Layer 5: Frameless Transparent Full-Body Standing Cutout */}
        <div
          className="relative z-10 w-full h-full flex items-end justify-center pointer-events-none"
          style={{ transform: 'translateZ(30px)' }}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/profile/gokulraj-cutout.png`}
            alt="Gokulraj V - Full Stack Developer"
            className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] filter contrast-[1.02] transition-transform duration-700"
            loading="eager"
          />
        </div>

        {/* Layer 6: Floating 3D Badge 1 (Web & Mobile - Top Right) */}
        <motion.div
          style={{
            x: badge1X,
            y: badge1Y,
            transform: 'translateZ(75px)',
          }}
          whileHover={{ scale: 1.08 }}
          className="hidden sm:flex absolute top-12 -right-4 z-30 bg-slate-900/90 dark:bg-[#141824]/90 backdrop-blur-md border border-blue-500/50 rounded-2xl px-3.5 py-2.5 shadow-2xl shadow-black/80 items-center gap-2.5 cursor-default group"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shadow-inner shrink-0 group-hover:rotate-12 transition-transform">
            <Smartphone className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white leading-tight flex items-center gap-1">
              <span>Web & Mobile</span>
              <Sparkles className="w-2.5 h-2.5 text-amber-400" />
            </div>
            <div className="text-[9px] text-blue-400 font-mono font-medium">React + React Native</div>
          </div>
        </motion.div>

        {/* Layer 7: Floating 3D Badge 2 (MERN + TypeScript - Mid-Torso Left) */}
        <motion.div
          style={{
            x: badge2X,
            y: badge2Y,
            transform: 'translateZ(85px)',
          }}
          whileHover={{ scale: 1.08 }}
          className="hidden sm:flex absolute top-56 -left-6 z-30 bg-slate-900/90 dark:bg-[#141824]/90 backdrop-blur-md border border-cyan-500/50 rounded-2xl px-3.5 py-2.5 shadow-2xl shadow-black/80 items-center gap-2.5 cursor-default group"
        >
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold shadow-inner shrink-0 group-hover:-rotate-12 transition-transform">
            <Code2 className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white leading-tight">MERN + TypeScript</div>
            <div className="text-[9px] text-emerald-400 font-mono font-medium">Production Scaled</div>
          </div>
        </motion.div>

        {/* Layer 8: Floating 3D Badge 3 (Softye Technologies - Lower Right) */}
        <motion.div
          style={{
            x: badge3X,
            y: badge3Y,
            transform: 'translateZ(65px)',
          }}
          whileHover={{ scale: 1.06, y: -2 }}
          className="hidden sm:flex absolute bottom-24 -right-2 z-30 bg-gradient-to-r from-blue-600/95 to-indigo-600/95 text-white backdrop-blur-md border border-blue-400/50 rounded-full px-4 py-1.5 shadow-xl shadow-blue-600/50 items-center gap-2"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-[11px] sm:text-xs font-bold tracking-wide">Softye Technologies</span>
        </motion.div>

        {/* Layer 9: Floating 3D Micro-Pill (REST APIs - Top Left) */}
        <motion.div
          style={{
            transform: 'translateZ(60px)',
          }}
          className="hidden sm:flex absolute top-20 -left-4 z-30 bg-slate-900/90 dark:bg-[#141824]/90 backdrop-blur-md border border-purple-500/40 rounded-xl px-2.5 py-1.5 shadow-lg shadow-purple-950/50 items-center gap-1.5 animate-float-left"
        >
          <Cpu className="w-3.5 h-3.5 text-purple-400" />
          <span className="text-[10px] font-mono font-bold text-purple-300">REST APIs</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
