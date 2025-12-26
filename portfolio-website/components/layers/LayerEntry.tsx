'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInception } from '@/contexts/InceptionContext';
import SpinningTotem from '@/components/SpinningTotem';

export default function LayerEntry() {
  const { goDeeper } = useInception();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleTotemClick = () => {
    console.log('🎯 TOTEM CLICKED');

    // Trigger audio
    if (typeof (window as any).playInceptionAudio === 'function') {
      console.log('✅ Found playInceptionAudio function, calling it...');
      (window as any).playInceptionAudio();
    } else {
      console.error('❌ playInceptionAudio function not found on window');
    }

    // Descend after delay
    setTimeout(() => {
      console.log('⬇️ Descending to next layer...');
      goDeeper();
    }, 1200);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 30,
        rotateZ: 360,
        filter: 'blur(150px)'
      }}
      transition={{
        opacity: { duration: 1 },
        exit: { duration: 3, ease: [0.83, 0, 0.17, 1] }
      }}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        background: '#000000',
      }}
    >
      {/* Hexagonal grid background */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i % 6) * 20}%`,
              top: `${Math.floor(i / 6) * 20}%`,
              width: '150px',
              height: '150px',
              border: '1px solid #d4af37',
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Quantum particles - minimal, strategic */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => {
          const size = Math.random() * 2 + 1;
          const x = Math.random() * 100;
          const y = Math.random() * 100;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: '#d4af37',
                boxShadow: `0 0 ${size * 8}px #d4af37`,
              }}
              animate={{
                y: [0, -200, 0],
                opacity: [0, 0.8, 0],
                scale: [1, 2, 1],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                delay: Math.random() * 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Rotating energy rings */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
      >
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              border: `1px solid rgba(212, 175, 55, ${0.15 - i * 0.03})`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>

      {/* Holographic scan lines */}
      <motion.div
        className="absolute inset-0"
        animate={{ y: ['0%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="w-full h-1"
          style={{
            background: 'linear-gradient(90deg, transparent, #d4af37, transparent)',
            boxShadow: '0 0 20px #d4af37',
          }}
        />
      </motion.div>

      {/* PARALLAX DEPTH FIELD */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`,
        }}
        transition={{ type: 'spring', stiffness: 30, damping: 15 }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${600 + i * 300}px`,
              height: `${600 + i * 300}px`,
              background: `radial-gradient(circle, rgba(212, 175, 55, ${0.1 - i * 0.03}), transparent)`,
              left: `${25 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </motion.div>

      {/* MAIN CONTENT - ULTRA MINIMAL */}
      <div className="relative z-30 flex flex-col items-center justify-center gap-24">
        {/* NIKEN - HOLOGRAPHIC TEXT */}
        <motion.div
          initial={{ opacity: 0, y: -100, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 2.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.h1
            className="text-[10rem] md:text-[16rem] font-thin tracking-[0.4em]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              background: 'linear-gradient(180deg, #ffffff 0%, #d4af37 30%, #f4e1a1 60%, #d4af37 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 40px rgba(212, 175, 55, 0.6))',
            }}
            animate={{
              textShadow: [
                '0 0 60px rgba(212, 175, 55, 0.4)',
                '0 0 100px rgba(212, 175, 55, 0.8)',
                '0 0 60px rgba(212, 175, 55, 0.4)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            NIKEN
          </motion.h1>

          {/* Laser scan effect across name */}
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <motion.div
              className="w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent"
              style={{ boxShadow: '0 0 30px #ffffff' }}
              animate={{ y: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 3 }}
            />
          </motion.div>
        </motion.div>

        {/* TOTEM - ULTRA ENHANCED */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 3,
            delay: 1.5,
            type: 'spring',
            stiffness: 40,
            damping: 12
          }}
          style={{
            perspective: '2000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Energy field around totem */}
          <div className="relative">
            {/* Pulsing energy rings */}
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  border: `2px solid rgba(212, 175, 55, ${0.3 - i * 0.05})`,
                  transform: `scale(${1 + i * 0.6})`,
                }}
                animate={{
                  opacity: [0, 0.8, 0],
                  scale: [1 + i * 0.6, 2 + i * 0.6, 1 + i * 0.6],
                }}
                transition={{
                  duration: 4,
                  delay: i * 0.4,
                  repeat: Infinity,
                  ease: 'easeOut',
                }}
              />
            ))}

            {/* Orbiting particles */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={`orbit-${i}`}
                className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full pointer-events-none"
                style={{
                  background: '#d4af37',
                  boxShadow: '0 0 15px #d4af37',
                  marginLeft: '-6px',
                  marginTop: '-6px',
                }}
                animate={{
                  rotate: 360,
                  x: Math.cos((i * Math.PI * 2) / 6) * 100,
                  y: Math.sin((i * Math.PI * 2) / 6) * 100,
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                  x: { duration: 8, repeat: Infinity, ease: 'linear' },
                  y: { duration: 8, repeat: Infinity, ease: 'linear' },
                }}
              />
            ))}

            {/* TOTEM */}
            <motion.div
              animate={{
                y: [-15, 15, -15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                transformStyle: 'preserve-3d',
                filter: 'drop-shadow(0 0 50px rgba(212, 175, 55, 0.9))',
              }}
            >
              <SpinningTotem onClick={handleTotemClick} label="" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Radial vignette - stronger */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 20%, rgba(0,0,0,0.6) 70%, #000000 100%)',
        }}
      />

      {/* Subtle film grain */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='5.5' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E")`,
        }}
      />
    </motion.section>
  );
}
