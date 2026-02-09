import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import SmoothScroll from './components/layout/SmoothScroll';
import ScrollToTop from './components/layout/ScrollToTop';

// Pages
import Home from './pages/Home';
import Ritual from './pages/Ritual';

const App: React.FC = () => {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden bg-white relative">
          {/* Global Noise Overlay */}
          <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-noise"></div>
          
          <CustomCursor />
          <Navbar />
          
          <main className="flex-grow relative z-10 w-full min-h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/processo" element={<Ritual />} />
              {/* Fallback para redirecionar qualquer rota desconhecida para Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
};

export default App;