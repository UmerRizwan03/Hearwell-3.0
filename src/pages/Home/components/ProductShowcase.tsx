import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { hearingAidsData } from '../data';

export const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hearingAidsData.length);
    }, 4000); // 4 seconds between transitions
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
      {/* Background removed as requested */}
      {/* 3D Product Layers */}
      <div className="relative w-[70%] h-[70%] z-10">
        {/* Glow behind product */}
        <div 
          className="absolute inset-0 bg-[var(--color-primary)] rounded-full blur-[60px] opacity-15 mix-blend-multiply"
        />
        
        {/* Animated Carousel Area */}
        <div className="absolute inset-0 w-full h-full">
          {hearingAidsData.map((item, index) => {
            // Determine relative position in carousel
            let offset = index - currentIndex;
            const total = hearingAidsData.length;
            
            // Normalize offset to be within -floor(total/2) and +floor(total/2)
            if (offset > Math.floor(total / 2)) offset -= total;
            if (offset < -Math.floor(total / 2)) offset += total;
            
            const isCenter = offset === 0;
            const isLeft = offset === -1;
            const isRight = offset === 1;

            // Visual properties based on position
            let xOffset = "0%";
            let scaleRatio = 1;
            let opacity = 0;
            let blur = 10;
            let zIndex = 0;

            if (isCenter) {
              xOffset = "0%";
              scaleRatio = 1;
              opacity = 1;
              blur = 0;
              zIndex = 30;
            } else if (isLeft) {
              xOffset = "-55%";
              scaleRatio = 0.65;
              opacity = 0.3;
              blur = 4;
              zIndex = 20;
            } else if (isRight) {
              xOffset = "55%";
              scaleRatio = 0.65;
              opacity = 0.3;
              blur = 4;
              zIndex = 20;
            } else {
              xOffset = "0%"; // Hide others in center back
              scaleRatio = 0.4;
              opacity = 0;
              blur = 8;
              zIndex = 10;
            }

            return (
              <motion.div
                key={item.id}
                className="absolute inset-0 w-full h-full flex items-center justify-center"
                initial={false}
                animate={{
                  x: xOffset,
                  scale: scaleRatio,
                  opacity,
                  filter: `blur(${blur}px)`,
                  zIndex,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Inner div for the continuous floating animation on the active item */}
                <div
                  className={`w-full h-full flex items-center justify-center ${isCenter ? 'animate-[float-gentle_4s_ease-in-out_infinite] will-change-transform' : ''}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.fullName}
                    className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] scale-110 sm:scale-125 lg:scale-[1.4]"
                    {...(isCenter ? { fetchPriority: 'high', loading: 'eager' } : { loading: 'lazy' })}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
