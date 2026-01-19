import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram, Volume2, VolumeX } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollY = useScrollPosition();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  // Audio State
  const [isMuted, setIsMuted] = useState(false); // Start unmuted logic (audio auto-starts after preloader)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio
  useEffect(() => {
    // Note: In a real app, you would host this file. Using a placeholder/data-uri for now implies logic.
    // Ideally use a very long, subtle drone sound.
    audioRef.current = new Audio('https://cdn.pixabay.com/audio/2022/08/02/audio_884fe92c21.mp3'); // Placeholder Drone Sound
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2; // Low volume background
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(e => console.log("Audio play blocked", e));
        setIsMuted(false);
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  // Expose play function globally or via context usually, but for this structure:
  // We assume App.tsx or Preloader triggers the first play.
  // Here we just toggle.
  
  // Auto-play attempt on mount (often blocked without interaction, but Preloader interaction helps)
  useEffect(() => {
      if(audioRef.current && !isMuted) {
          const playPromise = audioRef.current.play();
          if (playPromise !== undefined) {
              playPromise.catch(() => {
                  // Auto-play was prevented
                  setIsMuted(true);
              });
          }
      }
  }, []);


  // Scroll Direction Logic
  useEffect(() => {
    if (scrollY < lastScrollY.current || scrollY < 50) {
      setIsVisible(true);
    } else if (scrollY > 50 && scrollY > lastScrollY.current) {
      setIsVisible(false);
    }
    lastScrollY.current = scrollY;
  }, [scrollY]);

  // Body Scroll Lock Logic
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: 'Galeria', href: '#gallery' },
    { name: 'Processo', href: '#process' },
    { name: 'Sobre', href: '#about' },
    { name: 'Info', href: '#faq' },
  ];

  const isScrolled = scrollY > 50;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
        ${isVisible ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div className={`
            w-full transition-all duration-700
            ${isScrolled 
                ? 'bg-[#FAF7F7]/80 backdrop-blur-md border-b border-pantone-sophisticated/10 py-3 shadow-sm' 
                : 'bg-transparent py-8'}
        `}>
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center">
            
            {/* Brand Logo - Sophisticated Color */}
            <a href="#" className="group flex items-center z-50 relative">
              <span className={`font-serif text-2xl tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-pantone-sophisticated' : 'text-stone-900'}`}>
                W<span className="text-pantone-sophisticated">.</span>S
              </span>
            </a>

            {/* Desktop Nav - Centered & Floating */}
            <div className="hidden md:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="flex items-center gap-10 px-8 py-3 rounded-full transition-all duration-500">
                    {navLinks.map((link) => (
                        <a
                        key={link.name}
                        href={link.href}
                        className={`relative text-[11px] font-medium uppercase tracking-[0.15em] hover:text-pantone-sophisticated transition-colors py-1 group ${isScrolled ? 'text-stone-600' : 'text-stone-600'}`}
                        >
                        {link.name}
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-pantone-sophisticated transition-all duration-300 group-hover:w-full opacity-80"></span>
                        </a>
                    ))}
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              
              {/* Sound Toggle */}
              <button 
                onClick={toggleAudio}
                className={`hidden md:flex items-center gap-2 text-[9px] uppercase tracking-widest font-bold transition-colors ${isScrolled ? 'text-pantone-sophisticated' : 'text-stone-400 hover:text-stone-900'}`}
              >
                 {isMuted ? <VolumeX size={16} strokeWidth={1.5} /> : <Volume2 size={16} strokeWidth={1.5} />}
                 <span className="w-8">{isMuted ? 'OFF' : 'ON'}</span>
              </button>

              <div className="w-[1px] h-4 bg-stone-300 hidden md:block"></div>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className={`hidden md:block transition-colors hover:scale-110 duration-300 ${isScrolled ? 'text-pantone-sophisticated' : 'text-stone-500 hover:text-pantone-sophisticated'}`}
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              
              <a
                href="#booking"
                className={`
                    relative px-6 py-2 overflow-hidden rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border group
                    ${isScrolled 
                        ? 'border-pantone-sophisticated text-pantone-sophisticated hover:bg-pantone-sophisticated hover:text-white' 
                        : 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'}
                `}
              >
                <span className="relative z-10 transition-colors">Agendar</span>
              </a>

              {/* Mobile Menu Trigger */}
              <button
                className={`md:hidden z-50 p-1 hover:text-pantone-sophisticated transition-colors ${isScrolled ? 'text-pantone-sophisticated' : 'text-stone-900'}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-[#FAF7F7] z-40 flex flex-col items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'clip-circle-full' : 'clip-circle-0 pointer-events-none'}`}>
        <style>{`.clip-circle-0 { clip-path: circle(0% at 100% 0); } .clip-circle-full { clip-path: circle(140% at 100% 0); }`}</style>
        
        {/* Background Texture for Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none"></div>

        <nav className="flex flex-col items-center space-y-10 relative z-10">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-serif text-5xl font-light text-stone-900 hover:text-pantone-sophisticated hover:italic transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-12 h-[1px] bg-pantone-sophisticated/30 my-8"></div>
          
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="text-xs font-sans uppercase tracking-[0.2em] font-bold text-pantone-sophisticated border-b border-pantone-sophisticated/30 pb-1 hover:border-pantone-sophisticated transition-all"
          >
            WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;