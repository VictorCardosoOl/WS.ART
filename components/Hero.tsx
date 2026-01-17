import React, { useRef } from 'react';
import Reveal from './Reveal';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax: Text moves down slower than background (0 to 50% of height)
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-rose-50">
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none mix-blend-multiply animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10 h-full flex flex-col pt-32 md:pt-40 pb-0">
        
        {/* Intro Text - Semantic H2 */}
        <div className="flex flex-col md:flex-row justify-end items-start w-full flex-grow">
            <Reveal delay={200}>
              <div className="max-w-md text-right md:text-right mt-8 md:mt-0">
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 leading-tight font-light tracking-tight">
                  A <span className="font-bold text-rose-500">WILLIAM SIQUEIRA</span> é um estúdio de arte na pele que elabora experiências únicas.
                </h2>
                <p className="font-sans text-[11px] md:text-xs text-stone-600 mt-6 leading-relaxed tracking-widest uppercase font-bold">
                  Conectamos sua história à sua anatomia,<br/> transformando valores em narrativas visuais.
                </p>
              </div>
            </Reveal>
        </div>

        {/* Info Line */}
        <div className="relative w-full flex justify-between items-end pb-8 md:pb-12 z-20">
            <div className="block">
               <Reveal>
                  <div className="flex flex-col gap-2">
                    <span className="block text-[10px] font-black uppercase tracking-ultra text-stone-900 border-l-2 border-stone-900 pl-3">Estúdio Privado</span>
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-rose-600 pl-3">São Paulo, Brasil</span>
                  </div>
               </Reveal>
            </div>
        </div>

        {/* Massive Parallax Typography H1 */}
        <div className="w-full flex justify-center items-end leading-none z-10 pb-0 md:pb-0 px-2 md:px-0 relative">
           <motion.div 
             style={{ y: yText, opacity: opacityText }}
             className="w-full"
           >
              <h1 className="font-sans font-black text-[19.5vw] text-stone-950 tracking-tighter text-center leading-[0.75] mix-blend-multiply opacity-90 select-none w-full hover:scale-[1.01] transition-transform duration-[2000ms] ease-out-expo">
                WILLIAM
              </h1>
           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;