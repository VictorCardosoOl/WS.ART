import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

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
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b border-stone-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Bolder to match Hero */}
        <a href="#" className="font-sans font-black text-2xl md:text-4xl text-stone-900 tracking-tighter z-50 uppercase">
          WS<span className="text-rose-500">.</span>ART
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-stone-900 font-medium hover:text-rose-500 text-sm tracking-widest uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-stone-900 hover:text-rose-500 transition-colors"
          >
            <Instagram size={22} />
          </a>
          {/* Changed CTA to be simple text or outline to not conflict with Hero CTA */}
          <a
            href="#booking"
            className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider font-bold transition-all duration-300 border-2 ${scrolled ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' : 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'}`}
          >
            Orçamento
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-stone-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-rose-50 flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-4xl text-stone-900 hover:text-rose-500"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="bg-stone-900 text-white px-10 py-4 rounded-full text-lg uppercase tracking-wider mt-4"
          >
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;