import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const LandingAnimation = () => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      animate={{ opacity: isComplete ? 0 : 1 }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => {
        if (isComplete) {
          document.body.style.overflow = 'auto';
        }
      }}
    >
      <div className="relative">
        {/* Ana logo animasyonu */}
        <motion.div
          className="text-6xl font-bold text-white"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Yusuf
          </span>
        </motion.div>

        {/* Yıldız parçacıkları */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: '50%',
              top: '50%',
            }}
            initial={{ scale: 0, x: 0, y: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              x: Math.cos(i * (Math.PI * 2 / 20)) * 100,
              y: Math.sin(i * (Math.PI * 2 / 20)) * 100,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Alt metin animasyonu */}
        <motion.div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 text-gray-400 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Full Stack Developer
        </motion.div>
      </div>
    </motion.div>
  );
};