import React from 'react';
import { skillCategories } from '../../data/skills';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import SkillCard from '../../components/ui/SkillCard';

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 transition-colors">
      <Container>
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

        {/* Stack Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary-900/20 via-indigo-900/20 to-primary-900/20 border border-primary-500/20 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Dual Platform Mastery: Web Applications + Mobile Applications
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              From building responsive single-page web applications with React & TypeScript to distributing native-grade mobile apps using React Native and Expo.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-white dark:bg-navy-900 text-primary-600 dark:text-primary-400 border border-slate-200 dark:border-slate-800 shadow-sm">
              React 18
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-white dark:bg-navy-900 text-purple-600 dark:text-purple-400 border border-slate-200 dark:border-slate-800 shadow-sm">
              React Native
            </span>
            <span className="px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-white dark:bg-navy-900 text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-800 shadow-sm">
              Node + Mongo
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
