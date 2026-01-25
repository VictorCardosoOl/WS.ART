import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Reveal from '../ui/Reveal';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray<HTMLElement>('.testimonial-text');
      const totalSlides = texts.length;
      
      // A seção fica 'pinada' por 300% da altura da viewport para dar tempo de ler
      const scrollDuration = 300; 

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollDuration}%`,
          pin: true,
          scrub: 1, // Suavidade no scroll
          // markers: true, // Descomente para debug
        }
      });

      // 1. Animação da Barra de Progresso
      tl.to(progressBarRef.current, {
        scaleY: 1,
        ease: "none"
      }, 0);

      // 2. Animação dos Textos (Sobe: y 0% -> -200%)
      // Movemos o wrapper para cima para revelar o próximo item que está embaixo
      tl.to(textWrapperRef.current, {
        yPercent: -100 * (totalSlides - 1),
        ease: "none"
      }, 0);

      // 3. Animação das Imagens (Desce: y -200% -> 0%)
      // O wrapper de imagens começa deslocado para cima (mostrando a última do DOM, que é a 1ª visualmente devido à ordem reversa)
      // E desliza para baixo.
      tl.fromTo(imageWrapperRef.current, 
        { yPercent: -100 * (totalSlides - 1) }, // Começa mostrando a "última" imagem do grid (que é a #1 na nossa lógica reversa)
        { 
          yPercent: 0, // Termina no topo
          ease: "none" 
        }, 
        0
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Invertemos o array de imagens para a lógica de "scroll reverso" funcionar
  // Assim, a imagem [0] fica no final do DOM (base da pilha visual se transformado).
  // Mas vamos usar uma lógica visual: Imagens empilhadas [3, 2, 1].
  // Viewport mostra [1]. Scroll move container para baixo, revelando [2] que está acima.
  const reversedImages = [...testimonials].reverse();

  return (
    <section 
        ref={sectionRef} 
        id="testimonials" 
        className="relative w-full h-screen bg-[#FAF7F7] overflow-hidden flex flex-col justify-center"
    >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] bg-[radial-gradient(circle,_rgba(117,69,72,0.03)_0%,_transparent_70%)] blur-[100px]"></div>
             <svg className="absolute w-full h-full opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M0,0 L100,100 M100,0 L0,100" stroke="#1c1917" strokeWidth="0.5" />
             </svg>
        </div>

        <div ref={containerRef} className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10 h-full flex flex-col">
            
            {/* Header Fixo na Seção */}
            <div className="absolute top-8 md:top-12 left-6 md:left-24 right-6 md:right-24 z-20 flex justify-between items-end border-b border-[#754548]/20 pb-6">
                 <div>
                    <span className="text-xs font-bold uppercase tracking-ultra text-[#754548] mb-2 block">
                        Clientes
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-none">
                        Relatos
                    </h2>
                 </div>
                 <div className="hidden md:flex gap-2 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    <span>Scroll</span>
                    <span className="animate-bounce">↓</span>
                 </div>
            </div>

            {/* Conteúdo Central Scrollável */}
            <div className="flex-grow flex items-center gap-8 md:gap-20 h-full pt-24 pb-12">
                
                {/* COLUNA ESQUERDA: TEXTOS (Move para Cima) */}
                <div className="w-full lg:w-1/2 h-[50vh] md:h-[40vh] relative overflow-hidden flex items-center">
                    {/* Barra de Progresso Lateral */}
                    <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-stone-200">
                        <div ref={progressBarRef} className="w-full h-full bg-[#754548] origin-top scale-y-0"></div>
                    </div>

                    <div ref={textWrapperRef} className="w-full pl-8 md:pl-16">
                        {testimonials.map((item) => (
                            <div key={item.id} className="testimonial-text h-[50vh] md:h-[40vh] flex flex-col justify-center">
                                <Quote size={32} className="text-[#754548]/20 mb-6" />
                                <p className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight text-stone-900 mb-8">
                                    "{item.text}"
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="h-[1px] w-12 bg-[#754548]"></div>
                                    <div>
                                        <p className="font-sans text-xs font-bold uppercase tracking-widest text-stone-900">
                                            {item.client}
                                        </p>
                                        <p className="font-sans text-[10px] uppercase tracking-wide text-stone-500 mt-1">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* COLUNA DIREITA: IMAGENS (Move para Baixo - Efeito Reverso) */}
                {/* Em mobile escondemos e mostramos apenas uma imagem estática ou simplificada, mas aqui faremos responsivo */}
                <div className="hidden lg:block w-1/2 h-[60vh] relative overflow-hidden rounded-2xl shadow-2xl bg-white border border-stone-100">
                    <div ref={imageWrapperRef} className="w-full h-full absolute top-0 left-0">
                        {/* Renderizamos REVERSO para alinhar com a lógica de movimento para baixo */}
                        {reversedImages.map((item) => (
                            <div key={item.id} className="w-full h-full relative">
                                <img 
                                    src={item.image} 
                                    alt={item.client}
                                    className="w-full h-full object-cover grayscale contrast-[1.1]"
                                />
                                <div className="absolute inset-0 bg-[#754548]/10 mix-blend-multiply"></div>
                                
                                {/* Tag flutuante na imagem */}
                                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur px-4 py-2 rounded-full border border-stone-200">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548]">
                                        {item.tag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
};

export default Testimonials;