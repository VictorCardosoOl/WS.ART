import React from 'react';
import Reveal from './Reveal';
import { GalleryItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface GridGalleryItem extends GalleryItem {
  colSpan: string; // Classes de largura (ex: md:col-span-6)
  offset?: string; // Classes de deslocamento vertical (ex: md:mt-24)
  aspect: string;  // Classes de proporção (ex: aspect-[3/4])
}

const galleryItems: GridGalleryItem[] = [
  { 
    id: 1, 
    src: "https://picsum.photos/900/1200?random=1", 
    category: "Neotraditional", 
    title: "Lady Face", 
    colSpan: "md:col-span-5", 
    offset: "md:mt-0",
    aspect: "aspect-[3/4]" 
  },
  { 
    id: 2, 
    src: "https://picsum.photos/1000/800?random=2", 
    category: "Color Study", 
    title: "Floral Piece", 
    colSpan: "md:col-span-7", 
    offset: "md:mt-32", // Deslocamento para criar ritmo
    aspect: "aspect-[4/3]" 
  },
  { 
    id: 3, 
    src: "https://picsum.photos/700/1000?random=3", 
    category: "Backpiece", 
    title: "Tiger & Snake", 
    colSpan: "md:col-span-4", 
    offset: "md:mt-12",
    aspect: "aspect-[3/5]" 
  },
  { 
    id: 4, 
    src: "https://picsum.photos/700/700?random=4", 
    category: "Detail", 
    title: "Dagger", 
    colSpan: "md:col-span-4", 
    offset: "md:mt-48", // Deslocamento forte
    aspect: "aspect-square" 
  },
  { 
    id: 5, 
    src: "https://picsum.photos/700/1000?random=5", 
    category: "Surrealism", 
    title: "Eye Concept", 
    colSpan: "md:col-span-4", 
    offset: "md:mt-0",
    aspect: "aspect-[3/4]" 
  },
  { 
    id: 6, 
    src: "https://picsum.photos/1400/800?random=6", 
    category: "Full Body", 
    title: "The Phoenix", 
    colSpan: "md:col-span-12", 
    offset: "md:mt-24",
    aspect: "aspect-[21/9]" 
  },
];

const PortfolioItem = ({ item, index }: { item: GridGalleryItem; index: number }) => {
  return (
    <div className={`group relative w-full h-full flex flex-col`}>
      
      {/* Container da Imagem */}
      <div className={`relative w-full ${item.aspect} overflow-hidden bg-stone-200`}>
        <img 
            src={item.src} 
            alt={item.title} 
            className="w-full h-full object-cover grayscale transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:grayscale-0"
            loading="lazy"
        />
        
        {/* Overlay Hover Minimalista */}
        <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Botão Flutuante (Aparece no Hover) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
           <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-stone-900 shadow-xl">
              <span className="text-[10px] font-bold uppercase tracking-widest">Ver</span>
           </div>
        </div>
      </div>

      {/* Meta Dados (Fora da Imagem - Estilo Editorial) */}
      <div className="mt-4 flex items-start justify-between border-t border-stone-200 pt-3 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
         <div className="flex flex-col">
            <span className="font-serif text-2xl md:text-3xl text-stone-900 italic leading-none mb-1">
              {item.title}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
              {item.category}
            </span>
         </div>
         <div className="text-right">
            <span className="block text-[4rem] leading-[0.8] font-serif text-stone-100 font-bold group-hover:text-rose-200 transition-colors duration-500 select-none">
              0{index + 1}
            </span>
         </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="py-32 md:py-48 bg-white border-b border-stone-100">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 md:mb-32">
          <Reveal>
             <h2 className="text-6xl md:text-[7vw] font-serif text-stone-900 leading-[0.85] tracking-tighter">
               Acervo<br/>
               <span className="italic text-rose-400 opacity-90 ml-8 md:ml-16">Selecionado</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mt-12 md:mt-0 text-right flex flex-col items-end">
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-stone-200 rounded-full mb-4">
                 <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                 <span className="text-[10px] font-bold uppercase tracking-widest text-stone-600">Disponível para Projetos</span>
              </div>
              <p className="text-stone-400 text-xs max-w-[240px] leading-relaxed">
                Navegue por uma curadoria de trabalhos recentes que exploram a anatomia e a narrativa visual.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Grid Editorial (Broken Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`${item.colSpan} ${item.offset} transition-all duration-500`}
            >
              <Reveal delay={index % 2 * 100} width="100%">
                <PortfolioItem item={item} index={index} />
              </Reveal>
            </div>
          ))}
        </div>
        
        {/* Footer Link */}
        <div className="mt-32 md:mt-48 text-center">
           <Reveal>
             <a href="https://instagram.com" className="group inline-flex flex-col items-center">
               <span className="font-serif italic text-3xl md:text-4xl text-stone-900 mb-2">Explorar arquivo completo</span>
               <div className="h-[1px] w-0 bg-rose-500 group-hover:w-full transition-all duration-700"></div>
             </a>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;