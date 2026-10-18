import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function InteractiveCursorGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth spring physics for fluid trailing glow
  const smoothX = useSpring(mouseX, { damping: 28, stiffness: 250, mass: 0.5 });
  const smoothY = useSpring(mouseY, { damping: 28, stiffness: 250, mass: 0.5 });

  useEffect(() => {
    // Detect touch-only screens
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Broad Ambient Atmospheric Glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-30 w-[550px] h-[550px] rounded-full blur-[100px] transition-opacity duration-500 hidden md:block"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.06) 45%, transparent 70%)',
          opacity: isVisible ? 1 : 0,
        }}
      />

      {/* Tiny Sharp Interactive Core Particle */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-40 w-3 h-3 rounded-full bg-cyan-400/40 blur-[1px] transition-opacity duration-300 hidden md:block"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 0.6 : 0,
        }}
      />
    </>
  );
}
