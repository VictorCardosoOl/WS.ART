import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Entrance Animation
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
       // Header
       gsap.from(".testimonial-header", {
         y: 30,
         opacity: 0,
         duration: 1,
         ease: "power3.out",
         scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%"
         }
       });

       // List Items stagger
       const items = gsap.utils.toArray(".testimonial-item");
       gsap.from(items, {
         x: -30,
         opacity: 0,
         duration: 0.8,
         stagger: 0.1,
         ease: "power2.out",
         scrollTrigger: {
            trigger: listRef.current,
            start: "top 80%"
         }
       });
       
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Image Transition Animation
  useLayoutEffect(() => {
    if (imageRef.current) {
        gsap.fromTo(imageRef.current, 
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 0.6, ease: "power2.out", overwrite: true }
        );
    }
    if (tagRef.current) {
        gsap.fromTo(tagRef.current,
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: "back.out(1.7)", overwrite: true }
        );
    }
  }, [activeIndex]);

  return (
    <section ref={sectionRef} className="relative w-full py-32 md:py-48 bg-[#FAF7F7] overflow-hidden" id="testimonials">
      
      {/* SEPARATOR: WAVE TOP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10">
         <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-[60px] md:h-[100px] fill-[#F5F5F5]">
             <path fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"></path>
         </svg>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-200/30 via-[#FAF7F7] to-[#FAF7F7] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="testimonial-header mb-24 flex flex-col md:flex-row justify-between items-end border-b border-[#754548]/20 pb-8 mt-12">
            <h2 className="text-5xl md:text-7xl font-serif text-stone-900 leading-none tracking-tight">
                Narrativas<span className="text-[#754548]">.</span>
            </h2>
            <p className="text-stone-500 uppercase tracking-widest text-xs mt-4 md:mt-0 font-bold">
                Experiências Reais
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
            
            {/* LISTA INTERATIVA */}
            <div ref={listRef} className="w-full lg:w-1/2 flex flex-col justify-center space-y-12 relative z-20" role="list">
                {testimonials.map((item, index) => (
                    <div 
                        key={item.id}
                        role="button"
                        tabIndex={0}
                        aria-pressed={activeIndex === index}
                        className="testimonial-item group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#754548] focus-visible:ring-offset-4 rounded-lg"
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => setActiveIndex(index)}
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

            {/* IMAGEM STICKY */}
            <div className="hidden lg:block w-1/2 relative h-[80vh]" aria-hidden="true">
                <div className="sticky top-32 w-full h-full">
                    <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl bg-stone-200">
                        <div className="absolute inset-4 border border-white/20 z-20 pointer-events-none rounded-2xl"></div>
                        
                        <div className="absolute inset-0 w-full h-full">
                            <img 
                                ref={imageRef}
                                src={testimonials[activeIndex].image} 
                                alt={testimonials[activeIndex].client}
                                className="w-full h-full object-cover grayscale contrast-[1.1] will-change-transform"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#754548]/40 to-transparent mix-blend-multiply opacity-60"></div>
                        </div>

                        <div className="absolute bottom-8 left-8 z-30">
                             <div 
                                ref={tagRef}
                                className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg"
                             >
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
                 <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full shadow-md">
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