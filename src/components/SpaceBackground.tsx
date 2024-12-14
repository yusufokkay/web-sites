import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

interface Planet {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
}

interface SpaceBackgroundProps {
  mousePosition: { x: number; y: number };
}

export const SpaceBackground = ({ mousePosition }: SpaceBackgroundProps) => {
  const [stars, setStars] = useState<Star[]>([]);
  const [planets, setPlanets] = useState<Planet[]>([]);

  useEffect(() => {
    // Generate random stars
    const newStars = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
    }));

    // Generate random planets
    const newPlanets = Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 30 + 20,
      color: ['#FF6B6B', '#4ECDC4', '#45B7D1'][i],
      speed: Math.random() * 2 + 1,
    }));

    setStars(newStars);
    setPlanets(newPlanets);
  }, []);

  return (
    <div className="absolute inset-0">
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [star.opacity, star.opacity * 1.5, star.opacity],
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Planets */}
      {planets.map((planet) => (
        <motion.div
          key={planet.id}
          className="absolute rounded-full"
          style={{
            left: `${planet.x}%`,
            top: `${planet.y}%`,
            width: planet.size,
            height: planet.size,
            background: `radial-gradient(circle at 30% 30%, ${planet.color}, rgba(0,0,0,0.8))`,
          }}
          animate={{
            x: mousePosition.x * 0.02 * planet.speed,
            y: mousePosition.y * 0.02 * planet.speed,
          }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
          }}
        />
      ))}

      {/* Space dust */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(0,0,0,0)_70%)]" />
    </div>
  );
}