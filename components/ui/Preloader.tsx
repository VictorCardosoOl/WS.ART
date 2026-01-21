import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 800); // Wait for exit animation to finish before unlocking
        }, 2000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex items-center justify-center bg-[#1c1917] text-[#FAF7F7]"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    <div className="flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="text-4xl md:text-6xl font-serif tracking-tighter mb-4"
                        >
                            W<span className="text-[#754548]">.</span>S
                        </motion.div>
                        <motion.div 
                            className="w-32 h-[1px] bg-[#754548]/30 overflow-hidden"
                            initial={{ width: 0 }}
                            animate={{ width: 128 }}
                            transition={{ duration: 1.5, delay: 0.2, ease: "easeInOut" }}
                        >
                            <motion.div 
                                className="h-full bg-[#754548]"
                                animate={{ x: ["-100%", "100%"] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            />
                        </motion.div>
                         <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-4 text-[10px] uppercase tracking-[0.4em] text-stone-500"
                        >
                            Carregando Arte
                        </motion.p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;