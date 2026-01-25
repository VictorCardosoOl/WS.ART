import React from 'react';
import Reveal from '../ui/Reveal';

const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 md:py-48 bg-[#FAF7F7] overflow-hidden">
      
      {/* Background Decorativo Suave */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[radial-gradient(circle,_#E5D0D4_0%,_transparent_60%)] opacity-20 blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* PARTE 1: MANIFESTO (Texto Refatorado Estilo "Eu Sou Kasia") */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-end">
            <div className="lg:col-span-8">
                <Reveal>
                    <h2 className="font-sans font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-stone-900 mb-8 uppercase">
                        Eu sou William<br/> 
                        Siqueira, e eu<br/>
                        <span className="text-stone-400">materializo</span><br/>
                        histórias.
                    </h2>
                </Reveal>

                <Reveal delay={200}>
                    <div className="space-y-6 max-w-xl text-lg text-stone-600 leading-relaxed font-serif border-l-2 border-[#754548] pl-6 mt-12">
                        <p className="font-medium text-stone-900">
                            Especialista em Neotradicional.
                        </p>
                        <p>
                            Transformo narrativas pessoais em anatomia e arte perene. Não sigo regras rígidas, meu estilo é liberdade e conexão.
                        </p>
                    </div>
                </Reveal>
            </div>
            
            <div className="lg:col-span-4 flex justify-start lg:justify-end pb-4">
                 <Reveal delay={400}>
                    <img 
                        src="https://signature.freefire-name.com/img.php?f=7&t=William" 
                        alt="Assinatura" 
                        className="h-24 opacity-80 mix-blend-multiply" 
                    />
                </Reveal>
            </div>
        </div>

        {/* PARTE 2: 3 FOTOS DO ARTISTA (Alinhadas / Mesmo Nível) */}
        {/* Removido translate-y-12 e gaps desiguais */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            
            {/* Foto 1 */}
            <Reveal delay={100} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200">
                    <img 
                        src="https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=800&auto=format&fit=crop" 
                        alt="Atmosfera Pessoal" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                </div>
            </Reveal>

            {/* Foto 2 */}
            <Reveal delay={200} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200">
                    <img 
                        src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop" 
                        alt="Processo Criativo" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                </div>
            </Reveal>

            {/* Foto 3 */}
            <Reveal delay={300} width="100%">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-200">
                    <img 
                        src="https://images.unsplash.com/photo-1550537687-c91357788f04?q=80&w=800&auto=format&fit=crop" 
                        alt="Estúdio Detalhe" 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out"
                    />
                </div>
            </Reveal>

        </div>

      </div>
    </section>
  );
};

export default About;