import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import PageTransition from './PageTransition';

// Lazy loading de páginas para reduzir bundle inicial
const Home = lazy(() => import('../../pages/Home'));
const Ritual = lazy(() => import('../../pages/Ritual'));
const NotFound = lazy(() => import('../../pages/NotFound'));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FAF7F7]">
    <div className="text-center">
      <div className="w-12 h-12 border-2 border-[#754548] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-sm uppercase tracking-widest text-stone-400">Carregando...</p>
    </div>
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/processo" element={<PageTransition><Ritual /></PageTransition>} />
        {/* Rota 404 dedicada */}
        <Route path="/404" element={<PageTransition><NotFound /></PageTransition>} />
        {/* Redirecionamento para a página customizada */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AnimatedRoutes;