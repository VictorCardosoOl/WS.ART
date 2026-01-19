import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const words = ["ARTE", "PELE", "MEMÓRIA", "DOR", "CURA", "ETERNIDADE"];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Counter Animation
    const duration = 2500; // 2.5 seconds total load time
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Word cycler
    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 300);

    return () => clearInterval(wordInterval);
  }, []);

  useEffect(() => {
    if (count >= 100) {
      setTimeout(() => {
        setIsFinished(true);
        setTimeout(onComplete, 1000); // Wait for exit animation
      }, 500);
    }
  }, [count, onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-[#12100E] text-[#F2E8E9] flex flex-col justify-between p-6 md:p-12 cursor-wait"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="flex justify-between items-start">
             <span className="text-xs font-bold tracking-widest uppercase opacity-50">William Siqueira</span>
             <span className="text-xs font-bold tracking-widest uppercase opacity-50">São Paulo, BR</span>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center overflow-hidden">
             <motion.h1 
                key={wordIndex}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                className="text-[12vw] md:text-[8vw] font-serif font-black tracking-tighter leading-none text-pantone-sophisticated mix-blend-difference"
             >
                {words[wordIndex]}
             </motion.h1>
          </div>

          <div className="flex justify-between items-end">
             <div className="text-[10vw] md:text-[6vw] font-sans font-light leading-none tracking-tighter">
                {Math.round(count)}%
             </div>
             <div className="text-right hidden md:block">
                <p className="text-xs font-bold tracking-widest uppercase opacity-50 mb-2">Carregando Experiência</p>
                <div className="w-24 h-[1px] bg-white/20 relative overflow-hidden">
                    <motion.div 
                        className="absolute top-0 left-0 h-full bg-white" 
                        style={{ width: `${count}%` }} 
                    />
                </div>
             </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;