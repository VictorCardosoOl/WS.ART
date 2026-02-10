import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThemeController: React.FC = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Seleciona todas as seções marcadas como tema escuro
      const darkSections = document.querySelectorAll('[data-theme="dark"]');

      darkSections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 60%", // Quando o topo da seção escura atingir 60% da viewport
          end: "bottom 60%",
          onEnter: () => {
            // Entrando no Dark Mode
            gsap.to("body", { 
                backgroundColor: "#0c0a09", 
                color: "#FAF7F7", 
                duration: 0.8,
                ease: "power2.inOut" 
            });
            // Ajusta elementos globais se necessário
            gsap.to(".brand-text", { color: "#FAF7F7", duration: 0.5 });
            gsap.to(".hamburger-line", { backgroundColor: "#FAF7F7", duration: 0.5 });
          },
          onLeave: () => {
            // Saindo para baixo (voltando ao Light Mode se a próxima seção for clara)
            // Nota: Se a próxima seção também for dark, precisamos gerenciar isso. 
            // Como padrão, assumimos que intercala.
            gsap.to("body", { 
                backgroundColor: "#FAF7F7", 
                color: "#1c1917", 
                duration: 0.8,
                ease: "power2.inOut"
            });
            gsap.to(".brand-text", { color: "#1c1917", duration: 0.5 });
            gsap.to(".hamburger-line", { backgroundColor: "#1c1917", duration: 0.5 });
          },
          onEnterBack: () => {
            // Voltando de baixo para cima (Entrando no Dark de novo)
            gsap.to("body", { 
                backgroundColor: "#0c0a09", 
                color: "#FAF7F7", 
                duration: 0.8,
                ease: "power2.inOut"
            });
            gsap.to(".brand-text", { color: "#FAF7F7", duration: 0.5 });
            gsap.to(".hamburger-line", { backgroundColor: "#FAF7F7", duration: 0.5 });
          },
          onLeaveBack: () => {
            // Voltando para cima (Saindo do Dark para o Light anterior)
            gsap.to("body", { 
                backgroundColor: "#FAF7F7", 
                color: "#1c1917", 
                duration: 0.8,
                ease: "power2.inOut"
            });
            gsap.to(".brand-text", { color: "#1c1917", duration: 0.5 });
            gsap.to(".hamburger-line", { backgroundColor: "#1c1917", duration: 0.5 });
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
};

export default ThemeController;