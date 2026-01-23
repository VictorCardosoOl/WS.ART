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
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
       gsap.from(".testimonial-item", {
         x: -50,
         opacity: 0,
         duration: 1,
         stagger: 0.2,
         ease: "power3.out",
         scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%"
         }
       });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full py-32 md:py-48 bg-[#FAF7F7] overflow-hidden" id="testimonials">
      
      {/* SEPARATOR */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
         <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] fill-[#F5F5F5]">
             <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"></path>
         </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#754548]/20 pb-8 mt-12">
            <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#754548] mb-2 block">Depoimentos</span>
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none tracking-tighter">
                    Narrativas<span className="text-[#754548]">.</span>
                </h2>
            </div>
            <p className="text-stone-400 font-serif italic text-lg mt-4 md:mt-0">
                Experiências reais, cicatrizadas na alma.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* COLUNA ESQUERDA: LISTA INTERATIVA */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12 relative z-20">
                {testimonials.map((item, index) => (
                    <div 
                        key={item.id}
                        className="testimonial-item group cursor-pointer"
                        onMouseEnter={() => setActiveIndex(index)}
                    >
                        <div className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${activeIndex === index ? 'opacity-100 translate-x-4' : 'opacity-40 hover:opacity-70'}`}>
                            <div className="mb-4">
                                <Quote 
                                    size={24} 
                                    className={`mb-4 transition-colors duration-500 ${activeIndex === index ? 'text-[#754548] fill-[#754548]/10' : 'text-stone-300'}`} 
                                />
                                <p className="font-serif text-2xl md:text-4xl leading-[1.1] text-stone-900 italic">
                                    "{item.text}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className={`h-[1px] w-8 transition-all duration-500 ${activeIndex === index ? 'bg-[#754548] w-16' : 'bg-stone-300'}`}></div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-stone-900">{item.client}</span>
                                    <span className="text-[10px] uppercase tracking-wider text-stone-500">{item.role}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* COLUNA DIREITA: IMAGEM STICKY */}
            <div className="hidden lg:block w-1/2 relative h-[80vh]">
                <div className="sticky top-32 w-full h-full">
                    <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl">
                        {/* Frame Decorativo */}
                        <div className="absolute inset-4 border border-white/20 z-20 pointer-events-none"></div>
                        
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 1.15 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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

                        {/* Tag */}
                        <div className="absolute bottom-8 left-8 z-30">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="bg-white/90 backdrop-blur px-4 py-2"
                                >
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#754548]">
                                        {testimonials[activeIndex].tag}
                                    </span>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
            
             {/* Mobile Image */}
             <div className="lg:hidden w-full aspect-[4/5] mt-8 rounded-sm overflow-hidden relative">
                 <img 
                     src={testimonials[activeIndex].image}
                     alt="Client"
                     className="w-full h-full object-cover grayscale"
                 />
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#754548]">
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