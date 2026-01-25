import React, { useLayoutEffect, useRef } from 'react';
import Reveal from '../ui/Reveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../../data/assets';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax Interno Sutil
            // Apenas a IMAGEM se move dentro do container, o container fica fixo no grid.
            const images = imagesRef.current?.querySelectorAll('img');

            if (images) {
                images.forEach((img) => {
                    gsap.fromTo(img,
                        { scale: 1.15, yPercent: -5 }, // Começa levemente "cima"
                        {
                            yPercent: 5, // Termina levemente "baixo"
                            ease: "none",
                            scrollTrigger: {
                                trigger: img.parentElement, // Trigger é o container (moldura)
                                start: "top bottom",
                                end: "bottom top",
                                scrub: true
                            }
                        }
                    );
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="about" className="relative py-32 md:py-40 bg-white overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-5 md:px-10 2xl:px-20 relative z-10">

                {/* PARTE 1: TEXTO EDITORIAL */}
                <div className="grid grid-cols-1 lg:grid-cols-2 mb-24 md:mb-32">
                    {/* Coluna Esquerda Vazia */}
                    <div className="hidden lg:block"></div>

                    {/* Coluna Direita: Conteúdo */}
                    <div className="flex flex-col justify-center items-start lg:pl-12">
                        <Reveal>
                            <h2 className="font-sans font-medium text-5xl md:text-6xl lg:text-[5rem] leading-[0.9] tracking-tighter text-[#4A3B3B] uppercase mb-8">
                                Eu sou William Siqueira, e eu <span className="text-[#8F5E62]">materializo</span> histórias.
                            </h2>
                        </Reveal>

                        <Reveal delay={200}>
                            <div className="flex flex-col md:flex-row items-end md:items-start justify-between w-full gap-8 mt-4">
                                <p className="font-serif text-xl md:text-2xl text-[#2A2425] leading-relaxed max-w-md">
                                    Especialista em Neotradicional. Transformo narrativas pessoais em anatomia e arte perene.
                                </p>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* PARTE 2: GRID DE 3 IMAGENS (Alinhamento Restaurado) */}
                <div ref={imagesRef} className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">

                    {/* Imagem 01 */}
                    <Reveal delay={100} width="100%">
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 group">
                            <img
                                src={ASSETS.about.img1}
                                alt="Processo Criativo - Sketching"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out will-change-transform scale-110"
                            />
                        </div>
                    </Reveal>

                    {/* Imagem 02 */}
                    <Reveal delay={200} width="100%">
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 group">
                            <img
                                src={ASSETS.about.img2}
                                alt="Retrato William Siqueira"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out will-change-transform scale-110"
                            />
                        </div>
                    </Reveal>

                    {/* Imagem 03 */}
                    <Reveal delay={300} width="100%">
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100 group">
                            <img
                                src={ASSETS.about.img3}
                                alt="Detalhe Estúdio - Equipamentos"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out will-change-transform scale-110"
                            />
                        </div>
                    </Reveal>

                </div>

            </div>
        </section>
    );
};

export default About;