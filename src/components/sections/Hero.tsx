import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SpaceBackground } from '../SpaceBackground';


export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden bg-black">
      <SpaceBackground mousePosition={mousePosition} />
      
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Yusuf
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl mb-8 text-gray-300"
          >
            Full Stack Developer & UI/UX Designer
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="space-x-4"
          >
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
            >
              Projelerimi Gör
            </a>
            <a
              href="#contact"
              className="inline-block px-8 py-3 border-2 border-purple-600 text-white rounded-full hover:bg-purple-600/20 transition-colors"
            >
              İletişime Geç
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}