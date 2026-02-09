import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface MenuItem {
  label: string;
  ariaLabel?: string;
  link: string;
}

interface SocialItem {
  label: string;
  link: string;
}

interface StaggeredMenuProps {
  position?: 'left' | 'right';
  colors?: string[];
  items?: MenuItem[];
  socialItems?: SocialItem[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoContent?: React.ReactNode; 
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  isFixed?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#F2E8E9', '#E5D0D4', '#FAF7F7'], // Default theme colors
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  className,
  logoContent,
  menuButtonColor = '#1c1917',
  openMenuButtonColor = '#1c1917',
  accentColor = '#754548',
  changeMenuColorOnOpen = true,
  isFixed = false,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef<HTMLElement>(null);
  const preLayersRef = useRef<HTMLDivElement>(null);
  const preLayerElsRef = useRef<HTMLElement[]>([]);
  const plusHRef = useRef<HTMLSpanElement>(null);
  const plusVRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const textInnerRef = useRef<HTMLSpanElement>(null);
  const textWrapRef = useRef<HTMLSpanElement>(null);
  const [textLines, setTextLines] = useState(['Menu', 'Close']);

  const openTlRef = useRef<gsap.core.Timeline | null>(null);
  const closeTweenRef = useRef<gsap.core.Tween | null>(null);
  const spinTweenRef = useRef<gsap.core.Tween | null>(null);
  const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
  const colorTweenRef = useRef<gsap.core.Tween | null>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef<gsap.core.Tween | null>(null);

  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers: HTMLElement[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });
      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: 0 });
      if (toggleBtnRef.current) gsap.set(toggleBtnRef.current, { color: menuButtonColor });
    });
    return () => ctx.revert();
  }, [menuButtonColor, position]);

  const buildOpenTimeline = useCallback(() => {
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-number'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    }
    if (numberEls.length) {
      gsap.set(numberEls, { opacity: 0 });
    }
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0 });
    }
    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
    }

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });
    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;
    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: { each: 0.1, from: 'start' }
        },
        itemsStart
      );
      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: 'power2.out',
            opacity: 1,
            stagger: { each: 0.08, from: 'start' }
          },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;
      if (socialTitle) {
        tl.to(
          socialTitle,
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
          },
          socialsStart
        );
      }
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power3.out',
            stagger: { each: 0.08, from: 'start' },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: 'opacity' });
            }
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, []);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();
    const offscreen = position === 'left' ? -100 : 100;
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-number'));
        if (numberEls.length) {
          gsap.set(numberEls, { opacity: 0 });
        }
        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
        busyRef.current = false;
      }
    });
  }, [position]);

  const animateIcon = useCallback((opening: boolean) => {
    const icon = iconRef.current;
    if (!icon) return;
    spinTweenRef.current?.kill();
    if (opening) {
      spinTweenRef.current = gsap.to(icon, { rotate: 225, duration: 0.8, ease: 'power4.out', overwrite: 'auto' });
    } else {
      spinTweenRef.current = gsap.to(icon, { rotate: 0, duration: 0.35, ease: 'power3.inOut', overwrite: 'auto' });
    }
  }, []);

  const animateColor = useCallback(
    (opening: boolean) => {
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        colorTweenRef.current = gsap.to(btn, {
          color: targetColor,
          delay: 0.18,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen]
  );

  React.useEffect(() => {
    if (toggleBtnRef.current) {
      if (changeMenuColorOnOpen) {
        const targetColor = openRef.current ? openMenuButtonColor : menuButtonColor;
        gsap.set(toggleBtnRef.current, { color: targetColor });
      } else {
        gsap.set(toggleBtnRef.current, { color: menuButtonColor });
      }
    }
  }, [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]);

  const animateText = useCallback((opening: boolean) => {
    const inner = textInnerRef.current;
    if (!inner) return;
    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    const cycles = 3;
    const seq = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);
    setTextLines(seq);

    gsap.set(inner, { yPercent: 0 });
    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;
    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out'
    });
  }, []);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) {
      onMenuOpen?.();
      playOpen();
      // Bloquear scroll
      document.body.style.overflow = 'hidden';
    } else {
      onMenuClose?.();
      playClose();
      // Liberar scroll
      document.body.style.overflow = 'unset';
    }
    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
      document.body.style.overflow = 'unset';
    }
  }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

  // Handler inteligente para links
  const handleLinkClick = (e: React.MouseEvent, link: string) => {
    closeMenu();
    
    // Tratamento para âncoras (#)
    if (link.startsWith('#')) {
      e.preventDefault();
      const elementId = link.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        // Pequeno delay para permitir o fechamento do menu
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 400);
      }
    }
  };

  React.useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = (event: MouseEvent) => {
      // Se clicar fora do painel E fora do botão toggle
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu]);

  const wrapperClasses = isFixed 
      ? `fixed top-0 left-0 w-screen h-screen z-50 overflow-hidden pointer-events-none ${className || ''}`
      : `relative w-full h-full z-40 pointer-events-none ${className || ''}`;

  return (
    <div
      className={wrapperClasses}
      style={accentColor ? { ['--sm-accent' as any]: accentColor } : undefined}
      data-position={position}
    >
      <div ref={preLayersRef} className="absolute top-0 right-0 bottom-0 w-full pointer-events-none z-52 sm:w-[clamp(300px,40vw,500px)]">
        {(() => {
          const raw = colors && colors.length ? colors.slice(0, 4) : ['#1e1e22', '#35353c'];
          let arr = [...raw];
          if (arr.length >= 3) {
            const mid = Math.floor(arr.length / 2);
            arr.splice(mid, 1);
          }
          return arr.map((c, i) => <div key={i} className="sm-prelayer absolute top-0 right-0 h-full w-full" style={{ background: c }} />);
        })()}
      </div>
      <header className="absolute top-0 left-0 w-full flex items-center justify-between p-6 bg-transparent pointer-events-none z-60">
        <div className="flex items-center select-none opacity-0 pointer-events-none transition-opacity duration-300 delay-300" style={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}>
          {logoContent}
        </div>
        <button
          ref={toggleBtnRef}
          className="relative inline-flex items-center gap-2 bg-transparent border-none cursor-pointer font-medium leading-none overflow-visible font-sans uppercase text-[10px] tracking-[0.2em] font-bold pointer-events-auto"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span ref={textWrapRef} className="relative inline-block h-[1em] overflow-hidden whitespace-nowrap min-w-[40px] text-right">
            <span ref={textInnerRef} className="flex flex-col leading-none">
              {textLines.map((l, i) => (
                <span className="block h-[1em] leading-none" key={i}>
                  {l}
                </span>
              ))}
            </span>
          </span>
          <span ref={iconRef} className="relative w-3.5 h-3.5 flex-none inline-flex items-center justify-center will-change-transform">
            <span ref={plusHRef} className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-sm -translate-x-1/2 -translate-y-1/2 will-change-transform" />
            <span ref={plusVRef} className="absolute left-1/2 top-1/2 w-full h-[2px] bg-current rounded-sm -translate-x-1/2 -translate-y-1/2 rotate-90 will-change-transform" />
          </span>
        </button>
      </header>

      <aside id="staggered-menu-panel" ref={panelRef} className={`absolute top-0 right-0 w-full h-full bg-[#FAF7F7] flex flex-col pt-32 px-8 pb-16 overflow-y-auto z-55 pointer-events-auto sm:w-[clamp(300px,40vw,500px)] sm:border-l sm:border-stone-900/5 ${position === 'left' ? 'left-0 right-auto' : ''}`}>
        <div className="flex-1 flex flex-col gap-8 justify-center">
          <ul className="list-none m-0 p-0 flex flex-col gap-6" role="list">
            {items && items.length ? (
              items.map((it, idx) => {
                const isInternal = it.link.startsWith('/') && !it.link.startsWith('http');
                
                return (
                  <li className="relative overflow-hidden leading-tight" key={it.label + idx}>
                    {isInternal ? (
                      <Link
                        to={it.link}
                        className="relative text-stone-900 font-serif font-light text-5xl md:text-6xl cursor-pointer leading-none tracking-tight capitalize inline-block no-underline transition-colors duration-300 hover:text-[#754548]"
                        aria-label={it.ariaLabel}
                        data-index={idx + 1}
                        onClick={() => closeMenu()}
                      >
                         {displayItemNumbering && (
                             <span className="sm-panel-number absolute top-1/2 -left-10 -translate-y-1/2 font-sans text-[10px] font-bold text-[#754548] tracking-widest pointer-events-none select-none opacity-0 transition-opacity">
                                0{idx + 1}
                             </span>
                        )}
                        <span className="sm-panel-itemLabel inline-block will-change-transform origin-bottom">{it.label}</span>
                      </Link>
                    ) : (
                      <a 
                        className="relative text-stone-900 font-serif font-light text-5xl md:text-6xl cursor-pointer leading-none tracking-tight capitalize inline-block no-underline transition-colors duration-300 hover:text-[#754548]"
                        href={it.link} 
                        aria-label={it.ariaLabel} 
                        data-index={idx + 1}
                        onClick={(e) => handleLinkClick(e, it.link)}
                      >
                        {displayItemNumbering && (
                             <span className="sm-panel-number absolute top-1/2 -left-10 -translate-y-1/2 font-sans text-[10px] font-bold text-[#754548] tracking-widest pointer-events-none select-none opacity-0 transition-opacity">
                                0{idx + 1}
                             </span>
                        )}
                        <span className="sm-panel-itemLabel inline-block will-change-transform origin-bottom">{it.label}</span>
                      </a>
                    )}
                  </li>
                )
              })
            ) : (
              <li className="relative overflow-hidden leading-tight" aria-hidden="true">
                <span className="relative text-stone-400 font-serif font-light text-5xl cursor-default leading-none">
                  <span className="sm-panel-itemLabel">No items</span>
                </span>
              </li>
            )}
          </ul>
          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className="mt-auto pt-8 flex flex-col gap-4 border-t border-stone-900/5">
              <h3 className="m-0 text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#754548] sm-socials-title">Conecte-se</h3>
              <ul className="list-none m-0 p-0 flex flex-row items-center gap-6 flex-wrap" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i}>
                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link text-sm font-sans font-medium uppercase tracking-widest text-stone-600 no-underline relative transition-colors duration-300 hover:text-[#754548]">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

export default StaggeredMenu;