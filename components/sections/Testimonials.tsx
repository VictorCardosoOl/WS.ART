import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Reveal from '../ui/Reveal';
import { MessageCircle, Star, ShieldCheck, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    client: "Ana Clara",
    role: "Arquiteta & Urbanista",
    date: "Outubro, 2023",
    text: "Mais que tinta, William traduziu um momento de luto em beleza pura. O processo foi uma terapia, e o resultado é uma parte de mim que eu precisava resgatar.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
    project: "Cobertura Floral"
  },
  {
    id: 2,
    client: "Marcos V.",
    role: "Diretor de Arte",
    date: "Janeiro, 2024",
    text: "A precisão anatômica é assustadora. Ele desenhou diretamente no meu braço (freehand) para garantir que o fluxo seguisse minha musculatura. Impecável.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop",
    project: "Fechamento Neotrad"
  },
  {
    id: 3,
    client: "Juliana S.",
    role: "Chef de Cozinha",
    date: "Março, 2024",
    text: "Eu nunca imaginei que uma tatuagem pudesse ser uma experiência tão tranquila. O estúdio privado faz toda a diferença na imersão e no conforto.",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop",
    project: "Projeto Autoral"
  },
  {
    id: 4,
    client: "Ricardo M.",
    role: "Músico",
    date: "Abril, 2024",
    text: "A interpretação visual que ele deu para a minha música favorita foi além do que eu conseguia visualizar. Arte que respira.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    project: "Conceito Musical"
  }
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const shape1Ref = useRef<HTMLDivElement>(null);
  const shape2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".testimonial-card");
      const totalSlides = slides.length;
      
      // Animação Principal: Scroll Horizontal
      const tl = gsap.to(slides, {
        xPercent: -100 * (totalSlides - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalSlides - 1),
          end: () => "+=" + (triggerRef.current?.offsetWidth || 2000), // Duração baseada na largura
          invalidateOnRefresh: true,
        }
      });

      // Parallax Geométrico (Background Shapes)
      // O Shape 1 move-se mais rápido que o scroll
      gsap.to(shape1Ref.current, {
        x: -300,
        rotation: 45,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + (triggerRef.current?.offsetWidth || 2000),
          scrub: 1.5
        }
      });

      // O Shape 2 move-se em outra direção
      gsap.to(shape2Ref.current, {
        x: 200,
        y: -100,
        rotation: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => "+=" + (triggerRef.current?.offsetWidth || 2000),
          scrub: 2
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="relative h-screen bg-[#FAF7F7] overflow-hidden flex flex-col justify-center">
      
      {/* --- LAYER 0: BACKGROUND PARALLAX SHAPES --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Círculo Grande Sutil */}
          <div ref={shape1Ref} className="absolute top-[10%] right-[-10%] w-[60vh] h-[60vh] rounded-full border border-[#754548]/10 opacity-60"></div>
          
          {/* Arco Decorativo */}
          <div ref={shape2Ref} className="absolute bottom-[-10%] left-[10%] w-[40vh] h-[40vh] border-t-2 border-r-2 border-[#754548]/5 rounded-tr-full opacity-50"></div>
          
          {/* Noise Texture Global */}
          <div className="absolute inset-0 bg-noise opacity-[0.03]"></div>
      </div>

      {/* --- LAYER 1: HEADER FIXO VISUALMENTE (DENTRO DO PIN) --- */}
      <div className="absolute top-12 left-0 w-full px-6 md:px-24 z-20 flex justify-between items-end pointer-events-none">
          <Reveal>
             <div>
                <div className="flex items-center gap-2 mb-2 text-[#754548]">
                    <MessageCircle size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Feedback</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-stone-900 leading-none">
                    Vozes &<br/><span className="italic text-[#754548]">Narrativas.</span>
                </h2>
             </div>
          </Reveal>
          <div className="hidden md:flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Interação</span>
              <span className="text-xs font-serif italic text-stone-600">Role para navegar</span>
          </div>
      </div>

      {/* --- LAYER 2: HORIZONTAL TRACK --- */}
      <div ref={triggerRef} className="w-full h-[60vh] relative z-10 flex items-center pl-6 md:pl-24">
          <div className="flex gap-12 md:gap-32 w-max px-4">
              
              {testimonials.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="testimonial-card relative w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0"
                  >
                      {/* CARD ESTILO 'CHAT' SOFISTICADO */}
                      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-stone-100 relative group transition-all hover:border-[#754548]/30 hover:shadow-lg">
                          
                          {/* Chat Bubble Tail (Visual) */}
                          <div className="absolute -bottom-4 left-12 w-8 h-8 bg-white border-b border-r border-stone-100 transform rotate-45 group-hover:border-[#754548]/30 transition-colors"></div>

                          {/* Header do Card */}
                          <div className="flex justify-between items-start mb-8">
                              <div className="flex items-center gap-4">
                                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-stone-100">
                                      <img src={item.image} alt={item.client} className="w-full h-full object-cover grayscale" />
                                  </div>
                                  <div>
                                      <h3 className="font-serif text-xl text-stone-900 leading-none">{item.client}</h3>
                                      <p className="text-[10px] font-sans uppercase tracking-wider text-stone-400 mt-1">{item.role}</p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-1 bg-stone-50 px-3 py-1 rounded-full border border-stone-100">
                                  <Star size={10} className="text-[#754548] fill-[#754548]" />
                                  <span className="text-[9px] font-bold uppercase tracking-widest text-stone-500">Verificado</span>
                              </div>
                          </div>

                          {/* Conteúdo (Quote) */}
                          <div className="relative mb-8">
                              <Quote className="absolute -top-2 -left-4 w-6 h-6 text-[#754548]/10 transform -scale-x-100" />
                              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-stone-800 leading-snug italic relative z-10">
                                  "{item.text}"
                              </p>
                          </div>

                          {/* Footer do Card */}
                          <div className="flex justify-between items-center border-t border-stone-100 pt-6">
                              <div className="flex items-center gap-2">
                                  <ShieldCheck size={14} className="text-[#754548]" />
                                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548]">
                                      {item.project}
                                  </span>
                              </div>
                              <span className="text-[10px] font-sans text-stone-400">
                                  {item.date}
                              </span>
                          </div>

                      </div>
                  </div>
              ))}

              {/* CARTÃO FINAL: CALL TO ACTION (Parte do fluxo horizontal) */}
              <div className="testimonial-card relative w-[85vw] md:w-[60vw] lg:w-[45vw] flex-shrink-0 flex items-center justify-center">
                  <div className="text-center">
                      <h3 className="font-serif text-5xl md:text-7xl text-stone-900 mb-6">Sua vez.</h3>
                      <p className="text-stone-500 max-w-md mx-auto mb-8 font-light">
                          Cada tatuagem é um novo capítulo. Vamos escrever o seu?
                      </p>
                      <a href="#booking" className="inline-block bg-[#1c1917] text-white px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#754548] transition-colors">
                          Iniciar Projeto
                      </a>
                  </div>
              </div>

          </div>
      </div>

    </section>
  );
};

export default Testimonials;