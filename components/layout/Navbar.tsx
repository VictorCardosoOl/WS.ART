import React from 'react';
import StaggeredMenu from '../ui/StaggeredMenu';

const Navbar: React.FC = () => {
  const menuItems = [
    { label: 'Galeria', ariaLabel: 'Ver portfólio', link: '#gallery' },
    { label: 'Processo', ariaLabel: 'Conheça o método', link: '#process' },
    { label: 'O Artista', ariaLabel: 'Sobre William Siqueira', link: '#about' },
    { label: 'Dúvidas', ariaLabel: 'Perguntas frequentes', link: '#faq' },
    { label: 'Contato', ariaLabel: 'Agendar sessão', link: '#booking' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com/williamsiqueira' },
    { label: 'WhatsApp', link: 'https://wa.me/5511999999999' },
    { label: 'Email', link: 'mailto:contato@wsart.com' }
  ];

  return (
    <>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        
        // Colors aligned with Rose/Stone palette
        // Pre-layers: Light Rose, Dark Rose, Off-white (Background)
        colors={['#E5D0D4', '#D9A9B0', '#FAF7F7']}
        
        // Button Colors (Solid Black for visibility)
        menuButtonColor="#1c1917" 
        openMenuButtonColor="#754548" // Rose 800 for active state
        
        accentColor="#754548"
        changeMenuColorOnOpen={true}
      />
    </>
  );
};

export default Navbar;