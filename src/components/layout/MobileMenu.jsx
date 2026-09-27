import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, FileText, Sun, Moon, Github, Linkedin, ExternalLink } from 'lucide-react';
import { navLinks } from '../../data/navigation';
import { personalInfo } from '../../data/personal';
import Button from '../common/Button';

export default function MobileMenu({ isOpen, onClose, activeSection, onNavigate, theme, onToggleTheme }) {
  const location = useLocation();

  // Prevent background scrolling while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-white dark:bg-navy-900 border-l border-slate-200 dark:border-slate-800 h-full flex flex-col p-6 shadow-2xl z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500/60 shrink-0">
              <img
                src="/images/profile/gokulraj.jpg"
                alt="Gokulraj V"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div>
              <span className="text-base font-black tracking-tight text-slate-900 dark:text-white block">
                GOKULRAJ V
              </span>
              <span className="block text-[11px] font-medium text-blue-500">
                Full Stack MERN Developer
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation items */}
        <nav className="py-6 flex flex-col gap-1.5 flex-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = location.pathname === '/' && activeSection === sectionId;

            return (
              <button
                key={link.name}
                onClick={() => {
                  onNavigate(sectionId);
                  onClose();
                }}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-left font-medium transition-colors text-base ${
                  isActive
                    ? 'bg-primary-50 dark:bg-primary-950/60 text-primary-600 dark:text-primary-400 font-bold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Drawer Footer Actions */}
        <div className="pt-5 border-t border-slate-200 dark:border-slate-800 space-y-4">
          {/* Theme switcher */}
          <div className="flex items-center justify-between px-2">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Theme Mode
            </span>
            <button
              onClick={onToggleTheme}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              aria-label="Toggle theme mode"
            >
              {theme === 'dark' ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-blue-500" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>

          {/* Resume buttons */}
          <Button
            href={personalInfo.resumeUrl}
            target="_blank"
            download="Gokulraj-V-Resume.pdf"
            icon={FileText}
            className="w-full"
            size="md"
          >
            Download Resume
          </Button>

          {/* Social icons */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://github.com/Gokulv001"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/gokul-v-952552408/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
