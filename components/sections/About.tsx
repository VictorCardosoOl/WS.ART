import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // 1. Text Animation (Reveal lines)
      gsap.fromTo(".about-line",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
          }
        }
      );

      // 2. Image Grid Animation (Stagger Up)
      gsap.fromTo(".about-image",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          }
        }
      );

      // 3. Parallax Effect on Images (Inner scaling)
      gsap.utils.toArray<HTMLElement>(".about-parallax-img").forEach((img) => {
        gsap.to(img, {
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
                trigger: img.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 md:py-48 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Content - Aligned Right based on reference */}
        <div ref={textRef} className="flex justify-end mb-32">
            <div className="max-w-2xl w-full text-left">
                {/* Headline */}
                <h2 className="font-sans font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] tracking-tighter text-stone-900 mb-8 uppercase">
                    <div className="overflow-hidden"><span className="about-line block">Eu sou William</span></div>
                    <div className="overflow-hidden"><span className="about-line block">Siqueira, e eu</span></div>
                    <div className="overflow-hidden"><span className="about-line block text-stone-300">Materializo</span></div>
                    <div className="overflow-hidden"><span className="about-line block">Histórias.</span></div>
                </h2>
                
                {/* Subtitle / Paragraph */}
                <div className="overflow-hidden pl-1 mt-6">
                    <div className="about-line">
                        <p className="font-serif text-lg md:text-xl text-stone-500 max-w-md leading-relaxed">
                            Especialista em Neotradicional. Transformo narrativas pessoais em anatomia e arte perene.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* Images Grid - 3 Columns */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            
            {/* Decorative Dot from print */}
            <div className="hidden md:block absolute -left-8 top-0 text-black text-4xl leading-none">•</div>

            {/* Image 1 */}
            <div className="about-image relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img 
                    src="https://picsum.photos/800/1000?grayscale&random=201" 
                    alt="Industrial Texture" 
                    className="about-parallax-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                />
            </div>
            
            {/* Image 2 */}
            <div className="about-image relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img 
                    src="https://picsum.photos/800/1000?grayscale&random=202" 
                    alt="Urban Architecture" 
                    className="about-parallax-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                />
            </div>

            {/* Image 3 */}
            <div className="about-image relative aspect-[3/4] overflow-hidden bg-stone-100">
                <img 
                    src="https://picsum.photos/800/1000?grayscale&random=203" 
                    alt="Organic Nature" 
                    className="about-parallax-img w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110"
                />
            </div>

        </div>

      </div>
    </section>
  );
};

export default About;