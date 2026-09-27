import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Smartphone, Code2, Sparkles, ShieldCheck } from 'lucide-react';

export default function HeroPhoto3D() {
  const containerRef = useRef(null);

  // Smooth Framer Motion spring physics for mouse tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 180, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Derive 3D rotation angles from smoothed mouse coordinates (-14deg to 14deg)
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [14, -14]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);

  // Parallax offsets for floating badges
  const badge1X = useTransform(smoothX, [-0.5, 0.5], [-18, 18]);
  const badge1Y = useTransform(smoothY, [-0.5, 0.5], [-18, 18]);
  const badge2X = useTransform(smoothX, [-0.5, 0.5], [18, -18]);
  const badge2Y = useTransform(smoothY, [-0.5, 0.5], [18, -18]);

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
      className="relative w-full max-w-[360px] sm:max-w-[440px] lg:max-w-[500px] mx-auto aspect-square flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* Main 3D Card with Organic Floating & Spring Tilt */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative w-full h-full flex items-center justify-center animate-float-smooth cursor-pointer"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Layer 1: Ambient Electric Blue Glowing Radial Halo */}
        <div
          className="absolute w-[86%] h-[86%] rounded-full bg-gradient-to-tr from-blue-600/40 via-cyan-500/25 to-transparent blur-3xl pointer-events-none animate-halo-pulse"
          style={{ transform: 'translateZ(-60px)' }}
        />

        {/* Layer 2: Outer Slow Rotating Orbital Ring */}
        <div
          className="absolute w-[94%] h-[94%] rounded-full border border-blue-500/30 animate-spin-slow pointer-events-none"
          style={{ transform: 'translateZ(-40px)' }}
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/80"></span>
          <span className="absolute bottom-4 right-10 w-2 h-2 rounded-full bg-cyan-400"></span>
        </div>

        {/* Layer 3: Inner Counter-Rotating Dashed Orbit Ring */}
        <div
          className="absolute w-[82%] h-[82%] rounded-full border-2 border-dashed border-cyan-400/25 animate-spin-slow-reverse pointer-events-none"
          style={{ transform: 'translateZ(-20px)' }}
        />

        {/* Layer 4: Central Glass Circular Frame with Portrait */}
        <div
          className="relative w-[76%] h-[76%] sm:w-[80%] sm:h-[80%] rounded-full bg-[#00acef] border-2 border-blue-400/60 shadow-2xl shadow-blue-950/80 overflow-hidden flex items-center justify-center group"
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Subtle concentric rings inside background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.18)_100%)] pointer-events-none" />

          {/* Portrait Photo of Gokulraj V (Zoomed Out & Centered) */}
          <img
            src="/images/profile/gokulraj.jpg"
            alt="Gokulraj V - Full Stack Developer"
            className="relative z-10 w-full h-full object-cover object-center pointer-events-none transition-transform duration-500 group-hover:scale-105"
            loading="eager"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />

          {/* Glossy Diagonal Light Shine Sweep */}
          <div
            className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
          >
            <div className="w-[60%] h-[200%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-light-sweep" />
          </div>

          {/* Gentle Bottom Rim Fade */}
          <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950/25 to-transparent z-20 pointer-events-none" />
        </div>

        {/* Layer 5: Floating 3D Badge 1 (Web & Mobile - Top Right) */}
        <motion.div
          style={{
            x: badge1X,
            y: badge1Y,
            transform: 'translateZ(70px)',
          }}
          className="absolute top-4 sm:top-8 -right-2 sm:right-2 z-30 bg-[#141824]/95 backdrop-blur-md border border-blue-500/50 rounded-2xl px-3.5 py-2.5 shadow-2xl shadow-black/60 flex items-center gap-2.5 animate-float-left pointer-events-none"
        >
          <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold shadow-inner">
            <Smartphone className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white leading-tight">Web & Mobile</div>
            <div className="text-[9px] text-blue-400 font-mono">React + React Native</div>
          </div>
        </motion.div>

        {/* Layer 6: Floating 3D Badge 2 (MERN + TypeScript - Bottom Left) */}
        <motion.div
          style={{
            x: badge2X,
            y: badge2Y,
            transform: 'translateZ(80px)',
          }}
          className="absolute bottom-8 sm:bottom-12 -left-2 sm:left-2 z-30 bg-[#141824]/95 backdrop-blur-md border border-blue-500/50 rounded-2xl px-3.5 py-2.5 shadow-2xl shadow-black/60 flex items-center gap-2.5 animate-float-right pointer-events-none"
        >
          <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold shadow-inner">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[11px] font-bold text-white leading-tight">MERN + TypeScript</div>
            <div className="text-[9px] text-emerald-400 font-mono font-medium">Production Ready</div>
          </div>
        </motion.div>

        {/* Layer 7: Floating 3D Badge 3 (Softye Technologies - Bottom Center) */}
        <motion.div
          style={{ transform: 'translateZ(55px)' }}
          className="absolute -bottom-3 sm:bottom-0 z-30 bg-blue-600/90 text-white backdrop-blur-md border border-blue-400/50 rounded-full px-4 py-1.5 shadow-xl shadow-blue-600/40 flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-xs font-bold tracking-wide">Softye Technologies</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
