import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../ui/Reveal';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
}

const TiltCard: React.FC<TiltCardProps> = ({ children }) => {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full h-full"
        >
            {children}
        </motion.div>
    );
};

const FlashDay: React.FC = () => {
  return (
    <section id="flashday" className="py-24 md:py-32 bg-gradient-to-b from-white to-[#FAF7F7] border-b border-stone-100 relative overflow-hidden perspective-1000">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-[#754548]/10 pb-8">
            <Reveal>
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#754548] mb-4 block">Eventos Exclusivos</span>
                    <h2 className="font-serif text-5xl md:text-7xl text-stone-900 leading-none">Flash Days</h2>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <div className="mt-8 md:mt-0">
                    <p className="text-stone-500 text-xs max-w-xs text-right leading-relaxed font-sans uppercase tracking-wide">
                        Sessões especiais com desenhos autorais prontos.<br/> Atendimento por ordem de chegada.
                    </p>
                </div>
            </Reveal>
        </div>

        {/* Main Content: Ticket/Event Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: 3D Ticket Card */}
            <div className="relative perspective-[1000px]">
                <Reveal delay={100}>
                    <TiltCard>
                        <div className="bg-white p-8 md:p-12 border border-stone-100 relative overflow-hidden group rounded-sm shadow-2xl transform-style-3d transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(117,69,72,0.15)]">
                            {/* Decorative Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#754548] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out-expo"></div>
                            
                            <div className="flex justify-between items-start mb-12 translate-z-20">
                                <div className="flex flex-col">
                                    <span className="font-serif italic text-2xl text-stone-400">Próxima Edição</span>
                                    <span className="text-4xl md:text-6xl font-serif text-stone-900 mt-2">MARÇO</span>
                                    <span className="text-lg font-medium text-[#754548]">Dia 15, 2024</span>
                                </div>
                                <div className="w-16 h-16 border border-stone-200 rounded-full flex items-center justify-center animate-spin-slow bg-white shadow-sm">
                                    <span className="text-[8px] uppercase tracking-widest text-stone-400">Soon</span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 translate-z-10">
                                <div className="flex justify-between items-center border-b border-stone-100 pb-2">
                                    <span className="text-[10px] uppercase tracking-widest text-stone-400">Horário</span>
                                    <span className="text-sm font-bold text-stone-900">10:00 - 19:00</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-stone-100 pb-2">
                                    <span className="text-[10px] uppercase tracking-widest text-stone-400">Local</span>
                                    <span className="text-sm font-bold text-stone-900">Estúdio Privado, SP</span>
                                </div>
                            </div>

                            <div className="mt-10 translate-z-30">
                                <button className="w-full py-4 bg-[#754548] text-white font-sans text-[10px] font-bold uppercase tracking-[0.25em] hover:bg-stone-900 transition-colors flex justify-between items-center px-6 shadow-lg hover:shadow-xl">
                                    <span>Entrar na Lista VIP</span>
                                    <ArrowUpRight size={16} />
                                </button>
                            </div>
                        </div>
                    </TiltCard>
                </Reveal>
            </div>

            {/* Right: Info */}
            <div className="relative h-full flex flex-col justify-center pl-0 lg:pl-12">
                <Reveal delay={300}>
                    <h3 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6 leading-tight">
                        Arte acessível,<br/> 
                        <span className="italic text-[#754548]">qualidade inegociável.</span>
                    </h3>
                    <p className="text-stone-600 leading-relaxed mb-8 font-light">
                        Os Flash Days são a oportunidade perfeita para colecionar uma peça original. 
                        Diferente dos projetos sob medida, aqui você escolhe a arte pronta que mais ressoa com você no dia.
                    </p>
                    
                    <a href="https://instagram.com" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#754548] hover:text-stone-900 transition-colors border-b border-[#754548]/30 pb-1 hover:border-[#754548]">
                        Ver prévias no Instagram
                    </a>
                </Reveal>
            </div>

        </div>
      </div>
    </section>
  );
};

export default FlashDay;