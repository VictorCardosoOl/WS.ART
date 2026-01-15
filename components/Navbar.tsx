import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Flash Day', href: '#flashday' },
  ];

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${scrolled ? 'py-4 bg-white/80 backdrop-blur-md border-b border-rose-100/50' : 'py-8 bg-transparent'}`}>
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="font-sans font-bold text-2xl tracking-tighter text-stone-900 z-50 mix-blend-difference hover:opacity-70 transition-opacity">
            WS<span className="text-rose-500">.</span>ART
          </a>

          {/* Desktop Nav - Minimalist */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-stone-800 font-medium text-xs tracking-[0.2em] uppercase hover:text-rose-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-rose-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            
            <a
              href="#booking"
              className={`ml-4 px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-500 border border-stone-900 hover:bg-stone-900 hover:text-white`}
            >
              Agendar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 text-stone-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-stone-50 z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-serif text-5xl text-stone-900 hover:text-rose-600 hover:italic transition-all duration-300"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#booking"
          onClick={() => setIsOpen(false)}
          className="text-sm font-sans uppercase tracking-widest border-b border-stone-900 pb-1 mt-8"
        >
          Solicitar Orçamento
        </a>
      </div>
    </>
  );
};

export default Navbar;