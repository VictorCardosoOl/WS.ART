import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update background state
      setIsScrolled(currentScrollY > 50);

      // Smart hide/show logic
      if (currentScrollY < lastScrollY.current || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > 50 && currentScrollY > lastScrollY.current) {
        setIsVisible(false);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
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
      <nav 
        className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled ? 'bg-rose-50/80 backdrop-blur-md border-b border-rose-200/50 py-4 shadow-sm' : 'bg-transparent py-8'}
        `}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="group flex items-center gap-1 z-50 relative">
            <span className={`font-serif font-bold text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}>
              W<span className="text-rose-500">.</span>Siqueira
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-16">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[10px] font-bold uppercase tracking-[0.25em] text-stone-600 hover:text-stone-900 transition-colors py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-500 transition-all duration-500 ease-out group-hover:w-full opacity-60"></span>
                </a>
              ))}
            </div>

            <div className={`w-[1px] h-3 ${isScrolled ? 'bg-rose-300' : 'bg-stone-400'}`}></div>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-rose-600 transition-colors text-stone-500 hover:scale-110 duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              
              <a
                href="#booking"
                className={`relative px-6 py-2 overflow-hidden rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border group hover:border-rose-500 ${isScrolled ? 'border-stone-800 text-stone-900' : 'border-stone-900 text-stone-900'}`}
              >
                <span className="absolute inset-0 w-full h-full bg-stone-900 transform translate-x-0 group-hover:translate-x-full transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 text-white group-hover:text-stone-900 transition-colors">Agendar</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 hover:text-rose-600 transition-colors text-stone-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-rose-50 z-40 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'clip-circle-full' : 'clip-circle-0 pointer-events-none'}`}>
        <style>{`.clip-circle-0 { clip-path: circle(0% at 100% 0); } .clip-circle-full { clip-path: circle(140% at 100% 0); }`}</style>
        
        <nav className="flex flex-col items-center space-y-8 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-4xl font-light italic text-stone-900 hover:text-rose-600 transition-all duration-300 transform hover:translate-x-4"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-12 h-[1px] bg-rose-300 my-8"></div>
          
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-rose-600 border-b border-rose-300 pb-1 hover:border-rose-600 transition-all"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;