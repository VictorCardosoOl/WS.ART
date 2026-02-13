import React, { useLayoutEffect, useRef, useState, useMemo, useCallback } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Reveal from '../ui/Reveal';
import ParallaxImage from '../ui/ParallaxImage';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../../data/portfolio';

// Ensure filtered inputs are safe
if (!Array.isArray(PORTFOLIO_ITEMS)) {
    console.error('CRITICAL: PORTFOLIO_ITEMS is not an array.');
}

gsap.registerPlugin(ScrollTrigger);

// --- Optimization: Constants & Helpers ---
const ANIMATION_CONFIG = {
    duration: 0.5,
    stagger: 0.05,
    ease: "power2.out"
};

/**
 * Calculates responsive grid classes based on index pattern.
 * Strategy: 12-column asymmetric 'Editorial' layout.
 */
const getGridPatternClasses = (index: number) => {
    const patternIndex = index % 6;
    switch (patternIndex) {
        case 0: return { grid: "lg:col-span-12 lg:mb-12", aspect: "aspect-[16/9]" };
        case 1: return { grid: "lg:col-span-5", aspect: null };
        case 2: return { grid: "lg:col-span-5 lg:col-start-8 lg:mt-32", aspect: null };
        case 3: return { grid: "lg:col-span-4 lg:col-start-2", aspect: null };
        case 4: return { grid: "lg:col-span-4 lg:col-start-8 lg:-mt-24", aspect: null };
        case 5: return { grid: "lg:col-span-6 lg:col-start-4 lg:mt-12", aspect: "aspect-[4/3]" };
        default: return { grid: "lg:col-span-6", aspect: null };
    }
};

const Portfolio: React.FC = () => {
    // --- State & Refs ---
    const [activeFilter, setActiveFilter] = useState<string>('all');
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
    const filterRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLElement>(null);

    // --- Memoized Data to Prevent Re-renders ---
    const categories = useMemo(() =>
        ['all', ...Array.from(new Set(PORTFOLIO_ITEMS.map(item => item.category)))]
        , []);

    const filteredItems = useMemo(() =>
        activeFilter === 'all'
            ? PORTFOLIO_ITEMS
            : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter)
        , [activeFilter]);

    const selectedItem = useMemo(() =>
        selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null
        , [selectedImageIndex, filteredItems]);

    // --- GSAP Animations (Clean Context Usage) ---
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            if (filterRef.current) {
                const buttons = filterRef.current.querySelectorAll('.filter-btn');
                if (buttons.length > 0) {
                    gsap.fromTo(buttons,
                        { y: 20, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: ANIMATION_CONFIG.duration,
                            stagger: ANIMATION_CONFIG.stagger,
                            ease: ANIMATION_CONFIG.ease,
                            scrollTrigger: {
                                trigger: filterRef.current,
                                start: "top 85%",
                                once: true
                            }
                        }
                    );
                }
            }
        }, containerRef);

        return () => ctx.revert();
    }, [filteredItems]); // Re-run when items change layout

    // --- Enhanced Handlers (Callback + Safety) ---
    const handleClose = useCallback(() => setSelectedImageIndex(null), []);

    const handleNext = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImageIndex(prev =>
            prev !== null ? (prev + 1) % filteredItems.length : null
        );
    }, [filteredItems.length]);

    const handlePrev = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedImageIndex(prev =>
            prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
    }, [filteredItems.length]);

    // Keyboard Support for Lightbox
    useLayoutEffect(() => {
        if (selectedImageIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') handleClose();
            if (e.key === 'ArrowRight') setSelectedImageIndex(prev => (prev! + 1) % filteredItems.length);
            if (e.key === 'ArrowLeft') setSelectedImageIndex(prev => (prev! - 1 + filteredItems.length) % filteredItems.length);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImageIndex, filteredItems.length, handleClose]);


    return (
        <section
            id="gallery"
            ref={containerRef}
            className="relative py-24 md:py-32 bg-[#FAF7F7] overflow-hidden"
        >
            {/* Background Atmosphere */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-[#754548]/5 to-transparent rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-stone-200/50 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

            {/* Sidebar Indicator */}
            <div className="hidden xl:block fixed top-1/2 left-8 -translate-y-1/2 z-30 mix-blend-difference pointer-events-none">
                <div className="flex items-center gap-6 -rotate-90 origin-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500 whitespace-nowrap">
                        Acervo Selecionado
                    </span>
                    <div className="w-16 h-[1px] bg-stone-500" />
                </div>
            </div>

            <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 lg:px-24 relative z-20">

                {/* Header */}
                <div className="mb-20 md:mb-32">
                    <Reveal>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-[#754548]/10 pb-12">
                            <div className="max-w-3xl">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="h-[1px] w-12 bg-[#754548]" />
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

                    {/* Filter Controls */}
                    <div ref={filterRef} className="mt-12 flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`filter-btn px-5 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-500 rounded-full border ${activeFilter === category
                                        ? 'bg-[#754548] text-white border-[#754548]'
                                        : 'bg-transparent text-stone-500 border-stone-200 hover:border-[#754548] hover:text-[#754548]'
                                    }`}
                                aria-pressed={activeFilter === category}
                            >
                                {category === 'all' ? 'Todos' : category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Editorial "Scattered" Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-y-32 gap-x-8">
                    {filteredItems.map((item, index) => {
                        const { grid, aspect } = getGridPatternClasses(index);
                        const finalAspect = aspect || item.height; // Fallback to item height if pattern doesn't enforce one

                        return (
                            <div key={item.id} className={`${grid} relative group`}>
                                <Reveal delay={index * 30}>
                                    <div
                                        role="button"
                                        tabIndex={0}
                                        className="cursor-pointer outline-none focus:ring-2 focus:ring-[#754548] focus:ring-offset-4 rounded-sm"
                                        onClick={() => setSelectedImageIndex(index)}
                                        onKeyDown={(e) => e.key === 'Enter' && setSelectedImageIndex(index)}
                                    >
                                        <div className="relative overflow-hidden mb-6 bg-stone-100">
                                            <div className="transition-all duration-700 ease-out group-hover:scale-[1.02] filter grayscale group-hover:grayscale-0 will-change-transform">
                                                <ParallaxImage
                                                    src={item.src}
                                                    alt={item.altText}
                                                    aspectRatio={finalAspect}
                                                />
                                            </div>
                                        </div>

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
                    <div className="h-24 w-[1px] bg-stone-300 mb-8" />
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 outline-none focus:opacity-80"
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

            {/* Optimized Lightbox Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-stone-900/95 backdrop-blur-md animate-fadeIn"
                    role="dialog"
                    aria-modal="true"
                    onClick={handleClose}
                >
                    {/* Controls */}
                    <button
                        className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[10010] p-2"
                        onClick={handleClose}
                        aria-label="Fechar galeria"
                    >
                        <X size={32} />
                    </button>

                    <button
                        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 p-4 text-white/20 hover:text-white transition-colors z-[10010] hidden md:block"
                        onClick={handlePrev}
                        aria-label="Imagem anterior"
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>

                    <button
                        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 p-4 text-white/20 hover:text-white transition-colors z-[10010] hidden md:block"
                        onClick={handleNext}
                        aria-label="Próxima imagem"
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>

                    {/* Image Display */}
                    <div
                        className="relative max-w-[95vw] max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative shadow-2xl shadow-black/50">
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.altText}
                                className="max-h-[80vh] w-auto object-contain rounded-sm select-none"
                                draggable={false}
                            />
                        </div>

                        <div className="mt-8 text-center animate-fadeInUp">
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