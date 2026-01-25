import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Reveal from '../ui/Reveal';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    client: "Ana Clara",
    role: "Arquiteta",
    text: "Mais que tinta, William traduziu um momento de luto em beleza pura. O processo foi uma terapia, e o resultado é uma parte de mim que eu precisava resgatar.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    project: "Memória / Floral"
  },
  {
    id: 2,
    client: "Marcos V.",
    role: "Diretor de Arte",
    text: "A precisão anatômica no freehand é assustadora. Ele desenhou diretamente no meu braço para garantir que o fluxo seguisse minha musculatura, não apenas um decalque frio.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    project: "Anatomia / Neotrad"
  },
  {
    id: 3,
    client: "Juliana S.",
    role: "Chef",
    text: "Eu nunca imaginei que uma tatuagem pudesse ser uma experiência tão tranquila. O estúdio privado faz toda a diferença para quem busca privacidade e respeito ao corpo.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
    project: "Projeto Autoral"
  },
  {
    id: 4,
    client: "Ricardo M.",
    role: "Músico",
    text: "Ele capturou a essência da minha música favorita em uma imagem. É arte que respira e conta história, não apenas um desenho estático.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    project: "Conceito Visual"
  }
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const mm = gsap.matchMedia();
        
        mm.add("(min-width: 768px)", () => {
            const itemsCount = testimonials.length;
            
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    start: "top top",
                    end: "+=" + (itemsCount * 100) + "%",
                    scrub: 1,
                }
            });

            // Coluna Direita (Imagens) SOBE
            tl.to(rightColRef.current, {
                y: -(window.innerHeight * (itemsCount - 1)),
                ease: "none"
            }, 0);

            // Coluna Esquerda (Textos) DESCE (Reverse Logic)
            gsap.set(leftColRef.current, {
                 y: -(window.innerHeight * (itemsCount - 1))
            });
            
            tl.to(leftColRef.current, {
                y: 0,
                ease: "none"
            }, 0);
        });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const reversedTextItems = [...testimonials].reverse();

  return (
    <section ref={sectionRef} id="testimonials" className="relative h-screen bg-[#1c1917] overflow-hidden text-white">
        
        <div className="flex w-full h-full flex-col md:flex-row">
            
            {/* TEXTOS (Esq) */}
            <div className="w-full md:w-1/2 h-full relative overflow-hidden order-2 md:order-1 bg-[#1c1917] border-r border-white/5">
                {/* Header Fixo sobreposto */}
                <div className="absolute top-8 left-8 md:left-12 z-20 pointer-events-none mix-blend-difference">
                     <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548]">Ecos & Memórias</span>
                </div>

                <div ref={leftColRef} className="w-full absolute top-0 left-0">
                    {reversedTextItems.map((item) => (
                        <div key={item.id} className="h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 relative">
                             
                             <div className="mb-8">
                                <Quote size={32} className="text-[#754548] mb-6 opacity-80" />
                                <p className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight text-stone-200 font-light">
                                    "{item.text}"
                                </p>
                             </div>
                             
                             <div className="flex items-center gap-4 mt-8">
                                <div className="h-[1px] w-8 bg-[#754548]"></div>
                                <div>
                                    <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-white">
                                        {item.client}
                                    </h4>
                                    <p className="text-[10px] uppercase tracking-wide text-stone-500 mt-1">
                                        {item.role}
                                    </p>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* IMAGENS (Dir) */}
            <div className="w-full md:w-1/2 h-full relative overflow-hidden order-1 md:order-2">
                <div ref={rightColRef} className="w-full absolute top-0 left-0">
                    {testimonials.map((item) => (
                        <div key={item.id} className="h-screen w-full relative group">
                             <img 
                                src={item.image} 
                                alt={item.project}
                                className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-1000 ease-out"
                             />
                             <div className="absolute inset-0 bg-[#1c1917]/10 mix-blend-multiply pointer-events-none"></div>
                             
                             <div className="absolute bottom-12 left-12 z-20">
                                 <div className="bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                                        {item.project}
                                    </span>
                                 </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 mix-blend-difference pointer-events-none hidden md:flex">
            <span className="text-[9px] uppercase tracking-widest text-white font-bold">Scroll</span>
            <div className="h-8 w-[1px] bg-white/50"></div>
        </div>
    </section>
  );
};

export default Testimonials;