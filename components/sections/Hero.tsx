import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Splitting from 'splitting';
import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 0. Split Text for "Word/Char" animation
      if (titleRef.current) {
        const results = Splitting({ target: titleRef.current, by: 'chars' });
        // Splitting adds .char classes
      }

      // 1. Background Parallax (Physics: Depth Layer)
      // Moves slower than scroll (yPercent: 30)
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

      // 2. Title Entrance (Staggered Characters)
      // Physics: Inertia - start separated, come together
      const chars = titleRef.current?.querySelectorAll('.char');
      if (chars && chars.length > 0) {
        tl.from(chars, {
          y: 120,
          rotateY: 10,
          autoAlpha: 0,
          stagger: 0.04, // Law of Rhythm
          duration: 1.2,
          ease: "back.out(1.2)" // Slight overshoot for "heavy" feel
        }, 0.2);
      } else {
        // Fallback if Splitting fails
        tl.from(titleRef.current, {
          y: 100,
          autoAlpha: 0,
          duration: 1.2
        }, 0.2);
      }

      // 3. Title Parallax (Physics: Foreground Layer)
      // Moves faster than background but slower than scroll for depth
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          yPercent: -15, // Opposing motion
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }

      // 4. Bottom Strip Entrance (Heavy Lifting)
      tl.from(".hero-strip", {
        yPercent: 101, // Start fully hidden
        duration: 1.4,
        ease: "expo.out" // Standard Awwwards easing for panels
      }, "-=1.0");

      // 5. Image Reveal inside Strip
      if (imageRef.current) {
        tl.from(imageRef.current, {
          scale: 1.2, // Subtle zoom out
          duration: 1.8,
          ease: "out"
        }, "-=1.4");
      }

      // 6. Details Stagger (Law of Rhythm)
      tl.from(".hero-fade", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.08
      }, "-=0.8");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1598371624833-255d65427c3c?q=80&w=1920&auto=format&fit=crop";
  };

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden bg-[#FAF7F7] z-10 flex flex-col">

      {/* Background Grain/Noise (Subtle) */}
      <div ref={bgRef} className="absolute inset-0 pointer-events-none z-0 opacity-20 transform-gpu will-change-transform">
        <div className="w-full h-full bg-stone-200 opacity-20 mix-blend-multiply"></div>
      </div>

      {/* TOP BAR: Brand & Location */}
      <div className="absolute top-0 left-0 w-full px-6 py-8 z-30 flex justify-between items-start pointer-events-none mix-blend-difference text-stone-400">
        <div className="hero-fade flex flex-col gap-1">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#2A2425]">William Siqueira</span>
          <span className="text-[10px] uppercase tracking-widest">Tattoo Artist // Brasil</span>
        </div>
      </div>

      {/* CENTER: MASSIVE TITLE */}
      <div className="flex-grow flex items-center justify-center relative z-20 overflow-hidden perspective-[1000px]">
        {/* 
                   Used Splitting.js (via useEffect) to target this h1. 
                   Removed 'text-transparent' and gradient temporarily to ensure splitting works visibly, 
                   or re-apply class to chars. 
                   For Awwwards style, solid heavy ink or deep accent often looks better than gradient for splitting.
                   Let's stick to the Tone requested: #8F5E62 but applying to text.
                */}
        <h1
          ref={titleRef}
          className="font-sans font-black text-[22vw] leading-none tracking-tighter text-[#8F5E62] select-none opacity-100 will-change-transform"
          data-splitting
          style={{ visibility: 'visible' }}
        >
          WILLIAM
        </h1>
      </div>

      {/* BOTTOM STRIP: Image & Tagline */}
      <div className="hero-strip relative h-[35vh] w-full min-h-[250px] z-20 bg-[#8F5E62] overflow-hidden flex items-end">
        {/* Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            ref={imageRef}
            src="/src/assets/portfolio_01.png"
            alt="Background Texture"
            onError={handleImageError}
            className="w-full h-full object-cover opacity-60 filter grayscale contrast-125 mix-blend-multiply will-change-transform"
          />
          {/* Gradient Overlay for Text Readability - Harmonious Rose Tone */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#8F5E62]/90 via-[#8F5E62]/50 to-transparent"></div>
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