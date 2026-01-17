import React, { useRef } from 'react';
import Reveal from './Reveal';
import { GalleryItem } from '../types';
import { motion, useScroll, useTransform } from 'framer-motion';

// Expanded type for grid control with specific SEO alt text
interface GridGalleryItem extends GalleryItem {
  colSpan: string; // Tailwind class like "md:col-span-6"
  height: string; // Tailwind class like "h-[600px]" or aspect ratio
  offsetY?: string; // CSS translation for staggered layout
  altText: string; // Descriptive text for SEO/Accessibility
}

const galleryItems: GridGalleryItem[] = [
  { 
    id: 1, 
    src: "https://picsum.photos/900/1200?random=1", 
    category: "Neotraditional", 
    title: "Lady Face", 
    colSpan: "md:col-span-5", 
    height: "aspect-[3/4]",
    offsetY: "0px",
    altText: "Tatuagem neotradicional de rosto feminino (Lady Face) com ornamentos detalhados em preto e cinza e linhas finas."
  },
  { 
    id: 2, 
    src: "https://picsum.photos/1000/800?random=2", 
    category: "Color Study", 
    title: "Floral Piece", 
    colSpan: "md:col-span-7", 
    height: "aspect-[4/3]",
    offsetY: "md:mt-32", // Push down to break grid line
    altText: "Tatuagem floral colorida com estudo de profundidade e contraste, cobrindo ombro e braço com peônias vibrantes."
  },
  { 
    id: 3, 
    src: "https://picsum.photos/700/1000?random=3", 
    category: "Backpiece", 
    title: "Tiger & Snake", 
    colSpan: "md:col-span-4", 
    height: "aspect-[3/5]",
    offsetY: "md:-mt-24", // Pull up overlaps
    altText: "Fechamento de costas (Backpiece) neotradicional apresentando um tigre e uma serpente em batalha, composição dinâmica."
  },
  { 
    id: 4, 
    src: "https://picsum.photos/700/700?random=4", 
    category: "Detail", 
    title: "Dagger", 
    colSpan: "md:col-span-4", 
    height: "aspect-square",
    offsetY: "md:mt-12",
    altText: "Detalhe macro de tatuagem de adaga perfurando uma rosa, com sombreamento pontilhista (whipshading) e traços sólidos."
  },
  { 
    id: 5, 
    src: "https://picsum.photos/700/1000?random=5", 
    category: "Surrealism", 
    title: "Eye Concept", 
    colSpan: "md:col-span-4", 
    height: "aspect-[3/4]",
    offsetY: "0px",
    altText: "Conceito surrealista de olho com elementos orgânicos e lágrimas, estilo neotradicional blackwork."
  },
];

// Componente para Imagem com Parallax
const ParallaxImage = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // A imagem move um pouco mais devagar que o scroll, criando profundidade
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={`relative overflow-hidden w-full h-full ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-full">
        <img 
          src={src} 
          alt={alt} 
          title={alt}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

const PortfolioItem = ({ item, index }: { item: GridGalleryItem; index: number }) => {
  return (
    <div className={`group relative w-full flex flex-col ${item.offsetY}`}>
      
      {/* Container da Imagem */}
      <div className={`relative w-full ${item.height} overflow-hidden bg-stone-200 mb-6`}>
        <ParallaxImage src={item.src} alt={item.altText} />
        
        {/* Overlay Hover */}
        <div className="absolute inset-0 bg-[#754548]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply pointer-events-none"></div>

        {/* Floating Tag */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548]">Ver Projeto</span>
        </div>
      </div>

      {/* Meta Dados Minimalistas */}
      <div className="flex items-baseline justify-between border-b border-stone-200 pb-2 group-hover:border-[#754548] transition-colors duration-500">
         <div className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl text-stone-900 leading-none group-hover:italic transition-all">
              {item.title}
            </span>
         </div>
         <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 group-hover:text-[#754548]">
            {item.category}
         </span>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="relative pt-32 pb-48 bg-white">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header com Design Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-40">
          <Reveal>
             <h2 className="text-6xl md:text-[8vw] font-serif text-stone-900 leading-[0.8] tracking-tighter">
               Acervo<br/>
               <span className="italic text-[#754548] opacity-80 ml-12">Selecionado</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-12 md:mt-0 max-w-xs text-right">
              <p className="text-stone-500 text-xs leading-relaxed uppercase tracking-wide mb-4">
                [ Arquivo 2023 — 2024 ]
              </p>
              <p className="text-stone-400 font-serif text-lg italic">
                Uma curadoria de narrativas visuais<br/> eternizadas na pele.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Grid Assimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-24">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`${item.colSpan}`}
            >
              <Reveal delay={index % 2 * 100} width="100%">
                <PortfolioItem item={item} index={index} />
              </Reveal>
            </div>
          ))}
        </div>
        
        {/* Footer Link Minimalista */}
        <div className="mt-40 text-center">
           <Reveal>
             <a href="https://instagram.com" className="group inline-flex items-center gap-4">
               <span className="w-12 h-[1px] bg-stone-300 group-hover:w-24 group-hover:bg-[#754548] transition-all duration-500"></span>
               <span className="font-serif italic text-2xl text-stone-500 group-hover:text-stone-900 transition-colors">Explorar arquivo completo</span>
               <span className="w-12 h-[1px] bg-stone-300 group-hover:w-24 group-hover:bg-[#754548] transition-all duration-500"></span>
             </a>
           </Reveal>
        </div>

      </div>

      {/* SEPARATOR: ORGANIC CURVE TO ABOUT SECTION (#FDF7F8) */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px] fill-[#FDF7F8]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="transform scale-y-[-1] origin-center"></path>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;