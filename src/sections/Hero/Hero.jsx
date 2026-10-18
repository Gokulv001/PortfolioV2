import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Sparkles, ArrowRight, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { scrollToSection } from '../../utils/helpers';
import Container from '../../components/common/Container';
import HeroPhoto3D from './HeroPhoto3D';
import Card3DTilt from '../../components/3d/Card3DTilt';

const roles = [
  'Full Stack Developer',
  'MERN Stack Specialist',
  'React Native Engineer',
  'REST API & Cloud Architect'
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="home" className="relative pt-24 pb-20 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 overflow-x-hidden bg-slate-100 dark:bg-[#0c0e14] text-slate-900 dark:text-white transition-colors duration-300">
      {/* Background angled geometric aesthetic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep blue atmospheric lighting */}
        <div className="absolute -top-40 right-10 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
        
        {/* Subtle diagonal depth planes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-white/[0.02] via-transparent to-transparent -skew-x-12 pointer-events-none" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-blue-500/[0.02] via-transparent to-transparent skew-x-12 pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Bio, Titles, CTAs, and Stats with staggered entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Mobile View: Name & Profile Photo Side-by-Side */}
            <div className="w-full flex items-center justify-between gap-4 mb-4 lg:hidden">
              <div className="text-left flex-1 min-w-0">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 tracking-wide block mb-0.5">
                  Hi I am
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {personalInfo.name}
                </h1>
                <div className="min-h-[48px] flex items-center mt-0.5">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentRoleIndex}
                      initial={{ y: 12, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -12, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-base sm:text-lg font-black text-blue-500 tracking-tight leading-tight"
                    >
                      {roles[currentRoleIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span className="block text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 mt-0.5">
                  Web & Mobile App Developer
                </span>
              </div>

              {/* Frameless Standing Avatar on Mobile */}
              <div className="relative shrink-0 w-24 sm:w-28 h-36 sm:h-44 flex items-end justify-center select-none">
                {/* Subtle Ambient Radial Backlight */}
                <div className="absolute top-2 inset-x-0 h-24 rounded-full bg-gradient-to-tr from-blue-600/35 via-cyan-400/30 to-indigo-600/20 blur-xl pointer-events-none" />

                {/* Ground Contact Shadow under shoes */}
                <div className="absolute bottom-1 w-16 h-2 rounded-full bg-black/75 blur-xs pointer-events-none" />

                {/* Standing Cutout Image without any frame/box */}
                <img
                  src={`${import.meta.env.BASE_URL}images/profile/gokulraj-cutout.png`}
                  alt={personalInfo.name}
                  className="w-full h-full object-contain object-bottom drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] relative z-10"
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}images/profile/gokulraj.jpg`;
                  }}
                />

                {/* Active status pulse indicator */}
                <span className="absolute bottom-1 right-0 flex h-2.5 w-2.5 z-20">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 ring-2 ring-white dark:ring-[#0c0e14] shadow-md"></span>
                </span>
              </div>
            </div>

            {/* Desktop View: Greeting, Name, Main Role (visible only on lg+) */}
            <div className="hidden lg:block text-left w-full">
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Available for high-impact roles & projects</span>
              </motion.div>

              <motion.span
                variants={itemVariants}
                className="text-base sm:text-lg font-medium text-slate-500 dark:text-slate-400 tracking-wide mb-1 block"
              >
                Hi I am
              </motion.span>

              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2"
              >
                {personalInfo.name}
              </motion.h1>

              <motion.div variants={itemVariants} className="mb-4 min-h-[4rem] sm:min-h-[5rem] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.h2
                    key={currentRoleIndex}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 leading-[1.1] drop-shadow-sm"
                  >
                    {roles[currentRoleIndex]}
                  </motion.h2>
                </AnimatePresence>
                <span className="block text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200 mt-1">
                  Web & Mobile App Developer
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-6 font-normal"
            >
              Specializing in architecting modern web applications and native-feel mobile applications with React, React Native, Node.js, Express.js, TypeScript, and MongoDB.
            </motion.p>

            {/* Circular Social Icons */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Gokulv001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-[#181c26] border border-slate-300 dark:border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 text-slate-600 dark:text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all duration-200 shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/gokul-v-952552408/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-[#181c26] border border-slate-300 dark:border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 text-slate-600 dark:text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all duration-200 shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personalInfo.contact.email}`}
                className="w-10 h-10 rounded-full bg-slate-200 dark:bg-[#181c26] border border-slate-300 dark:border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 text-slate-600 dark:text-slate-300 hover:text-blue-400 flex items-center justify-center transition-all duration-200 shadow-sm"
                aria-label="Email Gokulraj"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Action Buttons: Hire Me & Download CV */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-4 w-full mb-10">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => scrollToSection('contact')}
                className="relative overflow-hidden flex-1 sm:flex-none px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Hire Me</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={personalInfo.resumeUrl}
                target="_blank"
                download="Gokulraj-V-Resume.pdf"
                className="flex-1 sm:flex-none px-8 py-3.5 rounded-xl bg-slate-200 dark:bg-[#141822] hover:bg-slate-300 dark:hover:bg-[#1a2030] text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white font-semibold text-sm sm:text-base border border-slate-300 dark:border-slate-700 hover:border-blue-500/60 transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Bottom 3D Floating Stats Box */}
            <motion.div variants={itemVariants} className="w-full max-w-lg mx-auto lg:mx-0">
              <Card3DTilt maxTilt={8} scale={1.02} glareOpacity={0.15}>
                <div className="bg-white/90 dark:bg-[#141822]/90 backdrop-blur-md rounded-2xl border border-slate-200 dark:border-slate-800 p-4 sm:p-5 shadow-xl grid grid-cols-3 divide-x divide-slate-200 dark:divide-slate-800">
                  <div className="px-3 sm:px-4 text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-black text-blue-600 dark:text-blue-500 font-mono">
                      1+
                    </div>
                    <div className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      Years Exp.
                    </div>
                  </div>

                  <div className="px-3 sm:px-4 text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-black text-cyan-600 dark:text-cyan-400 font-mono">
                      11+
                    </div>
                    <div className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      Projects Built
                    </div>
                  </div>

                  <div className="px-3 sm:px-4 text-center lg:text-left">
                    <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                      100%
                    </div>
                    <div className="text-[11px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                      Web & Mobile
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Photo Circular Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:col-span-6 xl:col-span-5 justify-end"
          >
            <HeroPhoto3D />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
