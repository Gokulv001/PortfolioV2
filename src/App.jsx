import React, { useEffect } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/AppRoutes';
import { useTheme } from './hooks/useTheme';

function RedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirect = sessionStorage.getItem('spa_redirect');
    if (redirect) {
      sessionStorage.removeItem('spa_redirect');
      navigate(redirect, { replace: true });
    }
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
      <RedirectHandler />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-navy-950 dark:text-slate-100 font-sans transition-colors duration-300">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className="flex-1">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
