import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import './Navbar.css';

interface NavLink {
  label: string;
  href: string;
  ariaLabel: string;
  external?: boolean;
}

interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

const Navbar: React.FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const location = useLocation();

  // Definição dos itens do menu conforme a marca
  const items: NavItem[] = [
    {
      label: "Navegação",
      bgColor: "#FAF7F7", // Rose 50
      textColor: "#1c1917",
      links: [
        { label: "Início", href: "/", ariaLabel: "Ir para Início" },
        { label: "O Processo", href: "/processo", ariaLabel: "Ver Processo" }
      ]
    },
    {
      label: "Acervo",
      bgColor: "#E5D0D4", // Rose 200
      textColor: "#1c1917",
      links: [
        { label: "Portfólio", href: "/#gallery", ariaLabel: "Ver Portfólio" },
        { label: "Flash Day", href: "/#flashday", ariaLabel: "Ver Flash Days" }
      ]
    },
    {
      label: "Contato",
      bgColor: "#1c1917", // Stone 900
      textColor: "#FFFFFF",
      links: [
        { label: "WhatsApp", href: "https://wa.me/5511999999999", ariaLabel: "Contato WhatsApp", external: true },
        { label: "Instagram", href: "https://instagram.com", ariaLabel: "Instagram", external: true },
        { label: "E-mail", href: "mailto:contato@wsart.com", ariaLabel: "Enviar Email", external: true }
      ]
    }
  ];

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 280; // Altura padrão desktop expandida

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        // Truque para medir altura oculta
        const originalStyle = {
            visibility: contentEl.style.visibility,
            position: contentEl.style.position,
            height: contentEl.style.height
        };

        contentEl.style.visibility = 'visible';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        const contentHeight = contentEl.offsetHeight;

        // Reverter estilos
        contentEl.style.visibility = originalStyle.visibility;
        contentEl.style.position = originalStyle.position;
        contentEl.style.height = originalStyle.height;

        const topBar = 70;
        return topBar + contentHeight;
      }
    }
    return 280;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    // Reset inicial
    gsap.set(navEl, { height: 70, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 60, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: () => calculateHeight(),
      duration: 0.5,
      ease: "power3.inOut"
    });

    tl.to(cardsRef.current, { 
        y: 0, 
        opacity: 1, 
        duration: 0.4, 
        ease: "power3.out", 
        stagger: 0.06 
    }, '-=0.3');

    return tl;
  };

  useLayoutEffect(() => {
    // Fecha o menu ao mudar de rota
    if (isExpanded) {
        toggleMenu();
    }
  }, [location.pathname]);

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      
      // Recalcula se estiver aberto para ajustar altura mobile/desktop
      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.to(navRef.current, { height: newHeight, duration: 0.2 });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play();
    } else {
      setIsHamburgerOpen(false);
      tl.reverse().then(() => setIsExpanded(false));
    }
  };

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    // Se for âncora interna, fecha o menu e faz scroll suave
    if (href.startsWith('/#') || href.startsWith('#')) {
        const id = href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
             // Pequeno delay para a animação de fechar começar
             toggleMenu();
             setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 300);
        }
    } else {
        // Link normal fecha o menu (tratado pelo useLayoutEffect de location)
    }
  };

  return (
    <div className="card-nav-container">
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`}>
        
        {/* Top Bar */}
        <div className="card-nav-top">
          
          {/* Logo Centralizado (Texto) */}
          <div className="logo-container">
             <Link to="/" className="brand-text" onClick={() => isExpanded && toggleMenu()}>
                W<span className="brand-dot">.</span>S
             </Link>
          </div>

          {/* Hamburger (Esquerda ou Direita dependendo do CSS, aqui ajustado pelo CSS flex order em mobile) */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Fechar menu' : 'Abrir menu'}
            tabIndex={0}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          {/* CTA Button */}
          <button
            type="button"
            className="card-nav-cta-button"
            onClick={() => {
                const element = document.getElementById('booking');
                if(element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Agendar
          </button>
        </div>

        {/* Content Cards */}
        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {items.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={addToRefs}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links.map((lnk, i) => {
                    const Component = lnk.external ? 'a' : Link;
                    const props = lnk.external 
                        ? { href: lnk.href, target: "_blank", rel: "noreferrer" } 
                        : { to: lnk.href, onClick: (e: React.MouseEvent) => handleLinkClick(e, lnk.href) };

                    return (
                        <Component 
                            key={`${lnk.label}-${i}`} 
                            className="nav-card-link" 
                            aria-label={lnk.ariaLabel}
                            {...props as any}
                        >
                            <ArrowUpRight className="nav-card-link-icon" size={16} aria-hidden="true" />
                            {lnk.label}
                        </Component>
                    );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;