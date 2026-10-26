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
  'Full Stack Specialist',
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
    <section
      id="home"
      className="relative min-h-screen min-h-[100dvh] flex flex-col justify-center pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-28 lg:pb-8 overflow-x-hidden bg-slate-100 dark:bg-[#0c0e14] text-slate-900 dark:text-white transition-colors duration-300"
    >
      {/* Background angled geometric aesthetic */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep blue atmospheric lighting */}
        <div className="absolute -top-40 right-10 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
        
        {/* Subtle diagonal depth planes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-white/[0.02] via-transparent to-transparent -skew-x-12 pointer-events-none" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-blue-500/[0.02] via-transparent to-transparent skew-x-12 pointer-events-none" />
      </div>

      <Container className="relative z-10 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Bio, Titles, CTAs, and Stats with staggered entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Intro and Name */}
            <motion.span
              variants={itemVariants}
              className="text-sm sm:text-base lg:text-lg font-medium text-slate-500 dark:text-slate-400 tracking-wide mb-0.5 sm:mb-1 block"
            >
              Hi I am
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1 sm:mb-2"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Dynamic Animated Role */}
            <motion.div variants={itemVariants} className="mb-2 sm:mb-4 min-h-[3.5rem] sm:min-h-[4.5rem] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRoleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 leading-[1.15] drop-shadow-sm"
                >
                  {roles[currentRoleIndex]}
                </motion.h2>
              </AnimatePresence>
              <span className="block text-base sm:text-xl lg:text-2xl font-bold text-slate-700 dark:text-slate-200 mt-0.5 sm:mt-1">
                Web & Mobile App Developer
              </span>
            </motion.div>

            {/* Mobile View: 3D Photo with floating badges centered */}
            <motion.div
              variants={itemVariants}
              className="w-full flex justify-center my-4 lg:hidden"
            >
              <HeroPhoto3D />
            </motion.div>

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

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="hidden md:flex justify-center pb-3 pt-2 relative z-10"
      >
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-500 transition-colors group cursor-pointer focus:outline-none"
          aria-label="Scroll to About section"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase opacity-70 group-hover:opacity-100">Scroll</span>
          <div className="w-4 h-7 rounded-full border border-slate-400/40 group-hover:border-blue-500/60 flex items-start justify-center p-1 transition-colors">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
              className="w-1 h-1 rounded-full bg-blue-500"
            />
          </div>
        </button>
      </motion.div>
    </section>
  );
}
