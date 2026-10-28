import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Sun, Moon, Code2, Zap } from "lucide-react";
import { useScroll } from "../../hooks/useScroll";
import MobileMenu from "./MobileMenu";

export default function Navbar({ theme, toggleTheme }) {
  const { scrolled, activeSection } = useScroll(20);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Portfolio", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out pointer-events-none ${
          mounted ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
        } ${
          // Desktop uses centered floating padding, Mobile uses edge-to-edge container
          scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex justify-center">
          {/* Main Container: Full-width spaced bar on mobile, centered pill on desktop */}
          <div
            className={`pointer-events-auto relative flex items-center justify-between md:justify-center gap-2 sm:gap-3 rounded-2xl transition-all duration-300 w-full md:w-max px-3.5 sm:px-4 ${
              scrolled
                ? "bg-white/80 dark:bg-[#0c0e14]/85 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-black/10 dark:shadow-black/50 py-2 sm:py-2.5"
                : "bg-white/60 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200/60 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/30 py-2.5 sm:py-3"
            }`}
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute -top-4 left-1/4 w-1/2 h-8 bg-blue-500/15 dark:bg-blue-500/25 blur-2xl" />
              <div className="absolute -bottom-4 right-1/4 w-1/3 h-8 bg-violet-500/15 dark:bg-violet-500/20 blur-2xl" />
            </div>

            {/* == LOGO & BRAND (Always visible on both Mobile and Desktop) == */}
            <Link
              to="/"
              className="relative flex items-center gap-2.5 group focus:outline-none shrink-0 select-none"
              aria-label="Gokulraj V - Home"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-600 shadow-md shadow-blue-500/30 group-hover:scale-105 transition-all duration-300 shrink-0">
                <Code2 className="w-4 h-4 text-white transition-transform duration-300 group-hover:rotate-12" />
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 ring-2 ring-white dark:ring-[#0c0e14]" />
                </span>
              </div>

              {/* Brand Text: Visible on mobile now! */}
              <div className="flex flex-col leading-none">
                <span className="text-sm font-extrabold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-500 transition-colors">
                  Gokul<span className="text-blue-500">raj</span>
                </span>
                <span className="text-[9px] font-semibold text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-0.5">
                  Full Stack
                </span>
              </div>
            </Link>

            {/* Divider (Desktop only) */}
            <div className="hidden md:block w-px h-5 bg-slate-300/60 dark:bg-white/10 shrink-0 mx-1" />

            {/* == DESKTOP NAVIGATION LINKS == */}
            <nav className="hidden md:flex items-center gap-0.5" aria-label="Main navigation">
              {navItems.map((item) => {
                const isActive = location.pathname === "/" && activeSection === item.id;

                return (
                  <button
                    key={item.id}
                    id={`nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`relative px-3 lg:px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200 focus:outline-none group ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {/* Active glowing glass pill */}
                    {isActive && (
                      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/30 border border-blue-400/30" />
                    )}

                    {/* Hover effect */}
                    {!isActive && (
                      <span className="absolute inset-0 rounded-xl bg-slate-200/50 dark:bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}

                    <span className="relative z-10">{item.name}</span>

                    {/* Active bottom glow dot */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-200 shadow-[0_0_6px_rgba(191,219,254,0.9)]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Divider (Desktop only) */}
            <div className="hidden md:block w-px h-5 bg-slate-300/60 dark:bg-white/10 shrink-0 mx-1" />

            {/* == RIGHT ACTIONS == */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-all duration-200 focus:outline-none active:scale-95"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-500" />
                )}
              </button>

              {/* Hire Me CTA Button (Desktop & Tablet only - keeps mobile clean!) */}
              <button
                onClick={() => handleNavClick("contact")}
                id="navbar-hire-me-btn"
                className="hidden sm:flex relative group items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl text-sm font-bold text-white overflow-hidden focus:outline-none active:scale-95 transition-transform duration-150"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 group-hover:from-blue-500 group-hover:via-indigo-500 group-hover:to-violet-500 transition-all duration-300" />
                <span className="absolute inset-0 overflow-hidden">
                  <span className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-700 ease-in-out" />
                </span>
                <span className="absolute inset-0 rounded-xl shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300" />
                <Zap className="relative z-10 w-3.5 h-3.5" />
                <span className="relative z-10">Hire Me</span>
              </button>

              {/* Mobile Menu Toggle (Clean & prominent on mobile) */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200 focus:outline-none active:scale-95"
                aria-label="Open navigation menu"
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
