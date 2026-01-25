import React from 'react';
import StaggeredMenu from '../ui/StaggeredMenu';
import { Instagram } from 'lucide-react';
import Magnetic from '../ui/Magnetic';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Navbar: React.FC = () => {
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;

  const menuItems = [
    { label: 'Galeria', ariaLabel: 'Ver galeria de projetos', link: '#gallery' },
    { label: 'Processo', ariaLabel: 'Entenda como trabalhamos', link: '#process' },
    { label: 'Sobre', ariaLabel: 'Sobre o artista', link: '#about' },
    { label: 'Info', ariaLabel: 'Perguntas frequentes', link: '#faq' },
    { label: 'Agendar', ariaLabel: 'Solicite um orçamento', link: '#booking' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'WhatsApp', link: 'https://wa.me/5511999999999' }
  ];

  return (
    <>
      {/* Desktop Navigation (Visible > 1024px) */}
      <nav 
        className={`fixed top-0 left-0 w-full z-40 hidden lg:flex items-center justify-between px-5 md:px-10 2xl:px-20 py-6 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-stone-100 py-4' : 'bg-transparent'}`}
      >
        {/* Brand */}
        <a href="#" className="group flex items-center relative z-50">
           <span className={`font-serif text-2xl tracking-tighter transition-colors duration-300 ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}>
             W<span className="text-[#754548]">.</span>S
           </span>
        </a>

        {/* Links */}
        <div className="flex items-center gap-10">
            {menuItems.slice(0, 4).map((item) => (
                <Magnetic key={item.label} strength={0.3}>
                    <a 
                        href={item.link} 
                        className="text-[11px] font-bold uppercase tracking-[0.15em] text-stone-600 hover:text-[#754548] transition-colors py-2"
                    >
                        {item.label}
                    </a>
                </Magnetic>
            ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
            <a href="https://instagram.com" className="text-stone-400 hover:text-stone-900 transition-colors">
                <Instagram size={18} strokeWidth={1.5} />
            </a>
            <Magnetic strength={0.3}>
                <a
                    href="#booking"
                    className="relative px-6 py-2.5 overflow-hidden rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] bg-stone-900 text-white hover:bg-[#754548] transition-colors"
                >
                    Agendar
                </a>
            </Magnetic>
        </div>
      </nav>

      {/* Mobile/Tablet Menu (Using StaggeredMenu) */}
      <div className="lg:hidden">
          <StaggeredMenu
            position="right"
            items={menuItems}
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