import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function ThreeInteractiveBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 80;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 4. Check theme for color palette
    const isDark = document.documentElement.classList.contains('dark');
    const particleColor = isDark ? 0x38bdf8 : 0x0284c7;
    const wireframeColor1 = isDark ? 0x60a5fa : 0x2563eb;
    const wireframeColor2 = isDark ? 0x22d3ee : 0x0891b2;
    const wireframeColor3 = isDark ? 0xa78bfa : 0x7c3aed;

    // 5. Star / Particle Constellation Field (650 particles)
    const particleCount = Math.min(width > 768 ? 650 : 280, 750);
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities = [];

    const spreadX = 140;
    const spreadY = 100;
    const spreadZ = 80;

    for (let i = 0; i < particleCount; i++) {
      const x = (Math.random() - 0.5) * spreadX;
      const y = (Math.random() - 0.5) * spreadY;
      const z = (Math.random() - 0.5) * spreadZ;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particleVelocities.push({
        vx: (Math.random() - 0.5) * 0.03,
        vy: (Math.random() - 0.5) * 0.03,
        vz: (Math.random() - 0.5) * 0.02,
      });
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particlePositions, 3)
    );

    // Subtle round particle texture via canvas
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(56, 189, 248, 0.8)');
      gradient.addColorStop(0.7, 'rgba(37, 99, 235, 0.25)');
      gradient.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(canvas);
    };

    const particleTexture = createParticleTexture();

    const particleMaterial = new THREE.PointsMaterial({
      color: particleColor,
      size: width > 768 ? 1.6 : 1.2,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 6. Floating 3D Geometric Polyhedrons with Holographic Wireframes
    // Shape 1: Icosahedron (Top Right floating anchor)
    const icosahedronGeo = new THREE.IcosahedronGeometry(7, 1);
    const icosahedronMat = new THREE.MeshBasicMaterial({
      color: wireframeColor1,
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const icosahedron = new THREE.Mesh(icosahedronGeo, icosahedronMat);
    icosahedron.position.set(45, 22, -15);
    scene.add(icosahedron);

    // Shape 2: Dodecahedron (Bottom Left floating anchor)
    const dodecahedronGeo = new THREE.DodecahedronGeometry(8, 0);
    const dodecahedronMat = new THREE.MeshBasicMaterial({
      color: wireframeColor2,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const dodecahedron = new THREE.Mesh(dodecahedronGeo, dodecahedronMat);
    dodecahedron.position.set(-42, -24, -20);
    scene.add(dodecahedron);

    // Shape 3: Torus Knot (Center-Left subtle deep background accent)
    const torusGeo = new THREE.TorusGeometry(6, 1.2, 16, 50);
    const torusMat = new THREE.MeshBasicMaterial({
      color: wireframeColor3,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(-36, 18, -35);
    scene.add(torus);

    // Shape 4: Octahedron (Far Right Lower accent)
    const octaGeo = new THREE.OctahedronGeometry(5, 0);
    const octaMat = new THREE.MeshBasicMaterial({
      color: wireframeColor1,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const octa = new THREE.Mesh(octaGeo, octaMat);
    octa.position.set(38, -26, -10);
    scene.add(octa);

    // 7. Mouse interaction and smooth camera spring
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const handleMouseMove = (event) => {
      mouse.targetX = (event.clientX / width - 0.5) * 2;
      mouse.targetY = -(event.clientY / height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 8. Scroll interaction
    let scrollOffset = 0;
    const handleScroll = () => {
      scrollOffset = window.scrollY || window.pageYOffset;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 9. Window resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', handleResize);

    // 10. Pause on tab blur to save resources
    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 11. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isTabVisible) return;

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.04;
      mouse.y += (mouse.targetY - mouse.y) * 0.04;

      // Parallax camera rotation with subtle drift
      camera.position.x = mouse.x * 12;
      camera.position.y = mouse.y * 8 - (scrollOffset * 0.015);
      camera.lookAt(0, 0, 0);

      // Rotate geometric shapes
      icosahedron.rotation.x += 0.003 + mouse.y * 0.005;
      icosahedron.rotation.y += 0.005 + mouse.x * 0.005;
      icosahedron.position.y = 22 + Math.sin(elapsedTime * 0.8) * 3;

      dodecahedron.rotation.x -= 0.004;
      dodecahedron.rotation.z += 0.004;
      dodecahedron.position.y = -24 + Math.cos(elapsedTime * 0.7) * 3.5;

      torus.rotation.x += 0.006;
      torus.rotation.y += 0.004;
      torus.position.y = 18 + Math.sin(elapsedTime * 0.9) * 2;

      octa.rotation.y -= 0.005;
      octa.rotation.z += 0.006;
      octa.position.y = -26 + Math.sin(elapsedTime * 1.1) * 2.5;

      // Drift particles subtly
      const positions = particleGeometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const vel = particleVelocities[i];
        positions[i * 3] += vel.vx;
        positions[i * 3 + 1] += vel.vy;
        positions[i * 3 + 2] += vel.vz;

        // Wrap around boundaries
        if (positions[i * 3] > spreadX / 2) positions[i * 3] = -spreadX / 2;
        if (positions[i * 3] < -spreadX / 2) positions[i * 3] = spreadX / 2;
        if (positions[i * 3 + 1] > spreadY / 2) positions[i * 3 + 1] = -spreadY / 2;
        if (positions[i * 3 + 1] < -spreadY / 2) positions[i * 3 + 1] = spreadY / 2;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Gentle rotation of the whole particle field
      particles.rotation.y = elapsedTime * 0.015;
      particles.rotation.x = mouse.y * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      icosahedronGeo.dispose();
      icosahedronMat.dispose();
      dodecahedronGeo.dispose();
      dodecahedronMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      octaGeo.dispose();
      octaMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-75 dark:opacity-85 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
