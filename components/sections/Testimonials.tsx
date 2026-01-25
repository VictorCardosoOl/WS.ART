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
  const trackRef = useRef<HTMLDivElement>(null);
  const bgShapeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".testimonial-slide");
      const totalSlides = slides.length;
      
      // Cálculo da largura total para o scroll horizontal
      const totalWidth = 100 * (totalSlides - 1); // Em porcentagem

      const tl = gsap.to(trackRef.current, {
        xPercent: -totalWidth,
        ease: "none", // Linear para o scrub controlar a velocidade
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true, // Trava a seção
          scrub: 0.5, // Suaviza o movimento
          snap: {
            snapTo: 1 / (totalSlides - 1), // "Imanta" em cada slide
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1,
            ease: "power1.inOut"
          },
          end: () => "+=" + (trackRef.current?.offsetWidth || 3000) // Duração do scroll baseada na largura
        }
      });

      // Animação de Parallax nas Imagens (efeito "janela")
      slides.forEach((slide: any) => {
        const img = slide.querySelector("img");
        if (img) {
            gsap.fromTo(img, 
                { objectPosition: "0% 50%" },
                { 
                    objectPosition: "100% 50%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true
                    }
                }
            );
        }
      });

      // Background Shape Animation
      gsap.to(bgShapeRef.current, {
        rotation: 360,
        x: -200,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
        ref={sectionRef} 
        id="testimonials" 
        className="relative h-screen bg-[#FAF7F7] overflow-hidden flex flex-col"
    >
      
      {/* Background Decorativo */}
      <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
          {/* Forma Geométrica Rotativa */}
          <div ref={bgShapeRef} className="absolute -right-[10vw] top-[20vh] w-[40vw] h-[40vw] border border-[#754548]/10 rounded-full border-dashed opacity-50"></div>
      </div>

      {/* Header Fixo (Fora do Track) */}
      <div className="absolute top-8 left-6 md:left-12 z-20 mix-blend-multiply pointer-events-none">
          <Reveal>
             <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548]">
                Vozes
             </span>
             <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mt-2">
                Experiências Reais
             </h2>
          </Reveal>
      </div>

      {/* TRACK HORIZONTAL */}
      <div ref={trackRef} className="flex h-full w-[400%] will-change-transform">
          
          {testimonials.map((item) => (
              <div 
                key={item.id} 
                className="testimonial-slide w-screen h-full flex flex-col md:flex-row items-center justify-center relative px-6 md:px-12 lg:px-24 gap-8 md:gap-16 lg:gap-24"
              >
                  
                  {/* COLUNA IMAGEM (9:16 Ratio - Full Height feel) */}
                  {/* Ordem no mobile: Imagem primeiro, depois texto. Desktop: Imagem Esquerda. */}
                  <div className="w-full md:w-[45vh] lg:w-[50vh] h-[50vh] md:h-[80vh] lg:h-[90vh] flex-shrink-0 relative mt-16 md:mt-0 order-2 md:order-1">
                      <div className="w-full h-full overflow-hidden relative shadow-2xl rounded-sm">
                          <img 
                            src={item.image} 
                            alt={item.client} 
                            className="w-full h-full object-cover grayscale contrast-[1.05] scale-110"
                            loading="lazy"
                          />
                          {/* Tag Flutuante sobre a imagem */}
                          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2">
                               <span className="text-[9px] font-bold uppercase tracking-widest text-[#754548]">
                                  {item.project}
                               </span>
                          </div>
                      </div>
                  </div>

                  {/* COLUNA TEXTO */}
                  <div className="w-full md:w-1/2 lg:w-[40vw] flex flex-col justify-center order-1 md:order-2 z-10">
                      
                      {/* Ícone de Chat/Quote Estilizado */}
                      <div className="mb-8 text-[#754548]">
                          <Quote size={40} className="fill-[#754548]/10" />
                      </div>

                      <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight text-stone-900 mb-8 md:mb-12">
                          "{item.text}"
                      </h3>

                      <div className="flex items-center gap-4 border-t border-stone-200 pt-6 max-w-sm">
                          <div className="w-12 h-12 rounded-full overflow-hidden grayscale">
                               <img src={item.image} className="w-full h-full object-cover" alt="Avatar" />
                          </div>
                          <div>
                              <p className="font-sans text-sm font-bold uppercase tracking-widest text-stone-900">
                                  {item.client}
                              </p>
                              <div className="flex items-center gap-2 mt-1">
                                  <span className="text-[10px] text-stone-500 font-serif italic">
                                      {item.role}
                                  </span>
                                  <div className="flex">
                                      {[...Array(5)].map((_, i) => (
                                          <Star key={i} size={8} className="fill-[#754548] text-[#754548]" />
                                      ))}
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>

              </div>
          ))}

      </div>

      {/* Indicador de Progresso / Scroll */}
      <div className="absolute bottom-8 right-8 md:right-12 z-20 flex flex-col items-end pointer-events-none">
          <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-2">
              Role para o lado
          </span>
          <div className="w-32 h-[1px] bg-stone-300 overflow-hidden">
               <div className="h-full bg-[#754548] w-1/4 animate-[shimmer_2s_infinite]"></div>
          </div>
      </div>

    </section>
  );
};

export default Testimonials;