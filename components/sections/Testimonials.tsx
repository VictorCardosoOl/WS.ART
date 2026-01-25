import React, { useState, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        // Header
        gsap.from(".testimonial-header", {
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });

        // List Items
        gsap.from(".testimonial-item", {
            x: -40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".testimonial-list",
                start: "top 75%",
            }
        });

        // Image Section
        gsap.from(".testimonial-image-col", {
            scale: 0.95,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
            }
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-48 bg-[#FAF7F7] overflow-hidden" id="testimonials">
      
      {/* SEPARATOR: WAVE TOP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
         <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] fill-[#F5F5F5]">
             <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"></path>
         </svg>
      </div>

      {/* GRADIENTE RADIAL */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-200/30 via-[#FAF7F7] to-[#FAF7F7] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header Minimalista */}
        <div className="testimonial-header mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#754548]/20 pb-8 mt-12">
            <div>
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none tracking-tight">
                    Narrativas<span className="text-[#754548]">.</span>
                </h2>
            </div>
            <div>
                <p className="text-stone-500 uppercase tracking-widest text-xs mt-4 md:mt-0 font-bold">
                    Experiências Reais
                </p>
            </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* COLUNA ESQUERDA: LISTA INTERATIVA */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12 relative z-20 testimonial-list" role="list">
                {testimonials.map((item, index) => (
                    <div 
                        key={item.id}
                        role="button"
                        tabIndex={0}
                        aria-pressed={activeIndex === index}
                        aria-label={`Ver depoimento de ${item.client}`}
                        className="testimonial-item group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#754548] focus-visible:ring-offset-4 rounded-lg"
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
                    </div>
                ))}
            </div>

            {/* COLUNA DIREITA: IMAGEM STICKY / REVEAL */}
            <div className="hidden lg:block w-1/2 relative h-[80vh] testimonial-image-col" aria-hidden="true">
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
                                    <span className="text-xs font-bold uppercase tracking-widest text-[#754548]">
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