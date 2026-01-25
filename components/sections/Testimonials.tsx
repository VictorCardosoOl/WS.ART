import React, { useState, useRef, useEffect } from 'react';
import Reveal from '../ui/Reveal';
import { Quote } from 'lucide-react';
import gsap from 'gsap';

const testimonials = [
  {
    id: 0,
    client: "Ana Clara",
    role: "Arquiteta",
    text: "Mais que tinta, William traduziu um momento de luto em beleza pura. O processo foi uma terapia, e o resultado é uma parte de mim.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
    tag: "Cobertura / Floral"
  },
  {
    id: 1,
    client: "Marcos V.",
    role: "Designer",
    text: "A precisão anatômica é assustadora. Ele desenhou diretamente no meu braço para garantir que o fluxo seguisse minha musculatura.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop",
    tag: "Fechamento / Neotrad"
  },
  {
    id: 2,
    client: "Juliana S.",
    role: "Chef",
    text: "Eu nunca imaginei que uma tatuagem pudesse ser uma experiência tão tranquila. O estúdio privado faz toda a diferença.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop",
    tag: "Projeto Autoral"
  }
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

  // Animação de troca de slide com GSAP (muito mais leve que AnimatePresence)
  useEffect(() => {
    const ctx = gsap.context(() => {
        if (imageContainerRef.current) {
            gsap.fromTo(imageContainerRef.current,
                { opacity: 0.5, scale: 1.05 },
                { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out" }
            );
        }
        if (tagRef.current) {
            gsap.fromTo(tagRef.current,
                { y: 10, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, delay: 0.1, ease: "power2.out" }
            );
        }
    });
    return () => ctx.revert();
  }, [activeIndex]);

  return (
    <section className="relative w-full py-32 md:py-48 overflow-hidden" id="testimonials">
      
      {/* --- BACKGROUND ARTISTRY --- */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F7] via-[#f0ebeb] to-[#e6e1e1] z-0"></div>
      
      <div className="absolute top-0 right-0 w-full h-[300px] opacity-[0.03] z-0 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1c1917 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[radial-gradient(circle,_#754548_0%,_transparent_70%)] opacity-[0.04] blur-[100px] pointer-events-none z-0"></div>

      <div className="w-full max-w-[1920px] mx-auto px-5 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Minimalista */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#754548]/20 pb-8 mt-12">
            <Reveal>
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none tracking-tight relative">
                    Narrativas<span className="text-[#754548]">.</span>
                    <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-[#754548]/20 rounded-tl-xl pointer-events-none"></div>
                </h2>
            </Reveal>
            <Reveal delay={200}>
                <p className="text-stone-500 uppercase tracking-widest text-xs mt-4 md:mt-0 font-bold">
                    Experiências Reais
                </p>
            </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* COLUNA ESQUERDA: LISTA INTERATIVA */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12 relative z-20" role="list">
                {testimonials.map((item, index) => (
                    <div 
                        key={item.id}
                        role="button"
                        tabIndex={0}
                        aria-pressed={activeIndex === index}
                        aria-label={`Ver depoimento de ${item.client}`}
                        className="group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#754548] focus-visible:ring-offset-4 rounded-lg"
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setActiveIndex(index);
                          }
                        }}
                    >
                        <Reveal delay={index * 100} width="100%">
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
                                    {/* Linha indicadora "desenhada" */}
                                    <div className={`h-[2px] transition-all duration-500 rounded-full ${activeIndex === index ? 'bg-[#754548] w-16' : 'bg-stone-300 w-8'}`}></div>
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

            {/* COLUNA DIREITA: IMAGEM STICKY / REVEAL */}
            <div className="hidden lg:block w-1/2 relative h-[80vh]" aria-hidden="true">
                <div className="sticky top-32 w-full h-full">
                    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl bg-white">
                        {/* Frame Border Decorativo */}
                        <div className="absolute inset-2 border border-stone-200 z-20 pointer-events-none rounded-2xl opacity-50"></div>
                        
                        <div ref={imageContainerRef} className="absolute inset-0 w-full h-full will-change-transform">
                            <img 
                                src={testimonials[activeIndex].image} 
                                alt={testimonials[activeIndex].client}
                                className="w-full h-full object-cover grayscale contrast-[1.1]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#754548]/40 to-transparent mix-blend-multiply opacity-60"></div>
                        </div>

                        <div ref={tagRef} className="absolute bottom-8 left-8 z-30">
                            <div className="bg-white/95 backdrop-blur px-4 py-2 rounded-sm shadow-lg border-l-2 border-[#754548]">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#754548]">
                                    {testimonials[activeIndex].tag}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE ONLY */}
            <div className="block lg:hidden w-full aspect-[4/5] mt-8 relative rounded-2xl overflow-hidden shadow-lg" aria-hidden="true">
                 <img 
                    src={testimonials[activeIndex].image} 
                    alt="Tattoo"
                    className="w-full h-full object-cover grayscale"
                 />
                 <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-sm border-l-2 border-[#754548]">
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