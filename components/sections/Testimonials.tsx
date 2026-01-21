import React, { useState, useRef } from 'react';
import Reveal from '../ui/Reveal';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import { InkSplatter } from '../ui/ArtisticDecorations';

const testimonials = [
  {
    id: 0,
    client: "Ana Clara",
    role: "Arquiteta",
    text: "Mais que tinta, William traduziu um momento de luto em beleza pura. O processo foi uma terapia, e o resultado é uma parte de mim.",
    image: "https://picsum.photos/800/1000?grayscale&random=99",
    tag: "Cobertura / Floral"
  },
  {
    id: 1,
    client: "Marcos V.",
    role: "Designer",
    text: "A precisão anatômica é assustadora. Ele desenhou diretamente no meu braço para garantir que o fluxo seguisse minha musculatura.",
    image: "https://picsum.photos/800/1000?grayscale&random=98",
    tag: "Fechamento / Neotrad"
  },
  {
    id: 2,
    client: "Juliana S.",
    role: "Chef",
    text: "Eu nunca imaginei que uma tatuagem pudesse ser uma experiência tão tranquila. O estúdio privado faz toda a diferença.",
    image: "https://picsum.photos/800/1000?grayscale&random=97",
    tag: "Projeto Autoral"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    // Fluid Gradient Background
    <section ref={containerRef} className="relative w-full py-32 md:py-48 bg-gradient-to-b from-[#FAF7F7] to-white overflow-hidden" id="testimonials">
      
      {/* Ink Splatter Decoration */}
      <InkSplatter className="bottom-20 left-10 w-48 h-48 text-[#754548]" />

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#754548]/20 pb-8">
            <Reveal>
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none tracking-tight">
                    Narrativas<span className="text-[#754548]">.</span>
                </h2>
            </Reveal>
            <Reveal delay={200}>
                <p className="text-stone-500 uppercase tracking-widest text-xs mt-4 md:mt-0 font-bold">
                    Experiências Reais
                </p>
            </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12 relative z-20">
                {testimonials.map((item, index) => (
                    <div 
                        key={item.id}
                        className="group cursor-pointer"
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <Reveal delay={index * 100} width="100%">
                            <div className={`transition-all duration-700 ease-out-expo ${activeIndex === index ? 'opacity-100 translate-x-4 blur-0 scale-100' : 'opacity-30 hover:opacity-60 blur-[2px] scale-95'}`}>
                                <div className="mb-4">
                                    <Quote 
                                        size={24} 
                                        className={`mb-4 transition-colors duration-500 ${activeIndex === index ? 'text-[#754548] fill-[#754548]/10' : 'text-stone-300'}`} 
                                    />
                                    <p className="font-serif text-2xl md:text-4xl leading-snug text-stone-900 italic">
                                        "{item.text}"
                                    </p>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className={`h-[1px] w-8 transition-all duration-500 ${activeIndex === index ? 'bg-[#754548] w-16' : 'bg-stone-300'}`}></div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold uppercase tracking-widest text-stone-900">{item.client}</span>
                                        <span className="text-[10px] uppercase tracking-wider text-stone-500">{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                ))}
            </div>

            <div className="hidden lg:block w-1/2 relative h-[80vh]">
                <div className="sticky top-32 w-full h-full">
                    <motion.div 
                        style={{ y: yImage }} 
                        className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl"
                    >
                        <div className="absolute inset-4 border border-white/20 z-20 pointer-events-none rounded-2xl"></div>
                        
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, filter: "blur(5px)" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <img 
                                    src={testimonials[activeIndex].image} 
                                    alt={testimonials[activeIndex].client}
                                    className="w-full h-full object-cover grayscale contrast-[1.1]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#754548]/40 to-transparent mix-blend-multiply opacity-60"></div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute bottom-8 left-8 z-30">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white/90 backdrop-blur px-4 py-2 rounded-full"
                                >
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#754548]">
                                        {testimonials[activeIndex].tag}
                                    </span>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="block lg:hidden w-full aspect-[4/5] mt-8 relative rounded-2xl overflow-hidden">
                 <img 
                    src={testimonials[activeIndex].image} 
                    alt="Tattoo"
                    className="w-full h-full object-cover grayscale"
                 />
                 <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548]">
                        {testimonials[activeIndex].tag}
                    </span>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;