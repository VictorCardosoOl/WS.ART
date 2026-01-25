import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax refinado: movimento suave e consistente
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const scaleBase = useTransform(scrollYProgress, [0, 1], [1.1, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, scale: scaleBase }} className="w-full h-full will-change-transform">
        <img
          src={src}
          alt={alt}
          title={alt}
          className="
            w-full h-full object-cover 
            grayscale group-hover:grayscale-0 
            transition-all duration-[1000ms] 
            ease-[cubic-bezier(0.22,1,0.36,1)] 
            will-change-transform
          "
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </div>
  );
};

const BentoCard = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div
      className={`group relative w-full h-full overflow-hidden rounded-sm bg-stone-100 cursor-pointer flex flex-col`}
      data-cursor="VER PROJETO"
    >
      <ParallaxImage src={item.src} alt={item.altText} className="absolute inset-0" />

      {/* Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] z-10"></div>

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]">
        <div className="flex items-center gap-3 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-[1000ms] delay-100 ease-[cubic-bezier(0.22,1,0.36,1)]">
          <span className="h-[1px] w-6 bg-rose-400"></span>
          <span className="font-sans text-meta font-bold text-rose-200">
            {item.category}
          </span>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-3 max-w-[85%]">
            <h3 className="font-serif text-3xl md:text-fluid-h3 text-white leading-tight-editorial font-semibold tracking-tighter group-hover:text-rose-50 transition-colors duration-[1000ms] uppercase">
              {item.title}
            </h3>

            {item.description && (
              <p className="font-sans text-[10px] text-stone-300 leading-relaxed tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-[1000ms] delay-200 transform translate-y-4 group-hover:translate-y-0 border-l border-white/20 pl-3 hidden md:block ease-[cubic-bezier(0.22,1,0.36,1)]">
                {item.description}
              </p>
            )}
          </div>

          <div className="overflow-hidden w-8 h-8 flex items-center justify-center flex-shrink-0">
            <ArrowUpRight
              className="text-white transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              size={24}
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-32 pb-40 bg-white overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E5D0D4]/30 via-white to-white pointer-events-none z-0"></div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-10 2xl:px-20 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-stone-100 pb-6">
          <Reveal>
            <h2 className="font-serif text-fluid-h1 text-stone-900 leading-tight-editorial tracking-tighter uppercase">
              Acervo<span className="text-[#754548] text-4xl">.</span>
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-8 md:mt-0 text-right">
              <p className="font-sans text-meta font-bold text-stone-400">
                Obras selecionadas 2023 — 2024
              </p>
            </div>
          </Reveal>
        </div>

        {/* 
            GRID LAYOUT FIXES:
            - Adicionado h-full no Reveal para garantir que o componente ocupe toda a célula do grid
            - Estrutura Bento Grid mantida
        */}
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-auto md:auto-rows-[380px] gap-4 md:gap-6">
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div
              key={item.id}
              className={`${item.colSpan} relative w-full h-[350px] md:h-full`}
            >
              <Reveal delay={index * 50} width="100%" className="h-full">
                <div className={`w-full h-full absolute inset-0 md:relative`}>
                  <BentoCard item={item} />
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center" data-cursor="EXPLORAR">
          <Reveal>
            <a href="https://instagram.com" className="group inline-flex flex-col items-center gap-3 p-4">
              <span className="font-serif text-2xl text-stone-400 group-hover:text-stone-900 transition-colors duration-500 uppercase tracking-tight">
                Ver arquivo completo
              </span>
              <div className="relative w-[1px] h-12 md:h-16 bg-stone-200 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[#754548] -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out-expo"></div>
              </div>
            </a>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full flex justify-center overflow-hidden z-10 text-stone-200">
        <svg width="100%" height="40" viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-[30px] md:h-[40px] stroke-current fill-none opacity-60">
          <path d="M0,20 Q150,25 300,18 T600,22 T900,18 T1200,20" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d="M50,22 Q200,28 350,16 T650,24 T950,16 T1150,22" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeOpacity="0.5" />
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;