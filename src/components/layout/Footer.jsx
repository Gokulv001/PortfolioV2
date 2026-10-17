import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../../data/personal';
import { navLinks } from '../../data/navigation';
import { scrollToSection } from '../../utils/helpers';
import Container from '../common/Container';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-navy-950 border-t border-slate-200 dark:border-slate-800/80 pt-16 pb-12 transition-colors">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800/80">
          {/* Col 1: Bio & Branding */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg">
                GV
              </div>
              <div>
                <span className="text-xl font-black text-slate-900 dark:text-white tracking-tight">
                  GOKULRAJ V
                </span>
                <span className="block text-xs font-semibold text-primary-600 dark:text-primary-400">
                  Full Stack MERN Developer | Web & Mobile App Developer
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Specializing in architecting production-grade web applications and cross-platform mobile apps using React, React Native, Node.js, Express.js, TypeScript, and MongoDB.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <MapPin className="w-4 h-4 text-primary-500 shrink-0" />
              <span>{personalInfo.location}</span>
              <span className="mx-1.5">•</span>
              <span className="text-emerald-500 font-medium">Available for Opportunities</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 6).map((link) => {
                const sectionId = link.href.replace('#', '');
                return (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(sectionId)}
                      className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Connect & Socials */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Connect
            </h4>
            <div className="space-y-3">
              <a
                href="https://github.com/Gokulv001"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/gokul-v-952552408/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:gokulrajv.dev@gmail.com"
                className="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email Gokulraj</span>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Gokulraj V. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Crafted with React, Vite & Tailwind CSS</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
