import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
        ${scrolled 
          ? 'py-4 bg-white/85 backdrop-blur-md border-b border-stone-100 shadow-sm' 
          : 'py-8 bg-transparent'}`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="group flex items-center gap-1 z-50 relative">
            <span className="font-sans font-black text-2xl tracking-tighter text-stone-900 group-hover:opacity-70 transition-opacity">
              WS
            </span>
            <span className={`w-1.5 h-1.5 rounded-full bg-rose-500 mb-1 transition-transform duration-500 ${scrolled ? 'scale-75' : 'scale-100'}`}></span>
            <span className="font-serif font-light italic text-xl text-stone-400 group-hover:text-rose-500 transition-colors">
              Art
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500 hover:text-rose-600 transition-colors py-2 group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-rose-400 transition-all duration-300 ease-out group-hover:w-full opacity-60"></span>
                </a>
              ))}
            </div>

            <div className="w-[1px] h-4 bg-stone-300/50"></div>

            <div className="flex items-center gap-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-stone-400 hover:text-rose-600 transition-colors hover:scale-110 transform duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              
              <a
                href="#booking"
                className={`
                  relative px-6 py-2 overflow-hidden rounded-full text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-500 border border-stone-900
                  group
                  ${scrolled 
                    ? 'text-stone-900 hover:text-white' 
                    : 'text-stone-900 hover:text-white'}
                `}
              >
                <span className="absolute inset-0 w-full h-full bg-stone-900 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10">Agendar</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-stone-800 hover:text-rose-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-[#FDF7F8] z-40 flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        
        <div className="absolute top-[-20%] right-[-20%] w-[80vw] h-[80vw] bg-rose-100/40 rounded-full blur-[100px] pointer-events-none" />

        <nav className="flex flex-col items-center space-y-6 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-5xl md:text-6xl text-stone-800 hover:text-rose-600 hover:italic transition-all duration-300"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-12 h-[1px] bg-stone-300 my-8"></div>
          
          <a
            href="#booking"
            onClick={() => setIsOpen(false)}
            className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-rose-600 border border-rose-200 px-8 py-4 rounded-full hover:bg-rose-50 transition-colors"
          >
            Solicitar Orçamento
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;