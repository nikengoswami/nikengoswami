'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInception } from '@/contexts/InceptionContext';
import SpinningTotem from '@/components/SpinningTotem';

export default function LayerEntry() {
  const { goDeeper } = useInception();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hasInteracted, setHasInteracted] = useState(false);

  // Track mouse for parallax effect
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
    setHasInteracted(true);
    // Trigger audio play from InceptionAudio component
    const audioButton = document.querySelector('[data-audio-toggle]') as HTMLButtonElement;
    if (audioButton) {
      audioButton.click();
    }
    // Small delay before descending for dramatic effect
    setTimeout(() => {
      goDeeper();
    }, 800);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 20,
        rotateZ: 180,
        filter: 'blur(100px)'
      }}
      transition={{
        opacity: { duration: 2 },
        exit: { duration: 2.5, ease: [0.83, 0, 0.17, 1] }
      }}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #0a0a0a 0%, #000000 100%)',
      }}
    >
      {/* Ultra-cinematic particle field */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => {
          const size = Math.random() * 3 + 0.5;
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const duration = Math.random() * 30 + 20;
          const delay = Math.random() * 10;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, ${i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#8b7355' : '#c9a961'} 0%, transparent 70%)`,
                boxShadow: `0 0 ${size * 4}px ${i % 3 === 0 ? '#d4af37' : i % 3 === 1 ? '#8b7355' : '#c9a961'}`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.sin(i) * 50, 0],
                opacity: [0.1, 0.6, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration,
                delay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Cinematic light rays */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            linear-gradient(45deg, transparent 30%, #d4af37 50%, transparent 70%),
            linear-gradient(-45deg, transparent 30%, #c9a961 50%, transparent 70%)
          `,
          mixBlendMode: 'screen',
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.5, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: 'linear' },
          scale: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Parallax layers */}
      <motion.div
        className="absolute inset-0"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-full"
            style={{
              transform: `translateZ(${i * 50}px)`,
            }}
          >
            <div
              className="absolute rounded-full blur-3xl"
              style={{
                width: `${300 + i * 100}px`,
                height: `${300 + i * 100}px`,
                background: `radial-gradient(circle, ${['#d4af37', '#c9a961', '#8b7355'][i % 3]}20, transparent)`,
                left: `${30 + i * 10}%`,
                top: `${20 + i * 15}%`,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="relative z-20 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Dramatic title reveal */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-8xl md:text-[12rem] font-extralight tracking-[0.3em] mb-8 relative"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              background: 'linear-gradient(180deg, #f4e1a1 0%, #d4af37 50%, #8b7355 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 80px rgba(212, 175, 55, 0.5)',
            }}
            animate={{
              textShadow: [
                '0 0 80px rgba(212, 175, 55, 0.3)',
                '0 0 120px rgba(212, 175, 55, 0.6)',
                '0 0 80px rgba(212, 175, 55, 0.3)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            NIKEN
          </motion.h1>

          {/* Glowing divider */}
          <motion.div
            className="relative w-64 h-1 mx-auto mb-8 overflow-hidden"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear', delay: 2 }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.7] }}
            transition={{ duration: 3, delay: 2 }}
            className="text-stone-400 text-sm tracking-[0.5em] uppercase"
          >
            Creative Technologist
          </motion.p>
        </motion.div>

        {/* Ultra-cinematic totem with 3D perspective */}
        <motion.div
          initial={{ opacity: 0, scale: 0, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{
            duration: 2,
            delay: 2.5,
            type: 'spring',
            stiffness: 50
          }}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            animate={{
              y: [-20, 20, -20],
              rotateY: hasInteracted ? 0 : [0, 10, -10, 0],
            }}
            transition={{
              y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
              rotateY: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <div className="relative">
              {/* Glow rings */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: '2px solid rgba(212, 175, 55, 0.2)',
                    transform: `scale(${1 + i * 0.5})`,
                  }}
                  animate={{
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1 + i * 0.5, 1.5 + i * 0.5, 1 + i * 0.5],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}

              <SpinningTotem onClick={handleTotemClick} label="" />
            </div>
          </motion.div>
        </motion.div>

        {/* Epic call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 3.5 }}
          className="mt-20 text-center"
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-2xl md:text-3xl font-light text-amber-600/80 mb-6 tracking-wider"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Enter Niken&apos;s Dream
          </motion.p>

          <motion.p
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-stone-600 text-xs tracking-[0.3em] uppercase"
          >
            Click the totem to descend
          </motion.p>
        </motion.div>
      </div>

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* Film grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='6.5' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
    </motion.section>
  );
}
