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
  links: NavLink[];
}

const Navbar: React.FC = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  const navContainerRef = useRef<HTMLDivElement>(null);
  const navBgRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  
  // Refs para lógica de scroll
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const location = useLocation();

  const items: NavItem[] = [
    {
      label: "Navegação",
      links: [
        { label: "Início", href: "/", ariaLabel: "Ir para Início" },
        { label: "O Processo", href: "/processo", ariaLabel: "Ver Processo" },
        { label: "Portfólio", href: "/#gallery", ariaLabel: "Ver Portfólio" }
      ]
    },
    {
      label: "Contato",
      links: [
        { label: "Flash Day", href: "/#flashday", ariaLabel: "Ver Flash Days" },
        { label: "WhatsApp", href: "https://wa.me/5511999999999", ariaLabel: "Contato WhatsApp", external: true },
        { label: "Agendar", href: "#booking", ariaLabel: "Agendar Sessão", external: false }
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

  // --- ANIMATION LOGIC (HEAVY PHYSICS) ---

  const calculateAnimationValues = () => {
    const screenW = window.innerWidth;
    const isMobile = screenW <= 1024;
    
    // Dimensões Finais
    // Desktop: Pílula larga (agora 940px para evitar quebra de linha) e baixa (80px)
    // Mobile: Bloco quase tela cheia
    const finalWidth = isMobile ? Math.min(screenW * 0.92, 400) : Math.min(screenW * 0.95, 940);
    const finalHeight = isMobile ? Math.min(window.innerHeight * 0.7, 500) : 80;
    
    // Cálculos de Centralização X
    const rightMargin = 32; // 2rem
    const xTranslation = rightMargin + (finalWidth / 2) - (screenW / 2);

    return { finalWidth, finalHeight, xTranslation, isMobile };
  };

  const createTimeline = () => {
    const container = navContainerRef.current;
    const bg = navBgRef.current;
    const content = contentRef.current;

    if (!container || !bg || !content) return null;

    const { finalWidth, finalHeight, xTranslation, isMobile } = calculateAnimationValues();

    const tl = gsap.timeline({ paused: true });

    // 1. ANIMAÇÃO PRINCIPAL (Container)
    tl.to(container, {
        width: finalWidth,
        height: finalHeight,
        x: xTranslation, 
        duration: 0.85,
        ease: "power4.inOut", 
        onStart: () => {
             gsap.set(container, { zIndex: 1000 });
        },
        onComplete: () => {
             gsap.set(content, { pointerEvents: "auto" });
        },
        onReverseComplete: () => {
             gsap.set(content, { pointerEvents: "none" });
             gsap.set(container, { clearProps: "width,height,x,zIndex" });
             gsap.set(bg, { clearProps: "borderRadius" });
        }
    });

    // 2. MORPH DO BACKGROUND
    tl.to(bg, {
        borderRadius: isMobile ? "24px" : "999px",
        duration: 0.85,
        ease: "power4.inOut"
    }, "<");

    // 3. CONTEÚDO
    tl.fromTo(content, 
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" },
        "-=0.5"
    );

    // 4. LINKS
    if (linksRef.current.length > 0) {
        tl.fromTo(linksRef.current,
            { opacity: 0, x: 20 },
            { opacity: 1, x: 0, duration: 0.4, stagger: 0.03, ease: "power2.out" },
            "-=0.4"
        );
    }

    return tl;
  };

  useLayoutEffect(() => {
    if (isExpanded) toggleMenu(); // Close on route change
  }, [location.pathname]);

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
            });
        } else {
            setIsExpanded(false);
        }
    }
  };

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#') || href.startsWith('/#')) {
        const id = href.includes('#') ? href.split('#')[1] : href;
        const element = document.getElementById(id);
        if (element) {
             toggleMenu();
             setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 500);
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
            
            {/* Header interno do menu (apenas o botão X fica aqui visualmente) */}
            <div className="card-nav-top">
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

            {/* Conteúdo dos Links (Centralizado) */}
            <div ref={contentRef} className="card-nav-content" aria-hidden={!isExpanded}>
              
              {items.map((group, gIdx) => (
                <React.Fragment key={gIdx}>
                    {/* Grupo de Links */}
                    <div className="nav-card">
                        <p className="nav-card-label">{group.label}</p>
                        <div className="nav-card-links">
                            {group.links.map((lnk, lIdx) => {
                                const Component = lnk.external ? 'a' : Link;
                                const props = lnk.external 
                                    ? { href: lnk.href, target: "_blank", rel: "noreferrer" } 
                                    : { to: lnk.href, onClick: (e: React.MouseEvent) => handleLinkClick(e, lnk.href) };

                                return (
                                    <div key={`${lnk.label}-${lIdx}`} ref={addToRefs}>
                                        <Component 
                                            className="nav-card-link" 
                                            aria-label={lnk.ariaLabel}
                                            {...props as any}
                                        >
                                            {lnk.label}
                                            {lnk.external && <ArrowUpRight className="nav-card-link-icon" />}
                                        </Component>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* Divisor Visual */}
                    {gIdx < items.length - 1 && <div className="nav-divider"></div>}
                </React.Fragment>
              ))}

            </div>
          </nav>
        </div>
    </>
  );
};

export default Navbar;