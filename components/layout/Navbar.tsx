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
      const showAnim = gsap.from(navRef.current, { 
        yPercent: -100,
        paused: true,
        duration: 0.4,
        ease: "power3.inOut"
      }).progress(1);

      ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate: (self) => {
            if (self.direction === -1) {
                showAnim.play();
            } else if (self.direction === 1 && self.scroll() > 50) { 
                showAnim.reverse();
            }

            // Glassmorphism logic: Subtle blur, no solid background
            if (self.scroll() > 50) {
                gsap.to(navRef.current, { 
                    backdropFilter: "blur(12px)", 
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    duration: 0.3 
                });
            } else {
                gsap.to(navRef.current, { 
                    backdropFilter: "blur(0px)", 
                    paddingTop: "2rem",
                    paddingBottom: "2rem",
                    duration: 0.3 
                });
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
    { label: 'Aplicação', link: '#booking', ariaLabel: 'Contato' }
  ];

  const socialItems = [
    { label: 'Instagram', link: 'https://instagram.com' },
    { label: 'WhatsApp', link: 'https://wa.me/5511999999999' }
  ];

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 w-full z-40 flex items-center justify-between px-6 md:px-12 lg:px-24 py-8 transition-none max-w-[1920px] left-0 right-0 mx-auto bg-transparent mix-blend-difference text-white"
      >
        {/* Brand - Mix Blend Difference handles contrast automatically */}
        <a href="#" ref={brandRef} className="group flex items-center relative z-50 font-serif text-3xl md:text-4xl tracking-tighter text-white origin-left hover:italic transition-all">
           W<span className="text-white/50">.</span>S
        </a>

        {/* The StaggeredMenu component handles the button rendering */}
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
            menuButtonColor="#ffffff" // White because of mix-blend-difference on parent/container usually
            openMenuButtonColor="#1c1917" // Dark when menu is open (bg is light)
            accentColor="#754548"
            changeMenuColorOnOpen={true}
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