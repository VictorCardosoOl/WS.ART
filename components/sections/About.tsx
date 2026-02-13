import React, { useEffect, useRef } from 'react';
import Reveal from '../ui/Reveal';
import ParallaxImage from '../ui/ParallaxImage';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect on images
            imagesRef.current.forEach((img, index) => {
                if (img) {
                    gsap.to(img, {
                        yPercent: -10,
                        ease: "none",
                        scrollTrigger: {
                            trigger: img,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1
                        }
                    });

                    // Hover effect - scale and brightness
                    img.addEventListener('mouseenter', () => {
                        gsap.to(img.querySelector('img'), {
                            scale: 1.05,
                            duration: 0.6,
                            ease: "power2.out"
                        });
                    });

                    img.addEventListener('mouseleave', () => {
                        gsap.to(img.querySelector('img'), {
                            scale: 1,
                            duration: 0.6,
                            ease: "power2.out"
                        });
                    });
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24">

                {/* Header Grid - Layout do Print: Espaço à esquerda, Texto à direita */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 md:mb-24 items-end">
                    <div className="hidden lg:block relative h-full">
                        {/* Ponto decorativo minimalista do print */}
                        <div className="absolute bottom-4 left-0 w-2 h-2 bg-stone-900 rounded-full"></div>
                    </div>

                    <div className="flex flex-col justify-end text-left">
                        <Reveal>
                            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl leading-[0.9] text-stone-900 uppercase tracking-tighter mb-8">
                                Eu sou William<br />
                                Siqueira, e eu<br />
                                <span className="text-stone-400">Materializo</span><br />
                                Histórias.
                            </h2>
                        </Reveal>

                        <Reveal delay={200}>
                            <div className="max-w-md">
                                <p className="font-serif text-lg text-stone-600 leading-relaxed">
                                    Especialista em Neotradicional.<br />
                                    Transformo narrativas pessoais em anatomia e arte perene.
                                </p>
                            </div>
                        </Reveal>

                        <Reveal delay={400}>
                            <div className="mt-10">
                                {/* Tracking Widest (0.25em) */}
                                <Link to="/processo" className="group inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-[#754548] hover:text-stone-900 transition-colors">
                                    <span>Entenda o Processo</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </Reveal>
                    </div>
                </div>

                {/* Grid de 3 Imagens - Estilo Tríptico */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[600px]">
                    {/* Imagem 1: Industrial/Textura */}
                    <div
                        ref={el => imagesRef.current[0] = el}
                        className="w-full aspect-[3/4] md:h-full md:aspect-auto relative group overflow-hidden will-change-transform"
                    >
                        <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1565620612-421422703816?q=80&w=800&auto=format&fit=crop"
                                alt="Processo Industrial"
                            />
                        </div>
                    </div>

                    {/* Imagem 2: Urbano/Fachada */}
                    <div
                        ref={el => imagesRef.current[1] = el}
                        className="w-full aspect-[3/4] md:h-full md:aspect-auto relative group overflow-hidden will-change-transform"
                    >
                        <div className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 ease-out">
                            <ParallaxImage
                                src="https://images.unsplash.com/photo-1549140698-b6481cb7076c?q=80&w=800&auto=format&fit=crop"
                                alt="Fachada Estúdio"
                            />
                        </div>
                    </div>

                    {/* Imagem 3: Natureza/Atmosfera */}
                    <div
                        ref={el => imagesRef.current[2] = el}
                        className="w-full aspect-[3/4] md:h-full md:aspect-auto relative group overflow-hidden will-change-transform"
                    >
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