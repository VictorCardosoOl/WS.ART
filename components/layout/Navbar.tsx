import React, { useState, useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import StaggeredMenu from '../ui/StaggeredMenu';
import Magnetic from '../ui/Magnetic';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollY = useScrollPosition();
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
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

  const navLinks = [
    { label: 'Galeria', link: '#gallery', ariaLabel: 'Ver galeria' },
    { label: 'Processo', link: '#process', ariaLabel: 'Processo criativo' },
    { label: 'Sobre', link: '#about', ariaLabel: 'Sobre o artista' },
    { label: 'Info', link: '#faq', ariaLabel: 'Informações' },
    { label: 'Agendar', link: '#booking', ariaLabel: 'Agendamento' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'WhatsApp', link: 'https://wa.me/5511999999999' }
  ];

  const isScrolled = scrollY > 50;

  return (
    <>
      {/* 
        DESKTOP NAVIGATION (Visible > 1024px) 
      */}
      <nav 
        className={`fixed top-0 left-0 w-full z-40 hidden lg:flex items-center justify-between px-6 md:px-12 lg:px-20 py-6 transition-all duration-500 max-w-[1920px] mx-auto left-0 right-0 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-stone-100 py-4' : 'bg-transparent'}`}
      >
        {/* Brand */}
        <a href="#" className="group flex items-center relative z-50">
           <span className={`font-serif text-2xl tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-[#754548]' : 'text-stone-900'}`}>
             W<span className="text-[#754548]">.</span>S
           </span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-10">
            {navLinks.slice(0, 4).map((item) => (
                <a 
                    key={item.label}
                    href={item.link} 
                    className={`text-[11px] font-bold uppercase tracking-[0.15em] hover:text-[#754548] transition-colors py-2 ${isScrolled ? 'text-stone-600' : 'text-stone-800'}`}
                >
                    {item.label}
                </a>
            ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
            <a href="https://instagram.com" className={`hover:text-stone-900 transition-colors ${isScrolled ? 'text-stone-400' : 'text-stone-800'}`}>
                <Instagram size={18} strokeWidth={1.5} />
            </a>
            <Magnetic strength={0.3}>
                <a
                    href="#booking"
                    className={`
                        relative px-6 py-2.5 overflow-hidden rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border group inline-block
                        ${isScrolled 
                            ? 'border-[#754548] text-[#754548] hover:bg-[#754548] hover:text-white' 
                            : 'bg-stone-900 border-stone-900 text-white hover:bg-[#754548] hover:border-[#754548]'}
                    `}
                >
                    <span className="relative z-10 transition-colors">Agendar</span>
                </a>
            </Magnetic>
        </div>
      </nav>

      {/* 
        MOBILE/TABLET NAVIGATION (Visible < 1024px)
      */}
      <div className="lg:hidden">
          <StaggeredMenu
            position="right"
            items={navLinks}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            menuButtonColor="#1c1917"
            openMenuButtonColor="#1c1917"
            accentColor="#754548"
            changeMenuColorOnOpen={false}
            colors={['#F2E8E9', '#E5D0D4', '#FAF7F7']} 
            logoContent={
                <a href="#" className="group flex items-center z-50 relative focus:outline-none">
                  <span className="font-serif text-2xl tracking-tighter text-[#1c1917]">
                    W<span className="text-[#754548]">.</span>S
                  </span>
                </a>
            }
            isFixed={true}
            closeOnClickAway={true}
          />
      </div>
    </>
  );
};

export default Navbar;