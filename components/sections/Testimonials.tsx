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
      
      {/* --- BACKGROUND ARTISTRY (Hand Drawn Scribbles) --- */}
      <div className="absolute inset-0 bg-[#FAF7F7] z-0"></div>
      
      {/* Background Gradient Spot */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,_rgba(117,69,72,0.03)_0%,_transparent_70%)] blur-[80px] pointer-events-none z-0"></div>

      {/* Hand Drawn Scribble SVG */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 opacity-[0.05]">
          <svg viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" className="w-full h-full fill-none stroke-[#1c1917] stroke-[3]">
            <path d="M800,200 Q900,100 950,300 T800,500 T600,600 T400,500" vectorEffect="non-scaling-stroke" style={{ filter: 'url(#pencil-test)' }}/>
            <path d="M-100,800 Q100,900 300,850 T500,900" vectorEffect="non-scaling-stroke" style={{ filter: 'url(#pencil-test)' }}/>
            <defs>
                <filter id="pencil-test">
                    <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="4" />
                </filter>
            </defs>
          </svg>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* Header Minimalista */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#754548]/20 pb-8 mt-12">
            <Reveal>
                <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none tracking-tight relative">
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
            
            {/* COLUNA ESQUERDA: LISTA INTERATIVA */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12 relative z-20" role="list">
                {testimonials.map((item, index) => (
                    <div 
                        key={item.id}
                        role="button"
                        tabIndex={0}
                        aria-pressed={activeIndex === index}
                        className="group cursor-pointer outline-none rounded-lg"
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
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
                                    {/* Linha indicadora estilo pincelada */}
                                    <div 
                                        className={`h-[3px] transition-all duration-500 ${activeIndex === index ? 'bg-[#754548] w-16' : 'bg-stone-300 w-8'}`}
                                        style={{ borderRadius: '2px 50% 50% 2px / 2px 20% 20% 2px' }}
                                    ></div>
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
                    <div className="relative w-full h-full overflow-hidden rounded-sm shadow-2xl bg-white transform rotate-1 transition-transform duration-700 hover:rotate-0">
                        
                        {/* Frame Border Decorativo */}
                        <div className="absolute inset-2 border border-stone-200 z-20 pointer-events-none opacity-50"></div>
                        
                        <div ref={imageContainerRef} className="absolute inset-0 w-full h-full will-change-transform">
                            <img 
                                src={testimonials[activeIndex].image} 
                                alt={testimonials[activeIndex].client}
                                className="w-full h-full object-cover grayscale contrast-[1.1]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#754548]/40 to-transparent mix-blend-multiply opacity-60"></div>
                        </div>

                        <div ref={tagRef} className="absolute bottom-8 left-8 z-30">
                            <div className="bg-white/95 backdrop-blur px-4 py-2 shadow-lg border-l-2 border-[#754548]">
                                <span className="text-xs font-bold uppercase tracking-widest text-[#754548]">
                                    {testimonials[activeIndex].tag}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE ONLY */}
            <div className="block lg:hidden w-full aspect-[4/5] mt-8 relative rounded-lg overflow-hidden shadow-lg" aria-hidden="true">
                 <img 
                    src={testimonials[activeIndex].image} 
                    alt="Tattoo"
                    className="w-full h-full object-cover grayscale"
                 />
                 <div className="absolute bottom-4 left-4 bg-white px-3 py-1 border-l-2 border-[#754548]">
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