import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar if scrolling up or at the very top, hide if scrolling down
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
    { name: 'Serviços', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        bg-white/0 backdrop-blur-[2px]`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 py-6 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="group flex items-center gap-1 z-50 relative">
            <span className="font-sans font-black text-2xl tracking-tighter hover:opacity-70 transition-opacity text-stone-900">
              WS<span className="text-rose-500">.</span>Art
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-rose-600 transition-colors py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-400 transition-all duration-300 ease-out group-hover:w-full opacity-60"></span>
                </a>
              ))}
            </div>

            <div className="w-[1px] h-4 bg-stone-300"></div>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-rose-500 transition-colors hover:scale-110 transform duration-300 text-stone-400"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              
              <a
                href="#booking"
                className="relative px-6 py-2 overflow-hidden rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-500 border border-stone-900 group hover:border-rose-500"
              >
                <span className="absolute inset-0 w-full h-full bg-stone-900 transform translate-x-0 group-hover:translate-x-full transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 text-white group-hover:text-stone-900 transition-colors">Agendar</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 hover:text-rose-500 transition-colors text-stone-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-[#fff0f3] z-40 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'clip-circle-full' : 'clip-circle-0 pointer-events-none'}`}>
        <style>{`.clip-circle-0 { clip-path: circle(0% at 100% 0); } .clip-circle-full { clip-path: circle(140% at 100% 0); }`}</style>
        
        <nav className="flex flex-col items-center space-y-8 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-5xl font-light italic text-stone-900 hover:text-rose-500 transition-all duration-300 transform hover:translate-x-4"
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
            className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-rose-600 border-b border-rose-200 pb-1 hover:border-rose-600 transition-all"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;