import React from 'react';
import SectionTitle from './SectionTitle';
import Reveal from './Reveal';
import { GalleryItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://picsum.photos/600/900?random=1", category: "Neotraditional", title: "Lady Face" },
  { id: 2, src: "https://picsum.photos/600/600?random=2", category: "Color", title: "Floral Piece" },
  { id: 3, src: "https://picsum.photos/600/800?random=3", category: "Cover-up", title: "Tiger Back" },
  { id: 4, src: "https://picsum.photos/600/500?random=4", category: "Neotraditional", title: "Dagger" },
  { id: 5, src: "https://picsum.photos/600/1000?random=5", category: "Concept", title: "Surrealism" },
  { id: 6, src: "https://picsum.photos/600/700?random=6", category: "Neotraditional", title: "Animal Portrait" },
];

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32">
          <Reveal>
             <h2 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[0.9]">
               Trabalhos<br/>
               <span className="italic text-rose-500">Selecionados</span>
             </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-xs text-stone-500 text-sm mt-8 md:mt-0 font-medium uppercase tracking-wide">
              Uma curadoria de projetos que exploram anatomia, cor e narrativa visual.
            </p>
          </Reveal>
        </div>

        {/* Clean Masonry Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryItems.map((item, index) => (
            <div key={item.id} className="break-inside-avoid">
              <Reveal delay={index % 3 * 150}>
                <div className="group relative overflow-hidden cursor-none-target">
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                  />
                  
                  {/* Minimal Hover Info */}
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                     <div className="bg-white/10 backdrop-blur-md p-4 rounded-full">
                        <ArrowUpRight className="text-white w-8 h-8" />
                     </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-baseline border-b border-stone-100 pb-2">
                   <span className="font-serif text-2xl text-stone-900">{item.title}</span>
                   <span className="text-[10px] uppercase tracking-widest text-stone-400">{item.category}</span>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
           <Reveal>
             <a href="https://instagram.com" className="inline-block relative group py-2">
               <span className="font-serif italic text-2xl md:text-3xl text-stone-900">Ver arquivo completo</span>
               <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-300 group-hover:bg-rose-500 transition-colors"></div>
             </a>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;