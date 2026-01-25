import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

interface MarqueeProps {
    text: string;
    repeat?: number;
    duration?: number;
    className?: string;
    reverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
    text,
    repeat = 4,
    duration = 20,
    className = "",
    reverse = false
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const el = textRef.current;
            if (!el) return;

            const totalWidth = el.scrollWidth / 2; // Metade porque duplicamos o conteúdo

            gsap.to(el, {
                x: reverse ? totalWidth : -totalWidth,
                duration: duration,
                ease: "none",
                repeat: -1
            });
        }, containerRef);

        return () => ctx.revert();
    }, [duration, reverse]);

    const content = Array(repeat).fill(text).join(" — ");

    return (
        <div ref={containerRef} className={`w-full overflow-hidden flex whitespace-nowrap ${className}`}>
            <div ref={textRef} className="flex will-change-transform">
                <span className="mr-8">{content}</span>
                <span className="mr-8">{content}</span>
            </div>
        </div>
    );
};

export default Marquee;
