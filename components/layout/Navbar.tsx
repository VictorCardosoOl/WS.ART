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
  
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navBgRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  
  // Refs para lógica de scroll
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
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

  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    if (isExpanded) return;

    inactivityTimer.current = setTimeout(() => {
       if (window.scrollY > 100) {
         setIsVisible(false);
       }
    }, 4000);
  }, [isExpanded]);

  useEffect(() => {
    const updateNavbarState = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (currentY < 50) {
        setIsVisible(true);
      } else if (Math.abs(delta) > 10) { 
        if (delta > 0 && !isExpanded) {
          setIsVisible(false);
        } else if (delta < 0) {
          setIsVisible(true);
        }
      }

      lastScrollY.current = currentY;
      ticking.current = false;
    };

    const onScroll = () => {
      resetInactivityTimer();
      if (!ticking.current) {
        window.requestAnimationFrame(updateNavbarState);
        ticking.current = true;
      }
    };

    const onMouseMove = () => resetInactivityTimer();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    
    resetInactivityTimer();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      if (inactivityTimer.current) clearTimeout(inactivityTimer.current);
    };
  }, [isExpanded, resetInactivityTimer]);

  // Handle Click Outside & ESC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navContainerRef.current && !navContainerRef.current.contains(event.target as Node)) {
        if (isExpanded) toggleMenu();
      }
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isExpanded) toggleMenu();
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isExpanded]);

  // --- ANIMATION LOGIC ---

  const calculateFinalDimensions = () => {
    const isMobile = window.innerWidth <= 768;
    const width = Math.min(900, window.innerWidth * 0.95);
    
    // Altura base (Header)
    let height = 70; 
    
    // Altura do conteúdo
    if (isMobile) {
        // Mobile: Altura calculada com base nos itens empilhados
        // Estimativa segura: 70px (header) + (140px * 3 cards) + paddings
        // Vamos deixar 'auto' no GSAP calcular, mas precisamos de um valor para o fallback se necessário
        height = window.innerHeight * 0.8; 
    } else {
        height = 280; // Altura desktop padrão
    }
    
    return { width, height, isMobile };
  };

  const createTimeline = () => {
    const container = navContainerRef.current;
    const bg = navBgRef.current;
    if (!container || !bg) return null;

    // Reset initial states
    // O container começa na direita (CSS right: 2rem).
    // Precisamos calcular quanto mover em X para centralizá-lo na tela.
    
    const { width: finalWidth, height: finalHeight } = calculateFinalDimensions();
    
    // Cálculo do centro
    const screenCenter = window.innerWidth / 2;
    const currentRight = parseFloat(window.getComputedStyle(container).right) || 32;
    const currentWidth = 60; // Botão inicial
    
    // A posição atual do centro do botão em relação à tela:
    const buttonCenterX = window.innerWidth - currentRight - (currentWidth / 2);
    
    // Onde o centro do menu deve ficar:
    const targetCenterX = screenCenter;
    
    // O deslocamento necessário (x)
    const xOffset = targetCenterX - buttonCenterX;

    const tl = gsap.timeline({ paused: true });

    // 1. Expansão do Container (Button -> Menu)
    tl.to(container, {
        width: finalWidth,
        height: finalHeight,
        x: xOffset, // Move para o centro
        duration: 0.6,
        ease: "power4.inOut" // Movimento sofisticado
    });

    // 2. Morph do Background (Círculo -> Retângulo Arredondado)
    tl.to(bg, {
        borderRadius: "1rem",
        duration: 0.6,
        ease: "power3.inOut"
    }, "<");

    // 3. Revelar Conteúdo Interno
    tl.to(".card-nav-content", {
        autoAlpha: 1, // visibility + opacity
        duration: 0.4
    }, "-=0.3");

    // 4. Stagger dos Cards (Entrada elegante)
    tl.fromTo(cardsRef.current, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" },
        "-=0.2"
    );

    // 5. Revelar o CTA interno (Desktop)
    tl.to(".nav-cta-wrapper", {
        opacity: 1,
        duration: 0.3
    }, "<");

    return tl;
  };

  useLayoutEffect(() => {
    if (isExpanded) toggleMenu(); // Close on route change
  }, [location.pathname]);

  // Create timeline only when opening to capture current screen dimensions
  const toggleMenu = () => {
    if (!isExpanded) {
        // OPENING
        const tl = createTimeline();
        if (tl) {
            tlRef.current = tl;
            setIsVisible(true);
            setIsHamburgerOpen(true);
            setIsExpanded(true);
            tl.play();
        }
    } else {
        // CLOSING
        setIsHamburgerOpen(false);
        if (tlRef.current) {
            tlRef.current.reverse().then(() => {
                setIsExpanded(false);
                // Limpa props inline do GSAP para garantir responsividade futura
                gsap.set(navContainerRef.current, { clearProps: "all" });
                gsap.set(navBgRef.current, { clearProps: "all" });
            });
        } else {
            setIsExpanded(false);
        }
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
    <>
        {/* 1. LOGO INDEPENDENTE (Fixado à Esquerda) */}
        <div className={`floating-logo ${!isVisible && !isExpanded ? 'nav-hidden' : ''}`}>
             <Link to="/" className="brand-text">
                W<span className="brand-dot">.</span>S
             </Link>
        </div>

        {/* 2. MENU CONTAINER (Botão à Direita que expande) */}
        <div 
            ref={navContainerRef} 
            className={`card-nav-container ${!isVisible && !isExpanded ? 'nav-hidden' : ''}`}
        >
          <nav ref={navBgRef} className={`card-nav ${isExpanded ? 'open' : ''}`}>
            
            {/* Header interno do menu */}
            <div className="card-nav-top">
              
              {/* CTA (Só aparece quando aberto no Desktop) */}
              <div className="nav-cta-wrapper">
                  <button
                    type="button"
                    className="card-nav-cta-button"
                    onClick={() => {
                        const element = document.getElementById('booking');
                        if(element) {
                            toggleMenu();
                            setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 500);
                        }
                    }}
                  >
                    Agendar Sessão
                  </button>
              </div>

              {/* Trigger (Hamburger) */}
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
            </div>

            {/* Conteúdo dos Cards */}
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
    </>
  );
};

export default Navbar;