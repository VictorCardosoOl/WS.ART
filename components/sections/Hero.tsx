import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1. Title Entrance (Scale + Fade UP)
      tl.from(titleRef.current, {
        y: 100,
        autoAlpha: 0,
        duration: 1.5,
        delay: 0.2
      });

      // 2. Bottom Strip Entrance (Slide Up)
      tl.from(".hero-strip", {
        yPercent: 100,
        autoAlpha: 0,
        duration: 1.0,
        ease: "expo.out"
      }, "-=1.0");

      // 3. Details Fade In
      tl.from(".hero-fade", {
        y: 20,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1
      }, "-=0.5");

      // 4. Parallax Effect
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // Title Slight Parallax
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Placeholder image logic
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1598371624833-255d65427c3c?q=80&w=1920&auto=format&fit=crop";
  };

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-[#FAF7F7] z-10 flex flex-col">

      {/* Background Grain/Noise (Subtle) */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none z-0 opacity-20">
        <div className="w-full h-full bg-stone-200 opacity-20 mix-blend-multiply"></div>
      </div>

      {/* TOP BAR: Brand & Location */}
      <div className="absolute top-0 left-0 w-full px-6 py-8 z-30 flex justify-between items-start pointer-events-none mix-blend-difference text-stone-400">
        <div className="hero-fade flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-stone-900">William Siqueira</span>
          <span className="text-[10px] uppercase tracking-widest">Tattoo Artist // Brasil</span>
        </div>
      </div>

      {/* CENTER: MASSIVE TITLE */}
      <div className="flex-grow flex items-center justify-center relative z-20 overflow-hidden">
        {/* 
                   Using standard h1 without SplitText to ensure raw visibility. 
                   Gradient text for style. Updated to harmonious Rose palette.
                */}
        <h1
          ref={titleRef}
          className="font-sans font-black text-[22vw] leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#E5D0D4] to-[#754548] select-none opacity-100 will-change-transform"
          style={{ visibility: 'visible' }} // Force visibility
        >
          WILLIAM
        </h1>
      </div>

      {/* BOTTOM STRIP: Image & Tagline */}
      <div className="hero-strip relative h-[35vh] w-full min-h-[250px] z-20 bg-[#754548] overflow-hidden flex items-end">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            ref={imageRef}
            src="/src/assets/portfolio_01.png"
            alt="Background Texture"
            onError={handleImageError}
            className="w-full h-full object-cover opacity-60 filter grayscale contrast-125 mix-blend-multiply"
          />
          {/* Gradient Overlay for Text Readability - Harmonious Rose Tone */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#754548]/90 via-[#754548]/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 md:p-12 w-full max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-xl">
            <span className="hero-fade block text-[10px] font-bold uppercase tracking-widest text-[#D48C95] mb-4">
              São Paulo • Est. 2018
            </span>
            <h2 className="hero-fade font-serif text-3xl md:text-5xl text-white font-light leading-tight">
              Arte autoral, anatomia e <br />
              <span className="italic text-stone-300">narrativa neotradicional.</span>
            </h2>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;