import React, { useRef } from 'react';
import Reveal from './Reveal';
import { GalleryItem } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Dados atualizados para refletir tamanhos diferentes no grid (colSpan)
interface GridGalleryItem extends GalleryItem {
  colSpan: string; // ex: "md:col-span-6"
  aspect: string; // ex: "aspect-[3/4]"
}

const galleryItems: GridGalleryItem[] = [
  { id: 1, src: "https://picsum.photos/800/1000?random=1", category: "Neotraditional", title: "Lady Face", colSpan: "md:col-span-6 lg:col-span-5", aspect: "aspect-[3/4]" },
  { id: 2, src: "https://picsum.photos/800/600?random=2", category: "Color Study", title: "Floral Piece", colSpan: "md:col-span-6 lg:col-span-7", aspect: "aspect-[4/3]" },
  { id: 3, src: "https://picsum.photos/600/800?random=3", category: "Backpiece", title: "Tiger & Snake", colSpan: "md:col-span-4 lg:col-span-4", aspect: "aspect-[3/5]" },
  { id: 4, src: "https://picsum.photos/600/600?random=4", category: "Detail", title: "Dagger", colSpan: "md:col-span-4 lg:col-span-4", aspect: "aspect-square" },
  { id: 5, src: "https://picsum.photos/600/900?random=5", category: "Surrealism", title: "Eye Concept", colSpan: "md:col-span-4 lg:col-span-4", aspect: "aspect-[3/4]" },
  { id: 6, src: "https://picsum.photos/1200/600?random=6", category: "Full Body", title: "The Phoenix", colSpan: "md:col-span-12 lg:col-span-12", aspect: "aspect-[21/9]" },
];

const PortfolioItem = ({ item }: { item: GridGalleryItem }) => {
  return (
    <div className={`group relative w-full ${item.aspect} overflow-hidden bg-stone-100`}>
      {/* Imagem com Zoom Sutil no Hover */}
      <img 
          src={item.src} 
          alt={item.title} 
          className="w-full h-full object-cover grayscale transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:grayscale-0"
          loading="lazy"
      />
      
      {/* Overlay de Informação (Minimalista) */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-end border-b border-white/30 pb-4 mb-2">
             <h3 className="text-white font-serif text-3xl md:text-4xl italic">{item.title}</h3>
             <ArrowUpRight className="text-white w-6 h-6" />
          </div>
          <p className="text-stone-200 text-xs uppercase tracking-widest font-bold">{item.category}</p>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-stone-200 pb-12">
          <Reveal>
             <h2 className="text-6xl md:text-9xl font-serif text-pantone-ink leading-[0.8] tracking-tighter">
               Obras<br/>
               <span className="italic text-pantone-accent opacity-80">Selecionadas</span>
             </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 md:mt-0 text-right">
              <p className="text-stone-500 text-sm font-bold uppercase tracking-widest mb-2">Arquivo 2023 — 2024</p>
              <p className="text-stone-400 text-xs max-w-[200px] ml-auto leading-relaxed">
                Uma coleção de narrativas visuais permanentes.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Grid Editorial */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {galleryItems.map((item, index) => (
            <div key={item.id} className={`${item.colSpan}`}>
              <Reveal delay={index * 100} width="100%">
                <PortfolioItem item={item} />
              </Reveal>
              
              {/* Legenda fora da imagem (Opcional, estilo museu) */}
              <div className="mt-3 flex gap-3 items-center opacity-0 md:opacity-100 md:group-hover:opacity-100 transition-opacity">
                 <span className="text-[10px] font-mono text-stone-400">0{index + 1}</span>
                 <span className="h-[1px] w-4 bg-stone-300"></span>
                 <span className="text-[10px] uppercase tracking-wider text-stone-500">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
           <Reveal>
             <a href="https://instagram.com" className="inline-flex flex-col items-center group">
               <span className="font-serif italic text-2xl md:text-3xl text-pantone-ink mb-2">Explorar todo o acervo</span>
               <div className="h-[1px] w-0 bg-pantone-accent group-hover:w-full transition-all duration-500"></div>
             </a>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;