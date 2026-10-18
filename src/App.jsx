import React, { useEffect } from 'react';
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import { useTheme } from './hooks/useTheme';
import ThreeInteractiveBackground from './components/3d/ThreeInteractiveBackground';
import InteractiveCursorGlow from './components/3d/InteractiveCursorGlow';

// Scrolls to the top on every route change and on initial load
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.getItem('spa_redirect');
    if (redirect) {
      sessionStorage.removeItem('spa_redirect');
      navigate(redirect, { replace: true });
    }
    // Always scroll to top on hard reload
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [navigate]);

  return null;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const basename = typeof window !== 'undefined' && window.location.pathname.startsWith('/PortfolioV2')
    ? '/PortfolioV2'
    : '/';

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <RedirectHandler />

      {/* Dynamic 3D WebGL Background Scene */}
      <ThreeInteractiveBackground key={theme} />

      {/* Interactive Cursor Spotlight Glow */}
      <InteractiveCursorGlow />

      <div className="relative z-10 min-h-screen flex flex-col bg-slate-50/90 text-slate-800 dark:bg-navy-950/90 dark:text-slate-100 font-sans transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="flex-1">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
