import React from 'react';
import { skillCategories } from '../../data/skills';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import SkillCard from '../../components/ui/SkillCard';
import Card3DTilt from '../../components/3d/Card3DTilt';
import Floating3DOrbs from '../../components/3d/Floating3DOrbs';

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 transition-colors overflow-hidden">
      {/* Decorative ambient 3D geometric accent */}
      <Floating3DOrbs position="left" />

      <Container className="relative z-10">
        <SectionTitle
          eyebrow="TECHNICAL ARSENAL"
          title="Skills & Technologies"
          subtitle="A comprehensive toolkit spanning web development, cross-platform mobile apps, backend APIs, and modern databases."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>

        {/* Stack Highlight Banner in 3D Card */}
        <div className="mt-12">
          <Card3DTilt maxTilt={6} scale={1.01} glareOpacity={0.12}>
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left backdrop-blur-sm shadow-xl">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Dual Platform Mastery: Web Applications + Mobile Applications
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
                  From building responsive single-page web applications with React & TypeScript to distributing native-grade mobile apps using React Native and Expo.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-white dark:bg-navy-900 text-blue-600 dark:text-blue-400 border border-slate-200 dark:border-slate-800 shadow-md">
                  React 18
                </span>
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-white dark:bg-navy-900 text-purple-600 dark:text-purple-400 border border-slate-200 dark:border-slate-800 shadow-md">
                  React Native
                </span>
                <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-white dark:bg-navy-900 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-800 shadow-md">
                  Node + Mongo
                </span>
              </div>
            </div>
          </Card3DTilt>
        </div>
      </Container>
    </section>
  );
}
