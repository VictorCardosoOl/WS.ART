import React from 'react';
import Reveal from '../ui/Reveal';
import ParallaxImage from '../ui/ParallaxImage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      
      {/* Background Grid - Referência a Papel Milimetrado/Anatomia */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ 
               backgroundImage: 'linear-gradient(#1c1917 1px, transparent 1px), linear-gradient(90deg, #1c1917 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 md:mb-24 items-end">
            
            <div className="hidden lg:block relative h-full">
               {/* Decoração Orgânica (Referência a Dali/Fluidez) */}
               <div className="absolute bottom-4 left-0 w-3 h-3 bg-stone-900 rounded-full animate-pulse"></div>
               <div className="absolute bottom-4 left-4 w-1 h-12 bg-stone-300"></div>
            </div>

            <div className="flex flex-col justify-end text-left">
                <Reveal>
                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-stone-900 uppercase tracking-tighter mb-8 max-w-3xl relative">
                        {/* Scribble Overlay */}
                        <svg className="absolute -top-6 -left-6 w-16 h-16 text-[#754548] opacity-20 -rotate-12" viewBox="0 0 100 100">
                             <path d="M10,50 Q50,10 90,50 T10,90" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        Eu sou William Siqueira,<br /> e eu <span className="text-stone-400 font-serif italic lowercase px-2 decoration-[#754548] underline decoration-wavy">materializo</span><br /> Histórias.
                    </h2>
                </Reveal>
                
                <Reveal delay={200}>
                    <div className="max-w-md border-l-2 border-[#754548]/20 pl-6">
                        <p className="font-sans text-lg text-stone-600 leading-relaxed font-light">
                            Especialista em Neotradicional.<br />
                            Transformo narrativas pessoais em anatomia e arte perene, inspirando-me na visceralidade da história e na fluidez do corpo.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={400}>
                    <div className="mt-10">
                        <Link to="/processo" className="group inline-flex items-center gap-4 text-xs font-bold font-sans uppercase tracking-widest text-[#754548] hover:text-stone-900 transition-colors">
                            <span>Entenda o Processo</span>
                            {/* Seta Personalizada */}
                            <svg width="20" height="10" viewBox="0 0 20 10" className="stroke-current fill-none group-hover:translate-x-2 transition-transform">
                                <path d="M0,5 L20,5 M15,0 L20,5 L15,10" strokeWidth="1.5" />
                            </svg>
                        </Link>
                    </div>
                </Reveal>
            </div>
        </div>

        {/* Galeria com Máscaras "Torn Paper" (Varejão/Colagem) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[600px]">
            
            <div className="w-full aspect-[3/4] md:h-full md:aspect-auto relative group overflow-hidden md:mt-12">
                <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out shadow-xl shadow-stone-200"
                     style={{ clipPath: "polygon(2% 0, 100% 0, 98% 100%, 0% 98%)" }}>
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1565620612-421422703816?q=80&w=800&auto=format&fit=crop" 
                        alt="Processo Industrial" 
                    />
                </div>
            </div>
            
            <div className="w-full aspect-[3/4] md:h-full md:aspect-auto relative group overflow-hidden md:-mt-12 z-10">
                 <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out shadow-2xl shadow-stone-300"
                      style={{ clipPath: "polygon(0 0, 100% 2%, 100% 100%, 2% 98%)" }}>
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1549140698-b6481cb7076c?q=80&w=800&auto=format&fit=crop" 
                        alt="Fachada Estúdio" 
                    />
                 </div>
            </div>

            <div className="w-full aspect-[3/4] md:h-full md:aspect-auto relative group overflow-hidden md:mt-6">
                 <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out shadow-xl shadow-stone-200"
                      style={{ clipPath: "polygon(2% 2%, 98% 0, 100% 98%, 0 100%)" }}>
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop" 
                        alt="Inspiração Natural" 
                    />
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default About;