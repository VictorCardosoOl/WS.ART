import React, { useLayoutEffect, useRef, useState, useEffect, useCallback } from 'react';
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
  const [isVisible, setIsVisible] = useState(true);
  
  const navRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const lastScrollY = useRef(0);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const location = useLocation();

  const items: NavItem[] = [
    {
      label: "Navegação",
      bgColor: "#FAF7F7",
      textColor: "#1c1917",
      links: [
        { label: "Início", href: "/", ariaLabel: "Ir para Início" },
        { label: "O Processo", href: "/processo", ariaLabel: "Ver Processo" }
      ]
    },
    {
      label: "Acervo",
      bgColor: "#E5D0D4",
      textColor: "#1c1917",
      links: [
        { label: "Portfólio", href: "/#gallery", ariaLabel: "Ver Portfólio" },
        { label: "Flash Day", href: "/#flashday", ariaLabel: "Ver Flash Days" }
      ]
    },
    {
      label: "Contato",
      bgColor: "#1c1917",
      textColor: "#FFFFFF",
      links: [
        { label: "WhatsApp", href: "https://wa.me/5511999999999", ariaLabel: "Contato WhatsApp", external: true },
        { label: "Instagram", href: "https://instagram.com", ariaLabel: "Instagram", external: true },
        { label: "E-mail", href: "mailto:contato@wsart.com", ariaLabel: "Enviar Email", external: true }
      ]
    }
  ];

  // --- SMART NAVBAR LOGIC ---

  // Função para reiniciar o timer de inatividade
  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    
    // Se o menu estiver aberto, não oculta por inatividade
    if (isExpanded) return;

    // Define inatividade após 4 segundos
    inactivityTimer.current = setTimeout(() => {
       const currentY = window.scrollY;
       // Só oculta por inatividade se já tiver rolado um pouco (não no topo)
       if (currentY > 100) {
         setIsVisible(false);
       }
    }, 4000);
  }, [isExpanded]);

  // Handle Scroll Direction & Activity
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      // Sempre mostrar se estiver no topo ou se estiver rolando para CIMA
      // Ocultar se rolar para BAIXO (mais que 10px de diferença para evitar micro-movimentos)
      if (currentY < 50) {
        setIsVisible(true);
      } else if (delta > 10) {
        // Rolando para baixo -> Ocultar (se não estiver expandido)
        if (!isExpanded) setIsVisible(false);
      } else if (delta < -10) {
        // Rolando para cima -> Mostrar
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
      resetInactivityTimer();
    };

    const handleMouseMove = () => {
       // Se o mouse se mover no topo da tela, mostra a nav
       // Isso ajuda caso o usuário queira acessar o menu após ele sumir por inatividade
       resetInactivityTimer();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Start timer on mount
    resetInactivityTimer();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, [isExpanded, resetInactivityTimer]);

  // Handle Click Outside & ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (isExpanded) {
           toggleMenu(); // Fecha o menu se clicar fora
        }
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isExpanded) {
           toggleMenu(); // Fecha com ESC
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isExpanded]);

  // --- END SMART LOGIC ---

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 280;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const originalStyle = {
            visibility: contentEl.style.visibility,
            position: contentEl.style.position,
            height: contentEl.style.height
        };
        contentEl.style.visibility = 'visible';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';
        const contentHeight = contentEl.offsetHeight;
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
    
    // Se estiver fechado e formos abrir, garantimos que a navbar está visível
    if (!isExpanded) {
      setIsVisible(true);
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
    if (href.startsWith('/#') || href.startsWith('#')) {
        const id = href.split('#')[1];
        const element = document.getElementById(id);
        if (element) {
             toggleMenu();
             setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 300);
        }
    }
  };

  return (
    <div 
        ref={containerRef} 
        className={`card-nav-container ${!isVisible && !isExpanded ? 'nav-hidden' : ''}`}
    >
      <nav ref={navRef} className={`card-nav ${isExpanded ? 'open' : ''}`}>
        
        <div className="card-nav-top">
          <div className="logo-container">
             <Link to="/" className="brand-text" onClick={() => isExpanded && toggleMenu()}>
                W<span className="brand-dot">.</span>S
             </Link>
          </div>

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