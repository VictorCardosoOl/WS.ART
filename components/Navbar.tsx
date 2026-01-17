import React, { useState } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Set Scrolled State for Glassmorphism
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // Hide/Show Logic
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: 'Galeria', href: '#gallery' },
    { name: 'O Processo', href: '#services' },
    { name: 'Sobre', href: '#about' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      {/* Navbar Container with Framer Motion */}
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500
        ${scrolled 
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
            <div className={`w-[1px] h-4 ${scrolled ? 'bg-rose-200' : 'bg-stone-300/50'}`}></div>

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
                  ${scrolled 
                    ? 'border-rose-900 text-rose-950 hover:text-white' 
                    : 'border-stone-900 text-stone-900 hover:text-white'
                  }
                `}
              >
                {/* Fill effect from bottom-left */}
                <span className={`absolute inset-0 w-full h-full transform scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-500 ease-out-expo ${scrolled ? 'bg-rose-900' : 'bg-stone-900'}`}></span>
                <span className="relative z-10">Agendar</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2 text-stone-900 hover:text-rose-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
          >
            {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </motion.nav>

      {/* 
        Mobile Nav Overlay 
        - Using AnimatePresence for mount/unmount animations
      */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ clipPath: "circle(0% at 100% 0)" }}
            animate={{ clipPath: "circle(150% at 100% 0)" }}
            exit={{ clipPath: "circle(0% at 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.85, 0, 0.15, 1] }} // Custom Quint-like easing
            className="fixed inset-0 bg-[#fbf7f6] z-40 flex flex-col items-center justify-center pointer-events-auto"
          >
            {/* Decorative noise texture for the menu */}
            <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none"></div>

            <nav className="flex flex-col items-center space-y-8 relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                  className="font-serif text-4xl md:text-5xl font-light italic text-stone-900 hover:text-rose-600 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                transition={{ delay: 0.6, duration: 0.7 }}
                className="w-16 h-[1px] bg-rose-300 my-6" 
              />
              
              <motion.a
                href="#booking"
                onClick={() => setIsOpen(false)}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-xs font-sans uppercase tracking-[0.25em] font-bold text-white bg-rose-900 px-8 py-4 rounded-sm hover:bg-rose-800 transition-colors"
              >
                Solicitar Orçamento
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;