import React from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import ParallaxImage from '../ui/ParallaxImage';

const PortfolioItem = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div className={`group relative w-full flex flex-col ${item.offsetY}`}>
      
      {/* Container da Imagem - O ParallaxImage cuida do overflow e rounded interno via clip-path */}
      <div className={`relative w-full ${item.height} mb-6 shadow-sm`}>
        <ParallaxImage src={item.src} alt={item.altText} />
        
        {/* Floating Tag Interativa */}
        <div className="absolute top-4 right-4 z-20">
             <div className="bg-white/90 backdrop-blur px-3 py-1 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 rounded-full shadow-lg">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548]">Ver Projeto</span>
            </div>
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
    <section id="gallery" className="relative pt-32 pb-48 bg-white overflow-hidden">
      
      {/* Background Decorativo */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(117,69,72,0.03)_0%,_transparent_70%)] blur-[80px] pointer-events-none z-0"></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
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
          {PORTFOLIO_ITEMS.map((item, index) => (
            <div 
              key={item.id} 
              className={`${item.colSpan}`}
            >
              {/* Removemos o Reveal do container para deixar o ParallaxImage controlar a entrada via Mask */}
              <PortfolioItem item={item} />
            </div>
          ))}
        </div>
        
        {/* Footer Link Minimalista */}
        <div className="mt-40 text-center">
           <Reveal>
             <a href="https://instagram.com" className="group inline-flex items-center gap-4 cursor-none" data-cursor="Instagram">
               <span className="w-12 h-[1px] bg-stone-300 group-hover:w-24 group-hover:bg-[#754548] transition-all duration-500"></span>
               <span className="font-serif italic text-2xl text-stone-500 group-hover:text-stone-900 transition-colors">Explorar arquivo completo</span>
               <span className="w-12 h-[1px] bg-stone-300 group-hover:w-24 group-hover:bg-[#754548] transition-all duration-500"></span>
             </a>
           </Reveal>
        </div>

      </div>

      {/* SEPARATOR: ORGANIC CURVE */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 opacity-30">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[120px] fill-[#754548]">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="transform scale-y-[-1] origin-center"></path>
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;