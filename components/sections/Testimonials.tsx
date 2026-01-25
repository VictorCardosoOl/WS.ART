import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
  const listRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(".testimonials-header",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%"
          }
        }
      );

      // List Stagger
      const items = gsap.utils.toArray('.testimonial-item');
      gsap.fromTo(items,
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: listRef.current,
            start: "top 70%"
          }
        }
      );

      // Image Container Entrance
      gsap.fromTo(imageContainerRef.current,
        { scale: 0.9, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "expo.out",
          scrollTrigger: {
            trigger: imageContainerRef.current,
            start: "top 80%"
          }
        }
      );

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-48 overflow-hidden bg-[#FAF7F7]" id="testimonials">
      
      {/* --- BACKGROUND GRADIENT --- */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-[#FAF7F7]"></div>
          <div className="absolute bottom-0 left-0 w-[70%] h-[70%] bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-200/20 via-transparent to-transparent opacity-60 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Minimalista */}
        <div className="testimonials-header mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#754548]/20 pb-8 mt-12">
            <div>
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none tracking-tighter uppercase font-semibold">
                    Narrativas<span className="text-[#754548]">.</span>
                </h2>
            </div>
            <div>
                <p className="text-stone-500 uppercase tracking-widest text-[10px] mt-4 md:mt-0 font-bold font-sans">
                    Experiências Reais
                </p>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* COLUNA ESQUERDA: LISTA INTERATIVA */}
            <div ref={listRef} className="w-full lg:w-1/2 flex flex-col justify-center space-y-12 relative z-20" role="list">
                {testimonials.map((item, index) => (
                    <div 
                        key={item.id}
                        role="button"
                        tabIndex={0}
                        aria-pressed={activeIndex === index}
                        aria-label={`Ver depoimento de ${item.client}`}
                        className="testimonial-item group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#754548] focus-visible:ring-offset-4 rounded-lg will-change-transform"
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActiveIndex(index);
                          }
                        }}
                    >
                        <div className={`transition-all duration-500 ${activeIndex === index ? 'opacity-100 translate-x-4' : 'opacity-40 hover:opacity-70'}`}>
                            <div className="mb-4">
                                <Quote 
                                    size={24} 
                                    className={`mb-4 transition-colors duration-500 ${activeIndex === index ? 'text-[#754548] fill-[#754548]/10' : 'text-stone-300'}`} 
                                />
                                <p className="font-serif text-2xl md:text-4xl leading-snug text-stone-900 italic tracking-tight">
                                    "{item.text}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className={`h-[1px] w-8 transition-all duration-500 ${activeIndex === index ? 'bg-[#754548] w-16' : 'bg-stone-300'}`}></div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold uppercase tracking-widest text-stone-900 font-sans">{item.client}</span>
                                    <span className="text-[10px] uppercase tracking-wider text-stone-500 font-sans">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* COLUNA DIREITA: IMAGEM STICKY */}
            <div ref={imageContainerRef} className="hidden lg:block w-1/2 relative h-[80vh] will-change-transform" aria-hidden="true">
                <div className="sticky top-32 w-full h-full">
                    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl">
                        <div className="absolute inset-4 border border-white/20 z-20 pointer-events-none rounded-2xl"></div>
                        
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
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
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548] font-sans">
                                        {testimonials[activeIndex].tag}
                                    </span>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE ONLY */}
            <div className="block lg:hidden w-full aspect-[4/5] mt-8 relative rounded-2xl overflow-hidden" aria-hidden="true">
                 <img 
                    src={testimonials[activeIndex].image} 
                    alt="Tattoo"
                    className="w-full h-full object-cover grayscale"
                 />
                 <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full">
                     <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548] font-sans">
                        {testimonials[activeIndex].tag}
                    </span>
                 </div>
            </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white pointer-events-none z-10"></div>
    </section>
  );
};

export default Testimonials;