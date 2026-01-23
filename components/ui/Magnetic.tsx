import React, { useRef, useState } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: React.ReactElement;
  strength?: number; // 0.5 = weak, 1 = standard, 2 = strong
}

const Magnetic: React.FC<MagneticProps> = ({ children, strength = 1 }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();

    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Physics: Move element towards mouse position with elasticity
    gsap.to(ref.current, {
      x: x * strength,
      y: y * strength,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    
    // Physics: Snap back to origin
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  };

  return React.cloneElement(children, {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave
  });
};

export default Magnetic;