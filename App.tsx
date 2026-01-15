import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import FlashDay from './components/FlashDay';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-stone-800 selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <FlashDay />
        <FAQ />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;