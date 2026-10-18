import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

/**
 * Ultra-premium 3D Tilt Card wrapper
 * - True 3D perspective with spring physics
 * - Interactive holographic specular glare sheen that follows mouse pointer
 * - Preserves 3D depth for nested translateZ elements
 */
export default function Card3DTilt({
  children,
  className = '',
  maxTilt = 12,
  scale = 1.02,
  glare = true,
  glareOpacity = 0.2,
  style = {},
  ...props
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate motion values (-0.5 to 0.5)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Percentage motion values for glare positioning (0% to 100%)
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);

  // High responsiveness spring configuration
  const springConfig = { damping: 20, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Derive tilt rotation angles
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    mouseX.set(x - 0.5);
    mouseY.set(y - 0.5);
    glareX.set(x * 100);
    glareY.set(y * 100);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
    glareX.set(50);
    glareY.set(50);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none ${className}`}
      style={{
        perspective: 1000,
        ...style,
      }}
      {...props}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={{ scale }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
        className="relative w-full h-full rounded-2xl will-change-transform"
      >
        {children}

        {/* Dynamic Holographic Specular Glare Layer */}
        {glare && (
          <motion.div
            animate={{ opacity: isHovered ? glareOpacity : 0 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute inset-0 rounded-2xl overflow-hidden z-30"
            style={{
              background: `radial-gradient(circle 280px at ${glareX.get()}% ${glareY.get()}%, rgba(255, 255, 255, 0.35), transparent 70%)`,
              mixBlendMode: 'overlay',
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
