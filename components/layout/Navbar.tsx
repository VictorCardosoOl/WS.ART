import React, { useLayoutEffect, useRef } from 'react';
import StaggeredMenu from '../ui/StaggeredMenu';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Navbar: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const brandRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animação de esconder (yPercent: -100 joga para cima)
      const showAnim = gsap.from(navRef.current, { 
        yPercent: -100,
        paused: true,
        duration: 0.4,
        ease: "power3.inOut"
      }).progress(1); // Começa visível (progresso 1)

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
            // self.direction: 1 = descendo, -1 = subindo
            // Se rolar para baixo E passou de 50px -> ESCONDE (reverse vai para 0, que no .from é o estado oculto -100%?)
            // Não, .from(yPercent: -100). 
            // .progress(1) = estado natural (y: 0).
            // .reverse() = volta para o inicio (y: -100%).
            
            if (self.direction === -1) {
                showAnim.play(); // Mostra (vai para y:0)
            } else if (self.direction === 1 && self.scroll() > 50) { 
                showAnim.reverse(); // Esconde (vai para y:-100%)
            }

            // Lógica de Estilo (Vidro/Cor)
            if (self.scroll() > 50) {
                gsap.to(navRef.current, { 
                    backgroundColor: "rgba(255, 255, 255, 0.8)", 
                    backdropFilter: "blur(8px)", 
                    boxShadow: "0 2px 20px rgba(0, 0, 0, 0.03)",
                    paddingTop: "0.75rem", // Padding menor
                    paddingBottom: "0.75rem", // Padding menor
                    duration: 0.3 
                });
                gsap.to(brandRef.current, { color: "#754548", scale: 0.9, duration: 0.3 });
            } else {
                gsap.to(navRef.current, { 
                    backgroundColor: "transparent", 
                    backdropFilter: "blur(0px)", 
                    boxShadow: "none",
                    paddingTop: "1.5rem", // Padding original
                    paddingBottom: "1.5rem", // Padding original
                    duration: 0.3 
                });
                gsap.to(brandRef.current, { color: "#1c1917", scale: 1, duration: 0.3 });
            }
        }
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

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

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 transition-none max-w-[1920px] left-0 right-0 mx-auto bg-transparent"
      >
        {/* Brand */}
        <a href="#" ref={brandRef} className="group flex items-center relative z-50 font-serif text-2xl md:text-3xl tracking-tighter text-stone-900 origin-left">
           W<span className="text-[#754548]">.</span>S
        </a>

        {/* Menu Trigger Area (gerenciado pelo StaggeredMenu) */}
        <div className="relative z-50"></div>
      </nav>

      {/* Menu Overlay */}
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