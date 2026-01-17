import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  // Refs for Scroll Aware Logic
  const lastScrollY = useRef(0);
  const navbarHeight = 80; // approximate height for calculations

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 1. Scrolled State (Glassmorphism trigger)
      // We add a small buffer (20px) to avoid flickering at the very top
      setIsScrolled(currentScrollY > 20);

      // 2. Smart Hide/Show Logic (Scroll Direction Awareness)
      if (currentScrollY > lastScrollY.current && currentScrollY > navbarHeight) {
        // Scrolling DOWN and past the navbar area -> Hide
        setIsVisible(false);
      } else {
        // Scrolling UP or at the very top -> Show
        setIsVisible(true);
      }
      
      lastScrollY.current = currentScrollY;
    };

    // Passive event listener for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Galeria', href: '#gallery' },
    { name: 'O Processo', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      {/* 
        Navbar Container 
        - Transition: 'menu-slide' (custom cubic-bezier) for that "heavy/luxurious" feel.
        - Transform: Translates Y based on visibility state.
      */}
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-menu-slide
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled 
          ? 'bg-[#fbf7f6]/85 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-rose-200/40 py-4' 
          : 'bg-transparent py-6 md:py-8'
        }
        `}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo - Elegant & Deep */}
          <a href="#" className="group flex items-center gap-1 z-50 relative mix-blend-multiply">
            <span className="font-serif font-bold text-2xl md:text-3xl tracking-tight text-rose-950 transition-colors duration-300">
              W<span className="text-rose-500 group-hover:text-rose-600 transition-colors">.</span>Siqueira
            </span>
          </a>

          {/* Desktop Nav - Clean & Sophisticated */}
          <div className="hidden md:flex items-center gap-12 lg:gap-16">
            <div className="flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-rose-900 transition-colors py-2 group/link"
                >
                  {link.name}
                  {/* Center-out underline animation */}
                  <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-rose-500 transition-all duration-500 ease-out group-hover/link:w-full group-hover/link:left-0 opacity-80"></span>
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className={`w-[1px] h-4 ${isScrolled ? 'bg-rose-200' : 'bg-stone-300/50'}`}></div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-stone-500 hover:text-rose-600 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Instagram"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              
              {/* Booking Button - High Contrast & Prominent */}
              <a
                href="#booking"
                className={`
                  relative px-7 py-2.5 overflow-hidden rounded-[1px]
                  text-[10px] font-bold uppercase tracking-[0.2em] 
                  transition-all duration-500 
                  border group/btn
                  ${isScrolled 
                    ? 'border-rose-900 text-rose-950 hover:text-white' 
                    : 'border-stone-900 text-stone-900 hover:text-white'
                  }
                `}
              >
                {/* Fill effect from bottom-left */}
                <span className={`absolute inset-0 w-full h-full transform scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500 ease-out-expo ${isScrolled ? 'bg-rose-900' : 'bg-stone-900'}`}></span>
                <span className="relative z-10">Agendar</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-stone-900 hover:text-rose-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* 
        Mobile Nav Overlay 
        - Using 'clip-path' for a circular reveal transition.
        - Background is a warm, solid rose-50 to cover content entirely.
      */}
      <div 
        className={`fixed inset-0 bg-[#fbf7f6] z-40 flex flex-col items-center justify-center transition-all duration-1000 ease-[cubic-bezier(0.85,0,0.15,1)] 
        ${isOpen ? 'clip-circle-full pointer-events-auto' : 'clip-circle-0 pointer-events-none'}`}
      >
        <style>{`.clip-circle-0 { clip-path: circle(0% at 100% 0); } .clip-circle-full { clip-path: circle(150% at 100% 0); }`}</style>
        
        {/* Decorative noise texture for the menu */}
        <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>

        <nav className="flex flex-col items-center space-y-10 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-serif text-5xl font-light italic text-stone-900 hover:text-rose-600 transition-all duration-500 transform 
              ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className={`w-16 h-[1px] bg-rose-300 my-8 transition-all duration-700 delay-500 ${isOpen ? 'scale-x-100' : 'scale-x-0'}`}></div>
          
          <a
            href="#booking"
            onClick={() => setIsOpen(false)}
            className={`text-xs font-sans uppercase tracking-[0.25em] font-bold text-white bg-rose-900 px-8 py-4 rounded-sm hover:bg-rose-800 transition-all duration-500 delay-700
            ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          >
            Solicitar Orçamento
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;