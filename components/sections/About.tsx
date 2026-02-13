import React from 'react';
import Reveal from '../ui/Reveal';
import ParallaxImage from '../ui/ParallaxImage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Grid ajustado: 2 Colunas. A primeira é vazia (spacer) para empurrar o texto para a direita */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 md:mb-24 items-end">
            
            {/* Spacer Column (Restaurada para manter o layout original) */}
            <div className="hidden lg:block relative h-full">
               <div className="absolute bottom-4 left-0 w-2 h-2 bg-stone-900 rounded-full"></div>
            </div>

            <div className="flex flex-col justify-end text-left">
                <Reveal>
                    {/* Tamanho de fonte corrigido para classes fixas (4xl/5xl/6xl) ao invés de fluid-h2 instável */}
                    <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.0] text-stone-900 uppercase tracking-tighter mb-8 max-w-3xl">
                        Eu sou William Siqueira,<br /> e eu <span className="text-stone-400">Materializo</span><br /> Histórias.
                    </h2>
                </Reveal>
                
                <Reveal delay={200}>
                    <div className="max-w-md">
                        <p className="font-sans text-lg text-stone-600 leading-relaxed font-light">
                            Especialista em Neotradicional.<br />
                            Transformo narrativas pessoais em anatomia e arte perene.
                        </p>
                    </div>
                </Reveal>

                <Reveal delay={400}>
                    <div className="mt-10">
                        <Link to="/processo" className="group inline-flex items-center gap-4 text-xs font-bold font-sans uppercase tracking-widest text-[#754548] hover:text-stone-900 transition-colors">
                            <span>Entenda o Processo</span>
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
            <div className="w-full aspect-[3/4] md:h-full md:aspect-auto relative group overflow-hidden">
                <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1565620612-421422703816?q=80&w=800&auto=format&fit=crop" 
                        alt="Processo Industrial" 
                    />
                </div>
            </div>
            
            <div className="w-full aspect-[3/4] md:h-full md:aspect-auto relative group overflow-hidden">
                 <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1549140698-b6481cb7076c?q=80&w=800&auto=format&fit=crop" 
                        alt="Fachada Estúdio" 
                    />
                 </div>
            </div>

            <div className="w-full aspect-[3/4] md:h-full md:aspect-auto relative group overflow-hidden">
                 <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
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