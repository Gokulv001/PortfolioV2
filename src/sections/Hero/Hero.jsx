import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { scrollToSection } from '../../utils/helpers';
import Container from '../../components/common/Container';
import HeroPhoto3D from './HeroPhoto3D';

export default function Hero() {
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
    <section id="home" className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-[#0c0e14] text-white">
      {/* Background angled geometric aesthetic matching reference design */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep blue atmospheric lighting */}
        <div className="absolute -top-40 right-10 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
        
        {/* Subtle diagonal depth planes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-white/[0.02] via-transparent to-transparent -skew-x-12 pointer-events-none" />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-blue-500/[0.02] via-transparent to-transparent skew-x-12 pointer-events-none" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bio, Titles, CTAs, and Stats with staggered entrance */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 xl:col-span-7 flex flex-col items-start text-left"
          >
            {/* Greeting: Hi I am */}
            <motion.span
              variants={itemVariants}
              className="text-base sm:text-lg font-medium text-slate-400 tracking-wide mb-1"
            >
              Hi I am
            </motion.span>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Main Role in Vibrant Blue */}
            <motion.div variants={itemVariants} className="mb-4">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-blue-500 leading-[1.1] drop-shadow-sm">
                Full Stack MERN
              </h2>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-200 mt-1">
                Web & Mobile App Developer
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed mb-6 font-normal"
            >
              Specializing in architecting modern web applications and native-feel mobile applications with React, React Native, Node.js, Express.js, TypeScript, and MongoDB.
            </motion.p>

            {/* Circular Social Icons */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Gokulv001"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181c26] border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-colors duration-200 shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/gokul-v-952552408/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#181c26] border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-colors duration-200 shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:gokulrajv.dev@gmail.com"
                className="w-10 h-10 rounded-full bg-[#181c26] border border-slate-700/80 hover:border-blue-500 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-colors duration-200 shadow-sm"
                aria-label="Email Gokulraj"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Action Buttons: Hire Me & Download CV */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Hire Me
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={personalInfo.resumeUrl}
                target="_blank"
                download="Gokulraj-V-Resume.pdf"
                className="px-8 py-3.5 rounded-xl bg-[#141822] hover:bg-[#1a2030] text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-700 hover:border-blue-500/60 transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download CV</span>
              </motion.a>
            </motion.div>

            {/* Bottom Floating Stats Box */}
            <motion.div
              variants={itemVariants}
              className="w-full max-w-lg bg-[#141822]/90 backdrop-blur-md rounded-2xl border border-slate-800 p-4 sm:p-5 shadow-xl grid grid-cols-3 divide-x divide-slate-800"
            >
              <div className="px-3 sm:px-4 text-left">
                <div className="text-xl sm:text-2xl font-black text-blue-500 font-mono">
                  1+
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-slate-400 mt-0.5">
                  Experiences
                </div>
              </div>

              <div className="px-3 sm:px-4 text-left">
                <div className="text-xl sm:text-2xl font-black text-blue-500 font-mono">
                  8+
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-slate-400 mt-0.5">
                  Project done
                </div>
              </div>

              <div className="px-3 sm:px-4 text-left">
                <div className="text-xl sm:text-2xl font-black text-blue-500 font-mono">
                  100%
                </div>
                <div className="text-[11px] sm:text-xs font-medium text-slate-400 mt-0.5">
                  Web & Mobile
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: 3D Photo Circular Frame with entrance fade */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0"
          >
            <HeroPhoto3D />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
