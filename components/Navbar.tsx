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
      
      // Ativa o fundo sólido após 50px de scroll
      setIsScrolled(currentScrollY > 50);

      // Smart hide/show logic (esconde ao descer, mostra ao subir)
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
    { name: 'O Processo', href: '#process' },
    { name: 'Sobre', href: '#about' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        ${isScrolled 
            ? 'bg-[#FAF7F7]/90 backdrop-blur-md border-b border-rose-800/10 py-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.02)]' 
            : 'bg-transparent py-8'}
        `}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="group flex items-center gap-1 z-50 relative">
            <span className={`font-serif font-bold text-2xl tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-rose-900' : 'text-stone-900'}`}>
              W<span className="text-rose-800">.</span>Siqueira
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 lg:gap-16">
            <div className="flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600 hover:text-rose-800 transition-colors py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-800 transition-all duration-500 ease-out group-hover:w-full opacity-60"></span>
                </a>
              ))}
            </div>

            <div className={`w-[1px] h-3 ${isScrolled ? 'bg-rose-200' : 'bg-stone-300'}`}></div>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-rose-800 transition-colors text-stone-500 hover:scale-110 duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              
              <a
                href="#booking"
                className={`relative px-6 py-2 overflow-hidden rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border group 
                ${isScrolled 
                    ? 'border-rose-900 text-rose-900 hover:bg-rose-900 hover:text-white' 
                    : 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'}`}
              >
                <span className="relative z-10 transition-colors">Agendar</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 hover:text-rose-800 transition-colors text-stone-900"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-[#FAF7F7] z-40 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'clip-circle-full' : 'clip-circle-0 pointer-events-none'}`}>
        <style>{`.clip-circle-0 { clip-path: circle(0% at 100% 0); } .clip-circle-full { clip-path: circle(140% at 100% 0); }`}</style>
        
        <nav className="flex flex-col items-center space-y-8 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-4xl font-light italic text-rose-900 hover:text-rose-700 transition-all duration-300 transform hover:translate-x-2"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-12 h-[1px] bg-rose-200 my-8"></div>
          
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-rose-800 border-b border-rose-200 pb-1 hover:border-rose-800 transition-all"
          >
            Falar no WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;