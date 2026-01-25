import React from 'react';
import StaggeredMenu from './components/layout/StaggeredMenu';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Portfolio from './components/sections/Portfolio';
import Process from './components/sections/Process';
import PreCare from './components/sections/PreCare';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import BookingForm from './components/sections/BookingForm';
import FlashDay from './components/sections/FlashDay';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/CustomCursor';
import SmoothScroll from './components/layout/SmoothScroll';

const menuItems = [
  { label: 'Início', link: '#hero' },
  { label: 'Portfólio', link: '#portfolio' },
  { label: 'Sobre', link: '#about' },
  { label: 'Processo', link: '#process' },
  { label: 'Flash Day', link: '#flash-day' },
  { label: 'Cuidados', link: '#pre-care' },
  { label: 'Depoimentos', link: '#testimonials' },
  { label: 'FAQ', link: '#faq' },
  { label: 'Contato', link: '#booking' }
];

const socialItems = [
  { label: 'Instagram', link: 'https://www.instagram.com/williamsiqueira' },
  { label: 'Facebook', link: 'https://www.facebook.com/williamsiqueiraart' },
  { label: 'WhatsApp', link: 'https://wa.me/5511999999999' } // Replace with actual number if available
];

const App: React.FC = () => {
  return (
    <SmoothScroll>
      <div className="min-h-screen font-sans text-pantone-ink selection:bg-pantone-accent selection:text-white w-full overflow-x-hidden bg-white relative">
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-noise"></div>

        <CustomCursor />

        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 50, pointerEvents: 'none' }}>
          <StaggeredMenu
            items={menuItems}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#754548" // Rose accent for visibility
            openMenuButtonColor="#fff"
            changeMenuColorOnOpen={true}
            colors={['#F2E8E9', '#D48C95']} // Skin / Rose 300 - Harmonious light pink palette
            accentColor="#754548"
            logoUrl="" // Pass empty string or path to logo if desired, handled conditionally in component
          />
        </div>

        <main className="flex-grow relative z-10">
          <section id="hero"><Hero /></section>
          <section id="portfolio"><Portfolio /></section>
          <section id="about"><About /></section>
          <section id="process"><Process /></section>
          <section id="flash-day"><FlashDay /></section>
          <section id="pre-care"><PreCare /></section>
          <section id="testimonials"><Testimonials /></section>
          <section id="faq"><FAQ /></section>
          <section id="booking"><BookingForm /></section>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
};

export default App;