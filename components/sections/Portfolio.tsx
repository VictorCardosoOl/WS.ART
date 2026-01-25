import React, { useRef, useLayoutEffect } from 'react';
import { PORTFOLIO_STORIES } from '../../data/portfolio';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Portfolio: React.FC = () => {
  const componentRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Simple parallax for the header
      gsap.to(".watermark-text", {
        xPercent: 5,
        scrollTrigger: {
          trigger: componentRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={componentRef} id="acervo" className="relative pt-32 pb-64 bg-[#FFFFFF] overflow-hidden">

      {/* EXACT HEADER MATCH */}
      <div className="relative w-full mb-40 px-4 md:px-12 flex flex-col items-center">

        {/* Top Label (Like Print "The Symbol of Freedom") */}
        <div className="w-full max-w-[1920px] flex justify-between border-b border-[#E5E5E5] pb-4 mb-20">
          <span className="font-sans text-[11px] text-[#8F5E62] uppercase tracking-widest">Selected Works</span>
          <div className="hidden md:flex gap-8">
            <span className="font-sans text-[11px] text-[#1A1818] uppercase tracking-widest cursor-pointer hover:text-[#8F5E62]">All</span>
            <span className="font-sans text-[11px] text-stone-400 uppercase tracking-widest cursor-pointer hover:text-[#8F5E62]">Neotraditional</span>
            <span className="font-sans text-[11px] text-stone-400 uppercase tracking-widest cursor-pointer hover:text-[#8F5E62]">Fine Line</span>
          </div>
        </div>

        {/* VISUAL LAYOUT: SENSEUTIVELY */}
        <div className="relative w-full text-center">
          {/* Watermark: Massive, Grey, Sharp */}
          <h1 className="watermark-text font-sans font-bold text-[19vw] leading-[0.75] tracking-tighter text-[#F0F0F0] select-none scale-y-110 origin-bottom">
            SENSEUTIVELY
          </h1>

          {/* Script: Lowercase, Black, Overlapping centered */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4 z-10">
            <span className="font-script text-[5rem] md:text-[8rem] text-[#1A1818] leading-none whitespace-nowrap">
              about you
            </span>
          </div>
        </div>
      </div>

      {/* RAW IMAGE GRID (Sharp, No Gap? Or Specific Layout) */}
      <div className="container mx-auto px-0 max-w-[1920px]">

        {PORTFOLIO_STORIES.map((story, index) => {
          const isEven = index % 2 === 0;

          return (
            <div key={story.id} className="mb-40 last:mb-0">

              {/* Project Header (Like Print Top-Left Text) */}
              <div className="px-6 md:px-24 mb-6">
                <h3 className="font-serif italic text-3xl text-[#1A1818]">{story.title}</h3>
                <div className="h-[1px] w-full bg-[#E5E5E5] mt-4"></div>
              </div>

              {/* Images: Raw, Sharp, High Contrast B&W */}
              <div className={`flex flex-col md:flex-row w-full aspect-[16/9] md:aspect-[21/9]`}>

                {/* Image 1: Large */}
                <div className={`w-full md:w-2/3 h-full relative overflow-hidden bg-stone-50 ${isEven ? 'order-1' : 'order-2'}`}>
                  <img
                    src={story.mainImage}
                    alt={story.title}
                    className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                  />
                  <span className="absolute bottom-6 left-6 font-sans text-[10px] uppercase tracking-widest text-white/80 mix-blend-difference">
                    {story.id} — Main View
                  </span>
                </div>

                {/* Image 2: Detail (Side) */}
                <div className={`w-full md:w-1/3 h-full relative overflow-hidden border-l border-white ${isEven ? 'order-2' : 'order-1'}`}>
                  <img
                    src={story.detailImage}
                    alt="Detail"
                    className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                  />
                  <span className="absolute bottom-6 left-6 font-sans text-[10px] uppercase tracking-widest text-white/80 mix-blend-difference">
                    Texture Detail
                  </span>
                </div>

              </div>
            </div>
          );
        })}

      </div>

      {/* Divider Icon */}
      <div className="flex justify-center mt-32 opacity-30">
        <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
          <path d="M15 50C15 50 17 30 28 15" stroke="#1A1818" />
          <path d="M15 30C15 30 15 10 15 0" stroke="#1A1818" />
          <path d="M15 20C15 20 22 12 26 5" stroke="#1A1818" strokeWidth="0.5" />
          <path d="M15 25C15 25 8 18 4 10" stroke="#1A1818" strokeWidth="0.5" />
        </svg>
      </div>

    </section>
  );
};

export default Portfolio;