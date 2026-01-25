import React from 'react';
import StaggeredMenu from '../ui/StaggeredMenu';

const Navbar: React.FC = () => {
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
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        
        // Cores do Tema (Rose & Stone)
        menuButtonColor="#1c1917"      // Stone 900
        openMenuButtonColor="#1c1917"  // Stone 900
        accentColor="#754548"          // Pantone Accent (Vinho)
        changeMenuColorOnOpen={false}
        
        // Camadas de Animação (Paleta Suave)
        colors={['#F2E8E9', '#E5D0D4', '#FAF7F7']} 
        
        // Logo Personalizado
        logoContent={
            <a href="#" className="group flex items-center z-50 relative focus:outline-none">
              <span className="font-serif text-2xl tracking-tighter text-[#1c1917] transition-colors duration-300 group-hover:text-[#754548]">
                W<span className="text-[#754548]">.</span>S
              </span>
            </a>
        }
        
        isFixed={true}
        closeOnClickAway={true}
      />
    </>
  );
};

export default Navbar;