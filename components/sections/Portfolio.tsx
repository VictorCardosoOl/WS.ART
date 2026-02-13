import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Reveal from '../ui/Reveal';
import ParallaxImage from '../ui/ParallaxImage';
import { ArrowRight, Filter } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const Portfolio: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const filterRef = useRef<HTMLDivElement>(null);
    const masonryRef = useRef<HTMLDivElement>(null);

    // Categorias únicas do portfolio
    const categories = ['all', ...Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.category)))];

    // Filtrar items
    const filteredItems = activeFilter === 'all'
        ? PORTFOLIO_ITEMS
        : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

    // Animação do filtro e layout
    useLayoutEffect(() => {
        if (filterRef.current) {
            gsap.fromTo(
                filterRef.current.querySelectorAll('.filter-btn'),
                { y: 20, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: filterRef.current,
                        start: "top 85%",
                        once: true
                    }
                }
            );
        }
    }, []);

    // Reiniciar animações ao filtrar (opcional, mas bom para garantir consistência)
    useLayoutEffect(() => {
        ScrollTrigger.refresh();
    }, [filteredItems]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev! + 1) % filteredItems.length);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((prev) => (prev! - 1 + filteredItems.length) % filteredItems.length);
        }
    };

    const selectedItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

    return (
        <section id="gallery" className="relative py-24 md:py-32 bg-[#FAF7F7] overflow-hidden">

            {/* Global Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#754548]/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-200/50 rounded-full blur-[100px] pointer-events-none" />

            {/* Sticky Sidebar (Desktop Only) - Enhanced */}
            <div className="hidden xl:block fixed top-1/2 left-8 -translate-y-1/2 z-30 mix-blend-difference pointer-events-none">
                <div className="flex items-center gap-6 -rotate-90 origin-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 whitespace-nowrap">
                        Acervo Selecionado
                    </span>
                    <div className="w-16 h-[1px] bg-stone-500"></div>
                </div>
            </div>

            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-20">

                {/* Header Section */}
                <div className="mb-20 md:mb-32">
                    <Reveal>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-[#754548]/10 pb-12">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[1px] w-12 bg-[#754548]"></span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#754548]">
                                        Portfolio
                                    </span>
                                </div>
                                <h2 className="text-5xl md:text-8xl font-serif text-stone-900 leading-[0.85] tracking-tight">
                                    Corpo &<br />
                                    <span className="italic text-[#754548] ml-2 md:ml-6">Narrativa.</span>
                                </h2>
                            </div>
                            <div className="text-left md:text-right">
                                <p className="text-stone-500 font-sans text-xs tracking-widest uppercase mb-2">
                                    [ Atualização: Out 2024 ]
                                </p>
                                <p className="text-stone-900 font-serif italic text-xl">
                                    {filteredItems.length} Obras Autorais
                                </p>
                            </div>
                        </div>
                    </Reveal>

                    {/* Filter Buttons */}
                    <div ref={filterRef} className="mt-12 flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`filter-btn px-5 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-500 rounded-full border ${activeFilter === category
                                    ? 'bg-[#754548] text-white border-[#754548]'
                                    : 'bg-transparent text-stone-500 border-stone-200 hover:border-[#754548] hover:text-[#754548]'
                                    }`}
                            >
                                {category === 'all' ? 'Todos' : category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Editorial "Scattered" Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-y-32 gap-x-8">
                    {filteredItems.map((item, index) => {
                        // Pattern Index (0-5) for layout variation
                        const patternIndex = index % 6;

                        // Dynamic classes based on pattern
                        let gridClasses = "col-span-1"; // Default mobile
                        let aspectClasses = item.height; // Use original or override

                        // Desktop Grid Logic
                        switch (patternIndex) {
                            case 0:
                                gridClasses = "lg:col-span-12 lg:mb-12"; // Full width start (or large feature)
                                aspectClasses = "aspect-[16/9]"; // Force wide for hero-like impact
                                break;
                            case 1:
                                gridClasses = "lg:col-span-5"; // Standard Left
                                break;
                            case 2:
                                gridClasses = "lg:col-span-5 lg:col-start-8 lg:mt-32"; // Offset Right
                                break;
                            case 3:
                                gridClasses = "lg:col-span-4 lg:col-start-2"; // Small Left-Center
                                break;
                            case 4:
                                gridClasses = "lg:col-span-4 lg:col-start-8 lg:-mt-24"; // Overlap Right
                                break;
                            case 5:
                                gridClasses = "lg:col-span-6 lg:col-start-4 lg:mt-12"; // Centered Focus
                                aspectClasses = "aspect-[4/3]";
                                break;
                            default:
                                gridClasses = "lg:col-span-6";
                        }

                        // Fix for case 1 override in switch above - cleaning up logic
                        if (patternIndex === 1) gridClasses = "lg:col-span-5";

                        return (
                            <div
                                key={item.id}
                                className={`${gridClasses} relative group`}
                            >
                                <Reveal delay={index * 50}>
                                    <div
                                        className="cursor-pointer"
                                        onClick={() => setSelectedImageIndex(index)}
                                    >
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden mb-6">
                                            <div className="transition-all duration-700 ease-out group-hover:scale-[1.02] filter grayscale group-hover:grayscale-0">
                                                <ParallaxImage
                                                    src={item.src}
                                                    alt={item.altText}
                                                    aspectRatio={aspectClasses}
                                                />
                                            </div>
                                        </div>

                                        {/* Minimal Editorial Caption */}
                                        <div className="flex flex-col items-start space-y-1 px-1">
                                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                                                {item.category}
                                            </span>
                                            <div className="flex justify-between items-baseline w-full border-t border-stone-200 pt-3 mt-1">
                                                <h3 className="text-xl md:text-2xl font-serif text-stone-800 leading-none group-hover:text-[#754548] transition-colors">
                                                    {item.title}
                                                </h3>
                                                <span className="text-xs font-serif italic text-stone-400">
                                                    {item.year}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>
                            </div>
                        );
                    })}
                </div>

                {/* Footer Link */}
                <div className="mt-32 md:mt-48 text-center flex flex-col items-center">
                    <div className="h-24 w-[1px] bg-stone-300 mb-8"></div>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4"
                    >
                        <span className="text-3xl md:text-5xl font-serif italic text-stone-400 group-hover:text-[#754548] transition-colors duration-500">
                            Ver arquivo completo
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-stone-400 group-hover:text-stone-600 transition-colors">
                            @instagram
                        </span>
                    </a>
                </div>

            </div>

            {/* Enhanced Lightbox Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-stone-900/90 backdrop-blur-md transition-opacity duration-300"
                    onClick={() => setSelectedImageIndex(null)}
                >
                    {/* Controls */}
                    <button
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[10010]"
                        onClick={() => setSelectedImageIndex(null)}
                    >
                        <span className="text-xs uppercase tracking-widest mr-2">Fechar</span>
                        <span className="text-2xl">×</span>
                    </button>

                    <button
                        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-4 text-white/20 hover:text-white transition-colors z-[10010]"
                        onClick={handlePrev}
                    >
                        <ArrowRight size={32} className="rotate-180" />
                    </button>

                    <button
                        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-4 text-white/20 hover:text-white transition-colors z-[10010]"
                        onClick={handleNext}
                    >
                        <ArrowRight size={32} />
                    </button>

                    {/* Main Image Container */}
                    <div
                        className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative shadow-2xl shadow-black/50">
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.altText}
                                className="max-h-[80vh] w-auto object-contain rounded-sm"
                            />
                        </div>

                        {/* Caption */}
                        <div className="mt-8 text-center animate-fadeIn">
                            <h3 className="text-2xl md:text-3xl font-serif text-white mb-2">
                                {selectedItem.title}
                            </h3>
                            <p className="text-xs font-bold uppercase tracking-widest text-white/50">
                                {selectedItem.category} — {selectedItem.year}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Portfolio;