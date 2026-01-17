import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import PreCare from './components/PreCare';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BookingForm from './components/BookingForm';
import FlashDay from './components/FlashDay';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Restaura o comportamento padrão de rolagem manual ao atualizar
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <About />
        <Process />
        <FlashDay />
        <PreCare />
        <Testimonials />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;