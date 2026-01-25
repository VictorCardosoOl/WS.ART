import React, { useRef } from 'react';
import Reveal from '../ui/Reveal';
import { GridGalleryItem } from '../../types';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

// Efeito de "Clipped Reveal" inspirado no site de referência (Lass Tattoo)
// A imagem começa com zoom e recortada, e se "revela" ao entrar na tela.
const PortfolioItem = ({ item }: { item: GridGalleryItem }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });

  return (
    <div className={`group flex flex-col gap-6 ${item.offsetY}`}>
      {/* Container da Imagem com Efeito Clip + Zoom */}
      <div 
        ref={ref}
        className={`relative w-full ${item.height} overflow-hidden bg-[#E5D0D4]/20`}
      >
        <motion.div 
            className="w-full h-full relative overflow-hidden"
            initial={{ clipPath: 'inset(15% 15% 15% 15%)' }}
            animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : { clipPath: 'inset(15% 15% 15% 15%)' }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }} // Ease-out expo suave
        >
            <motion.img 
                src={item.src} 
                alt={item.altText} 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                initial={{ scale: 1.3 }}
                animate={isInView ? { scale: 1 } : { scale: 1.3 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                loading="lazy"
            />
            
            {/* Overlay sutil apenas para textura */}
            <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
        </motion.div>
      </div>

      {/* Legenda Estilo Editorial - Título grande e seta */}
      <div className="flex flex-col border-t border-stone-200 pt-4 group-hover:border-[#754548] transition-colors duration-700">
         <div className="flex justify-between items-baseline">
             <h3 className="font-serif text-3xl md:text-4xl text-stone-900 leading-none tracking-tight group-hover:italic transition-all duration-500">
                 {item.title}
             </h3>
             <div className="overflow-hidden relative w-6 h-6">
                <ArrowUpRight 
                    size={24} 
                    className="text-[#754548] absolute top-0 left-0 transform translate-y-full -translate-x-full group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" 
                />
                <ArrowUpRight 
                    size={24} 
                    className="text-stone-300 absolute top-0 left-0 transform group-hover:-translate-y-full group-hover:translate-x-full transition-all duration-500" 
                />
             </div>
         </div>
         <span className="text-[10px] font-sans font-bold text-stone-400 uppercase tracking-[0.2em] mt-2">
             {item.category} — 2024
         </span>
      </div>
    </div>
  );
};

// Componente de Scroll Horizontal (PhotoScroller da referência)
const StudioScroller = () => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["start end", "end start"]
    });
    
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

    const studioImages = [
        "https://images.unsplash.com/photo-1590246814883-057f66d4040a?q=80&w=600&auto=format&fit=crop", // Studio Detail
        "https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&w=600&auto=format&fit=crop", // Ink/Needle
        "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=600&auto=format&fit=crop", // Skin detail
        "https://images.unsplash.com/photo-1550537687-c91357788f04?q=80&w=600&auto=format&fit=crop", // Interior
        "https://images.unsplash.com/photo-1621112904891-5af4d4771383?q=80&w=600&auto=format&fit=crop", // Art
    ];

    return (
        <div ref={scrollRef} className="w-full overflow-hidden py-32 bg-[#FAF7F7]">
            <div className="container mx-auto px-6 mb-12">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548]">Bastidores & Atmosfera</span>
            </div>
            <motion.div style={{ x }} className="flex gap-8 px-6 w-max">
                {studioImages.map((src, i) => (
                    <div key={i} className="w-[300px] md:w-[450px] aspect-[4/3] relative overflow-hidden bg-stone-200">
                        <img src={src} alt="Studio Atmosphere" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

const Portfolio: React.FC = () => {
  return (
    <>
    <section id="gallery" className="relative pt-40 pb-24 bg-white overflow-hidden">
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header - Alinhamento Editorial */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 border-b border-stone-100 pb-12">
          <Reveal>
             <h2 className="text-7xl md:text-[9vw] font-serif text-stone-900 leading-[0.8] tracking-tighter mix-blend-darken">
               Acervo<span className="text-[#754548] text-4xl md:text-6xl align-top ml-2">.</span>
             </h2>
          </Reveal>
          
          <Reveal delay={200}>
             <div className="mt-8 md:mt-0 text-right">
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-2">
                    [ Seleção Recente ]
                </p>
                <a href="https://instagram.com" className="font-serif italic text-xl text-stone-900 hover:text-[#754548] transition-colors border-b border-stone-900 hover:border-[#754548] pb-1">
                    Ver arquivo completo
                </a>
             </div>
          </Reveal>
        </div>

        {/* Grid Assimétrico Estilo "Masonry Manual" */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-32">
            {PORTFOLIO_ITEMS.map((item, index) => (
                <div 
                    key={item.id} 
                    className={`${item.colSpan}`}
                >
                    {/* Delay staggered para entrada suave */}
                    <Reveal delay={index % 2 * 150} width="100%">
                         <PortfolioItem item={item} />
                    </Reveal>
                </div>
            ))}
        </div>

      </div>
    </section>
    
    {/* Seção de Scroll Horizontal inspirada na referência */}
    <StudioScroller />
    </>
  );
};

export default Portfolio;