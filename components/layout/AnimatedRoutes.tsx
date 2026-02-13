import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages
import Home from '../../pages/Home';
import Ritual from '../../pages/Ritual';
import NotFound from '../../pages/NotFound';

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    // mode="wait": A página antiga sai totalmente antes da nova entrar
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/processo" element={<Ritual />} />
        {/* Rota 404 dedicada */}
        <Route path="/404" element={<NotFound />} />
        {/* Redirecionamento para a página customizada */}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;