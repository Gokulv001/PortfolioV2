import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Sun, Moon, Github, Linkedin, Send, Code2 } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import MobileMenu from './MobileMenu';

export default function Navbar({ theme, toggleTheme }) {
  const { scrolled, activeSection } = useScroll(30);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About me', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Portfolio', id: 'projects' },
    { name: 'Contact me', id: 'contact' },
  ];

  const handleNavClick = (sectionId) => {
    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 dark:bg-[#0c0e14]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 py-3 shadow-lg shadow-black/10 dark:shadow-black/40'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Developer Code Monogram Brand Mark */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus:outline-none select-none"
              aria-label="Gokulraj V - Home"
            >
              {/* Glowing Code Badge [</>] with live pulse dot */}
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 group-hover:scale-105 transition-all duration-300 shrink-0">
                <Code2 className="w-5 h-5 text-white transition-transform duration-300 group-hover:rotate-12" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 ring-2 ring-white dark:ring-[#0c0e14]"></span>
                </span>
              </div>

              {/* Text Brand: My Portfolio */}
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors flex items-center">
                  <span>My</span>
                  <span className="text-blue-500 ml-1">Portfolio</span>
                </span>
                <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase -mt-0.5 hidden xs:block">
                  Gokulraj V
                </span>
              </div>
            </Link>

            {/* Center Navigation Links (matching reference) */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => {
                const isActive = location.pathname === '/' && activeSection === item.id;

                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-sm font-semibold transition-all duration-200 focus:outline-none ${
                      isActive
                        ? 'text-blue-500'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Side: Theme Switcher & "Hire Me" Button (matching reference) */}
            <div className="hidden sm:flex items-center gap-3.5">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#141822] border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                aria-label="Toggle theme mode"
                title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-400" />
                )}
              </button>

              {/* Hire Me CTA Button matching reference */}
              <button
                onClick={() => handleNavClick('contact')}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-200 active:scale-95 focus:outline-none"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#141822] border border-slate-200 dark:border-slate-800"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-400" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#141822] text-slate-800 dark:text-white border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-[#1a2030] transition-colors focus:outline-none"
                aria-label="Open mobile menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={handleNavClick}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </>
  );
}
