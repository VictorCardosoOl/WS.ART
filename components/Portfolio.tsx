import React, { useRef } from 'react';
import Reveal from './Reveal';
import { GalleryItem } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const galleryItems: GalleryItem[] = [
  { id: 1, src: "https://picsum.photos/600/900?random=1", category: "Neotraditional", title: "Lady Face" },
  { id: 2, src: "https://picsum.photos/600/600?random=2", category: "Color", title: "Floral Piece" },
  { id: 3, src: "https://picsum.photos/600/800?random=3", category: "Cover-up", title: "Tiger Back" },
  { id: 4, src: "https://picsum.photos/600/500?random=4", category: "Neotraditional", title: "Dagger" },
  { id: 5, src: "https://picsum.photos/600/1000?random=5", category: "Concept", title: "Surrealism" },
  { id: 6, src: "https://picsum.photos/600/700?random=6", category: "Neotraditional", title: "Animal Portrait" },
];

const ParallaxImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="group relative overflow-hidden cursor-none-target w-full aspect-[3/4]">
      <motion.div style={{ y, scale: 1.2 }} className="w-full h-full">
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            loading="lazy"
        />
      </motion.div>
      
      {/* Minimal Hover Info */}
      <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-stone-900/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20">
            <ArrowUpRight className="text-white w-8 h-8" />
            </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="gallery" className="py-24 md:py-40 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32">
          <Reveal>
             <h2 className="text-5xl md:text-8xl font-serif text-pantone-ink leading-[0.9] tracking-tighter">
               Trabalhos<br/>
               <span className="italic text-pantone-accent">Selecionados</span>
             </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="max-w-xs text-stone-500 text-sm mt-8 md:mt-0 font-medium uppercase tracking-wide">
              Uma curadoria de projetos que exploram anatomia, cor e narrativa visual.
            </p>
          </Reveal>
        </div>

        {/* Clean Masonry Layout - CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-16">
          {galleryItems.map((item, index) => (
            <div key={item.id} className="break-inside-avoid">
              <Reveal delay={index % 3 * 150}>
                <ParallaxImage src={item.src} alt={item.title} />
                
                <div className="mt-6 flex justify-between items-baseline border-b border-stone-100 pb-2">
                   <span className="font-serif text-2xl text-pantone-ink group-hover:text-pantone-accent transition-colors">{item.title}</span>
                   <span className="text-[10px] uppercase tracking-widest text-stone-400">{item.category}</span>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
        
        <div className="mt-32 text-center">
           <Reveal>
             <a href="https://instagram.com" className="inline-block relative group py-2">
               <span className="font-serif italic text-2xl md:text-3xl text-pantone-ink">Ver arquivo completo</span>
               <div className="absolute bottom-0 left-0 w-full h-[1px] bg-stone-200 group-hover:bg-pantone-accent transition-colors"></div>
             </a>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;