import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Fade in intro text
    tl.fromTo(textRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.2 }
    );

    // Fade in location text
    tl.fromTo(locationRef.current,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 1.5, ease: "power3.out" },
      "-=1.2"
    );

    // Stagger in letters of the title
    if (titleRef.current) {
        const letters = titleRef.current.children;
        tl.fromTo(letters,
            { y: "100%", opacity: 0 },
            { y: "0%", opacity: 1, duration: 1.5, stagger: 0.1, ease: "power4.out" },
            "-=1"
        );
    }

  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-rose-50 bg-noise pt-32 pb-0">
      
      {/* Decorative Gradient Blurs - Darker/More Elegant */}
      <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-rose-200/30 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] bg-rose-300/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col h-full">
        
        {/* Top Section: Description */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="hidden md:block md:col-span-5"></div>
          <div className="md:col-span-7 flex flex-col items-end text-right">
             <div ref={textRef} className="max-w-xl opacity-0">
               <p className="font-serif text-2xl md:text-3xl leading-snug text-stone-800 italic font-light mb-4">
                 "A pele não é o limite, <br/> é o começo da narrativa."
               </p>
               <p className="font-sans text-xs md:text-sm tracking-widest uppercase text-stone-500 max-w-sm ml-auto leading-relaxed">
                 William Siqueira é um estúdio especializado em neotradicional. 
                 Criamos arte perene que respeita a anatomia e traduz memórias em tinta.
               </p>
             </div>
          </div>
        </div>

        {/* Middle Section: Location & CTA - Moved UP significantly */}
        <div className="flex-grow flex items-center md:items-start relative z-20">
           <div className="grid grid-cols-2 md:grid-cols-12 gap-4 w-full">
              
              {/* Studio Location - Now higher up */}
              <div ref={locationRef} className="col-span-2 md:col-span-4 text-left opacity-0 pb-12 md:pb-0">
                <span className="block text-xs font-bold tracking-[0.3em] uppercase text-rose-600 mb-2">Localização</span>
                <p className="font-serif text-xl md:text-2xl text-stone-900 leading-none">
                  Estúdio Privado<br/>
                  <span className="italic text-stone-500">São Paulo, Brasil</span>
                </p>
              </div>
              
              <div className="hidden md:block md:col-span-4"></div>
              
              {/* Circular CTA */}
              <div className="col-span-2 md:col-span-4 flex justify-end">
                <a href="#booking" className="group relative flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full border border-stone-800/20 hover:border-stone-800 transition-all duration-500 cursor-pointer bg-white/30 backdrop-blur-sm">
                  <div className="absolute inset-0 rounded-full border border-rose-400 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"></div>
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-stone-900 group-hover:scale-105 transition-transform z-10 text-center">
                    Orçar <br/> Projeto
                  </span>
                </a>
              </div>
           </div>
        </div>

      </div>

      {/* Massive Bottom Text - Full Width Edge to Edge */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-auto z-0 px-2 md:px-0">
        <h1 
          ref={titleRef}
          className="flex justify-between w-full font-serif font-medium text-stone-900 text-[18vw] md:text-[21vw] leading-[0.75] tracking-tighter mix-blend-darken pt-10 pb-4 md:pb-2"
        >
          {/* Breaking letters to span fully across with flex justify-between */}
          <span className="transform translate-y-4">S</span>
          <span>I</span>
          <span>Q</span>
          <span>U</span>
          <span>E</span>
          <span>I</span>
          <span>R</span>
          <span className="transform translate-y-4">A</span>
        </h1>
        
        {/* Overlay texture for the text */}
        <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay"></div>
      </div>

    </section>
  );
};

export default Hero;