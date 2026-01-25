import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Reveal from '../ui/Reveal';
import { Quote, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    client: "Ana Clara",
    role: "Arquiteta",
    text: "O processo foi uma terapia. William não apenas tatuou, ele traduziu meu momento de luto em uma obra de arte perene.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    project: "Cobertura Floral"
  },
  {
    id: 2,
    client: "Marcos V.",
    role: "Diretor de Arte",
    text: "A precisão anatômica no freehand é assustadora. O desenho flui perfeitamente com a musculatura do braço.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
    project: "Fechamento Neotrad"
  },
  {
    id: 3,
    client: "Juliana S.",
    role: "Chef",
    text: "Estúdio privado, segurança total e uma mão extremamente leve. A experiência inteira é de outro nível.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=800&auto=format&fit=crop",
    project: "Projeto Autoral"
  },
  {
    id: 4,
    client: "Ricardo M.",
    role: "Músico",
    text: "Ele capturou a essência da minha música favorita em uma imagem. É arte que respira e conta história.",
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
            const scrollDistance = (itemsCount - 1) * 100; // Porcentagem para mover (ex: 300% para 4 itens)

            // Timeline Principal atrelada ao Scroll
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true, // Trava a seção na tela
                    start: "top top",
                    end: "+=" + (itemsCount * 100) + "%", // Duração do scroll baseada na altura
                    scrub: 1, // Suavidade (Inércia)
                    // snap: 1 / (itemsCount - 1) // Opcional: Snapping nos slides
                }
            });

            // 1. COLUNA DIREITA (IMAGENS) - Sobe (Natural)
            // Começa em 0 e vai para cima (-300vh)
            tl.to(rightColRef.current, {
                y: -(window.innerHeight * (itemsCount - 1)),
                ease: "none"
            }, 0);

            // 2. COLUNA ESQUERDA (TEXTOS) - Desce (Reverso)
            // Para vermos o Texto 1 inicialmente (que é o último no DOM da lista invertida ou o primeiro da lista normal?),
            // Vamos usar a lista invertida no render [4, 3, 2, 1].
            // O Item 1 está no Fundo (Bottom). Precisamos transladar para ver o fundo (-300vh).
            // Ao rolar, transladamos para 0 (vendo o Topo, Item 4).
            
            // Set inicial: jogar container para cima para ver o último item (que é o #1 visualmente)
            gsap.set(leftColRef.current, {
                 y: -(window.innerHeight * (itemsCount - 1))
            });
            
            // Animação: trazer para 0 (baixo)
            tl.to(leftColRef.current, {
                y: 0,
                ease: "none"
            }, 0);
        });

    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Invertemos a ordem dos textos para o layout da coluna esquerda funcionar na lógica "Reverse"
  // Visualmente queremos: Scroll Down -> Aparece Texto 2 vindo de CIMA.
  // Para isso, Texto 2 deve estar ACIMA de Texto 1 no DOM.
  // Stack: [4, 3, 2, 1]. (1 está em baixo).
  const reversedTextItems = [...testimonials].reverse();

  return (
    <section ref={sectionRef} id="testimonials" className="relative h-screen bg-[#1c1917] overflow-hidden text-white">
        
        <div className="flex w-full h-full flex-col md:flex-row">
            
            {/* --- COLUNA ESQUERDA: TEXTOS (Desce ao rolar) --- */}
            <div className="w-full md:w-1/2 h-full relative overflow-hidden order-2 md:order-1 bg-[#1c1917]">
                <div ref={leftColRef} className="w-full absolute top-0 left-0">
                    {reversedTextItems.map((item) => (
                        <div key={item.id} className="h-screen w-full flex flex-col justify-center px-8 md:px-16 lg:px-24 border-r border-white/5 relative">
                             
                             {/* Indicador Sutil */}
                             <div className="absolute top-1/2 -translate-y-1/2 right-0 w-1 h-24 bg-[#754548]"></div>
                             
                             <div className="mb-8">
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548] mb-4 block">
                                    Depoimento
                                </span>
                                <Quote size={40} className="text-white mb-6 opacity-20" />
                                <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-stone-200">
                                    "{item.text}"
                                </p>
                             </div>
                             
                             <div className="flex items-center gap-4 mt-4">
                                <div className="h-[1px] w-12 bg-[#754548]"></div>
                                <div>
                                    <h4 className="font-sans text-sm font-bold uppercase tracking-widest text-white">
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

            {/* --- COLUNA DIREITA: IMAGENS (Sobe ao rolar) --- */}
            <div className="w-full md:w-1/2 h-full relative overflow-hidden order-1 md:order-2">
                <div ref={rightColRef} className="w-full absolute top-0 left-0">
                    {testimonials.map((item) => (
                        <div key={item.id} className="h-screen w-full relative group">
                             <img 
                                src={item.image} 
                                alt={item.project}
                                className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 transition-all duration-700 ease-out"
                             />
                             <div className="absolute inset-0 bg-[#1c1917]/20 mix-blend-multiply pointer-events-none"></div>
                             
                             {/* Tag Project no canto da imagem */}
                             <div className="absolute bottom-12 left-12 z-20">
                                 <div className="bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-sm">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white">
                                        {item.project}
                                    </span>
                                 </div>
                             </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Elemento Decorativo Central (Círculo) - Estilo Wonderkin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] border border-white/5 rounded-full pointer-events-none z-10 hidden md:block"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[58vh] h-[58vh] border border-white/5 rounded-full pointer-events-none z-10 hidden md:block border-dashed opacity-50 animate-[spin_60s_linear_infinite]"></div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 mix-blend-difference pointer-events-none">
            <span className="text-[9px] uppercase tracking-widest text-white font-bold">Scroll</span>
            <div className="h-8 w-[1px] bg-white/50"></div>
        </div>
    </section>
  );
};

export default Testimonials;