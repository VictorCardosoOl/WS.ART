import React from 'react';
import Reveal from '../ui/Reveal';
import ParallaxImage from '../ui/ParallaxImage';
import { ShieldCheck, Droplets, Mic2, Wind } from 'lucide-react';

const Arsenal: React.FC = () => {
  return (
    <section className="relative py-32 md:py-48 bg-[#0c0a09] text-stone-200 overflow-hidden">
      
      {/* Background Texture: Subtle Noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay"></div>

      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        
        {/* HEADER */}
        <div className="mb-24 md:mb-32 border-b border-white/10 pb-12 flex flex-col md:flex-row justify-between items-end gap-8">
            <Reveal>
                <div>
                    <span className="block font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#754548] mb-4">
                        Standard & Safety
                    </span>
                    <h2 className="font-serif text-5xl md:text-7xl text-white leading-[0.9]">
                        O Arsenal <br/>
                        <span className="italic text-stone-500 text-3xl md:text-5xl">& Atmosfera.</span>
                    </h2>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <p className="max-w-md text-stone-400 text-sm leading-luxury font-light text-right">
                    A excelência não reside apenas no traço, mas na integridade dos materiais e na energia do ambiente. Segurança clínica com estética de galeria.
                </p>
            </Reveal>
        </div>

        {/* GRID: MATERIAIS (Clinical Chic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
            
            {/* Card 1: Tintas */}
            <Reveal width="100%" delay={100}>
                <div className="group relative bg-[#1c1917] p-8 md:p-10 h-full border border-white/5 hover:border-[#754548]/30 transition-colors duration-500">
                    <div className="absolute top-8 right-8 text-stone-700 group-hover:text-[#754548] transition-colors">
                        <Droplets size={24} strokeWidth={1} />
                    </div>
                    <h3 className="font-serif text-3xl text-white mb-4 mt-8">Pigmentação</h3>
                    <p className="text-stone-400 text-sm leading-relaxed mb-6">
                        Utilizamos exclusivamente tintas <strong>vegan-friendly</strong> de alta carga pigmentar (Solid Ink & Dynamic). Laudos de segurança aprovados pela ANVISA, garantindo longevidade e zero reações adversas.
                    </p>
                    <div className="w-full h-[1px] bg-white/10 mt-auto"></div>
                    <span className="block mt-4 text-[10px] uppercase tracking-widest text-stone-500">Longevidade Garantida</span>
                </div>
            </Reveal>

            {/* Card 2: Agulhas */}
            <Reveal width="100%" delay={200}>
                <div className="group relative bg-[#1c1917] p-8 md:p-10 h-full border border-white/5 hover:border-[#754548]/30 transition-colors duration-500">
                    <div className="absolute top-8 right-8 text-stone-700 group-hover:text-[#754548] transition-colors">
                        <ShieldCheck size={24} strokeWidth={1} />
                    </div>
                    <h3 className="font-serif text-3xl text-white mb-4 mt-8">Precisão Cirúrgica</h3>
                    <p className="text-stone-400 text-sm leading-relaxed mb-6">
                        Cartuchos de membrana de segurança e aço cirúrgico 316L. Material 100% descartável e estéril, aberto na sua frente. A barreira biológica é nossa prioridade absoluta.
                    </p>
                    <div className="w-full h-[1px] bg-white/10 mt-auto"></div>
                    <span className="block mt-4 text-[10px] uppercase tracking-widest text-stone-500">Risco Zero</span>
                </div>
            </Reveal>

            {/* Card 3: Imagem Macro (Visual Break) */}
            <Reveal width="100%" delay={300}>
                <div className="relative h-[300px] md:h-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                    <ParallaxImage 
                        src="https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=800&auto=format&fit=crop" 
                        alt="Detalhe de Equipamento Tattoo" 
                        className="opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] to-transparent opacity-80"></div>
                    <div className="absolute bottom-8 left-8">
                        <span className="text-white font-serif italic text-2xl">Precisão.</span>
                    </div>
                </div>
            </Reveal>
        </div>

        {/* SECTION: ATMOSFERA (Set & Setting) */}
        <div className="relative bg-[#12100E] rounded-sm overflow-hidden border border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                
                {/* Imagem Atmosfera */}
                <div className="relative h-[400px] lg:h-auto overflow-hidden group">
                     <ParallaxImage 
                        src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop" 
                        alt="Ambiente Estúdio Privado" 
                    />
                    <div className="absolute inset-0 bg-[#0c0a09]/40 group-hover:bg-[#0c0a09]/20 transition-colors duration-700"></div>
                </div>

                {/* Texto Atmosfera */}
                <div className="p-12 lg:p-24 flex flex-col justify-center">
                    <Reveal>
                        <h3 className="font-serif text-4xl md:text-5xl text-white mb-8">
                            O Ritual de <br/>
                            <span className="italic text-stone-500">Desconexão.</span>
                        </h3>
                    </Reveal>
                    
                    <Reveal delay={200}>
                        <p className="text-stone-400 text-lg leading-relaxed mb-12 font-light">
                            Transformamos a dor em meditação. Nosso estúdio privado foi desenhado para isolar o caos urbano. 
                            Sem interrupções, sem fluxo de estranhos. Apenas você e a obra.
                        </p>
                    </Reveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#754548]">
                                <Mic2 size={18} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Imersão Sonora</h4>
                                <p className="text-stone-500 text-xs leading-relaxed">Playlists curadas (Lo-Fi, Jazz, Ambient) ou o silêncio que você precisa.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#754548]">
                                <Wind size={18} />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Aromaterapia</h4>
                                <p className="text-stone-500 text-xs leading-relaxed">Ambiente levemente aromatizado para reduzir a ansiedade e promover foco.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    </section>
  );
};

export default Arsenal;