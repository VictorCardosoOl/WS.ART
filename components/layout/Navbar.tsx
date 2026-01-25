import React, { useState, useEffect, useRef } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import StaggeredMenu from '../ui/StaggeredMenu';

const Navbar: React.FC = () => {
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

  const navLinks = [
    { label: 'Galeria', link: '#gallery', ariaLabel: 'Ver galeria' },
    { label: 'Processo', link: '#process', ariaLabel: 'Processo criativo' },
    { label: 'Sobre', link: '#about', ariaLabel: 'Sobre o artista' },
    { label: 'Info', link: '#precare', ariaLabel: 'Cuidados' },
    { label: 'Contato', link: '#booking', ariaLabel: 'Contato' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'WhatsApp', link: 'https://wa.me/5511999999999' }
  ];

  const isScrolled = scrollY > 50;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 transition-all duration-500 max-w-[1920px] left-0 right-0 mx-auto ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4' : 'bg-transparent'}`}
      >
        {/* Brand */}
        <a href="#" className="group flex items-center relative z-50">
           <span className={`font-serif text-3xl tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-[#754548]' : 'text-stone-900'}`}>
             W<span className="text-[#754548]">.</span>S
           </span>
        </a>

        {/* Menu Trigger Area - O StaggeredMenu gerencia seu próprio botão, mas o posicionamos aqui */}
        <div className="relative z-50">
             {/* O componente StaggeredMenu é renderizado aqui para desktop e mobile */}
        </div>
      </nav>

      {/* 
        Unified Menu System (Always Staggered)
      */}
      <div className="fixed inset-0 z-50 pointer-events-none">
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
            logoContent={null}
            isFixed={true}
            closeOnClickAway={true}
          />
      </div>
    </>
  );
};

export default Navbar;