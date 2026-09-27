import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, Sun, Moon, Github, Linkedin, Send } from 'lucide-react';
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
            ? 'bg-[#0c0e14]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Small size profile photo as brand logo */}
            <Link
              to="/"
              className="flex items-center group focus:outline-none"
              aria-label="Gokulraj V - Home"
            >
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden ring-2 ring-blue-500/60 hover:ring-blue-400 shadow-md shadow-blue-500/20 transition-all duration-300 group-hover:scale-105 shrink-0 bg-[#141822]">
                <img
                  src="/images/profile/gokulraj.jpg"
                  alt="Gokulraj V"
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-[#0c0e14]"></span>
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
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-[#141822] border border-slate-800 hover:border-slate-700 transition-colors"
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
                className="p-2 rounded-xl text-slate-300 bg-[#141822] border border-slate-800"
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
                className="p-2.5 rounded-xl bg-[#141822] text-white border border-slate-800 hover:bg-[#1a2030] transition-colors focus:outline-none"
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
