import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  // Scroll Direction Logic
  useEffect(() => {
    if (scrollY < lastScrollY.current || scrollY < 50) {
      setIsVisible(true);
    } else if (scrollY > 50 && scrollY > lastScrollY.current) {
      setIsVisible(false);
    }
    lastScrollY.current = scrollY;
  }, [scrollY]);

  // Body Scroll Lock Logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Galeria', href: '#gallery' },
    { name: 'Processo', href: '#process' },
    { name: 'Sobre', href: '#about' },
    { name: 'Info', href: '#faq' },
  ];

  const isScrolled = scrollY > 50;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div className={`
            w-full transition-all duration-500
            ${isScrolled 
                ? 'bg-[#FAF7F7]/80 backdrop-blur-md border-b border-[#754548]/10 py-3 shadow-sm' 
                : 'bg-transparent py-8'}
        `}>
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
            
            {/* Brand Logo - Minimalist */}
            <a href="#" className="group flex items-center z-50 relative">
              <span className={`font-serif text-2xl tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-[#754548]' : 'text-stone-900'}`}>
                W<span className="text-[#754548]">.</span>S
              </span>
            </a>

            {/* Desktop Nav - Centered & Floating */}
            <div className="hidden md:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className={`
                    flex items-center gap-10 px-8 py-3 rounded-full transition-all duration-500
                    ${isScrolled ? 'bg-white/0' : 'bg-white/0'}
                `}>
                    {navLinks.map((link) => (
                        <a
                        key={link.name}
                        href={link.href}
                        className="relative text-[11px] font-medium uppercase tracking-[0.15em] text-stone-600 hover:text-[#754548] transition-colors py-1 group"
                        >
                        {link.name}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#754548] transition-all duration-300 group-hover:w-full opacity-80"></span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hidden md:block text-stone-500 hover:text-[#754548] transition-colors hover:scale-110 duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              
              <a
                href="#booking"
                className={`
                    relative px-5 py-2 overflow-hidden rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border group
                    ${isScrolled 
                        ? 'border-[#754548] text-[#754548] hover:bg-[#754548] hover:text-white' 
                        : 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'}
                `}
              >
                <span className="relative z-10 transition-colors">Agendar</span>
              </a>

              {/* Mobile Menu Trigger */}
              <button
                className="md:hidden z-50 p-1 hover:text-[#754548] transition-colors text-stone-900"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-[#FAF7F7] z-40 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'clip-circle-full' : 'clip-circle-0 pointer-events-none'}`}>
        <style>{`.clip-circle-0 { clip-path: circle(0% at 100% 0); } .clip-circle-full { clip-path: circle(140% at 100% 0); }`}</style>
        
        {/* Background Texture for Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>

        <nav className="flex flex-col items-center space-y-10 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-5xl font-light text-stone-900 hover:text-[#754548] hover:italic transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-12 h-[1px] bg-[#754548]/30 my-8"></div>
          
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-[#754548] border-b border-[#754548]/30 pb-1 hover:border-[#754548] transition-all"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;